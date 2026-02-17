export function generatePoints(
  fn: (x: number) => number,
  start: number,
  end: number,
  steps = 200
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const step = (end - start) / steps;
  for (let i = 0; i <= steps; i++) {
    const x = start + i * step;
    const y = fn(x);
    if (isFinite(y)) points.push({ x: Math.round(x * 1000) / 1000, y: Math.round(y * 1000) / 1000 });
  }
  return points;
}

export function generateMultiCurvePoints(
  fns: Record<string, (x: number) => number>,
  start: number,
  end: number,
  steps = 200
): Record<string, number>[] {
  const points: Record<string, number>[] = [];
  const step = (end - start) / steps;
  const names = Object.keys(fns);
  for (let i = 0; i <= steps; i++) {
    const x = start + i * step;
    const point: Record<string, number> = { x: Math.round(x * 1000) / 1000 };
    let valid = true;
    for (const name of names) {
      const y = fns[name](x);
      if (!isFinite(y)) { valid = false; break; }
      point[name] = Math.round(y * 1000) / 1000;
    }
    if (valid) points.push(point);
  }
  return points;
}

export function generateIsoquantPoints(
  level: number,
  lStart: number,
  lEnd: number,
  kFromLAndLevel: (l: number, q: number) => number,
  steps = 200
): { L: number; K: number }[] {
  const points: { L: number; K: number }[] = [];
  const step = (lEnd - lStart) / steps;
  for (let i = 0; i <= steps; i++) {
    const L = lStart + i * step;
    const K = kFromLAndLevel(L, level);
    if (isFinite(K) && K > 0 && K < 100) {
      points.push({ L: Math.round(L * 1000) / 1000, K: Math.round(K * 1000) / 1000 });
    }
  }
  return points;
}

export const CHART_COLORS = {
  blue: "hsl(221, 83%, 53%)",
  emerald: "hsl(160, 84%, 39%)",
  violet: "hsl(263, 70%, 50%)",
  amber: "hsl(38, 92%, 50%)",
  rose: "hsl(347, 77%, 50%)",
  cyan: "hsl(188, 78%, 41%)",
  isoquant: [
    "hsl(221, 83%, 53%)",
    "hsl(263, 70%, 50%)",
    "hsl(347, 77%, 50%)",
    "hsl(38, 92%, 50%)",
    "hsl(160, 84%, 39%)",
  ],
};
