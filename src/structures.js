// Procedural architecture: longhouses, smithy, piers, longships and hand-placed props.
// Every builder pushes geometry into a Batch (merged per material) and registers
// colliders / fires / smoke / interactables on the shared world context `W`.
import * as THREE from 'three';
import { Batch, rbox, plank, M, spanMatrix, v3, gridGeo, ribbonShape, addCurl, extrude, prep, triUV, setColor } from './geo.js';
import { halfWidth, terrainH } from './layout.js';
import { fbm, mulberry32, lerp } from './noise.js';

const TAU = Math.PI * 2;
const SHIELD_COLS = [[0.85, 0.2, 0.14], [0.95, 0.75, 0.3], [0.22, 0.32, 0.5], [0.9, 0.86, 0.76], [0.16, 0.16, 0.17]];

// ---------------------------------------------------------------- small parts

/** Round timber along local Y with vertical grain. */
export function pole(r1, r2, len, seg = 7, tile = 2) {
  return triUV(prep(new THREE.CylinderGeometry(r1, r2, len, seg, 1)), tile, 1);
}
/** Bark-covered log along local Y; cut ends are tinted pale. */
export function barkLog(r1, r2, len, seg = 8) {
  const g = prep(new THREE.CylinderGeometry(r1, r2, len, seg, 1));
  const uv = g.attributes.uv, n = g.attributes.normal, c = g.attributes.color;
  for (let i = 0; i < uv.count; i++) {
    if (Math.abs(n.getY(i)) > 0.9) c.setXYZ(i, 2.6, 2.1, 1.5); // end grain
    else uv.setXY(i, uv.getX(i) * 2, uv.getY(i) * len / 1.6);
  }
  return g;
}
function beam(b, key, a, c, w, h, P, col) {
  const { len, matrix } = spanMatrix(a, c);
  b.add(key, rbox(len, h, w, 0), P ? P.clone().multiply(matrix) : matrix, col);
}
function rod(b, key, a, c, r, P, col, seg = 5) {
  const { len, matrix } = spanMatrix(a, c);
  const g = pole(r, r, len, seg); g.rotateZ(-Math.PI / 2);
  b.add(key, g, P ? P.clone().multiply(matrix) : matrix, col);
}
const woodTint = (rnd, base = 1) => { const k = base * (0.72 + rnd() * 0.36); return [k, k * (0.95 + rnd() * 0.05), k * (0.88 + rnd() * 0.1)]; };

export function shield(b, matrix, ci) {
  const d = prep(new THREE.CylinderGeometry(0.43, 0.43, 0.045, 18)); d.rotateX(Math.PI / 2); triUV(d, 1.3, 0);
  ci = Math.abs(ci | 0);
  const col = SHIELD_COLS[ci % SHIELD_COLS.length];
  // quartered paint on every other shield
  if (ci % 2) { const p = d.attributes.position, c = d.attributes.color; for (let i = 0; i < p.count; i++) if (p.getX(i) * p.getY(i) > 0) c.setXYZ(i, 0.9, 0.86, 0.76); else c.setXYZ(i, ...col); b.add('paint', d, matrix); }
  else b.add('paint', d, matrix, col);
  const boss = new THREE.SphereGeometry(0.1, 8, 5, 0, TAU, 0, Math.PI / 2); boss.rotateX(Math.PI / 2); boss.translate(0, 0, 0.02);
  b.add('iron', boss, matrix);
  const rim = new THREE.TorusGeometry(0.43, 0.02, 4, 18);
  b.add('iron', rim, matrix);
}

// ---------------------------------------------------------------- longhouse

