import { NextResponse } from "next/server";

import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { walrus } from "@mysten/walrus";

export const runtime = "nodejs";
export const maxDuration = 60;

const DEFAULT_WALRUS_SYSTEM_OBJECT_ID = "0x98ebc47370603fe81d9e15491b2f1443d619d1dab720d586e429ed233e1255c1";
const DEFAULT_WALRUS_STAKING_POOL_ID = "0x20266a17b4f1a216727f3eef5772f8d486a9e3b5e319af80a5b75809c035561d";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const blobId = (url.searchParams.get("blobId") ?? "").trim();
  if (!blobId) {
    return NextResponse.json({ error: "Expected blobId" }, { status: 400 });
  }

  const network = (process.env.SUI_NETWORK ?? "testnet") as "testnet" | "mainnet";
  const rpcUrl = process.env.SUI_RPC_URL ?? getFullnodeUrl(network);

  const walrusSystemObjectId = process.env.WALRUS_SYSTEM_OBJECT_ID ?? DEFAULT_WALRUS_SYSTEM_OBJECT_ID;
  const walrusStakingPoolId = process.env.WALRUS_STAKING_POOL_ID ?? DEFAULT_WALRUS_STAKING_POOL_ID;

  const client = new SuiClient({ url: rpcUrl, network }).$extend(
    walrus({
      packageConfig: {
        systemObjectId: walrusSystemObjectId,
        stakingPoolId: walrusStakingPoolId,
      },
    }),
  );

  try {
    const bytes = await client.walrus.readBlob({ blobId });
    const text = new TextDecoder().decode(bytes);
    try {
      const json = JSON.parse(text) as unknown;
      return NextResponse.json({ blobId, json });
    } catch {
      return NextResponse.json({ blobId, text });
    }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}
