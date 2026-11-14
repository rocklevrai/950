// Geometry helpers: world-scale UVs, beveled timber, smooth parametric grids and a
// batcher that merges all static pieces that share a material into one draw call.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { fbm, sat, sstep, lerp } from './noise.js';

const KEEP = ['position', 'normal', 'uv', 'color'];

/** Normalise any geometry to non-indexed position/normal/uv/color so everything merges. */
export function prep(geo) {
  if (geo.index) geo = geo.toNonIndexed();
  for (const k of Object.keys(geo.attributes)) if (!KEEP.includes(k)) geo.deleteAttribute(k);
  const n = geo.attributes.position.count;
  if (!geo.attributes.normal) geo.computeVertexNormals();
  if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  if (!geo.attributes.color) geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  geo.clearGroups();
  return geo;
}

export function setColor(geo, r, g, b) {
  const c = geo.attributes.color;
  for (let i = 0; i < c.count; i++) c.setXYZ(i, r, g, b);
  return geo;
}

let uvSeed = 1;
/**
 * Box/tri-planar UVs in metres: each triangle is projected along its dominant axis so texel
 * density is constant everywhere. `grain` (0|1|2) is the local axis the U direction follows.
 */
export function triUV(geo, tile = 2, grain = 0) {
  const p = geo.attributes.position, uv = geo.attributes.uv;
  const ou = (uvSeed = (uvSeed * 16807) % 2147483647) / 2147483647, ov = (uvSeed = (uvSeed * 16807) % 2147483647) / 2147483647;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), n = new THREE.Vector3();
  for (let i = 0; i < p.count; i += 3) {
    a.fromBufferAttribute(p, i); b.fromBufferAttribute(p, i + 1); c.fromBufferAttribute(p, i + 2);
    n.subVectors(b, a).cross(c.clone().sub(a));
    const ax = Math.abs(n.x), ay = Math.abs(n.y), az = Math.abs(n.z);
    const k = ax >= ay && ax >= az ? 0 : ay >= az ? 1 : 2;
    let ua = (k + 1) % 3, va = (k + 2) % 3;
    if (va === grain) { const t = ua; ua = va; va = t; }
    for (let j = 0; j < 3; j++) {
      uv.setXY(i + j, p.getComponent(i + j, ua) / tile + ou, p.getComponent(i + j, va) / tile + ov);
    }
  }
  return geo;
}

/** Beveled timber/stone block with world-scale UVs. */
export function rbox(lx, ly, lz, grain = 0, tile = 2, bevel = 0.025) {
  const r = Math.min(bevel, Math.min(lx, ly, lz) * 0.45);
  return triUV(prep(new RoundedBoxGeometry(lx, ly, lz, 1, r)), tile, grain);
}
/** Cheap plank (12 tris) – used where there are hundreds of them. */
export function plank(lx, ly, lz, grain = 0, tile = 2) {
  return triUV(prep(new THREE.BoxGeometry(lx, ly, lz)), tile, grain);
}

const _q = new THREE.Quaternion(), _s = new THREE.Vector3(1, 1, 1), _e = new THREE.Euler();
export function M(x = 0, y = 0, z = 0, ry = 0, rx = 0, rz = 0, sx = 1, sy = sx, sz = sx) {
  _q.setFromEuler(_e.set(rx, ry, rz, 'YXZ'));
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), _q, _s.set(sx, sy, sz).clone());
}

const X = new THREE.Vector3(1, 0, 0);
/** Matrix that lays a local-X-aligned piece from point a to point b. */
export function spanMatrix(a, b) {
  const d = new THREE.Vector3().subVectors(b, a), len = d.length();
  const q = new THREE.Quaternion().setFromUnitVectors(X, d.normalize());
  return { len, matrix: new THREE.Matrix4().compose(new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1)) };
}
export const v3 = (x, y, z) => new THREE.Vector3(x, y, z);

/**
 * Smooth-shaded parametric grid. fn(i, j, out) fills out = [x, y, z, u, v].
 * `hint` is a vector the surface should face; winding is flipped automatically to match.
 */
export function gridGeo(nx, ny, fn, hint) {
  const pos = new Float32Array((nx + 1) * (ny + 1) * 3), uv = new Float32Array((nx + 1) * (ny + 1) * 2), o = [0, 0, 0, 0, 0];
  for (let i = 0; i <= nx; i++) for (let j = 0; j <= ny; j++) {
    fn(i, j, o); const k = i * (ny + 1) + j;
    pos[k * 3] = o[0]; pos[k * 3 + 1] = o[1]; pos[k * 3 + 2] = o[2]; uv[k * 2] = o[3]; uv[k * 2 + 1] = o[4];
  }
  const idx = [];
  for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) {
    const a = i * (ny + 1) + j, b = a + 1, c = a + ny + 1, d = c + 1;
    idx.push(a, b, c, b, d, c);
  }
  if (hint) { // orientation test on the middle quad
    const k = (Math.floor(nx / 2) * (ny + 1) + Math.floor(ny / 2));
    const A = new THREE.Vector3().fromArray(pos, k * 3), B = new THREE.Vector3().fromArray(pos, (k + 1) * 3), C = new THREE.Vector3().fromArray(pos, (k + ny + 1) * 3);
    if (B.sub(A).cross(C.sub(A)).dot(hint) < 0) for (let i = 0; i < idx.length; i += 3) { const t = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = t; }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return prep(g);
}

