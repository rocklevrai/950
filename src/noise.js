// Small deterministic noise toolkit shared by textures, terrain and prop scatter.

export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const P = new Uint8Array(512);
{
  const r = mulberry32(1337);
  for (let i = 0; i < 256; i++) P[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    const t = P[i]; P[i] = P[j]; P[j] = t;
  }
  for (let i = 0; i < 256; i++) P[i + 256] = P[i];
}
const h2 = (x, y) => P[P[x & 255] + (y & 255)] / 255;
const mod = (a, n) => ((a % n) + n) % n;

export const lerp = (a, b, t) => a + (b - a) * t;
export const sat = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
export const sstep = (a, b, x) => { const t = sat((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const hash1 = (n) => { const s = Math.sin(n * 127.1 + 11.7) * 43758.5453; return s - Math.floor(s); };

/** Value noise, 0..1 */
export function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const fx = x - xi, fy = y - yi;
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);
  const a = h2(xi, yi), b = h2(xi + 1, yi), c = h2(xi, yi + 1), d = h2(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

export function fbm(x, y, oct = 4) {
  let a = 0.5, s = 0, n = 0;
  for (let i = 0; i < oct; i++) {
    s += a * vnoise(x, y); n += a;
    x = x * 2.03 + 17.1; y = y * 2.03 + 31.7; a *= 0.5;
  }
  return s / n;
}

/** Tileable value noise: x in [0,px), y in [0,py) wraps seamlessly. */
export function tnoise(x, y, px, py) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const fx = x - xi, fy = y - yi;
  const x0 = mod(xi, px), x1 = mod(xi + 1, px), y0 = mod(yi, py), y1 = mod(yi + 1, py);
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);
  const a = h2(x0, y0), b = h2(x1, y0), c = h2(x0, y1), d = h2(x1, y1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

/** Tileable fbm over the unit square; p = base period. */
export function tfbm(u, v, p, oct = 4) {
  let a = 0.5, s = 0, n = 0, f = p;
  for (let i = 0; i < oct; i++) {
    s += a * tnoise(u * f + i * 17, v * f + i * 29, f, f); n += a;
    f *= 2; a *= 0.5;
  }
  return s / n;
}

/** Tileable Voronoi. Writes out.f1, out.f2 (cell-space distances) and out.id (0..1). */
export function tvor(u, v, p, out) {
  const x = u * p, y = v * p;
  const xi = Math.floor(x), yi = Math.floor(y);
  let f1 = 9, f2 = 9, id = 0;
  for (let j = -1; j <= 1; j++) {
    for (let i = -1; i <= 1; i++) {
      const cx = xi + i, cy = yi + j;
      const wx = mod(cx, p), wy = mod(cy, p);
      const px = cx + 0.15 + 0.7 * h2(wx, wy);
      const py = cy + 0.15 + 0.7 * h2(wx + 37, wy + 91);
      const d = Math.hypot(px - x, py - y);
      if (d < f1) { f2 = f1; f1 = d; id = h2(wx + 5, wy + 59); }
      else if (d < f2) f2 = d;
    }
  }
  out.f1 = f1; out.f2 = f2; out.id = id;
  return out;
}