export function buildHouse(W, h, rockSmall) {
  const b = W.batch, P = M(h.x, h.y, h.z, h.rot), rnd = mulberry32(Math.abs(h.x * 31 + h.z * 17) | 0);
  const L = h.L, half = L / 2, over = 0.65, thick = 0.3, xr = half + 0.7, turf = h.roof === 'turf';
  const tc = (x) => Math.max(-1.12, Math.min(1.12, x / half));
  const hw = (x) => halfWidth(h, tc(x));
  const ridgeY = (x) => h.wallH + h.roofH * (1 - 0.14 * tc(x) ** 2);
  const eaveZ = (x) => hw(x) + over, eaveY = h.wallH - 0.32;
  const roofS = (x, s) => ridgeY(x) - (ridgeY(x) - eaveY) * Math.pow(s, 1.12);
  const roofY = (x, zAbs) => roofS(x, Math.min(1, zAbs / eaveZ(x)));
  const bump = (x, z) => (fbm(x * 0.7 + h.x, z * 0.7 + h.z * 1.3, 3) - 0.5) * (turf ? 0.34 : 0.2);
  const add = (key, geo, m, col) => b.add(key, geo, P.clone().multiply(m), col);
  const world = (x, y, z) => v3(x, y, z).applyMatrix4(P);

  // ---- roof: thick, slightly lumpy slab with a curved ridge and overhanging eaves
  const NX = Math.round(L / 1.0), NS = 7, tile = turf ? 3 : 2, rkey = turf ? 'turf' : 'thatch';
  const slope = Math.hypot(eaveZ(0), ridgeY(0) - eaveY);
  const rcol = turf ? [0.95, 1, 0.8] : [1, 0.97, 0.9];
  for (const side of [-1, 1]) {
    const topY = (x, s) => roofS(x, s) + thick + bump(x, side * eaveZ(x) * s) * (0.35 + 0.65 * s);
    add(rkey, gridGeo(NX, NS, (i, j, o) => {
      const x = -xr + 2 * xr * i / NX, s = j / NS;
      o[0] = x; o[1] = topY(x, s); o[2] = side * eaveZ(x) * s; o[3] = x / tile; o[4] = -s * slope / tile;
    }, v3(0, 1, side * 0.4)), new THREE.Matrix4(), rcol);
    add('wood', gridGeo(NX, NS, (i, j, o) => { // underside: smoke-darkened roof boards
      const x = -xr + 2 * xr * i / NX, s = j / NS;
      o[0] = x; o[1] = roofS(x, s); o[2] = side * eaveZ(x) * s; o[3] = s * slope / 2; o[4] = x / 2;
    }, v3(0, -1, 0)), new THREE.Matrix4(), [0.42, 0.36, 0.3]);
    add(rkey, gridGeo(NX, 1, (i, j, o) => { // eave edge
      const x = -xr + 2 * xr * i / NX;
      o[0] = x; o[1] = j ? topY(x, 1) : roofS(x, 1); o[2] = side * eaveZ(x); o[3] = x / tile; o[4] = j * 0.2;
    }, v3(0, 0, side)), new THREE.Matrix4(), [0.6, 0.55, 0.45]);
    for (const gx of [-xr, xr]) add(rkey, gridGeo(NS, 1, (i, j, o) => { // gable edge
      const s = i / NS;
      o[0] = gx; o[1] = j ? topY(gx, s) : roofS(gx, s); o[2] = side * eaveZ(gx) * s; o[3] = s * slope / tile; o[4] = j * 0.2;
    }, v3(Math.sign(gx), 0, 0)), new THREE.Matrix4(), [0.6, 0.55, 0.45]);
    // eave log holding the turf / thatch edge
    for (let i = 0; i < 8; i++) {
      const x0 = -xr + 2 * xr * i / 8, x1 = -xr + 2 * xr * (i + 1) / 8;
      beam(b, 'wood', v3(x0, roofS(x0, 1) + 0.1, side * (eaveZ(x0) + 0.04)), v3(x1, roofS(x1, 1) + 0.1, side * (eaveZ(x1) + 0.04)), 0.16, 0.18, P, woodTint(rnd, 0.8));
    }
    if (turf) for (let k = 0; k < L * 2.2; k++) { // grass growing on the roof
      const x = (rnd() * 2 - 1) * xr * 0.96, s = 0.08 + rnd() * 0.88;
      W.tufts.push({ p: world(x, topY(x, s) - 0.05, side * eaveZ(x) * s), s: 0.7 + rnd() * 0.6 });
    }
  }
  // ridge pole + crossed ridge weights
  for (let i = 0; i < 10; i++) {
    const x0 = -xr + 2 * xr * i / 10, x1 = -xr + 2 * xr * (i + 1) / 10;
    beam(b, 'wood', v3(x0, ridgeY(x0) + thick + 0.08, 0), v3(x1, ridgeY(x1) + thick + 0.08, 0), 0.24, 0.2, P, woodTint(rnd, 0.75));
  }
  if (!turf) for (let x = -half + 0.8; x < half; x += 1.7) for (const s of [-1, 1]) {
    const zz = 1.25;
    beam(b, 'wood', v3(x + s * 0.06, ridgeY(x) + thick + 0.55, -s * 0.28), v3(x + s * 0.06, roofY(x, zz) + thick + 0.1, s * zz), 0.09, 0.09, P, woodTint(rnd, 0.8));
  }

  // ---- carved bargeboards crossing at each gable, ending in dragon curls
  for (const gx of [-xr, xr]) for (const sz of [-1, 1]) {
    const pts = [];
    for (let j = 0; j <= 6; j++) { const s = 1.07 * (1 - j / 6); pts.push([sz * eaveZ(gx) * s, roofS(gx, s) + thick * 0.45]); }
    const a = pts[pts.length - 2], c = pts[pts.length - 1], dl = Math.hypot(c[0] - a[0], c[1] - a[1]);
    const dx = (c[0] - a[0]) / dl, dy = (c[1] - a[1]) / dl;
    for (let k = 1; k <= 3; k++) pts.push([c[0] + dx * 0.4 * k, c[1] + dy * 0.4 * k]);
    addCurl(pts, 0.46, sz, 0.85, 16);
    const g = extrude(ribbonShape(pts, (t) => 0.26 * (t < 0.6 ? 1 : lerp(1, 0.22, (t - 0.6) / 0.4))), 0.08);
    const m = new THREE.Matrix4().makeBasis(v3(0, 0, 1), v3(0, 1, 0), v3(-1, 0, 0)).setPosition(gx + Math.sign(gx) * (0.07 + (sz > 0 ? 0.1 : 0)), 0, 0);
    add('wood', g, m, woodTint(rnd, 0.7));
  }

  // ---- walls: individual staves so the silhouette is never a flat box
  const stave = (x, z, yaw, hgt, y0 = 0) => {
    if (hgt < 0.15) return;
    add('wood', plank(hgt, 0.27 + rnd() * 0.1, 0.07 + rnd() * 0.03, 0), M(x, y0 + hgt / 2, z, yaw + (rnd() - 0.5) * 0.04, 0, Math.PI / 2), woodTint(rnd));
  };
  for (const side of [-1, 1]) {
    if (h.open && side === 1) continue;
    for (let x = -half + 0.15; x < half; x += 0.3) {
      const slopeZ = side * (h.W / 2) * (-0.32 * tc(x)) / half;
      const z = side * (hw(x) + (rnd() - 0.5) * 0.03), yaw = -Math.atan(slopeZ);
      if (!h.open && side === 1 && Math.abs(x - h.doorX) < 0.72) stave(x, z, yaw, h.wallH - 2.2, 2.2);
      else stave(x, z, yaw, h.wallH + 0.05);
    }
  }
  for (const ex of [-half, half]) {
    if (h.open && ex > 0) continue;
    for (let z = -hw(ex) + 0.15; z < hw(ex); z += 0.3) stave(ex + (rnd() - 0.5) * 0.03, z, Math.PI / 2, roofY(ex, Math.abs(z)) + 0.02);
  }

  // ---- frame: posts, raking buttresses, sills, wall plates, stone footing
  const n = Math.max(2, Math.round(L / 3.1)), xs = [];
  for (let i = 0; i <= n; i++) xs.push(-half + L * i / n);
  for (const side of [-1, 1]) {
    xs.forEach((x, i) => {
      const z = side * (hw(x) + 0.1);
      add('wood', rbox(0.27, h.wallH + 0.12, 0.27, 1, 2, 0.035), M(x, (h.wallH + 0.12) / 2, z), woodTint(rnd, 0.8));
      const nearDoor = !h.open && side === 1 && Math.abs(x - h.doorX) < 1.7;
      if (!h.open && !nearDoor) beam(b, 'wood', v3(x, -0.1, side * (hw(x) + 1.3)), v3(x, h.wallH - 0.4, side * (hw(x) + 0.22)), 0.17, 0.17, P, woodTint(rnd, 0.8));
      if (i < n) {
        const x1 = xs[i + 1], z1 = side * (hw(x1) + 0.1);
        beam(b, 'wood', v3(x, h.wallH, z), v3(x1, h.wallH, z1), 0.24, 0.22, P, woodTint(rnd, 0.8));
        if (!(h.open && side === 1)) beam(b, 'wood', v3(x, 0.1, z), v3(x1, 0.1, z1), 0.3, 0.24, P, woodTint(rnd, 0.7));
      }
    });
    if (!(h.open && side === 1)) for (let x = -half; x <= half; x += 0.62) {
      const s = 0.3 + rnd() * 0.14;
      add('stone', rockSmall, M(x, 0, side * (hw(x) + 0.27), rnd() * 6, 0, 0, s, s * 0.7, s * 0.9), [1, 1, 1]);
    }
  }
  for (const ex of [-half, half]) {
    beam(b, 'wood', v3(ex, h.wallH, -hw(ex)), v3(ex, h.wallH, hw(ex)), 0.24, 0.22, P, woodTint(rnd, 0.8));
    if (!(h.open && ex > 0)) for (let z = -hw(ex); z <= hw(ex); z += 0.62) {
      const s = 0.3 + rnd() * 0.14;
      add('stone', rockSmall, M(ex + Math.sign(ex) * 0.27, 0, z, rnd() * 6, 0, 0, s, s * 0.7, s * 0.9), [1, 1, 1]);
    }
  }

  // ---- interior frame: two rows of roof posts with tie beams and purlins
  const inner = xs.slice(1, -1), pz = (x) => hw(x) * 0.5;
  inner.forEach((x, i) => {
    const Hp = roofY(x, pz(x)) - 0.02;
    for (const s of [-1, 1]) {
      add('wood', rbox(0.22, Hp, 0.22, 1, 2, 0.03), M(x, Hp / 2, s * pz(x)), woodTint(rnd, 0.7));
      W.colliders.push({ ...xz(world(x, 0, s * pz(x))), r: 0.2 });
      if (i < inner.length - 1) {
        const x1 = inner[i + 1];
        beam(b, 'wood', v3(x, Hp - 0.1, s * pz(x)), v3(x1, roofY(x1, pz(x1)) - 0.12, s * pz(x1)), 0.16, 0.18, P, woodTint(rnd, 0.65));
      }
    }
    beam(b, 'wood', v3(x, Hp - 0.35, -pz(x)), v3(x, Hp - 0.35, pz(x)), 0.18, 0.2, P, woodTint(rnd, 0.65));
  });

  // ---- wall colliders (chains of small circles follow the bowed plan and leave the door open)
  for (const side of [-1, 1]) {
    if (h.open && side === 1) continue;
    for (let x = -half; x <= half; x += 0.45) {
      if (!h.open && side === 1 && Math.abs(x - h.doorX) < 0.62) continue;
      W.colliders.push({ ...xz(world(x, 0, side * hw(x))), r: 0.3 });
    }
  }
  for (const ex of [-half, half]) {
    if (h.open && ex > 0) continue;
    for (let z = -hw(ex); z <= hw(ex); z += 0.45) W.colliders.push({ ...xz(world(ex, 0, z)), r: 0.3 });
  }

  if (h.open) { buildForge(W, h, P, rnd, world, ridgeY, thick, rockSmall); return; }

  // ---- door: heavy frame, plank leaf standing ajar on iron straps
  const dx = h.doorX, dz = hw(dx);
  for (const s of [-1, 1]) add('wood', rbox(0.22, 2.2, 0.3, 1, 2, 0.04), M(dx + s * 0.78, 1.1, dz + 0.02), woodTint(rnd, 0.65));
  add('wood', rbox(2.0, 0.26, 0.34, 0, 2, 0.04), M(dx, 2.28, dz + 0.02), woodTint(rnd, 0.65));
  const leaf = M(dx - 0.64, 0, dz - 0.06, 1.95).multiply(M(0.63, 1.02, 0, 0, 0, Math.PI / 2));
  add('wood', rbox(1.95, 1.24, 0.07, 0, 2, 0.02), leaf, woodTint(rnd, 0.85));
  for (const s of [-0.62, 0.62]) add('iron', plank(0.07, 1.1, 0.09, 1, 1), leaf.clone().multiply(M(s, 0.05, 0)));
  add('stone', rockSmall, M(dx, -0.08, dz + 0.85, 0.4, 0, 0, 0.75, 0.22, 0.5));

  if (h.shields) for (let k = 0; k < 10; k++) {
    const x = (k < 5 ? dx + 2.2 + k * 1.15 : dx - 2.2 - (k - 5) * 1.15);
    if (Math.abs(x) > half - 1) continue;
    shield(b, P.clone().multiply(M(x, 1.75, hw(x) + 0.14, -Math.atan((h.W / 2) * (-0.32 * tc(x)) / half))), k);
  }

  // ---- hearths, benches, smoke hole
  const hearths = L > 20 ? [-5.5, 4.5] : [0.5];
  for (const hx of hearths) {
    for (let k = 0; k < 14; k++) {
      const a = k / 14 * TAU, s = 0.24 + rnd() * 0.1;
      add('stone', rockSmall, M(hx + Math.cos(a) * 1.25, 0, Math.sin(a) * 0.6, rnd() * 6, 0, 0, s, s * 0.8, s));
    }
    const coals = plank(2.0, 0.12, 0.8, 0, 1.2);
    add('coal', coals, M(hx, 0.05, 0));
    for (let k = 0; k < 3; k++) { const g = barkLog(0.07, 0.08, 0.9, 6); g.rotateZ(Math.PI / 2); add('bark', g, M(hx - 0.3 + k * 0.3, 0.17, (k - 1) * 0.16, 0.3 * (k - 1), 0, 0.1)); }
    W.fires.push({ pos: world(hx, 0.5, 0), size: 0.95, light: true, power: 1.15, lit: true });
    W.fires.push({ pos: world(hx + 0.5, 0.35, 0.1), size: 0.6, light: false, lit: true });
    for (const o of [-0.7, 0, 0.7]) W.colliders.push({ ...xz(world(hx + o, 0, 0)), r: 0.55 });
    W.smokes.push({ pos: world(hx, ridgeY(hx) + thick + 0.25, 0), size: 1 });
  }
  const sides = h.benches === 2 ? [-1, 1] : [-1];
  for (const side of sides) for (let i = 0; i < n; i++) {
    const x0 = xs[i] + 0.25, x1 = xs[i + 1] - 0.25, xm = (x0 + x1) / 2;
    if (side === 1 && Math.abs(xm - dx) < 2.6) continue;
    const z = side * (hw(xm) - 0.72);
    add('wood', rbox(x1 - x0, 0.1, 1.0, 0, 2, 0.02), M(xm, 0.46, z), woodTint(rnd, 0.9));
    for (const lx of [x0 + 0.2, x1 - 0.2]) add('wood', rbox(0.14, 0.42, 0.9, 1), M(lx, 0.21, z), woodTint(rnd, 0.7));
    add('cloth', plank(1.4, 0.04, 0.85, 0, 6), M(xm + (rnd() - 0.5), 0.53, z, 0.05), [0.5, 0.42, 0.36]); // hide / blanket
    for (let x = x0; x <= x1; x += 0.8) W.colliders.push({ ...xz(world(x, 0, z)), r: 0.5 });
  }
}
const xz = (v) => ({ x: v.x, z: v.z });

