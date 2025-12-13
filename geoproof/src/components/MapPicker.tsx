"use client";

import maplibregl, { type LngLatLike } from "maplibre-gl";
import type { Feature, FeatureCollection, Point, Polygon } from "geojson";
import { useEffect, useRef } from "react";

export type BBox = [number, number, number, number];

function emptyFeatureCollection<T extends Point | Polygon>(): FeatureCollection<T> {
  return { type: "FeatureCollection", features: [] };
}

function bboxToFeatureCollection(bbox: BBox): FeatureCollection<Polygon> {
  const [minLng, minLat, maxLng, maxLat] = bbox;
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [minLng, minLat],
              [maxLng, minLat],
              [maxLng, maxLat],
              [minLng, maxLat],
              [minLng, minLat],
            ],
          ],
        },
      } satisfies Feature<Polygon>,
    ],
  };
}

function pointToFeatureCollection(lngLat: [number, number] | null): FeatureCollection<Point> {
  if (!lngLat) {
    return emptyFeatureCollection<Point>();
  }
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: { type: "Point", coordinates: lngLat },
      } satisfies Feature<Point>,
    ],
  };
}

function normalizeBbox(a: [number, number], b: [number, number]): BBox {
  const minLng = Math.min(a[0], b[0]);
  const maxLng = Math.max(a[0], b[0]);
  const minLat = Math.min(a[1], b[1]);
  const maxLat = Math.max(a[1], b[1]);
  return [minLng, minLat, maxLng, maxLat];
}

type Props = {
  bbox: BBox | null;
  onBboxChange: (bbox: BBox | null) => void;
};

export function MapPicker({ bbox, onBboxChange }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  const anchorRef = useRef<[number, number] | null>(null);
  const bboxRef = useRef<BBox | null>(bbox);

  useEffect(() => {
    bboxRef.current = bbox;
  }, [bbox]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [19.0, 52.2] as LngLatLike,
      zoom: 5,
    });
    mapRef.current = map;

    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");

    map.on("load", () => {
      map.addSource("bbox", {
        type: "geojson",
        data: bboxRef.current ? bboxToFeatureCollection(bboxRef.current) : emptyFeatureCollection<Polygon>(),
      });
      map.addLayer({
        id: "bbox-fill",
        type: "fill",
        source: "bbox",
        paint: {
          "fill-color": "#2563eb",
          "fill-opacity": 0.12,
        },
      });
      map.addLayer({
        id: "bbox-outline",
        type: "line",
        source: "bbox",
        paint: {
          "line-color": "#2563eb",
          "line-width": 2,
        },
      });

      map.addSource("anchor", {
        type: "geojson",
        data: pointToFeatureCollection(anchorRef.current),
      });
      map.addLayer({
        id: "anchor-dot",
        type: "circle",
        source: "anchor",
        paint: {
          "circle-radius": 6,
          "circle-color": "#f97316",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });
    });

    map.on("click", (e) => {
      const p: [number, number] = [e.lngLat.lng, e.lngLat.lat];

      if (!anchorRef.current) {
        anchorRef.current = p;
        const src = map.getSource("anchor") as maplibregl.GeoJSONSource | undefined;
        src?.setData(pointToFeatureCollection(anchorRef.current));
        return;
      }

      const nextBbox = normalizeBbox(anchorRef.current, p);
      anchorRef.current = null;

      const anchorSrc = map.getSource("anchor") as maplibregl.GeoJSONSource | undefined;
      anchorSrc?.setData(pointToFeatureCollection(anchorRef.current));

      onBboxChange(nextBbox);
      const bboxSrc = map.getSource("bbox") as maplibregl.GeoJSONSource | undefined;
      bboxSrc?.setData(bboxToFeatureCollection(nextBbox));
      map.fitBounds(
        [
          [nextBbox[0], nextBbox[1]],
          [nextBbox[2], nextBbox[3]],
        ],
        { padding: 40, duration: 500 },
      );
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [onBboxChange]);

  // Keep bbox visualization in sync if bbox changes externally.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const src = map.getSource("bbox") as maplibregl.GeoJSONSource | undefined;
    if (!src) return;
    src.setData(bbox ? bboxToFeatureCollection(bbox) : emptyFeatureCollection<Polygon>());
  }, [bbox]);

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
      <div ref={containerRef} className="h-full w-full" />
      <div className="pointer-events-none absolute left-3 top-3 rounded-lg bg-white/90 px-3 py-2 text-xs text-zinc-700 shadow">
        <div className="font-medium text-zinc-900">BBox picker</div>
        <div>Click 2 corners: first = start, second = end.</div>
      </div>
    </div>
  );
}
