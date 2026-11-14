// PBR texture sets (color + normal + roughness).
// For every set we first look for real files in assets/textures/ and fall back to a
// procedural canvas texture, so the game looks finished with an empty assets folder.
import * as THREE from 'three';
import { tnoise, tfbm, tvor, mulberry32, lerp, sat, sstep, hash1 } from './noise.js';

const hex = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };
const mix = (o, a, b, t) => { o[0] = lerp(a[0], b[0], t); o[1] = lerp(a[1], b[1], t); o[2] = lerp(a[2], b[2], t); };
const into = (o, b, t) => { o[0] += (b[0] - o[0]) * t; o[1] += (b[1] - o[1]) * t; o[2] += (b[2] - o[2]) * t; };
const mul = (o, k) => { o[0] *= k; o[1] *= k; o[2] *= k; };
const V = { f1: 0, f2: 0, id: 0 };

// ---------------------------------------------------------------- generators
// fn(u, v, o): o[0..2] = sRGB colour, o[3] = height, o[4] = roughness.  v points "up" in UV space.

const W1 = hex('#3a2c21'), W2 = hex('#7d6853'), WGREY = hex('#7c776e'), WDARK = hex('#15100c'), MOSS = hex('#46502c');
function wood(u, v, o) {
  const PL = 8, pv = v * PL, p = Math.floor(pv), f = pv - p;
  const r1 = hash1(p * 7.13), r2 = hash1(p * 3.7 + 1.3);
  let du = u - r1; du -= Math.round(du);
  const dx = du * PL, dy = f - 0.5 + (r2 - 0.5) * 0.3;
  const knot = r2 > 0.3 ? Math.exp(-(dx * dx * 0.3 + dy * dy) * 34) : 0;
  const warp = tfbm(u, v, 4, 3);
  const g = 0.5 + 0.5 * Math.sin((f * 7 + warp * 5 + p * 2.3 + knot * 3.5) * 6.2832);
  const fib = tnoise(u * 48 + p * 13, v * 384, 48, 384);
  const fib2 = tnoise(u * 12 + p * 5, v * 128, 12, 128);
  const t = sat(g * 0.4 + fib * 0.38 + fib2 * 0.3);
  mix(o, W1, W2, t); mul(o, 0.72 + 0.42 * r2);
  const weather = sstep(0.42, 0.72, tfbm(u + 0.3, v + 0.7, 3, 4));
  into(o, WGREY, weather * 0.6);
  const gap = 1 - sstep(0, 0.04, Math.min(f, 1 - f));
  into(o, WDARK, Math.min(1, gap * 0.92 + knot * 0.7));
  into(o, MOSS, sstep(0.62, 0.82, tfbm(u + 0.9, v + 0.1, 5, 4)) * 0.4);
  o[3] = t * 0.4 - gap * 1.3 - knot * 0.35 + fib * 0.25;
  o[4] = sat(0.7 + fib * 0.22 + gap * 0.1 - weather * 0.04);
}

const S1 = hex('#4a3c25'), S2 = hex('#a08a57'), SGREY = hex('#5d5547');
function thatch(u, v, o) {
  const ROWS = 5;
  const rag = tnoise(u * 24, 0.5, 24, 1) * 0.35 + tnoise(u * 96, 3.5, 96, 4) * 0.14;
  const rv = (1 - v) * ROWS + rag, r = Math.floor(rv), f = rv - r, rr = ((r % ROWS) + ROWS) % ROWS;
  const fib = tnoise(u * 160 + rr * 31, v * 12, 160, 12);
  const fib2 = tnoise(u * 56 + rr * 11, v * 6, 56, 6);
  const clump = tfbm(u, v, 6, 3);
  const t = sat(fib * 0.5 + fib2 * 0.3 + clump * 0.3);
  mix(o, S1, S2, t);
  mul(o, 1 - 0.6 * (1 - sstep(0, 0.2, f)));
  into(o, SGREY, sstep(0.4, 0.7, tfbm(u + 0.5, v + 0.2, 3, 3)) * 0.55);
  into(o, MOSS, sstep(0.6, 0.8, tfbm(u + 0.2, v + 0.6, 4, 4)) * 0.5);
  o[3] = f * 1.0 + fib * 0.35 + fib2 * 0.2;
  o[4] = 0.93;
}

