import { NextResponse } from "next/server";

const BASE_URL =
  "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/GoogleMapsCompatible/MapServer/tile";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const v = Number(url.searchParams.get("v"));
  const z = Number(url.searchParams.get("z"));
  const x = Number(url.searchParams.get("x"));
  const y = Number(url.searchParams.get("y"));

  if (![v, z, x, y].every((n) => Number.isFinite(n))) {
    return NextResponse.json({ error: "Expected query params v,z,x,y" }, { status: 400 });
  }

  const vv = Math.floor(v);
  const zz = Math.floor(z);
  const xx = Math.floor(x);
  const yy = Math.floor(y);

  if (vv <= 0 || zz < 0 || zz > 23 || xx < 0 || yy < 0) {
    return NextResponse.json({ error: "Invalid tile params" }, { status: 400 });
  }

  const tileUrl = `${BASE_URL}/${vv}/${zz}/${yy}/${xx}`;

  let res: Response;
  try {
    res = await fetch(tileUrl, {
      // Cache tiles a bit; they are immutable for a given version.
      next: { revalidate: 60 * 60 * 24 },
      redirect: "follow",
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: `Tile fetch error: ${msg}` }, { status: 502 });
  }

  if (!res.ok) {
    // Bubble up 404s etc.
    return NextResponse.json(
      { error: `Wayback tile failed: ${res.status} ${res.statusText}` },
      { status: res.status === 404 ? 404 : 502 },
    );
  }

  const ct = res.headers.get("content-type") ?? "image/jpeg";
  const buf = await res.arrayBuffer();
  return new NextResponse(buf, {
    headers: {
      "content-type": ct,
      // Public caching is fine: tiles are identified by v/z/x/y.
      "cache-control": "public, max-age=86400, immutable",
    },
  });
}
