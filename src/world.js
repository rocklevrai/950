// Assembles the village: materials, merged static architecture, instanced props/vegetation,
// LOD longships, plus optional glTF overrides from assets/models/.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Batch, rbox, plank, M, v3, prep, triUV, rockGeo, setColor } from './geo.js';
import { HOUSES, PIERS, RUNESTONES, PADDOCK, SQUARE, terrainH, mudAt, shoreZ, inHouse, doorPoint } from './layout.js';
import { buildHouse, buildPier, buildShip, weaponRack, firewood, torch, firePit, beacon, runeStone, fence, barkLog } from './structures.js';
import { fbm, mulberry32, lerp } from './noise.js';
import { CONFIG } from './config.js';

export function makeMaterials(T) {
  const std = (set, o = {}) => new THREE.MeshStandardMaterial({
    map: set.map, normalMap: set.normalMap, roughnessMap: set.roughnessMap, roughness: 1, metalness: 0, vertexColors: true, ...o,
  });
  const m = {
    wood: std(T.wood), woodDS: std(T.wood, { side: THREE.DoubleSide }), paint: std(T.wood),
    thatch: std(T.thatch), turf: std(T.turf, { side: THREE.DoubleSide }), stone: std(T.stone),
    iron: std(T.iron, { metalness: 0.85 }), ironDS: std(T.iron, { metalness: 0.85, side: THREE.DoubleSide }),
    bark: std(T.bark), cloth: std(T.cloth, { side: THREE.DoubleSide }), rope: std(T.thatch, { color: 0x8a7a5c }),
    rune: std(T.rune), needles: std(T.needles),
    coal: std(T.coal, { emissiveMap: T.coal.emissiveMap, emissive: 0xffffff, emissiveIntensity: 3.2 }),
    branch: new THREE.MeshStandardMaterial({
      map: T.branch, normalMap: T.needles.normalMap, roughnessMap: T.needles.roughnessMap, roughness: 1,
      alphaTest: 0.45, side: THREE.DoubleSide, vertexColors: true,
    }),
    tuft: new THREE.MeshStandardMaterial({
      map: T.tuft, normalMap: T.turf.normalMap, roughnessMap: T.turf.roughnessMap, roughness: 1,
      alphaTest: 0.4, side: THREE.DoubleSide, vertexColors: true,
    }),
  };
  m.thatch.side = THREE.DoubleSide;
  m.wood.normalScale.set(1.3, 1.3); m.thatch.normalScale.set(1.5, 1.5); m.stone.normalScale.set(1.4, 1.4);
  // gentle wind in the grass (vertex shader only)
  m.tuft.userData.uTime = { value: 0 };
  m.tuft.onBeforeCompile = (s) => {
    s.uniforms.uTime = m.tuft.userData.uTime;
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          float ph = instanceMatrix[3].x * 0.35 + instanceMatrix[3].z * 0.27;
          transformed.x += sin( uTime * 1.7 + ph ) * 0.07 * uv.y;
          transformed.z += cos( uTime * 1.3 + ph * 1.3 ) * 0.04 * uv.y;
        #endif`);
  };
  return m;
}

function instanced(geo, mat, matrices, { cast = true, colors = null, name = '' } = {}) {
  const m = new THREE.InstancedMesh(geo, mat, matrices.length);
  matrices.forEach((mx, i) => m.setMatrixAt(i, mx));
  if (colors) colors.forEach((c, i) => m.setColorAt(i, c));
  m.castShadow = cast; m.receiveShadow = true; m.name = name;
  m.instanceMatrix.needsUpdate = true;
  m.computeBoundingSphere();
  return m;
}

// ---------------------------------------------------------------- instanced prop geometry