function buildForge(W, h, P, rnd, world, ridgeY, thick, rockSmall) {
  const b = W.batch, add = (key, geo, m, col) => b.add(key, geo, P.clone().multiply(m), col);
  add('stone', rbox(1.6, 0.95, 1.2, 0, 2, 0.08), M(-1.7, 0.47, -0.9));
  for (let k = 0; k < 9; k++) { const a = k / 9 * TAU, s = 0.26 + rnd() * 0.1; add('stone', rockSmall, M(-1.7 + Math.cos(a) * 0.95, 0, -0.9 + Math.sin(a) * 0.75, rnd() * 6, 0, 0, s, s * 0.8, s)); }
  add('coal', plank(1.1, 0.1, 0.75, 0, 1), M(-1.7, 0.97, -0.9));
  W.fires.push({ pos: world(-1.7, 1.25, -0.9), size: 0.6, light: true, power: 0.9, lit: true });
  W.smokes.push({ pos: world(-1.7, ridgeY(-1.7) + thick + 0.2, -0.3), size: 0.8 });
  W.colliders.push({ ...xz(world(-1.7, 0, -0.9)), r: 0.95 });
  // anvil on a stump
  add('bark', barkLog(0.3, 0.34, 0.55, 10), M(0.9, 0.27, 0.3));
  const an = [[-0.26, 0], [0.26, 0], [0.18, 0.07], [0.11, 0.1], [0.11, 0.19], [0.28, 0.21], [0.46, 0.3], [-0.3, 0.3], [-0.3, 0.2], [-0.11, 0.19], [-0.11, 0.1], [-0.18, 0.07]];
  add('iron', extrude(new THREE.Shape(an.map((p) => new THREE.Vector2(p[0], p[1]))), 0.16, 1, 0.01), M(0.9, 0.56, 0.3, 0.5));
  W.colliders.push({ ...xz(world(0.9, 0, 0.3)), r: 0.42 });
  // hammer + tongs on the stump, quench barrel, work bench
  rod(b, 'wood', v3(0.75, 0.57, 0.52), v3(1.1, 0.57, 0.6), 0.018, P);
  add('iron', rbox(0.07, 0.07, 0.16, 0, 1, 0.01), M(1.1, 0.57, 0.6, 0.2));
  add('wood', rbox(2.2, 0.08, 0.7, 0, 2, 0.02), M(1.6, 0.85, -1.9), woodTint(rnd, 0.8));
  for (const lx of [0.65, 2.55]) add('wood', rbox(0.12, 0.82, 0.6, 1), M(lx, 0.41, -1.9), woodTint(rnd, 0.7));
  for (let k = 0; k < 3; k++) rod(b, 'iron', v3(1 + k * 0.4, 0.9, -2.05), v3(1.15 + k * 0.4, 0.9, -1.7), 0.014, P);
  for (let x = 0.7; x <= 2.6; x += 0.6) W.colliders.push({ ...xz(world(x, 0, -1.9)), r: 0.4 });
  W.barrels.push({ p: world(-0.2, 0, -1.7), s: 0.9 });
}

