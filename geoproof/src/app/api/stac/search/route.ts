import { NextResponse } from "next/server";

type BBox = [number, number, number, number];

type StacSearchBody = {
  bbox: BBox;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  limit?: number;
};

type StacFeature = {
  id: string;
  bbox?: number[];
  properties?: Record<string, unknown> & { datetime?: string };
  assets?: Record<string, { href?: string }>;
};

function normalizeBbox(bbox: number[] | undefined): BBox | null {
  if (!bbox || bbox.length !== 4) return null;
  const [minLng, minLat, maxLng, maxLat] = bbox;
  if (![minLng, minLat, maxLng, maxLat].every((n) => typeof n === "number" && Number.isFinite(n))) return null;
  return [minLng, minLat, maxLng, maxLat];
}

function parseUtcDateMs(date: string): number {
  // Interpret YYYY-MM-DD as UTC to avoid local timezone surprises.
  return new Date(`${date}T00:00:00Z`).getTime();
}

function pickClosest(features: StacFeature[], targetMs: number): StacFeature | null {
  let best: StacFeature | null = null;
  let bestDist = Number.POSITIVE_INFINITY;

  for (const f of features) {
    const dt = f.properties?.datetime;
    if (!dt) continue;
    const ms = new Date(dt).getTime();
    const dist = Math.abs(ms - targetMs);
    if (dist < bestDist) {
      best = f;
      bestDist = dist;
    }
  }

  return best;
}

export async function POST(req: Request) {
  let body: StacSearchBody;
  try {
    body = (await req.json()) as StacSearchBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (
    !body ||
    !Array.isArray(body.bbox) ||
    body.bbox.length !== 4 ||
    typeof body.startDate !== "string" ||
    typeof body.endDate !== "string"
  ) {
    return NextResponse.json(
      { error: "Expected { bbox: [minLng,minLat,maxLng,maxLat], startDate, endDate }" },
      { status: 400 },
    );
  }

  const limit = typeof body.limit === "number" ? Math.min(Math.max(body.limit, 1), 200) : 100;
  const startMs = parseUtcDateMs(body.startDate);
  const endMs = parseUtcDateMs(body.endDate);

  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || startMs > endMs) {
    return NextResponse.json({ error: "Invalid date range" }, { status: 400 });
  }

  const stacUrl = "https://planetarycomputer.microsoft.com/api/stac/v1/search";
  const stacBody = {
    collections: ["sentinel-2-l2a"],
    bbox: body.bbox,
    datetime: `${body.startDate}T00:00:00Z/${body.endDate}T23:59:59Z`,
    limit,
  };

  let json: unknown;
  try {
    const res = await fetch(stacUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(stacBody),
      // Avoid caching surprises during iteration.
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `STAC search failed: ${res.status} ${res.statusText}` },
        { status: 502 },
      );
    }
    json = (await res.json()) as unknown;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: `STAC request error: ${msg}` }, { status: 502 });
  }

  const features =
    typeof json === "object" && json !== null && Array.isArray((json as { features?: unknown }).features)
      ? ((json as { features: unknown[] }).features as StacFeature[])
      : [];
  if (!Array.isArray(features) || features.length === 0) {
    return NextResponse.json(
      { error: "No imagery found for that bbox/time window. Try a larger bbox or longer date range." },
      { status: 404 },
    );
  }

  const before = pickClosest(features, startMs);
  const after = pickClosest(features, endMs);
  if (!before || !after) {
    return NextResponse.json(
      { error: "Could not pick before/after imagery from results." },
      { status: 502 },
    );
  }

  const normalizeItem = (f: StacFeature) => {
    const dt = f.properties?.datetime ?? null;
    const cloud = f.properties?.["eo:cloud_cover"];
    const cloudCover = typeof cloud === "number" ? cloud : null;
    const previewUrl = f.assets?.rendered_preview?.href ?? null;
    return {
      id: f.id,
      datetime: dt,
      cloudCover,
      previewUrl,
      bbox: normalizeBbox(f.bbox),
    };
  };

  return NextResponse.json({
    query: {
      bbox: body.bbox,
      startDate: body.startDate,
      endDate: body.endDate,
      collection: "sentinel-2-l2a",
      totalCandidates: features.length,
    },
    before: normalizeItem(before),
    after: normalizeItem(after),
  });
}