function barrelGeo() {
  const prof = [[0.001, 0], [0.3, 0], [0.36, 0.25], [0.385, 0.5], [0.36, 0.75], [0.3, 1], [0.27, 1], [0.27, 0.93], [0.001, 0.93]];
  const body = prep(new THREE.LatheGeometry(prof.map((p) => new THREE.Vector2(p[0], p[1])), 14));
  const uv = body.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getY(i) * 1.1, uv.getX(i) * 1.15); // staves run vertically
  setColor(body, 0.8, 0.7, 0.6);
  const hoops = [];
  for (const [y, r] of [[0.12, 0.335], [0.5, 0.39], [0.88, 0.335]]) {
    const h = new THREE.LatheGeometry([[r + 0.004, y - 0.035], [r + 0.012, y], [r + 0.004, y + 0.035]].map((p) => new THREE.Vector2(p[0], p[1])), 14);
    hoops.push(triUV(prep(h), 1, 0));
  }
  return { body, hoops: mergeGeometries(hoops) };
}
function crateGeo() {
  const parts = [rbox(0.8, 0.68, 0.8, 0, 2, 0.015)];
  parts[0].translate(0, 0.34, 0);
  for (let s = 0; s < 4; s++) for (const y of [0.09, 0.59]) {
    const g = plank(0.84, 0.13, 0.035, 0); g.translate(0, y, 0.41); g.rotateY(s * Math.PI / 2); setColor(g, 0.75, 0.7, 0.62); parts.push(g);
  }
  for (let s = 0; s < 4; s++) { const g = plank(0.1, 0.5, 0.035, 1); g.translate(0.37, 0.34, 0.41); g.rotateY(s * Math.PI / 2); setColor(g, 0.75, 0.7, 0.62); parts.push(g); }
  for (const x of [-0.27, 0, 0.27]) { const g = plank(0.25, 0.03, 0.82, 2); g.translate(x, 0.695, 0); parts.push(g); }
  return mergeGeometries(parts);
}
function tuftGeo() {
  const parts = [];
  for (let k = 0; k < 3; k++) {
    const g = new THREE.PlaneGeometry(0.95, 0.6); g.translate(0, 0.28, 0); g.rotateY(k * Math.PI / 3 + 0.2);
    const n = g.attributes.normal; for (let i = 0; i < n.count; i++) n.setXYZ(i, 0, 1, 0);
    parts.push(prep(g));
  }
  return mergeGeometries(parts);
}

/** Pine: bark trunk, dark volumetric core, alpha-cut drooping branch cards for the silhouette. */
function pineGeos() {
  const rnd = mulberry32(3);
  const trunk = barkLog(0.1, 0.36, 13, 7); trunk.translate(0, 6.5, 0);
  const cores = [];
  for (const [r, hgt, y] of [[1.7, 5, 3.2], [1.35, 4.2, 6], [0.95, 3.6, 8.6], [0.5, 2.8, 11]]) {
    const c = prep(new THREE.ConeGeometry(r, hgt, 8, 2, true)); c.translate(0, y + hgt / 2, 0);
    const uv = c.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 4, uv.getY(i) * 2);
    setColor(c, 0.42, 0.5, 0.42); cores.push(c);
  }
  const pos = [], uv = [], nor = [], col = [];
  for (let y = 2.4; y < 13.2; y += 0.72) {
    const f = (y - 2.4) / 10.8, R = 3.1 * Math.pow(1 - f, 0.85) + 0.45, nb = f > 0.75 ? 5 : 7, a0 = rnd() * 6.28;
    for (let k = 0; k < nb; k++) {
      const a = a0 + k / nb * 6.2832 + (rnd() - 0.5) * 0.35, len = R * (0.82 + rnd() * 0.3), w = len * 0.42, droop = len * (0.28 + rnd() * 0.2);
      const ca = Math.cos(a), sa = Math.sin(a), tx = -sa, tz = ca;
      const q = [[tx * -w * 0.35, y, tz * -w * 0.35], [tx * w * 0.35, y, tz * w * 0.35], [ca * len + tx * w, y - droop, sa * len + tz * w], [ca * len - tx * w, y - droop, sa * len - tz * w]];
      const uvq = [[0.15, 0], [0.85, 0], [1, 1], [0, 1]], nx = ca * 0.45, nz = sa * 0.45, ny = 0.89;
      for (const i of [0, 1, 2, 0, 2, 3]) { pos.push(...q[i]); uv.push(...uvq[i]); nor.push(nx, ny, nz); const t = uvq[i][1]; col.push(0.5 + t * 0.3, 0.55 + t * 0.33, 0.5 + t * 0.2); }
    }
  }
  const cards = new THREE.BufferGeometry();
  cards.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); cards.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  cards.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); cards.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  // low-detail tree for the distant forest (single draw call, no alpha)
  const farParts = [];
  const ft = prep(new THREE.CylinderGeometry(0.12, 0.3, 5, 5, 1, true)); ft.translate(0, 2.5, 0); setColor(ft, 0.9, 0.6, 0.4); farParts.push(ft);
  for (const [r, hgt, y] of [[2.6, 5.5, 2.4], [2.0, 4.6, 5.4], [1.3, 4.2, 8.4]]) {
    const c = prep(new THREE.ConeGeometry(r, hgt, 7, 1, true)); c.translate(0, y + hgt / 2, 0);
    const p = c.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) < y + 0.1) p.setY(i, p.getY(i) - (fbm(p.getX(i) * 3, p.getZ(i) * 3, 1)) * 1.2);
    c.computeVertexNormals();
    const u2 = c.attributes.uv; for (let i = 0; i < u2.count; i++) u2.setXY(i, u2.getX(i) * 4, u2.getY(i) * 2);
    setColor(c, 0.62, 0.72, 0.6); farParts.push(c);
  }
  return { trunk, core: mergeGeometries(cores), cards, far: mergeGeometries(farParts) };
}

