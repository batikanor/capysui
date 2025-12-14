import { NextResponse } from "next/server";

type WaybackVersion = {
  id: number;
  date: string; // YYYY-MM-DD
  title: string;
  // Internal tile URL template (avoids CORS + makes caching controllable).
  tileUrlTemplate: string;
};

const CAPABILITIES_URL =
  "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/1.0.0/WMTSCapabilities.xml";

function parseWaybackVersions(xml: string): WaybackVersion[] {
  const out: WaybackVersion[] = [];

  const layerRe = /<Layer>([\s\S]*?)<\/Layer>/g;
  for (const m of xml.matchAll(layerRe)) {
    const layer = m[1] ?? "";
    const titleMatch = layer.match(/<ows:Title>\s*([^<]+)\s*<\/ows:Title>/);
    const title = titleMatch?.[1]?.trim() ?? "";
    if (!title) continue;

    const dateMatch = title.match(/Wayback\s+(\d{4}-\d{2}-\d{2})/);
    const date = dateMatch?.[1] ?? null;
    if (!date) continue;

    const resMatch = layer.match(/<ResourceURL[^>]*resourceType=\"tile\"[^>]*template=\"([^\"]+)\"/);
    const tpl = resMatch?.[1] ?? "";
    if (!tpl) continue;

    const idMatch = tpl.match(/\/tile\/(\d+)\//);
    const id = idMatch?.[1] ? Number(idMatch[1]) : NaN;
    if (!Number.isFinite(id)) continue;

    out.push({
      id,
      date,
      title,
      tileUrlTemplate: `/api/wayback/tile?v=${id}&z={z}&x={x}&y={y}`,
    });
  }

  // Newest first.
  out.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.id - a.id));
  return out;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const limit = (() => {
    const raw = url.searchParams.get("limit");
    if (!raw) return 150;
    const n = Number(raw);
    if (!Number.isFinite(n)) return 150;
    return Math.min(Math.max(Math.floor(n), 1), 500);
  })();

  let xml: string;
  try {
    const res = await fetch(CAPABILITIES_URL, {
      // This doc changes infrequently; caching helps keep the demo snappy.
      next: { revalidate: 60 * 60 },
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Wayback capabilities failed: ${res.status} ${res.statusText}` },
        { status: 502 },
      );
    }
    xml = await res.text();
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: `Wayback request error: ${msg}` }, { status: 502 });
  }

  const versions = parseWaybackVersions(xml);
  if (versions.length === 0) {
    return NextResponse.json(
      { error: "Could not parse Wayback WMTS capabilities." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    versions: versions.slice(0, limit),
    total: versions.length,
    capabilitiesUrl: CAPABILITIES_URL,
  });
}
