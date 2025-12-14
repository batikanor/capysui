import { NextResponse } from "next/server";

import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { walrus } from "@mysten/walrus";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const blobId = (url.searchParams.get("blobId") ?? "").trim();
  if (!blobId) {
    return NextResponse.json({ error: "Expected blobId" }, { status: 400 });
  }

  const network = (process.env.SUI_NETWORK ?? "testnet") as "testnet" | "mainnet";
  const rpcUrl = process.env.SUI_RPC_URL ?? getFullnodeUrl(network);

  const client = new SuiClient({ url: rpcUrl, network }).$extend(walrus());

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