const G1 = hex('#232c14'), G2 = hex('#56602c'), G3 = hex('#857543'), SOIL = hex('#33261a');
function turf(u, v, o) {
  const a = tfbm(u, v, 4, 5), b = tfbm(u + 0.37, v + 0.61, 9, 4);
  const bl = tnoise(u * 120, v * 120, 120, 120), bl2 = tnoise(u * 210 + 7, v * 190, 210, 190);
  mix(o, G1, G2, sat(a * 1.5 - 0.25));
  into(o, G3, sstep(0.5, 0.8, b) * 0.6);
  const soil = sstep(0.6, 0.76, tfbm(u + 0.11, v + 0.83, 6, 4));
  into(o, SOIL, soil * 0.75);
  mul(o, 0.62 + 0.75 * (bl * 0.55 + bl2 * 0.45));
  o[3] = a * 0.5 + bl * 0.4 + bl2 * 0.35 - soil * 0.2;
  o[4] = sat(0.86 + 0.1 * bl);
}

const M1 = hex('#211911'), M2 = hex('#54432f'), PEB = hex('#77706a');
function mud(u, v, o) {
  const a = tfbm(u, v, 5, 5), b = tfbm(u + 0.5, v + 0.25, 14, 4);
  const ridge = 1 - Math.abs(2 * tfbm(u + 0.2, v + 0.9, 7, 4) - 1);
  tvor(u, v, 16, V);
  const peb = V.id > 0.9 ? 1 - sstep(0.06, 0.12 + V.id * 0.2, V.f1) : 0;
  const h = a * 0.6 + ridge * 0.3 + b * 0.18;
  mix(o, M1, M2, sat(h * 1.25 - 0.18));
  into(o, PEB, peb * 0.8);
  o[3] = h + peb * 0.45;
  o[4] = sat(0.5 + h * 0.45 + peb * 0.2);
}

const ST1 = hex('#403f3c'), ST2 = hex('#8b8983'), LICHEN = hex('#a9a88a');
function stone(u, v, o) {
  tvor(u, v, 5, V);
  const edge = V.f2 - V.f1, crack = 1 - sstep(0, 0.07, edge);
  const a = tfbm(u, v, 6, 5), fine = tfbm(u + 0.3, v + 0.3, 40, 3);
  mix(o, ST1, ST2, sat(a * 0.75 + fine * 0.4));
  mul(o, 0.88 + 0.18 * V.id);
  into(o, LICHEN, sstep(0.68, 0.8, tfbm(u + 0.7, v + 0.2, 16, 3)) * 0.5);
  const moss = sat(crack * 0.3 + sstep(0.5, 0.7, tfbm(u + 0.15, v + 0.45, 4, 4)));
  into(o, MOSS, moss * 0.8);
  into(o, WDARK, crack * 0.14);
  o[3] = sstep(0, 0.2, edge) * 0.16 + a * 0.7 + fine * 0.4;
  o[4] = sat(0.76 + moss * 0.18 - fine * 0.1);
}

const I1 = hex('#1b1c1f'), I2 = hex('#55575c'), RUST = hex('#5f3520');
function iron(u, v, o) {
  tvor(u, v, 18, V);
  const dent = sstep(0, 0.55, V.f1), a = tfbm(u, v, 8, 4);
  const rust = sstep(0.52, 0.74, tfbm(u + 0.4, v + 0.6, 10, 4));
  mix(o, I1, I2, sat(a * 0.8 + dent * 0.3));
  into(o, RUST, rust * 0.85);
  o[3] = dent * 0.5 + a * 0.3 + rust * 0.35;
  o[4] = sat(0.4 + rust * 0.5 + a * 0.15);
}