// ---------------------------------------------------------------- pier

export function buildPier(W, p, rockSmall) {
  const b = W.batch, rnd = mulberry32(p.x * 13 + 5 | 0), w = p.width, y = p.deckY;
  let z0 = 20; while (terrainH(p.x, z0) > y - 0.1 && z0 < 60) z0 += 0.25;
  z0 -= 1.5;
  const z1 = z0 + p.length, headZ = z1 - 4.6, hx = 1.6;
  for (let z = z0; z < z1; z += 0.3) {
    const head = z > headZ, ww = w + (head ? hx * 2 : 0) + rnd() * 0.22;
    b.add('wood', plank(ww, 0.07, 0.25 + rnd() * 0.035, 0), M(p.x + (rnd() - 0.5) * 0.1, y - 0.035 + rnd() * 0.014, z, (rnd() - 0.5) * 0.02, 0, (rnd() - 0.5) * 0.006), woodTint(rnd, 1.05));
  }
  for (const sx of [-w / 2 + 0.35, w / 2 - 0.35]) for (let z = z0; z < z1 - 0.1; z += 4) {
    beam(b, 'wood', v3(p.x + sx, y - 0.19, z), v3(p.x + sx, y - 0.19, Math.min(z + 4, z1)), 0.2, 0.22, null, woodTint(rnd, 0.7));
  }
  for (let z = z0 + 2.2; z <= z1; z += 3.1) {
    const head = z > headZ, half = w / 2 + (head ? hx : 0) + 0.06;
    for (const s of [-1, 1]) {
      const px = p.x + s * half, bottom = Math.min(terrainH(px, z), 0) - 1.2, top = y + (rnd() < 0.45 || head ? 0.55 + rnd() * 0.4 : 0.04);
      b.add('bark', barkLog(0.13, 0.17, top - bottom, 8), M(px, (top + bottom) / 2, z, rnd() * 6, (rnd() - 0.5) * 0.04, (rnd() - 0.5) * 0.04));
      if (top > y + 0.3) { W.colliders.push({ x: px, z, r: 0.22, minY: y - 0.5 }); const t = new THREE.TorusGeometry(0.17, 0.035, 5, 10); t.rotateX(Math.PI / 2); b.add('rope', t, M(px, y + 0.3, z)); }
    }
    beam(b, 'wood', v3(p.x - half - 0.2, y - 0.36, z), v3(p.x + half + 0.2, y - 0.36, z), 0.18, 0.18, null, woodTint(rnd, 0.65));
    if (terrainH(p.x, z) < -0.3) beam(b, 'wood', v3(p.x - half, y - 0.5, z + 0.05), v3(p.x + half, 0.05, z + 0.05), 0.1, 0.1, null, woodTint(rnd, 0.6));
  }
  for (let k = 0; k < 2; k++) { const t = new THREE.TorusGeometry(0.24, 0.05, 5, 12); t.rotateX(Math.PI / 2); b.add('rope', t, M(p.x - 0.8 + k * 1.9, y + 0.05 + k * 0.02, headZ + 1 + k * 2, 0, 0, 0, 1, 1 + k, 1)); }
  W.platforms.push({ x0: p.x - w / 2, x1: p.x + w / 2, z0, z1: headZ + 0.1, y });
  W.platforms.push({ x0: p.x - w / 2 - hx, x1: p.x + w / 2 + hx, z0: headZ, z1, y });
  W.barrels.push({ p: v3(p.x - w / 2 - hx + 0.6, y, z1 - 0.7), s: 1 }, { p: v3(p.x - w / 2 - hx + 1.4, y, z1 - 0.6), s: 0.85 });
  W.crates.push({ p: v3(p.x + w / 2 + hx - 0.7, y, headZ + 0.8), s: 1, r: 0.3 }, { p: v3(p.x + w / 2 + hx - 0.75, y + 0.7, headZ + 0.85), s: 0.7, r: 0.9 });
  return { z0, z1, headZ };
}

