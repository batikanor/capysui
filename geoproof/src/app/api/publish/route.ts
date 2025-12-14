import { NextResponse } from "next/server";

import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { decodeSuiPrivateKey } from "@mysten/sui/cryptography";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Secp256k1Keypair } from "@mysten/sui/keypairs/secp256k1";
import { Secp256r1Keypair } from "@mysten/sui/keypairs/secp256r1";
import { Transaction } from "@mysten/sui/transactions";
import { walrus } from "@mysten/walrus";
import crypto from "node:crypto";

import { stableStringify } from "@/lib/stableJson";

export const runtime = "nodejs";
export const maxDuration = 60;

// Default Walrus testnet ids from Mysten docs (used when Walrus contracts roll):
// https://sdk.mystenlabs.com/walrus
const DEFAULT_WALRUS_SYSTEM_OBJECT_ID = "0x98ebc47370603fe81d9e15491b2f1443d619d1dab720d586e429ed233e1255c1";
const DEFAULT_WALRUS_STAKING_POOL_ID = "0x20266a17b4f1a216727f3eef5772f8d486a9e3b5e319af80a5b75809c035561d";

type PublishBody = {
  reportDraft: unknown;
  artifacts?: {
    beforeDataUrl?: string | null;
    afterDataUrl?: string | null;
    diffDataUrl?: string | null;
  };
  includeArtifacts?: boolean;
};

type SuiExecuteResult = {
  digest?: string;
  effects?: { transactionDigest?: string };
  objectChanges?: unknown;
};

function getPath(root: unknown, path: string[]): unknown {
  let cur: unknown = root;
  for (const k of path) {
    if (typeof cur !== "object" || cur === null) return undefined;
    cur = (cur as Record<string, unknown>)[k];
  }
  return cur;
}

function getString(root: unknown, path: string[]): string {
  const v = getPath(root, path);
  return typeof v === "string" ? v : "";
}

function reqEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

function toBytesUtf8(s: string): number[] {
  return Array.from(new TextEncoder().encode(s));
}

function sha256Hex(bytes: Uint8Array) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

function getKeypairFromEnv() {
  const pk = reqEnv("SUI_PRIVATE_KEY").trim();
  const decoded = decodeSuiPrivateKey(pk);

  if (decoded.scheme === "ED25519") {
    return Ed25519Keypair.fromSecretKey(decoded.secretKey);
  }
  if (decoded.scheme === "Secp256k1") {
    return Secp256k1Keypair.fromSecretKey(decoded.secretKey);
  }
  if (decoded.scheme === "Secp256r1") {
    return Secp256r1Keypair.fromSecretKey(decoded.secretKey);
  }

  throw new Error(`Unsupported key scheme: ${decoded.scheme}`);
}

