// Terrain (grass/mud splat with reflective puddles), fjord water and layered mountains.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { fbm, sstep, sat, lerp } from './noise.js';
import { terrainH, mudAt, shoreWet, inHouse } from './layout.js';
import { gridGeo } from './geo.js';

const TILE = 3; // metres per texture repeat on the ground

export function createTerrain(T) {
  const SIZE = 400, SEG = 220, HALF = SIZE / 2;
  const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
  geo.rotateX(-Math.PI / 2);
  const p = geo.attributes.position, uv = geo.attributes.uv, n = p.count;
  const splat = new Float32Array(n * 2), col = new Float32Array(n * 3);
  // concentrate vertices in the village, stretch them toward the hills
  const warp = (g) => HALF * (0.35 * g + 0.65 * g * g * g);
  for (let i = 0; i < n; i++) {
    const x = warp(p.getX(i) / HALF), z = warp(p.getZ(i) / HALF) - 10;
    const h = terrainH(x, z);
    p.setXYZ(i, x, h, z);
    uv.setXY(i, x / TILE, z / TILE);
    const mud = mudAt(x, z), wet = shoreWet(x, z);
    splat[i * 2] = Math.max(mud, wet);
    splat[i * 2 + 1] = inHouse(x, z, 0.6) ? -1 : Math.max(wet, mud * 0.32); // floors indoors stay dry
    // large-scale tone variation; forest floor + steep slopes go darker/greyer
    const v = 0.7 + 0.55 * fbm(x * 0.06 + 2, z * 0.06 + 8, 3);
    const dry = fbm(x * 0.021 + 40, z * 0.021, 2);
    col[i * 3] = v * lerp(0.92, 1.25, dry); col[i * 3 + 1] = v; col[i * 3 + 2] = v * lerp(1.0, 0.8, dry);
  }
  geo.computeVertexNormals();
  const nrm = geo.attributes.normal;
  for (let i = 0; i < n; i++) { // rocky tint on steep ground
    const steep = 1 - sstep(0.72, 0.93, nrm.getY(i));
    col[i * 3] = lerp(col[i * 3], 0.75, steep * 0.6); col[i * 3 + 1] = lerp(col[i * 3 + 1], 0.62, steep * 0.6); col[i * 3 + 2] = lerp(col[i * 3 + 2], 0.6, steep * 0.6);
    splat[i * 2] = Math.max(splat[i * 2], steep * 0.75);
  }
  geo.setAttribute('splat', new THREE.BufferAttribute(splat, 2));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

  const mat = new THREE.MeshStandardMaterial({
    map: T.turf.map, normalMap: T.turf.normalMap, roughnessMap: T.turf.roughnessMap,
    roughness: 1, metalness: 0, vertexColors: true,
  });
  mat.normalScale.set(1.2, 1.2);
  mat.onBeforeCompile = (s) => {
    s.uniforms.tMudC = { value: T.mud.map }; s.uniforms.tMudN = { value: T.mud.normalMap };
    s.uniforms.tMudR = { value: T.mud.roughnessMap }; s.uniforms.tNoise = { value: T.noise };
    s.vertexShader = s.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 splat;\nvarying vec2 vSplat;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvSplat = splat;');
    s.fragmentShader = s.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform sampler2D tMudC; uniform sampler2D tMudN; uniform sampler2D tMudR; uniform sampler2D tNoise;
        varying vec2 vSplat; float gMud; float gWet; vec2 gMudUv;`)
      .replace('#include <map_fragment>', `
        gMudUv = vMapUv * 0.83;
        vec4 gC = texture2D( map, vMapUv );
        vec4 mC = texture2D( tMudC, gMudUv );
        float nzA = texture2D( tNoise, vMapUv * 0.047 ).r;
        float nzB = texture2D( tNoise, vMapUv * 0.37 ).r;
        gMud = smoothstep( 0.36, 0.6, vSplat.x + ( nzB - 0.5 ) * 0.55 );
        float puddle = smoothstep( 0.52, 0.6, nzA + ( vSplat.y - 0.5 ) * 0.5 - mC.g * 0.5 );
        gWet = gMud * puddle;
        vec4 tC = mix( gC, mC, gMud );
        tC.rgb *= mix( 1.0, 0.4, gWet );
        diffuseColor *= tC;`)
      .replace('#include <roughnessmap_fragment>', `
        float roughnessFactor = roughness * mix( texture2D( roughnessMap, vRoughnessMapUv ).g, texture2D( tMudR, gMudUv ).g, gMud );
        roughnessFactor = mix( roughnessFactor, 0.03, gWet );`)
      .replace('#include <normal_fragment_maps>', `
        vec3 mapN = mix( texture2D( normalMap, vNormalMapUv ).xyz, texture2D( tMudN, gMudUv ).xyz, gMud ) * 2.0 - 1.0;
        mapN.xy *= normalScale * ( 1.0 - gWet * 0.96 );
        normal = normalize( tbn * mapN );`);
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true; mesh.name = 'terrain';
  return mesh;
}

export function createWater(T) {
  const geo = new THREE.PlaneGeometry(3200, 3200, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const uv = geo.attributes.uv, p = geo.attributes.position;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) / 9, p.getZ(i) / 9);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x0a1719, roughness: 0.07, metalness: 0.0, normalMap: T.waterN, roughnessMap: T.mud.roughnessMap,
    map: T.noise, envMapIntensity: 1.25,
  });
  mat.normalScale.set(0.32, 0.32);
  const uTime = { value: 0 };
  mat.onBeforeCompile = (s) => {
    s.uniforms.uTime = uTime;
    s.fragmentShader = s.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      // colour map is only used as a very soft large-scale tint so the surface is not one flat tone
      .replace('#include <map_fragment>', 'diffuseColor.rgb *= 0.75 + 0.5 * texture2D( map, vMapUv * 0.031 + uTime * 0.002 ).r;')
      .replace('#include <roughnessmap_fragment>', 'float roughnessFactor = roughness * ( 0.7 + 0.6 * texture2D( roughnessMap, vRoughnessMapUv * 0.07 ).g );')
      .replace('#include <normal_fragment_maps>', `
        vec3 nA = texture2D( normalMap, vNormalMapUv + uTime * vec2( 0.011, 0.006 ) ).xyz * 2.0 - 1.0;
        vec3 nB = texture2D( normalMap, vNormalMapUv * 2.7 + uTime * vec2( -0.017, 0.013 ) ).xyz * 2.0 - 1.0;
        vec3 nC = texture2D( normalMap, vNormalMapUv * 0.23 + uTime * vec2( 0.003, -0.002 ) ).xyz * 2.0 - 1.0;
        vec3 mapN = normalize( vec3( ( nA.xy + nB.xy * 0.6 + nC.xy * 0.8 ) * normalScale, 1.0 ) );
        normal = normalize( tbn * mapN );`);
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true; mesh.name = 'water';
  mesh.userData.uTime = uTime;
  return mesh;
}

/** Four rings of ridgelines, lower where the fjord opens to the sea, snow on the tops. */
export function createMountains(T) {
  const layers = [
    { r: 250, w: 90, h: 75, seed: 1 }, { r: 400, w: 130, h: 135, seed: 2 },
    { r: 590, w: 170, h: 210, seed: 3 }, { r: 820, w: 200, h: 290, seed: 4 },
  ];
  const geos = [], N = 300, rows = [[0, -0.03], [0.1, 0.2], [0.22, 0.42], [0.36, 0.62], [0.5, 0.8], [0.62, 0.93], [0.72, 1], [0.86, 0.9], [1.0, 0.72], [1.5, 0.2]];
  for (const L of layers) {
    const g = gridGeo(N, rows.length - 1, (i, j, o) => {
      const th = (i / N) * Math.PI * 2, ii = i % N;
      const open = lerp(0.1, 1, sstep(0.06, 0.5 - L.seed * 0.04, Math.abs(Math.sin(th + L.seed * 0.07))));
      const ridge = 0.3 + 1.25 * fbm(Math.cos(th) * 3.4 * L.seed + L.seed * 11.3, Math.sin(th) * 3.4 * L.seed + 4.2, 5);
      const jag = (fbm(ii * 0.35 + L.seed * 31, j * 1.3, 3) - 0.5) * 0.3;
      const H = L.h * open * ridge;
      const rr = L.r + rows[j][0] * L.w + jag * L.w * 0.4;
      o[0] = Math.cos(th) * rr; o[2] = Math.sin(th) * rr - 10;
      o[1] = j === 0 ? -8 : H * (rows[j][1] + jag);
      o[3] = (i / N) * Math.PI * 2 * L.r / 14; o[4] = o[1] / 14 + rows[j][0] * 3;
    }, null);
    // gridGeo output is non-indexed: paint forest -> rock -> snow by height
    const p = g.attributes.position, c = g.attributes.color, nr = g.attributes.normal;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const nz = fbm(x * 0.02, z * 0.02 + y * 0.03, 3);
      const rock = sstep(18, 60, y + nz * 30), snow = sstep(125, 200, y + nz * 60) * sstep(0.2, 0.6, nr.getY(i) + nz * 0.5);
      let r = lerp(0.32, 0.8, rock), gg = lerp(0.42, 0.76, rock), b = lerp(0.28, 0.74, rock);
      r = lerp(r, 2.3, snow); gg = lerp(gg, 2.4, snow); b = lerp(b, 2.6, snow);
      const v = 0.7 + 0.6 * nz;
      c.setXYZ(i, r * v, gg * v, b * v);
    }
    geos.push(g);
  }
  const mat = new THREE.MeshStandardMaterial({
    map: T.stone.map, normalMap: T.stone.normalMap, roughnessMap: T.stone.roughnessMap,
    vertexColors: true, roughness: 1, side: THREE.DoubleSide, color: 0x9a9a9a,
  });
  mat.normalScale.set(2, 2);
  const mesh = new THREE.Mesh(mergeGeometries(geos), mat);
  mesh.name = 'mountains'; mesh.frustumCulled = false;
  return mesh;
}