// ---------------------------------------------------------------- optional glTF overrides

async function exists(url) {
  try { const r = await fetch(url, { method: 'HEAD' }); return r.ok && !(r.headers.get('content-type') || '').includes('text/html'); } catch { return false; }
}
async function loadModel(name) {
  const url = `assets/models/${name}.glb`;
  if (!(await exists(url))) return null;
  try { const g = await new GLTFLoader().loadAsync(url); console.info(`[models] using ${url}`); return g.scene; }
  catch (e) { console.warn(`[models] ${url} failed`, e); return null; }
}
/** Instances every mesh of a glTF scene at `matrices`, normalised so its height (or length) = size. */
function instancedFromModel(root, matrices, size, by = 'height') {
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root), dim = box.getSize(new THREE.Vector3());
  const k = size / (by === 'height' ? dim.y : Math.max(dim.x, dim.z));
  const norm = new THREE.Matrix4().makeScale(k, k, k).multiply(new THREE.Matrix4().makeTranslation(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2));
  if (by === 'length' && dim.z > dim.x) norm.premultiply(new THREE.Matrix4().makeRotationY(Math.PI / 2));
  const group = new THREE.Group();
  root.traverse((o) => {
    if (!o.isMesh) return;
    const local = norm.clone().multiply(o.matrixWorld);
    group.add(instanced(o.geometry, o.material, matrices.map((m) => m.clone().multiply(local))));
  });
  return group;
}

// ---------------------------------------------------------------- world

