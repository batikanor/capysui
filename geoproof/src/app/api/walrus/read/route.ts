import { NextResponse } from "next/server";

import { getFullnodeUrl } from "@mysten/sui/client";
import { SuiJsonRpcClient } from "@mysten/sui/jsonRpc";
import { walrus } from "@mysten/walrus";

export const runtime = "nodejs";
export const maxDuration = 60;

const DEFAULT_WALRUS_SYSTEM_OBJECT_ID = "0x6c2547cbbc38025cf3adac45f63cb0a8d12ecf777cdc75a4971612bf97fdf6af";
const DEFAULT_WALRUS_STAKING_POOL_ID = "0xbe46180321c30aab2f8b3501e24048377287fa708018a5b7c2792b35fe339ee3";

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

  const client = new SuiJsonRpcClient({ url: rpcUrl, network }).$extend(
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