const B1 = hex('#231a13'), B2 = hex('#6a5645'), BLICH = hex('#6f7560');
function bark(u, v, o) {
  const w = tfbm(u, v, 4, 3);
  const ridge = 1 - Math.abs(2 * tnoise(u * 14 + w * 2.5, v * 3, 14, 3) - 1);
  const fine = tnoise(u * 60, v * 10, 60, 10);
  mix(o, B1, B2, sat(ridge * 0.75 + fine * 0.3));
  into(o, BLICH, sstep(0.6, 0.8, tfbm(u + 0.3, v + 0.8, 5, 3)) * 0.45);
  o[3] = ridge * 0.95 + fine * 0.25;
  o[4] = 0.9;
}

const N1 = hex('#141d10'), N2 = hex('#3c5230');
function needles(u, v, o) {
  const a = tnoise(u * 90, v * 30, 90, 30), b = tnoise(u * 30 + 3, v * 110, 30, 110), c = tfbm(u, v, 5, 3);
  mix(o, N1, N2, sat(a * 0.45 + b * 0.4 + c * 0.35));
  o[3] = a * 0.5 + b * 0.5; o[4] = 0.82;
}

const CL1 = hex('#7b2a1f'), CL2 = hex('#b9a784'), CLD = hex('#3b3026');
function cloth(u, v, o) {
  const stripe = Math.floor(u * 4) % 2;
  const weave = Math.sin(u * 6.2832 * 128) * Math.sin(v * 6.2832 * 128);
  const a = tfbm(u, v, 5, 4);
  mix(o, CL1, CL2, stripe);
  into(o, CLD, sstep(0.45, 0.8, a) * 0.5);
  mul(o, 0.85 + 0.15 * weave);
  o[3] = weave * 0.5 + a * 0.4; o[4] = 0.94;
}

function water(u, v, o) {
  const a = tfbm(u, v, 6, 4), b = 1 - Math.abs(2 * tfbm(u + 0.5, v + 0.5, 10, 3) - 1);
  o[0] = o[1] = o[2] = 0.5; o[3] = a + b * 0.45; o[4] = 0.1;
}

const CO1 = hex('#0c0a09'), CO2 = hex('#2a2522');
function coal(u, v, o) {
  tvor(u, v, 9, V);
  const edge = V.f2 - V.f1, a = tfbm(u, v, 8, 3);
  mix(o, CO1, CO2, a);
  o[3] = sstep(0, 0.3, edge) + a * 0.3; o[4] = 0.9;
  o[5] = (1 - sstep(0, 0.16, edge)) * (0.4 + 0.6 * tfbm(u + 0.4, v + 0.1, 5, 2)); // glow in the cracks
}

// ---------------------------------------------------------------- rasteriser

function generate(N, fn, strength) {
  const col = new Uint8ClampedArray(N * N * 4), rough = new Uint8ClampedArray(N * N * 4), H = new Float32Array(N * N);
  const o = [0, 0, 0, 0, 1, 0];
  let extra = null;
  for (let y = 0; y < N; y++) {
    const v = 1 - (y + 0.5) / N;
    for (let x = 0; x < N; x++) {
      o[5] = -1;
      fn((x + 0.5) / N, v, o);
      const i = (y * N + x) * 4;
      col[i] = o[0] * 255; col[i + 1] = o[1] * 255; col[i + 2] = o[2] * 255; col[i + 3] = 255;
      H[y * N + x] = o[3];
      rough[i] = rough[i + 1] = rough[i + 2] = o[4] * 255; rough[i + 3] = 255;
      if (o[5] >= 0) {
        extra ??= new Uint8ClampedArray(N * N * 4);
        extra[i] = Math.min(255, o[5] * 400); extra[i + 1] = o[5] * 150; extra[i + 2] = o[5] * 30; extra[i + 3] = 255;
      }
    }
  }
  return { N, col, rough, H, extra, strength };
}