/** Closed 2D outline that follows a centreline with a varying width – for carved boards. */
export function ribbonShape(pts, widthAt) {
  const L = [], R = [], n = pts.length;
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)];
    let tx = b[0] - a[0], ty = b[1] - a[1]; const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
    const w = widthAt(i / (n - 1)) * 0.5;
    L.push(new THREE.Vector2(pts[i][0] - ty * w, pts[i][1] + tx * w));
    R.push(new THREE.Vector2(pts[i][0] + ty * w, pts[i][1] - tx * w));
  }
  return new THREE.Shape([...L, ...R.reverse()]);
}
/** Appends an inward spiral ("dragon curl") to a centreline. */
export function addCurl(pts, r0, sign, turns = 1.35, n = 22) {
  const a = pts[pts.length - 2], b = pts[pts.length - 1];
  let ang = Math.atan2(b[1] - a[1], b[0] - a[0]), x = b[0], y = b[1];
  const total = turns * Math.PI * 2;
  for (let i = 1; i <= n; i++) {
    const r = r0 * (1 - 0.8 * i / n), dth = total / n;
    ang += sign * dth; x += Math.cos(ang) * r * dth; y += Math.sin(ang) * r * dth;
    pts.push([x, y]);
  }
  return pts;
}
export function extrude(shape, depth, tile = 2, bevel = 0.015) {
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, curveSegments: 4, steps: 1 });
  g.translate(0, 0, -depth / 2);
  return triUV(prep(g), tile, 1);
}

/** Lumpy boulder. detail 0 = pebble-grade, 2 = hero rock. */
export function rockGeo(detail = 1, seed = 1, tile = 2) {
  const g = new THREE.IcosahedronGeometry(1, detail), p = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = fbm(v.x * 1.3 + seed * 7.1, v.y * 1.3 + v.z * 1.7 + seed * 3.3, 3);
    v.multiplyScalar(0.72 + n * 0.6); v.y *= 0.72;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  // weld so normals are smooth across the displaced surface
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  const w = mergeVerts(g); w.computeVertexNormals();
  return triUV(prep(w), tile, 0);
}
function mergeVerts(g) {
  const p = g.attributes.position, map = new Map(), idx = [], out = [];
  for (let i = 0; i < p.count; i++) {
    const key = `${Math.round(p.getX(i) * 1e3)}_${Math.round(p.getY(i) * 1e3)}_${Math.round(p.getZ(i) * 1e3)}`;
    let k = map.get(key);
    if (k === undefined) { k = out.length / 3; map.set(key, k); out.push(p.getX(i), p.getY(i), p.getZ(i)); }
    idx.push(k);
  }
  const r = new THREE.BufferGeometry();
  r.setAttribute('position', new THREE.Float32BufferAttribute(out, 3)); r.setIndex(idx);
  return r;
}

/**
 * Collects geometry per material key and bakes "grime" into vertex colours at build time:
 * damp darkening near the ground, low-frequency tone variation and moss on low/up-facing surfaces.
 */
export class Batch {
  constructor() { this.map = new Map(); }
  add(key, geo, matrix, color) {
    if (!geo.attributes.color || geo.index) geo = prep(geo);
    else geo = geo.clone();
    if (color) setColor(geo, color[0], color[1], color[2]);
    if (matrix) geo.applyMatrix4(matrix);
    if (!this.map.has(key)) this.map.set(key, []);
    this.map.get(key).push(geo);
    return this;
  }
  build(materials, { ground = null, grime = 1, castShadow = true } = {}) {
    const group = new THREE.Group();
    for (const [key, list] of this.map) {
      const g = mergeGeometries(list, false);
      list.forEach((x) => x.dispose());
      if (grime > 0 && key !== 'coal') applyGrime(g, ground, grime * (key === 'cloth' || key === 'rune' ? 0.5 : 1));
      const mat = materials[key];
      if (!mat) throw new Error(`Batch: no material "${key}"`);
      const mesh = new THREE.Mesh(g, mat);
      mesh.castShadow = castShadow && key !== 'coal'; mesh.receiveShadow = true;
      mesh.name = `batch:${key}`;
      group.add(mesh);
    }
    this.map.clear();
    return group;
  }
}

function applyGrime(g, ground, amount) {
  const p = g.attributes.position, n = g.attributes.normal, c = g.attributes.color;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const h = y - (ground ? Math.max(ground(x, z), 0) : 0);
    let k = 1 - 0.5 * amount * (1 - sstep(0, 1.4, h));
    k *= lerp(1, 0.74 + 0.5 * fbm(x * 0.4 + y * 0.23, z * 0.4 - y * 0.19, 3), amount);
    const m = amount * sat((fbm(x * 0.55 + 9, z * 0.55 + 3 + y * 0.3, 3) - 0.42) * 3.2) * (1 - sstep(0.2, 2.6, h)) * (0.35 + 0.65 * Math.max(n.getY(i), 0));
    c.setXYZ(i, c.getX(i) * k * lerp(1, 0.72, m), c.getY(i) * k * lerp(1, 1.06, m), c.getZ(i) * k * lerp(1, 0.6, m));
  }
}