// ---------------------------------------------------------------- longship

/** Clinker longship, length along local X, y = 0 at the waterline. Returns a Group. */
export function buildShip(mats, { detail = true, sail = false, seed = 1 } = {}) {
  const b = new Batch(), rnd = mulberry32(seed * 97), L = 17, B = 1.95, H = L / 2;
  const hb = (t) => B * Math.pow(Math.max(0, 1 - Math.pow(Math.abs(t), 2.3)), 0.8);
  const keel = (t) => -0.55 + 1.55 * Math.pow(Math.abs(t), 3);
  const sheer = (t) => 0.72 + 1.5 * Math.pow(Math.abs(t), 2.5);
  const at = (t, s, side) => [t * H, keel(t) + (sheer(t) - keel(t)) * Math.pow(s, 1.5), side * hb(t) * Math.pow(s, 0.55)];
  const tar = [0.5, 0.4, 0.33], nt = detail ? 30 : 14, ns = detail ? 6 : 3;
  for (const side of [-1, 1]) {
    b.add('woodDS', gridGeo(nt, ns, (i, j, o) => {
      const p = at(-1 + 2 * i / nt, j / ns, side);
      o[0] = p[0]; o[1] = p[1]; o[2] = p[2]; o[3] = p[0] / 2; o[4] = j / ns * 1.5;
    }, v3(0, -0.4, side)), null, tar);
    if (detail) for (let i = 0; i < 16; i++) { // gunwale rail
      const a = at(-1 + 2 * i / 16, 1, side), c = at(-1 + 2 * (i + 1) / 16, 1, side);
      beam(b, 'wood', v3(...a), v3(...c), 0.1, 0.1, null, woodTint(rnd, 0.6));
    }
  }
  // stem and stern posts with dragon curls
  for (const e of [-1, 1]) {
    const pts = [[e * (H - 1.4), keel(0.84) - 0.05], [e * (H - 0.5), keel(0.95)], [e * (H + 0.02), 1.5], [e * (H + 0.3), 2.3], [e * (H + 0.42), 3.0], [e * (H + 0.38), 3.6]];
    addCurl(pts, 0.5, e, 0.85, 16);
    b.add('wood', extrude(ribbonShape(pts, (t) => 0.22 * (t < 0.6 ? 1 : lerp(1, 0.35, (t - 0.6) / 0.4))), 0.13), null, [0.42, 0.33, 0.27]);
  }
  b.add('wood', rbox(L - 2.6, 0.2, 0.14, 0), M(0, -0.58, 0), [0.4, 0.32, 0.27]); // keel
  // deck + rowing benches
  b.add('wood', gridGeo(nt, 1, (i, j, o) => { const p = at(-0.93 + 1.86 * i / nt, 0.3, j ? 1 : -1); o[0] = p[0]; o[1] = p[1]; o[2] = p[2]; o[3] = p[0] / 2; o[4] = p[2] / 2; }, v3(0, 1, 0)), null, [0.65, 0.58, 0.5]);
  if (detail) for (let t = -0.72; t <= 0.73; t += 0.12) {
    const p = at(t, 0.6, 1);
    b.add('wood', rbox(0.3, 0.05, p[2] * 2 - 0.05, 2), M(p[0], p[1], 0), woodTint(rnd, 0.8));
  }
  // mast, yard, sail
  const mastBase = keel(0) + 0.25, mastH = 9.6, mx = 0.4, yardY = mastBase + mastH - 1.3;
  b.add('wood', pole(0.09, 0.16, mastH, 8), M(mx, mastBase + mastH / 2, 0), [0.75, 0.66, 0.55]);
  const yard = pole(0.07, 0.09, 8, 6); yard.rotateX(Math.PI / 2);
  b.add('wood', yard, M(mx + 0.16, yardY, 0), [0.7, 0.62, 0.52]);
  if (sail) {
    b.add('cloth', gridGeo(10, 8, (i, j, o) => {
      const u = i / 10, v = j / 8, belly = Math.sin(Math.PI * u) * Math.sin(Math.PI * (0.15 + v * 0.8));
      o[0] = mx + 0.25 + belly * 1.25; o[1] = yardY - 0.1 - v * 5.8; o[2] = (u - 0.5) * 7.4 * (1 - 0.06 * v); o[3] = u * 2; o[4] = v * 2;
    }, v3(1, 0, 0)), null, [1, 0.95, 0.88]);
  } else {
    const furl = prep(new THREE.CylinderGeometry(0.2, 0.2, 7.2, 9, 12)); furl.rotateX(Math.PI / 2);
    const p = furl.attributes.position;
    for (let i = 0; i < p.count; i++) { const k = 0.8 + 0.5 * fbm(p.getZ(i) * 1.4, seed, 2); p.setXY(i, p.getX(i) * k, p.getY(i) * k - 0.04 * Math.cos(p.getZ(i) * 0.8)); }
    furl.computeVertexNormals();
    b.add('cloth', furl, M(mx + 0.16, yardY - 0.24, 0), [0.9, 0.85, 0.78]);
  }
  if (detail) {
    const top = v3(mx, mastBase + mastH - 0.3, 0);
    rod(b, 'rope', top, v3(H + 0.25, 2.3, 0), 0.018, null); rod(b, 'rope', top, v3(-H - 0.25, 2.3, 0), 0.018, null);
    for (const s of [-1, 1]) for (const t of [-0.12, 0.2]) rod(b, 'rope', top, v3(...at(t, 1, s)), 0.016, null);
    for (const s of [-1, 1]) rod(b, 'rope', v3(mx + 0.16, yardY, s * 3.9), v3(...at(-0.55, 1, s)), 0.014, null);
    // shields racked along the gunwale
    let k = seed;
    for (const side of [-1, 1]) for (let t = -0.62; t <= 0.63; t += 0.096) {
      const p = at(t, 1, side), dzdx = (hb(t + 0.01) - hb(t - 0.01)) / (0.02 * H) * side;
      shield(b, M(p[0], p[1] - 0.16, p[2] + side * 0.07, -Math.atan(dzdx) + (side < 0 ? Math.PI : 0)), k++);
    }
    // steering oar
    beam(b, 'wood', v3(-H * 0.78, 1.7, B * 0.72), v3(-H * 0.83, -1.0, B * 0.78), 0.28, 0.05, null, woodTint(rnd, 0.7));
  }
  const g = b.build(mats, { grime: 0.7 });
  g.traverse((o) => { if (o.isMesh && !detail) o.castShadow = false; });
  return g;
}