export async function POST(req: Request) {
  let body: PublishBody;
  try {
    body = (await req.json()) as PublishBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || !("reportDraft" in body)) {
    return NextResponse.json({ error: "Expected { reportDraft, artifacts? }" }, { status: 400 });
  }

  const network = (process.env.SUI_NETWORK ?? "testnet") as "testnet" | "mainnet";
  const url = process.env.SUI_RPC_URL ?? getFullnodeUrl(network);
  const epochs = (() => {
    const raw = Number(process.env.WALRUS_EPOCHS ?? "3");
    return Number.isFinite(raw) && raw > 0 ? Math.min(Math.floor(raw), 100) : 3;
  })();
  const uploadRelayHost = process.env.WALRUS_UPLOAD_RELAY_HOST ?? "https://upload-relay.testnet.walrus.space";
  const walrusSystemObjectId = process.env.WALRUS_SYSTEM_OBJECT_ID ?? DEFAULT_WALRUS_SYSTEM_OBJECT_ID;
  const walrusStakingPoolId = process.env.WALRUS_STAKING_POOL_ID ?? DEFAULT_WALRUS_STAKING_POOL_ID;

  let keypair;
  try {
    keypair = getKeypairFromEnv();
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  const packageId = process.env.GEOPROOF_PACKAGE_ID ?? "";
  if (!packageId) {
    return NextResponse.json(
      { error: "Missing GEOPROOF_PACKAGE_ID env var (publish the Move package first)." },
      { status: 500 },
    );
  }

  const client = new SuiClient({ url, network }).$extend(
    walrus({
      packageConfig: {
        systemObjectId: walrusSystemObjectId,
        stakingPoolId: walrusStakingPoolId,
      },
      uploadRelay: {
        host: uploadRelayHost,
        sendTip: { max: 1_000 },
      },
    }),
  );

  const reportStable = stableStringify(body.reportDraft);
  const reportStableBytes = new TextEncoder().encode(reportStable);
  const reportSha256 = sha256Hex(reportStableBytes);

  const evidenceBundle = {
    kind: "GeoProofEvidenceBundle",
    version: 1,
    createdAt: new Date().toISOString(),
    reportSha256,
    reportDraft: body.reportDraft,
    artifacts:
      body.includeArtifacts === true
        ? {
            beforeDataUrl: body.artifacts?.beforeDataUrl ?? null,
            afterDataUrl: body.artifacts?.afterDataUrl ?? null,
            diffDataUrl: body.artifacts?.diffDataUrl ?? null,
          }
        : {
            beforeDataUrl: null,
            afterDataUrl: null,
            diffDataUrl: null,
          },
  };

  const evidenceBytes = new TextEncoder().encode(JSON.stringify(evidenceBundle));

  let walrusBlobId: string;
  try {
    const res = await client.walrus.writeBlob({
      blob: evidenceBytes,
      deletable: false,
      epochs,
      signer: keypair,
    });
    walrusBlobId = res.blobId;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json(
      {
        error: `Walrus upload failed: ${msg}`,
        hint: "Make sure the Sui address has Testnet SUI + WAL (Walrus) tokens.",
      },
      { status: 502 },
    );
  }

  // Extract a few fields for on-chain anchoring.
  const rd = body.reportDraft;
  const createdAtMs = Date.now();
  const bboxJson = (() => {
    const bb = getPath(rd, ["bbox"]);
    return typeof bb !== "undefined" ? JSON.stringify(bb) : "null";
  })();
  const startDate = getString(rd, ["window", "startDate"]);
  const endDate = getString(rd, ["window", "endDate"]);
  const sourceRequested = getString(rd, ["imagery", "sourceRequested"]);
  const variant = getString(rd, ["imagery", "variant"]);

  const tx = new Transaction();
  tx.moveCall({
    target: `${packageId}::geoproof_move::create_report`,
    arguments: [
      tx.pure.u64(createdAtMs),
      tx.pure.vector("u8", toBytesUtf8(bboxJson)),
      tx.pure.vector("u8", toBytesUtf8(startDate)),
      tx.pure.vector("u8", toBytesUtf8(endDate)),
      tx.pure.vector("u8", toBytesUtf8(sourceRequested)),
      tx.pure.vector("u8", toBytesUtf8(variant)),
      tx.pure.vector("u8", toBytesUtf8(walrusBlobId)),
      tx.pure.vector("u8", toBytesUtf8(reportSha256)),
    ],
  });

  let digest: string;
  let createdObjectId: string | null = null;
  try {
    const result = (await keypair.signAndExecuteTransaction({
      transaction: tx,
      client,
    })) as unknown as SuiExecuteResult;

    digest = result.digest ?? result.effects?.transactionDigest ?? "";

    const changes = result.objectChanges;
    if (Array.isArray(changes)) {
      const created = changes.find(
        (c: unknown) =>
          typeof c === "object" &&
          c !== null &&
          (c as { type?: unknown }).type === "created" &&
          typeof (c as { objectType?: unknown }).objectType === "string" &&
          (c as { objectType: string }).objectType.includes("ChangeReport"),
      );
      if (created && typeof (created as { objectId?: unknown }).objectId === "string") {
        createdObjectId = (created as { objectId: string }).objectId;
      }
    }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json(
      {
        error: `Sui anchor failed: ${msg}`,
        walrusBlobId,
        reportSha256,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    walrusBlobId,
    reportSha256,
    sui: {
      network,
      digest,
      createdObjectId,
    },
    bytes: {
      evidenceSize: evidenceBytes.length,
    },
  });
}
