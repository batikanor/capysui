import { NextResponse } from "next/server";

import { getFullnodeUrl } from "@mysten/sui/client";
import { SuiJsonRpcClient } from "@mysten/sui/jsonRpc";
import { parseStructTag, normalizeStructTag } from "@mysten/sui/utils";
import { walrus } from "@mysten/walrus";

export const runtime = "nodejs";

const DEFAULT_WALRUS_SYSTEM_OBJECT_ID = "0x6c2547cbbc38025cf3adac45f63cb0a8d12ecf777cdc75a4971612bf97fdf6af";
const DEFAULT_WALRUS_STAKING_POOL_ID = "0xbe46180321c30aab2f8b3501e24048377287fa708018a5b7c2792b35fe339ee3";

export async function GET() {
  const network = (process.env.SUI_NETWORK ?? "testnet") as "testnet" | "mainnet";
  const url = process.env.SUI_RPC_URL ?? getFullnodeUrl(network);

  const walrusSystemObjectId = process.env.WALRUS_SYSTEM_OBJECT_ID ?? DEFAULT_WALRUS_SYSTEM_OBJECT_ID;
  const walrusStakingPoolId = process.env.WALRUS_STAKING_POOL_ID ?? DEFAULT_WALRUS_STAKING_POOL_ID;

  try {
    const client = new SuiJsonRpcClient({ url, network }).$extend(
      walrus({
        packageConfig: {
          systemObjectId: walrusSystemObjectId,
          stakingPoolId: walrusStakingPoolId,
        },
      }),
    );

    const systemObj = await client.getObject({
      id: walrusSystemObjectId,
      options: { showType: true },
    });
    const systemType =
      typeof systemObj.data?.type === "string" && systemObj.data.type.includes("::") ? systemObj.data.type : null;
    const walrusPackageId = systemType ? parseStructTag(systemType).address : null;

    // Derive the WAL coin type from the current Walrus staking module signature.
    // This mirrors how the Walrus SDK derives the type internally.
    // (We intentionally do this on-server for diagnostics; it returns only public type tags.)
    const pkg = walrusPackageId;
    let walType: string | null = null;
    if (pkg) {
      const mf = await client.core.getMoveFunction({
        packageId: pkg,
        moduleName: "staking",
        name: "stake_with_pool",
      });

      const toStake = mf.function.parameters?.[1];
      const body = toStake?.body;
      const coinTypeParam =
        body?.$kind === "datatype" && body.datatype.typeParameters?.[0]?.$kind === "datatype"
          ? body.datatype.typeParameters[0]
          : null;

      if (coinTypeParam?.$kind === "datatype") {
        walType = normalizeStructTag(coinTypeParam.datatype.typeName);
      }
    }

    return NextResponse.json({
      network,
      rpcUrl: url,
      config: {
        walrusSystemObjectId,
        walrusStakingPoolId,
      },
      resolved: {
        walrusPackageId,
        walType,
      },
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg, network, rpcUrl: url }, { status: 500 });
  }
}