// ---------------------------------------------------------------- hand-placed props

export function weaponRack(W, x, z, rot) {
  const b = W.batch, P = M(x, terrainH(x, z), z, rot), rnd = mulberry32(x * 7 + z * 3 | 0);
  for (const lx of [-1.2, 1.2]) for (const s of [-1, 1]) beam(b, 'wood', v3(lx, -0.05, s * 0.45), v3(lx, 1.55, 0), 0.09, 0.09, P, woodTint(rnd, 0.8));
  beam(b, 'wood', v3(-1.35, 1.55, 0), v3(1.35, 1.55, 0), 0.09, 0.09, P, woodTint(rnd, 0.8));
  beam(b, 'wood', v3(-1.28, 0.78, 0.24), v3(1.28, 0.78, 0.24), 0.07, 0.07, P, woodTint(rnd, 0.8));
  for (let k = 0; k < 4; k++) {
    const a = v3(-0.85 + k * 0.5, 0.02, 0.55), c = v3(-0.8 + k * 0.5, 2.3, -0.06), d = c.clone().sub(a).normalize();
    rod(b, 'wood', a, c, 0.02, P, [0.9, 0.8, 0.65]);
    const { matrix } = spanMatrix(c, c.clone().addScaledVector(d, 0.32));
    const tip = prep(new THREE.ConeGeometry(0.045, 0.32, 4)); tip.rotateZ(-Math.PI / 2); tip.scale(1, 1, 0.3);
    b.add('iron', tip, P.clone().multiply(matrix));
  }
  shield(b, P.clone().multiply(M(-0.55, 0.62, 0.42, 0, -0.3)), (x | 0) + 1);
  shield(b, P.clone().multiply(M(0.6, 0.62, 0.42, 0, -0.3)), (z | 0) + 2);
  // bearded axe
  rod(b, 'wood', v3(1.0, 0.03, 0.5), v3(1.02, 1.0, 0.27), 0.022, P, [0.85, 0.75, 0.6]);
  const head = [[0, 0.05], [0.2, 0.1], [0.23, -0.16], [0.08, -0.05], [0, -0.04]];
  b.add('iron', extrude(new THREE.Shape(head.map((p) => new THREE.Vector2(p[0], p[1]))), 0.025, 1, 0.006), P.clone().multiply(M(1.02, 0.93, 0.29, 0, -0.23)));
  for (const o of [-0.7, 0.7]) { const v = v3(o, 0, 0.1).applyMatrix4(P); W.colliders.push({ x: v.x, z: v.z, r: 0.75 }); }
}

