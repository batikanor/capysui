"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type DiffStats = {
  width: number;
  height: number;
  meanDiff: number; // 0..255
  changedPercent: number; // 0..100
};

type Props = {
  beforeUrl: string | null;
  afterUrl: string | null;
  threshold: number; // 0..255
  onComputed?: (stats: DiffStats | null) => void;
};

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
}

export function DiffViewer({ beforeUrl, afterUrl, threshold, onComputed }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [state, setState] = useState<{ key: string; diffUrl: string | null; error: string | null }>({
    key: "",
    diffUrl: null,
    error: null,
  });

  const key = useMemo(() => `${beforeUrl ?? ""}|${afterUrl ?? ""}|${threshold}`, [beforeUrl, afterUrl, threshold]);
  const inputs = useMemo(() => ({ beforeUrl, afterUrl, threshold, key }), [beforeUrl, afterUrl, threshold, key]);

  useEffect(() => {
    let cancelled = false;
    onComputed?.(null);

    async function run() {
      if (!inputs.beforeUrl || !inputs.afterUrl) return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      try {
        const [before, after] = await Promise.all([
          loadImage(inputs.beforeUrl),
          loadImage(inputs.afterUrl),
        ]);

        if (cancelled) return;

        const maxW = 640;
        const scale = Math.min(1, maxW / Math.max(before.naturalWidth, after.naturalWidth));
        const w = Math.floor(Math.min(before.naturalWidth, after.naturalWidth) * scale);
        const h = Math.floor(Math.min(before.naturalHeight, after.naturalHeight) * scale);

        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        const tmp = document.createElement("canvas");
        tmp.width = w;
        tmp.height = h;
        const tctx = tmp.getContext("2d", { willReadFrequently: true });
        if (!tctx) return;

        tctx.clearRect(0, 0, w, h);
        tctx.drawImage(before, 0, 0, w, h);
        const a = tctx.getImageData(0, 0, w, h);

        tctx.clearRect(0, 0, w, h);
        tctx.drawImage(after, 0, 0, w, h);
        const b = tctx.getImageData(0, 0, w, h);

        const out = ctx.createImageData(w, h);
        const ad = a.data;
        const bd = b.data;
        const od = out.data;

        let sum = 0;
        let changed = 0;
        const n = w * h;

        for (let i = 0; i < n; i++) {
          const idx = i * 4;
          const dr = Math.abs(ad[idx] - bd[idx]);
          const dg = Math.abs(ad[idx + 1] - bd[idx + 1]);
          const db = Math.abs(ad[idx + 2] - bd[idx + 2]);
          const d = (dr + dg + db) / 3;
          sum += d;

          const hot = d >= inputs.threshold;
          if (hot) changed += 1;

          // Heatmap: red for change, transparent for stable.
          od[idx] = 255;
          od[idx + 1] = 0;
          od[idx + 2] = 0;
          od[idx + 3] = hot ? Math.min(220, 40 + d) : 0;
        }

        ctx.putImageData(out, 0, 0);

        const stats = {
          width: w,
          height: h,
          meanDiff: sum / n,
          changedPercent: (changed / n) * 100,
        } satisfies DiffStats;

        onComputed?.(stats);
        const url = canvas.toDataURL("image/png");
        if (!cancelled) setState({ key: inputs.key, diffUrl: url, error: null });
      } catch (e: unknown) {
        if (cancelled) return;
        const msg = e instanceof Error ? e.message : String(e);
        setState({ key: inputs.key, diffUrl: null, error: msg });
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [inputs, onComputed]);

  if (!beforeUrl || !afterUrl) return null;

  const diffUrl = state.key === key ? state.diffUrl : null;
  const error = state.key === key ? state.error : null;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-3">
          <div className="mb-2 text-xs font-medium text-zinc-700">Before</div>
          <img
            className="h-auto w-full rounded-lg border border-zinc-100"
            src={beforeUrl}
            alt="Before preview"
          />
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-3">
          <div className="mb-2 text-xs font-medium text-zinc-700">After</div>
          <img
            className="h-auto w-full rounded-lg border border-zinc-100"
            src={afterUrl}
            alt="After preview"
          />
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-3">
          <div className="mb-2 text-xs font-medium text-zinc-700">Change mask</div>
          <div className="relative">
            <img
              className="h-auto w-full rounded-lg border border-zinc-100"
              src={afterUrl}
              alt="After base"
            />
            {diffUrl ? (
              <img
                className="absolute inset-0 h-full w-full rounded-lg"
                style={{ mixBlendMode: "screen" }}
                src={diffUrl}
                alt="Diff overlay"
              />
            ) : null}
          </div>
        </div>
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </div>
      ) : null}

      {/* Hidden render canvas used to produce diffUrl */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
