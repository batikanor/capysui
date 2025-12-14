import { NextResponse } from "next/server";

type WaybackVersion = {
  id: number;
  date: string; // YYYY-MM-DD
  title: string;
  tileUrlTemplate: string;
};

const CAPABILITIES_URL =
  "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/1.0.0/WMTSCapabilities.xml";

type PickBody = {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
};

function parseUtcDateMs(date: string): number {
  return new Date(`${date}T00:00:00Z`).getTime();
}

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

function pickClosestByDate(versions: WaybackVersion[], targetDate: string): WaybackVersion | null {
  const targetMs = parseUtcDateMs(targetDate);
  if (!Number.isFinite(targetMs)) return null;

  let best: WaybackVersion | null = null;
  let bestDist = Number.POSITIVE_INFINITY;
  for (const v of versions) {
    const ms = parseUtcDateMs(v.date);
    if (!Number.isFinite(ms)) continue;
    const dist = Math.abs(ms - targetMs);
    if (dist < bestDist) {
      best = v;
      bestDist = dist;
    }
  }
  return best;
}

export async function POST(req: Request) {
  let body: PickBody;
  try {
    body = (await req.json()) as PickBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body.startDate !== "string" || typeof body.endDate !== "string") {
    return NextResponse.json({ error: "Expected { startDate, endDate }" }, { status: 400 });
  }

  const startMs = parseUtcDateMs(body.startDate);
  const endMs = parseUtcDateMs(body.endDate);
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || startMs > endMs) {
    return NextResponse.json({ error: "Invalid date range" }, { status: 400 });
  }

  let xml: string;
  try {
    const res = await fetch(CAPABILITIES_URL, { next: { revalidate: 60 * 60 } });
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

  const before = pickClosestByDate(versions, body.startDate);
  const after = pickClosestByDate(versions, body.endDate);

  if (!before || !after) {
    return NextResponse.json({ error: "Could not pick Wayback versions." }, { status: 502 });
  }

  return NextResponse.json({
    query: { startDate: body.startDate, endDate: body.endDate },
    before,
    after,
    totalVersions: versions.length,
    capabilitiesUrl: CAPABILITIES_URL,
  });
}