export function firewood(W, x, z, rot, cols = 9, layers = 5) {
  const P = M(x, terrainH(x, z), z, rot), rnd = mulberry32(x * 5 + z * 11 | 0), span = cols * 0.22;
  for (const lx of [-span / 2 - 0.12, span / 2 + 0.12]) W.batch.add('wood', rbox(0.1, 1.35, 0.1, 1), P.clone().multiply(M(lx, 0.6, 0)), woodTint(rnd, 0.8));
  for (let row = 0; row < 2; row++) for (let l = 0; l < layers; l++) for (let k = 0; k < cols - (l % 2); k++) {
    if (l === layers - 1 && rnd() < 0.35) continue;
    const s = 0.8 + rnd() * 0.45;
    W.logs.push(P.clone().multiply(M(-span / 2 + 0.11 + k * 0.22 + (l % 2) * 0.11, 0.11 + l * 0.195, row * 0.58 - 0.29 + (rnd() - 0.5) * 0.08, (rnd() - 0.5) * 0.12, 0, rnd() * 6, s, s, 1)));
  }
  for (const o of [-0.6, 0.6]) { const v = v3(o, 0, 0).applyMatrix4(P); W.colliders.push({ x: v.x, z: v.z, r: 0.7 }); }
}

export function torch(W, x, z, y = terrainH(x, z)) {
  const b = W.batch, rnd = mulberry32(x * 3 + z * 9 | 0), P = M(x, y, z, rnd() * 6, (rnd() - 0.5) * 0.08, (rnd() - 0.5) * 0.08);
  b.add('wood', rbox(0.1, 2.1, 0.1, 1, 2, 0.02), P.clone().multiply(M(0, 1.0, 0)), woodTint(rnd, 0.7));
  b.add('iron', prep(new THREE.CylinderGeometry(0.15, 0.08, 0.26, 7)), P.clone().multiply(M(0, 2.13, 0)));
  for (let k = 0; k < 3; k++) rod(b, 'iron', v3(0, 1.75, 0), v3(Math.cos(k * 2.1) * 0.14, 2.05, Math.sin(k * 2.1) * 0.14), 0.012, P);
  b.add('coal', new THREE.IcosahedronGeometry(0.13, 0), P.clone().multiply(M(0, 2.27, 0)));
  W.fires.push({ pos: v3(0, 2.5, 0).applyMatrix4(P), size: 0.55, light: true, power: 0.8, lit: true });
  W.colliders.push({ x, z, r: 0.14, minY: y - 0.5 });
}

export function firePit(W, x, z, rockSmall) {
  const b = W.batch, y = terrainH(x, z), rnd = mulberry32(42);
  for (let k = 0; k < 14; k++) { const a = k / 14 * TAU, s = 0.3 + rnd() * 0.14; b.add('stone', rockSmall, M(x + Math.cos(a) * 1.35, y, z + Math.sin(a) * 1.35, rnd() * 6, 0, 0, s, s * 0.8, s)); }
  b.add('coal', prep(new THREE.CylinderGeometry(1.1, 1.15, 0.14, 14)), M(x, y + 0.05, z));
  for (let k = 0; k < 6; k++) {
    const a = k / 6 * TAU + 0.3, { len, matrix } = spanMatrix(v3(x + Math.cos(a) * 0.85, y + 0.08, z + Math.sin(a) * 0.85), v3(x - Math.cos(a) * 0.1, y + 1.15, z - Math.sin(a) * 0.1));
    const g = barkLog(0.07, 0.09, len, 6); g.rotateZ(-Math.PI / 2);
    b.add('bark', g, matrix, [0.5, 0.45, 0.42]);
  }
  W.fires.push({ pos: v3(x, y + 1.0, z), size: 1.7, light: true, power: 1.9, lit: true });
  W.fires.push({ pos: v3(x + 0.35, y + 0.6, z + 0.2), size: 1.1, light: false, lit: true }, { pos: v3(x - 0.3, y + 0.55, z - 0.25), size: 1.0, light: false, lit: true });
  W.smokes.push({ pos: v3(x, y + 2.2, z), size: 0.9 });
  W.colliders.push({ x, z, r: 1.45 });
  for (let k = 0; k < 3; k++) { // log benches
    const a = 0.6 + k * 2.1, cx = x + Math.cos(a) * 3.6, cz = z + Math.sin(a) * 3.6, g = barkLog(0.29, 0.33, 2.9, 10);
    g.rotateZ(Math.PI / 2);
    b.add('bark', g, M(cx, terrainH(cx, cz) + 0.26, cz, -a + Math.PI / 2));
    for (const o of [-1, 0, 1]) W.colliders.push({ x: cx - Math.sin(a) * o, z: cz + Math.cos(a) * o, r: 0.42 });
  }
}