function normalFromHeight(g) {
  const { N, H, strength } = g, out = new Uint8ClampedArray(N * N * 4), s = strength * N / 512;
  for (let y = 0; y < N; y++) {
    const y0 = ((y - 1 + N) % N) * N, y1 = ((y + 1) % N) * N;
    for (let x = 0; x < N; x++) {
      const x0 = (x - 1 + N) % N, x1 = (x + 1) % N;
      const nx = -(H[y * N + x1] - H[y * N + x0]) * s;
      const ny = (H[y1 + x] - H[y0 + x]) * s;
      const l = 1 / Math.hypot(nx, ny, 1), i = (y * N + x) * 4;
      out[i] = (nx * l * 0.5 + 0.5) * 255; out[i + 1] = (ny * l * 0.5 + 0.5) * 255; out[i + 2] = (l * 0.5 + 0.5) * 255; out[i + 3] = 255;
    }
  }
  return out;
}

let maxAniso = 4;
function canvasOf(data, N) {
  const c = document.createElement('canvas'); c.width = c.height = N;
  c.getContext('2d').putImageData(new ImageData(data, N, N), 0, 0);
  return c;
}
function tex(image, srgb, repeat = true) {
  const t = new THREE.Texture(image);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = maxAniso;
  t.needsUpdate = true;
  return t;
}
function setFromGen(g) {
  const set = {
    map: tex(canvasOf(g.col, g.N), true),
    normalMap: tex(canvasOf(normalFromHeight(g), g.N), false),
    roughnessMap: tex(canvasOf(g.rough, g.N), false),
  };
  if (g.extra) set.emissiveMap = tex(canvasOf(g.extra, g.N), true);
  return set;
}

// ---------------------------------------------------------------- real files

const loadImage = (url) => new Promise((res) => {
  const img = new Image();
  img.onload = () => res(img); img.onerror = () => res(null);
  img.src = url;
});
/** assets/textures/<name>_diff.jpg, <name>_nor_gl.jpg, <name>_rough.jpg  (Poly Haven naming) */
async function fileSet(name) {
  const base = `assets/textures/${name}`;
  const c = await loadImage(`${base}_diff.jpg`);   // probe one file first to keep 404 noise down
  if (!c) return null;
  const [n, r] = await Promise.all([loadImage(`${base}_nor_gl.jpg`), loadImage(`${base}_rough.jpg`)]);
  if (!n || !r) { console.warn(`[textures] "${name}" needs _diff, _nor_gl and _rough – using procedural`); return null; }
  console.info(`[textures] using files for "${name}"`);
  return { map: tex(c, true), normalMap: tex(n, false), roughnessMap: tex(r, false), fromFile: true };
}

// ---------------------------------------------------------------- hand-drawn extras

const RUNES = [
  [[.3, 0, .3, 1], [.3, .55, .75, .8], [.3, .8, .75, 1]],
  [[.25, 0, .25, 1], [.25, 1, .75, .6], [.75, .6, .75, 0]],
  [[.3, 0, .3, 1], [.3, .75, .7, .55], [.7, .55, .3, .3]],
  [[.3, 0, .3, 1], [.3, 1, .7, .75], [.3, .7, .7, .45]],
  [[.3, 0, .3, 1], [.3, 1, .7, .78], [.7, .78, .3, .55], [.3, .55, .7, 0]],
  [[.7, .9, .3, .5], [.3, .5, .7, .1]],
  [[.3, 0, .3, 1], [.7, 0, .7, 1], [.3, .65, .7, .35]],
  [[.5, 0, .5, 1], [.3, .65, .7, .4]],
  [[.5, 0, .5, 1]],
  [[.6, 1, .35, .7], [.35, .7, .65, .4], [.65, .4, .4, 0]],
  [[.5, 0, .5, 1], [.5, 1, .25, .72], [.5, 1, .75, .72]],
  [[.3, 0, .3, 1], [.3, 1, .7, .78], [.7, .78, .3, .52], [.3, .52, .7, .26], [.7, .26, .3, 0]],
  [[.25, 0, .25, 1], [.75, 0, .75, 1], [.25, 1, .75, .55], [.75, 1, .25, .55]],
  [[.35, 0, .35, 1], [.35, 1, .7, .7]],
  [[.5, .45, .25, .72], [.25, .72, .5, 1], [.5, 1, .75, .72], [.75, .72, .5, .45], [.5, .45, .25, 0], [.5, .45, .75, 0]],
];

