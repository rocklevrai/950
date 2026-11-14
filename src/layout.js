// The village plan + terrain height field. Everything (terrain mesh, buildings, props,
// player physics) samples these same functions so the world always agrees with itself.
// Axes: +X east, -Z north (inland), +Z south (the fjord). Water level is y = 0.
import { fbm, sstep, lerp } from './noise.js';

export const SQUARE = { x: 0, z: 5 };

export const HOUSES = [
  { id: 'hall', x: 0, z: -22, rot: 0, L: 26, W: 8.6, wallH: 3.0, roofH: 4.4, roof: 'turf', doorX: -6, benches: 2, shields: true },
  { id: 'west', x: -30, z: 6, rot: 1.4, L: 15, W: 6.2, wallH: 2.5, roofH: 3.0, roof: 'thatch', doorX: 2, benches: 1 },
  { id: 'east', x: 30, z: 4, rot: -1.4, L: 16, W: 6.4, wallH: 2.5, roofH: 3.1, roof: 'turf', doorX: -2, benches: 1 },
  { id: 'nw', x: -24, z: -44, rot: 0.26, L: 13, W: 6.0, wallH: 2.4, roofH: 2.9, roof: 'thatch', doorX: 1.5, benches: 1 },
  { id: 'ne', x: 34, z: -36, rot: -0.35, L: 14, W: 6.0, wallH: 2.4, roofH: 3.0, roof: 'turf', doorX: -2, benches: 1 },
  { id: 'smithy', x: 18, z: 22, rot: -2.36, L: 7.5, W: 5.0, wallH: 2.4, roofH: 2.2, roof: 'thatch', open: true },
];

export const PIERS = [
  { x: -12, width: 2.8, deckY: 1.05, length: 26 },
  { x: 16, width: 2.8, deckY: 1.05, length: 30, beacon: true },
];

export const RUNESTONES = [
  { x: -54, z: -10, rot: 1.2, text: '“Sigrid raised this stone for Hakon, her husband, who sailed west and did not come home.”' },
  { x: 47, z: 29, rot: -0.6, text: '“Ulf and Ragna cut these runes. The fjord gives, and the fjord takes.”' },
  { x: 6, z: -66, rot: 0.1, text: '“Here the first hall-fire was lit. May it never go cold.”' },
];

export const PADDOCK = { x: 52, z: -10, r: 9 };

/** Wall half-width of a (boat-shaped) longhouse at normalised length t = x / (L/2). */
export const halfWidth = (h, t) => (h.W / 2) * (1 - 0.16 * t * t);

export function toWorld(h, lx, lz) {
  const c = Math.cos(h.rot), s = Math.sin(h.rot);
  return [h.x + lx * c + lz * s, h.z - lx * s + lz * c];
}
export function toLocal(h, x, z) {
  const c = Math.cos(h.rot), s = Math.sin(h.rot), dx = x - h.x, dz = z - h.z;
  return [dx * c - dz * s, dx * s + dz * c];
}
export function doorPoint(h, out = 0) {
  const t = h.doorX / (h.L / 2);
  return toWorld(h, h.doorX, halfWidth(h, t) + out);
}

// ------------------------------------------------------------------ terrain

export function shoreZ(x) {
  return 40 + 5 * Math.sin(x * 0.03 + 0.5) + 10 * (fbm(x * 0.02 + 3, 1.7, 2) - 0.5);
}

function rawH(x, z) {
  const d = shoreZ(x) - z; // metres inland
  let h = d < 0 ? Math.max(-9, d * 0.16) : 2.3 * sstep(0, 15, d) + 0.03 * Math.max(0, d - 15);
  const R = Math.hypot(x, z + 10);
  const land = sstep(-2, 25, d);
  const hill = Math.pow(sstep(85, 200, R), 1.4) * 55;
  const amp = 0.3 + 4.5 * sstep(55, 160, R);
  h += land * (hill + (fbm(x * 0.045 + 5, z * 0.045 + 9, 4) - 0.5) * 2 * amp + (fbm(x * 0.3, z * 0.3, 2) - 0.5) * 0.22);
  return h;
}