export async function buildWorld(T, mats, step = async () => {}) {
  const W = {
    group: new THREE.Group(), batch: new Batch(), colliders: [], platforms: [], fires: [], smokes: [],
    interactables: [], pois: [], barrels: [], crates: [], logs: [], tufts: [], rocks: [], ships: [],
  };
  const rnd = mulberry32(2024);
  const rockSmall = rockGeo(0, 1), rockBig = rockGeo(2, 2, 2.5);
  const R0 = (x, z) => Math.hypot(x, z + 10);

  // ---- architecture
  for (const h of HOUSES) { buildHouse(W, h, rockSmall); await step(`raising ${h.id}`); }
  const pierInfo = PIERS.map((p) => buildPier(W, p, rockSmall));
  firePit(W, SQUARE.x, SQUARE.z, rockSmall);

  const hall = HOUSES[0], [hdx, hdz] = doorPoint(hall, 1.3);
  torch(W, hdx - 1.6, hdz); torch(W, hdx + 1.6, hdz);
  for (const [x, z] of [[-9, 21], [-11.5, 34], [9.5, 20], [13.5, 35], [-14, 3], [14, 2.5], [-3, -9], [22, -14], [-13, -22], [-40, -8], [40, 22], [17, -44], [9.5, -60.5], [-50.5, -12.5], [44.5, 26]]) torch(W, x, z);
  PIERS.forEach((p, i) => torch(W, p.x - p.width / 2 - 1.3, pierInfo[i].z1 - 0.4, p.deckY));
  const p2 = PIERS[1], beaconFire = beacon(W, p2.x + 0.4, p2.deckY, pierInfo[1].z1 - 1.0);

  weaponRack(W, hdx + 5.5, hdz + 0.6, 0.1); weaponRack(W, 13.2, 17.2, -0.75);
  weaponRack(W, -6, 12.5, 2.2);
  for (const [x, z, r] of [[-25.5, 14, 1.4], [25.5, -3, -1.4], [-16, -47.5, 0.26], [40.5, -33, -0.35 + 1.57], [13.5, -27, 0.05], [22.5, 25.5, 0.8], [-13, -26.5, 0]]) firewood(W, x, z, r);
  RUNESTONES.forEach((r, i) => runeStone(W, r, i, rockSmall));

  const ring = [];
  for (let k = 3; k <= 30; k++) { const a = k / 32 * Math.PI * 2 + 2.2; ring.push([PADDOCK.x + Math.cos(a) * PADDOCK.r * (1 + 0.08 * Math.sin(k * 2.3)), PADDOCK.z + Math.sin(a) * PADDOCK.r]); }
  fence(W, ring);
  fence(W, [[-17, 16], [-20, 24], [-18, 31]]); fence(W, [[5, 30], [9, 36]]); fence(W, [[-36, -18], [-34, -30], [-30, -36]]);

  // barrels / crates
  const drop = (arr, x, z, s = 1, r = rnd() * 6) => arr.push({ p: v3(x, terrainH(x, z), z), s, r });
  for (const [x, z, s] of [[13.8, 24.8, 1], [14.7, 25.4, 0.9], [-3.2, -15.2, 1], [-2.3, -15.5, 1.05], [-25.3, 2, 1], [26.2, 11.5, 1], [-9.5, 36, 1], [-8.6, 36.5, 0.9], [19.5, 38, 1], [-18.6, -40, 1], [31, -29.5, 1]]) drop(W.barrels, x, z, s);
  for (const [x, z, s] of [[-8.9, 37.6, 1], [-10, 37.2, 0.8], [20.6, 38.4, 1], [20.4, 39.5, 0.75], [-4.4, -15.2, 1], [11.5, 14.5, 0.9], [27.2, 12.5, 0.85], [-24.5, 0.8, 0.8]]) drop(W.crates, x, z, s);
  for (const it of W.barrels) W.colliders.push({ x: it.p.x, z: it.p.z, r: 0.42 * it.s });
  for (const it of W.crates) if (it.p.y - terrainH(it.p.x, it.p.z) < 0.3 || it.p.z > 40) W.colliders.push({ x: it.p.x, z: it.p.z, r: 0.5 * it.s });
  await step('stacking firewood');

  // ---- merged static meshes (one draw call per material)
  W.group.add(W.batch.build(mats, { ground: terrainH }));

  // ---- instanced props
  const bg = barrelGeo();
  const bm = W.barrels.map((it) => M(it.p.x, it.p.y, it.p.z, it.r ?? 0, 0, 0, it.s));
  const cm = W.crates.map((it) => M(it.p.x, it.p.y, it.p.z, it.r ?? 0, 0, 0, it.s));
  const logGeo = barkLog(0.1, 0.1, 0.55, 7); logGeo.rotateX(Math.PI / 2);
  const [mBarrel, mCrate, mPine, mRock] = await Promise.all(['barrel', 'crate', 'pine', 'rock'].map(loadModel));
  if (mBarrel) W.group.add(instancedFromModel(mBarrel, bm, 1.0));
  else W.group.add(instanced(bg.body, mats.wood, bm, { name: 'barrels' }), instanced(bg.hoops, mats.iron, bm, { name: 'hoops' }));
  W.group.add(mCrate ? instancedFromModel(mCrate, cm, 0.72) : instanced(crateGeo(), mats.wood, cm, { name: 'crates' }));
  W.group.add(instanced(logGeo, mats.bark, W.logs, { name: 'firewood' }));

  // ---- rocks: shoreline shingle, scattered boulders
  const rocks = [];
  for (let i = 0; i < 260; i++) {
    const shore = i < 150, x = (rnd() * 2 - 1) * (shore ? 110 : 95), z = shore ? shoreZ(x) - 6 + rnd() * 10 : -85 + rnd() * 120;
    if (mudAt(x, z) > 0.3 && !shore || inHouse(x, z, 1.5) || Math.hypot(x - SQUARE.x, z - SQUARE.z) < 9) continue;
    if (W.platforms.some((p) => x > p.x0 - 1 && x < p.x1 + 1 && z > p.z0 - 1)) continue;
    const big = rnd() < 0.12, s = big ? 0.9 + rnd() * 1.3 : 0.18 + rnd() * 0.42, y = terrainH(x, z);
    if (y < -1.2) continue;
    rocks.push(M(x, y - s * 0.2, z, rnd() * 6, rnd() * 0.5, rnd() * 0.5, s, s * (0.6 + rnd() * 0.5), s * (0.8 + rnd() * 0.4)));
    if (s > 0.6) W.colliders.push({ x, z, r: s * 0.8 });
  }
  W.group.add(mRock ? instancedFromModel(mRock, rocks, 1.2) : instanced(rockBig, mats.stone, rocks, { name: 'rocks' }));

  // ---- grass tufts (instance colour follows the ground tone so they melt into the turf)
  const tm = [], tc = [], col = new THREE.Color();
  for (const t of W.tufts) { tm.push(M(t.p.x, t.p.y, t.p.z, rnd() * 6, 0, 0, t.s, t.s * (0.8 + rnd() * 0.5), t.s)); tc.push(new THREE.Color().setRGB(1.0, 1.0, 0.75)); }
  for (let i = 0, tries = 0; i < CONFIG.grassCount && tries < CONFIG.grassCount * 6; tries++) {
    const a = rnd() * 6.2832, r = Math.sqrt(rnd()) * 85, x = Math.cos(a) * r, z = Math.sin(a) * r - 8;
    const y = terrainH(x, z);
    if (y < 0.9 || mudAt(x, z) > 0.18 || inHouse(x, z, 0.4)) continue;
    if (fbm(x * 0.15 + 3, z * 0.15, 2) < 0.38) continue; // grow in patches
    const s = 0.5 + rnd() * 0.6, v = 0.8 + 0.5 * fbm(x * 0.06 + 2, z * 0.06 + 8, 3), dry = rnd();
    tm.push(M(x, y - 0.03, z, rnd() * 6, 0, 0, s, s * (0.7 + rnd() * 0.9), s));
    tc.push(col.clone().setRGB(v * lerp(0.85, 1.3, dry), v, v * lerp(0.8, 0.6, dry)));
    i++;
  }
  W.tuftMesh = instanced(tuftGeo(), mats.tuft, tm, { cast: false, colors: tc, name: 'grass' });
  W.group.add(W.tuftMesh);
  await step('planting pines');

  // ---- pines: detailed near the village, cheap silhouettes for the distant forest
  const pg = pineGeos(), near = [], far = [], nearCol = [], farCol = [];
  const free = (x, z, m) => !(Math.abs(x) < 46 && z > -6) && !inHouse(x, z, m) && mudAt(x, z) < 0.05 && Math.hypot(x - PADDOCK.x, z - PADDOCK.z) > PADDOCK.r + 2 && Math.hypot(x - SQUARE.x, z - SQUARE.z) > 15;
  for (let tries = 0; near.length < CONFIG.nearTrees && tries < 9000; tries++) {
    const x = (rnd() * 2 - 1) * 122, z = (rnd() * 2 - 1) * 122 - 10, R = R0(x, z);
    if (R > 122 || shoreZ(x) - z < 7 || !free(x, z, 6)) continue;
    const dens = fbm(x * 0.03 + 7, z * 0.03 + 2, 3) + (R > 62 ? 0.14 : 0) + (R > 90 ? 0.2 : 0);
    if (dens < 0.56) continue;
    if (RUNESTONES.some((r) => Math.hypot(x - r.x, z - r.z) < 5)) continue;
    const s = 0.75 + rnd() * 0.75;
    near.push(M(x, terrainH(x, z) - 0.2, z, rnd() * 6, (rnd() - 0.5) * 0.06, (rnd() - 0.5) * 0.06, s, s * (0.9 + rnd() * 0.3), s));
    const k = 0.75 + rnd() * 0.4; nearCol.push(new THREE.Color().setRGB(k, k, k * (0.85 + rnd() * 0.2)));
    W.colliders.push({ x, z, r: 0.42 * s });
  }
  for (let tries = 0; far.length < CONFIG.farTrees && tries < 30000; tries++) {
    const a = rnd() * 6.2832, R = 120 + Math.pow(rnd(), 0.8) * 125, x = Math.cos(a) * R, z = Math.sin(a) * R - 10;
    if (Math.abs(x) > 198 || z < -208 || z > 188 || shoreZ(x) - z < 5) continue;
    if (fbm(x * 0.025 + 7, z * 0.025 + 2, 3) < 0.36) continue;
    const s = 0.9 + rnd() * 0.9;
    far.push(M(x, terrainH(x, z) - 0.3, z, rnd() * 6, 0, 0, s, s * (0.9 + rnd() * 0.4), s));
    const k = 0.6 + rnd() * 0.5; farCol.push(new THREE.Color().setRGB(k, k, k * 0.9));
  }
  if (mPine) W.group.add(instancedFromModel(mPine, near, 13));
  else {
    W.group.add(instanced(pg.trunk, mats.bark, near, { name: 'pine-trunks' }), instanced(pg.core, mats.needles, near, { colors: nearCol, name: 'pine-cores' }));
    const cards = instanced(pg.cards, mats.branch, near, { colors: nearCol, name: 'pine-branches' });
    cards.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: T.branch, alphaTest: 0.45 });
    W.group.add(cards);
  }
  W.group.add(instanced(pg.far, mats.needles, far, { cast: false, colors: farCol, name: 'forest' }));

  // ---- longships (THREE.LOD: full rigging + shields up close, bare hull far away)
  const shipModel = await loadModel('longship');
  const addShip = (x, z, rot, sail, seed) => {
    const lod = new THREE.LOD();
    if (shipModel) lod.addLevel(instancedFromModel(shipModel, [new THREE.Matrix4()], 17, 'length'), 0);
    else { lod.addLevel(buildShip(mats, { detail: true, sail, seed }), 0); lod.addLevel(buildShip(mats, { detail: false, sail, seed }), 80); }
    lod.position.set(x, 0.02, z); lod.rotation.y = rot;
    lod.userData = { seed, baseY: 0.02, rot };
    W.group.add(lod); W.ships.push(lod);
  };
  addShip(PIERS[0].x + PIERS[0].width / 2 + 2.45, pierInfo[0].z1 - 11, Math.PI / 2, false, 1);
  addShip(PIERS[1].x - PIERS[1].width / 2 - 2.45, pierInfo[1].z1 - 13, -Math.PI / 2, false, 2);
  addShip(-70, 150, 0.35, true, 3);
  addShip(95, 215, 2.9, true, 4);

  // ---- things to find
  W.pois.push({ id: 'hall', name: 'GREAT HALL', pos: v3(hdx, hall.y, hdz), radius: 7 });
  W.pois.push({ id: 'docks', name: 'DOCKS', pos: v3(PIERS[0].x, 1, pierInfo[0].z0 + 9), radius: 7 });
  W.pois.push({ id: 'smithy', name: 'SMITHY', pos: v3(HOUSES[5].x, HOUSES[5].y, HOUSES[5].z), radius: 6 });
  RUNESTONES.forEach((r, i) => {
    const pos = v3(r.x, terrainH(r.x, r.z) + 1.2, r.z);
    W.pois.push({ id: `rune${i}`, name: 'RUNE STONE', pos, radius: 0, rune: true });
    W.interactables.push({ id: `rune${i}`, pos, radius: 3.2, label: 'READ THE RUNE STONE', text: r.text });
  });
  const bpos = beaconFire.pos.clone();
  W.pois.push({ id: 'beacon', name: 'BEACON', pos: bpos, radius: 0 });
  W.interactables.push({ id: 'beacon', pos: bpos, radius: 2.8, label: 'LIGHT THE BEACON', fire: beaconFire });
  W.beaconFire = beaconFire;
  return W;
}