/** Rune stone face: mossy stone with a carved, ochre-painted serpent band of runes. */
function runeSet(N) {
  const g = generate(N, stone, 3.2);
  const c = document.createElement('canvas'); c.width = c.height = N;
  const x = c.getContext('2d');
  x.strokeStyle = '#fff'; x.lineCap = 'round'; x.lineJoin = 'round';
  const S = N, cx = 0.5 * S, top = 0.36 * S, R = 0.27 * S, bottom = 0.86 * S;
  const band = (r, w) => { // inverted-U serpent band
    x.lineWidth = w; x.beginPath();
    x.moveTo(cx - r, bottom); x.lineTo(cx - r, top); x.arc(cx, top, r, Math.PI, 0); x.lineTo(cx + r, bottom); x.stroke();
  };
  band(R + 0.05 * S, 0.008 * S); band(R - 0.05 * S, 0.008 * S);
  // serpent head + tail curl
  x.lineWidth = 0.008 * S;
  x.beginPath(); x.arc(cx - R, bottom + 0.03 * S, 0.05 * S, Math.PI, 0, true); x.stroke();
  x.beginPath(); x.arc(cx + R, bottom + 0.03 * S, 0.05 * S, Math.PI, 0, true); x.stroke();
  // runes along the band
  const rnd = mulberry32(77), gs = 0.062 * S;
  const leg = bottom - top, arc = Math.PI * R, total = 2 * leg + arc, n = Math.floor(total / (gs * 0.95));
  x.lineWidth = 0.009 * S;
  for (let i = 0; i < n; i++) {
    const d = (i + 0.5) / n * total;
    let px, py, ang;
    if (d < leg) { px = cx - R; py = bottom - d; ang = -Math.PI / 2; }
    else if (d < leg + arc) { const a = Math.PI + (d - leg) / R; px = cx + Math.cos(a) * R; py = top + Math.sin(a) * R; ang = a + Math.PI / 2; }
    else { px = cx + R; py = top + (d - leg - arc); ang = Math.PI / 2; }
    const glyph = RUNES[Math.floor(rnd() * RUNES.length)];
    x.save(); x.translate(px, py); x.rotate(ang); x.scale(gs * 0.8, -gs); x.translate(-0.5, -0.5);
    x.lineWidth = 0.14;
    x.beginPath(); for (const s of glyph) { x.moveTo(s[0], s[1]); x.lineTo(s[2], s[3]); } x.stroke();
    x.restore();
  }
  // centre: ring cross
  x.lineWidth = 0.012 * S;
  x.beginPath(); x.arc(cx, 0.56 * S, 0.09 * S, 0, 7); x.stroke();
  x.beginPath(); x.moveTo(cx, 0.42 * S); x.lineTo(cx, 0.78 * S); x.moveTo(cx - 0.13 * S, 0.56 * S); x.lineTo(cx + 0.13 * S, 0.56 * S); x.stroke();
  const m = x.getImageData(0, 0, N, N).data, ochre = [0.42, 0.13, 0.08];
  for (let i = 0; i < N * N; i++) {
    const a = m[i * 4] / 255; if (a <= 0) continue;
    const keep = 0.55 + 0.45 * hash1(i * 0.37); // flaking paint
    for (let k = 0; k < 3; k++) g.col[i * 4 + k] = lerp(g.col[i * 4 + k], ochre[k] * 255, a * keep);
    g.H[i] -= a * 0.55;
  }
  return setFromGen(g);
}

