export function stableStringify(value: unknown): string {
  const seen = new WeakSet<object>();

  const walk = (v: unknown): unknown => {
    if (v === null || typeof v !== "object") return v;

    if (seen.has(v as object)) {
      throw new Error("stableStringify: circular structure");
    }
    seen.add(v as object);

    if (Array.isArray(v)) {
      return v.map(walk);
    }

    const obj = v as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(obj).sort()) {
      out[k] = walk(obj[k]);
    }
    return out;
  };

  return JSON.stringify(walk(value));
}