export function beacon(W, x, y, z) {
  const b = W.batch;
  b.add('wood', rbox(0.18, 1.2, 0.18, 1, 2, 0.03), M(x, y + 0.6, z), [0.6, 0.52, 0.45]);
  const pts = [[0.06, 0], [0.3, 0.07], [0.44, 0.28], [0.47, 0.36]].map((p) => new THREE.Vector2(p[0], p[1]));
  b.add('ironDS', new THREE.LatheGeometry(pts, 12), M(x, y + 1.2, z));
  for (let k = 0; k < 4; k++) rod(b, 'iron', v3(x + Math.cos(k * 1.57) * 0.09, y + 0.8, z + Math.sin(k * 1.57) * 0.09), v3(x + Math.cos(k * 1.57) * 0.38, y + 1.42, z + Math.sin(k * 1.57) * 0.38), 0.015);
  b.add('coal', prep(new THREE.CylinderGeometry(0.4, 0.3, 0.1, 10)), M(x, y + 1.5, z));
  for (let k = 0; k < 4; k++) { const g = barkLog(0.05, 0.06, 0.6, 6); g.rotateZ(Math.PI / 2); b.add('bark', g, M(x, y + 1.6 + (k >> 1) * 0.1, z + (k % 2 - 0.5) * 0.2 * (k < 2 ? 1 : 0), k < 2 ? 0 : 1.57 + k)); }
  const fire = { pos: v3(x, y + 2.1, z), size: 1.5, light: true, power: 2.0, lit: false };
  W.fires.push(fire);
  W.colliders.push({ x, z, r: 0.45, minY: y - 0.5 });
  return fire;
}

export function runeStone(W, r, i, rockSmall) {
  const y = terrainH(r.x, r.z), HW = 0.68, HH = 1.45;
  const g0 = new THREE.BoxGeometry(HW * 2, HH * 2, 0.36, 6, 10, 2), p = g0.attributes.position;
  for (let k = 0; k < p.count; k++) {
    let x = p.getX(k), yy = p.getY(k), z = p.getZ(k);
    const ty = (yy + HH) / (2 * HH), u0 = x / HW;
    x *= 1 - 0.28 * ty * ty;
    if (ty > 0.75) yy -= u0 * u0 * 0.45 * (ty - 0.75) / 0.25;
    z += (fbm(x * 1.4 + i * 7, yy * 1.4, 2) - 0.5) * 0.14;
    x += (fbm(yy * 1.1 + i * 3, 1.1, 2) - 0.5) * 0.16;
    p.setXYZ(k, x, yy, z);
  }
  g0.computeVertexNormals();
  const g = prep(g0), q = g.attributes.position, uv = g.attributes.uv, a = v3(), c = v3(), d = v3();
  for (let k = 0; k < q.count; k += 3) {
    a.fromBufferAttribute(q, k); c.fromBufferAttribute(q, k + 1); d.fromBufferAttribute(q, k + 2);
    const n = c.clone().sub(a).cross(d.clone().sub(a)), face = Math.abs(n.z) > Math.abs(n.x) && Math.abs(n.z) > Math.abs(n.y);
    for (let j = 0; j < 3; j++) {
      const X = q.getX(k + j), Y = q.getY(k + j), Z = q.getZ(k + j);
      if (face) uv.setXY(k + j, (n.z > 0 ? X : -X) / (HW * 2) * 1.12 + 0.5, (Y + HH) / (2 * HH));
      else uv.setXY(k + j, 0.02 + (Z + 0.25) * 0.2, (Y + HH) / (2 * HH) + X * 0.05);
    }
  }
  W.batch.add('rune', g, M(r.x, y + HH - 0.25, r.z, r.rot, 0.06, 0.04));
  for (let k = 0; k < 5; k++) { const a2 = k * 1.3 + i, s = 0.28 + (k % 3) * 0.1; W.batch.add('stone', rockSmall, M(r.x + Math.cos(a2) * 0.75, y, r.z + Math.sin(a2) * 0.55, a2, 0, 0, s, s * 0.7, s)); }
  W.colliders.push({ x: r.x, z: r.z, r: 0.75 });
}

export function fence(W, pts) {
  const b = W.batch, rnd = mulberry32(pts.length * 17);
  const posts = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, z0] = pts[i], [x1, z1] = pts[i + 1], n = Math.max(1, Math.round(Math.hypot(x1 - x0, z1 - z0) / 2.1));
    for (let k = 0; k < n; k++) posts.push([lerp(x0, x1, k / n), lerp(z0, z1, k / n)]);
  }
  posts.push(pts[pts.length - 1]);
  posts.forEach(([x, z], i) => {
    const y = terrainH(x, z);
    b.add('wood', rbox(0.13, 1.35, 0.13, 1, 2, 0.02), M(x, y + 0.55, z, rnd() * 6, (rnd() - 0.5) * 0.1, (rnd() - 0.5) * 0.1), woodTint(rnd, 0.85));
    if (i < posts.length - 1) {
      const [x1, z1] = posts[i + 1], y1 = terrainH(x1, z1);
      for (const hgt of [0.42, 0.9]) beam(b, 'wood', v3(x, y + hgt + (rnd() - 0.5) * 0.06, z), v3(x1, y1 + hgt + (rnd() - 0.5) * 0.06, z1), 0.06, 0.11, null, woodTint(rnd, 0.9));
      for (let k = 0; k < 3; k++) W.colliders.push({ x: lerp(x, x1, k / 3), z: lerp(z, z1, k / 3), r: 0.28 });
    }
  });
}