const pads = HOUSES.map((h) => ({ h, hx: h.L / 2 + 1.5, hz: h.W / 2 + 1.5, y: 0 }));
const squarePad = { h: { x: SQUARE.x, z: SQUARE.z, rot: 0 }, hx: 7, hz: 7, y: 0 };
pads.push(squarePad);
for (const p of pads) p.y = rawH(p.h.x, p.h.z) + 0.05;
for (const h of HOUSES) h.y = pads.find((p) => p.h === h).y;
SQUARE.y = squarePad.y;

// mud paths: polylines between the places people actually walk
const P = (h, o = 1.6) => doorPoint(HOUSES.find((x) => x.id === h), o);
const sq = [SQUARE.x, SQUARE.z];
const PATHS = [
  [[PIERS[0].x, 46], [-9, 26], sq],
  [[PIERS[1].x, 46], [11, 30], [8, 16], sq],
  [sq, [-4, -8], P('hall')],
  [sq, [-14, 6], P('west')],
  [sq, [14, 5], P('east')],
  [[-4, -8], [-14, -24], [-20, -34], P('nw')],
  [sq, [14, -6], [24, -18], [30, -26], P('ne')],
  [P('west'), [-30, -6], [-42, -10], [-52, -10]],
  [P('east'), [36, 18], [45, 27]],
  [[14, -6], [20, -30], [16, -50], [8, -63]],
  [sq, [10, 13], [14, 18]],
  [[36, 18], [44, 0], [46, -6]],
];
const SEGS = [];
for (const p of PATHS) for (let i = 0; i < p.length - 1; i++) SEGS.push([p[i][0], p[i][1], p[i + 1][0], p[i + 1][1]]);

function pathDist(x, z) {
  let best = 1e9;
  for (const s of SEGS) {
    const ex = s[2] - s[0], ez = s[3] - s[1], px = x - s[0], pz = z - s[1];
    const t = Math.max(0, Math.min(1, (px * ex + pz * ez) / (ex * ex + ez * ez)));
    const d = Math.hypot(px - ex * t, pz - ez * t);
    if (d < best) best = d;
  }
  return best;
}

/** 0..1 – how muddy/trodden the ground is. */
export function mudAt(x, z) {
  let m = 0;
  if (Math.abs(x) < 80 && z > -80 && z < 60) {
    const dd = pathDist(x, z) + (fbm(x * 0.25, z * 0.25, 2) - 0.5) * 1.8;
    m = 1 - sstep(0.9, 2.5, dd);
    const ds = Math.hypot(x - SQUARE.x, z - SQUARE.z) + (fbm(x * 0.2 + 4, z * 0.2, 2) - 0.5) * 3;
    m = Math.max(m, 1 - sstep(5.5, 8.5, ds));
    for (const h of HOUSES) {
      const [lx, lz] = toLocal(h, x, z);
      if (Math.abs(lx) < h.L / 2 + 0.4 && Math.abs(lz) < h.W / 2 + 0.4) { m = 1; break; }
    }
  }
  return m;
}
/** 0..1 – shoreline wetness (drives puddles/wet sheen). */
export function shoreWet(x, z) {
  return 1 - sstep(1.5, 5.5, shoreZ(x) - z);
}

export function terrainH(x, z) {
  let h = rawH(x, z);
  if (Math.abs(x) < 70 && z > -75 && z < 50) {
    for (const p of pads) {
      const [lx, lz] = toLocal(p.h, x, z);
      const d = Math.hypot(Math.max(Math.abs(lx) - p.hx, 0), Math.max(Math.abs(lz) - p.hz, 0));
      if (d < 5) h = lerp(h, p.y, 1 - sstep(0, 5, d));
    }
    h -= 0.12 * mudAt(x, z);
  }
  return h;
}

/** Is this point inside a building footprint (+margin)? */
export function inHouse(x, z, margin = 0) {
  for (const h of HOUSES) {
    const [lx, lz] = toLocal(h, x, z);
    if (Math.abs(lx) < h.L / 2 + margin && Math.abs(lz) < h.W / 2 + margin) return h;
  }
  return null;
}