/** Alpha-cut pine branch card. */
function branchTexture() {
  const N = 256, c = document.createElement('canvas'); c.width = c.height = N;
  const x = c.getContext('2d'), rnd = mulberry32(5);
  const twig = (x0, y0, x1, y1, w, depth) => {
    const len = Math.hypot(x1 - x0, y1 - y0), ang = Math.atan2(y1 - y0, x1 - x0), steps = Math.floor(len / 2.2);
    for (let i = 0; i < steps; i++) {
      const t = i / steps, px = lerp(x0, x1, t), py = lerp(y0, y1, t), nl = (10 + rnd() * 12) * (1 - t * 0.5) * (depth ? 0.75 : 1);
      for (const s of [-1, 1]) {
        const a = ang + s * (0.55 + rnd() * 0.5), l = 26 + rnd() * 30, gcol = 50 + rnd() * 50;
        x.strokeStyle = `rgb(${l * 0.9 | 0},${gcol | 0},${l * 0.6 | 0})`; x.lineWidth = 1 + rnd() * 0.8;
        x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * nl, py + Math.sin(a) * nl); x.stroke();
      }
    }
    x.strokeStyle = '#2a1d12'; x.lineWidth = w; x.beginPath(); x.moveTo(x0, y0); x.lineTo(x1, y1); x.stroke();
    if (!depth) for (let k = 0; k < 7; k++) {
      const t = 0.12 + k * 0.115, s = k % 2 ? 1 : -1, l = (1 - t) * 105 + 14;
      const bx = lerp(x0, x1, t), by = lerp(y0, y1, t), a = ang + s * 0.85;
      twig(bx, by, bx + Math.cos(a) * l, by + Math.sin(a) * l, 1.6, 1);
    }
  };
  twig(N / 2, N - 2, N / 2, 12, 3.5, 0); // trunk end at v=0, tip at v=1
  const t = tex(c, true, false);
  return t;
}

/** Alpha-cut grass tuft. */
function tuftTexture() {
  const N = 128, c = document.createElement('canvas'); c.width = c.height = N;
  const x = c.getContext('2d'), rnd = mulberry32(9);
  for (let i = 0; i < 70; i++) {
    const bx = N * (0.15 + 0.7 * rnd()), lean = (rnd() - 0.5) * 60, h = N * (0.45 + 0.5 * rnd());
    const dry = rnd();
    x.strokeStyle = dry > 0.7 ? `rgb(${130 + rnd() * 40 | 0},${118 + rnd() * 30 | 0},${60 | 0})` : `rgb(${50 + rnd() * 40 | 0},${75 + rnd() * 50 | 0},${28 | 0})`;
    x.lineWidth = 1.2 + rnd() * 1.6;
    x.beginPath(); x.moveTo(bx, N); x.quadraticCurveTo(bx + lean * 0.2, N - h * 0.6, bx + lean, N - h); x.stroke();
  }
  return tex(c, true, false);
}

function noiseTexture() {
  const N = 256, d = new Uint8ClampedArray(N * N * 4);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const v = tfbm(x / N, y / N, 4, 5) * 255, i = (y * N + x) * 4;
    d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255;
  }
  return tex(canvasOf(d, N), false);
}

// ---------------------------------------------------------------- public

const tick = () => new Promise((r) => setTimeout(r, 0));

export async function buildTextures(renderer, size, onProgress = () => {}) {
  maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const half = Math.max(256, size / 2);
  const specs = [
    ['wood', wood, size, 2.6], ['thatch', thatch, size, 3.0], ['turf', turf, size, 2.6], ['mud', mud, size, 3.0],
    ['stone', stone, size, 3.2], ['iron', iron, half, 1.6], ['bark', bark, half, 3.2],
    ['needles', needles, half, 2.2], ['cloth', cloth, half, 1.2],
  ];
  const T = {};
  let done = 0;
  for (const [name, fn, N, strength] of specs) {
    T[name] = (await fileSet(name)) ?? setFromGen(generate(N, fn, strength));
    onProgress(++done / (specs.length + 3), name);
    await tick();
  }
  T.rune = runeSet(half); onProgress(++done / (specs.length + 3), 'runes'); await tick();
  T.coal = setFromGen(generate(256, coal, 2.5));
  const wn = await loadImage('assets/textures/water_nor_gl.jpg');
  T.waterN = wn ? tex(wn, false) : setFromGen(generate(half, water, 2.2)).normalMap;
  onProgress(++done / (specs.length + 3), 'water'); await tick();
  T.branch = branchTexture(); T.tuft = tuftTexture(); T.noise = noiseTexture();
  onProgress(1, 'done');
  return T;
}
