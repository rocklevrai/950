// GPU particles: drifting snow, chimney smoke, fjord mist, embers and procedural flames.
// Everything is animated in the vertex shader, so there is no per-frame CPU work.
import * as THREE from 'three';
import { mulberry32 } from './noise.js';

const FOG_V = '#include <fog_pars_vertex>', FOG_F = '#include <fog_pars_fragment>';
const END = '#include <tonemapping_fragment>\n#include <colorspace_fragment>';
const fogUniforms = () => THREE.UniformsUtils.clone(THREE.UniformsLib.fog);

function points(count, attrs, material, name) {
  const g = new THREE.BufferGeometry();
  for (const [k, [arr, n]] of Object.entries(attrs)) g.setAttribute(k, new THREE.BufferAttribute(arr, n));
  const p = new THREE.Points(g, material);
  p.frustumCulled = false; p.name = name;
  return p;
}

// ---------------------------------------------------------------- snow

export function createSnow(count, pixelRatio) {
  const rnd = mulberry32(11), BOX = 46;
  const pos = new Float32Array(count * 3), seed = new Float32Array(count);
  for (let i = 0; i < count; i++) { pos[i * 3] = rnd() * BOX; pos[i * 3 + 1] = rnd() * BOX; pos[i * 3 + 2] = rnd() * BOX; seed[i] = rnd(); }
  const mat = new THREE.ShaderMaterial({
    uniforms: { ...fogUniforms(), uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uScale: { value: 600 * pixelRatio }, uOpacity: { value: 1 } },
    vertexShader: /* glsl */`
      uniform float uTime; uniform vec3 uCam; uniform float uScale;
      attribute float aSeed; varying float vA; 
      ${FOG_V}
      void main() {
        const float B = ${BOX.toFixed(1)};
        vec3 p = position;
        p.y -= uTime * ( 0.9 + aSeed * 0.9 );
        p.x += uTime * 1.1 + sin( uTime * 0.6 + aSeed * 40.0 ) * 0.7;
        p.z += uTime * 0.35 + cos( uTime * 0.45 + aSeed * 27.0 ) * 0.7;
        p = mod( p - uCam, B ) - B * 0.5 + uCam;
        vec4 mvPosition = viewMatrix * vec4( p, 1.0 );
        gl_Position = projectionMatrix * mvPosition;
        float d = -mvPosition.z;
        gl_PointSize = clamp( ( 0.035 + aSeed * 0.035 ) * uScale / d, 1.0, 14.0 );
        vA = smoothstep( 0.6, 2.5, d ) * ( 1.0 - smoothstep( B * 0.3, B * 0.5, d ) );
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform float uOpacity; varying float vA;
      ${FOG_F}
      void main() {
        float r = length( gl_PointCoord - 0.5 );
        float a = smoothstep( 0.5, 0.1, r ) * vA * uOpacity * 0.75;
        if ( a < 0.01 ) discard;
        gl_FragColor = vec4( vec3( 0.95, 0.9, 0.84 ), a );
        #include <fog_fragment>
        ${END}
      }`,
    transparent: true, depthWrite: false, fog: true,
  });
  return points(count, { position: [pos, 3], aSeed: [seed, 1] }, mat, 'snow');
}

// ---------------------------------------------------------------- emitters (smoke / mist / embers)

/**
 * sources: [{ pos: Vector3, size }]  – `per` particles loop forever from each source.
 * kind: 'smoke' (soft, alpha blended) or 'ember' (tiny, additive, HDR so bloom catches them).
 */
export function createEmitter(sources, per, o, pixelRatio) {
  const n = sources.length * per, rnd = mulberry32(o.seed ?? 21);
  const org = new Float32Array(n * 3), seed = new Float32Array(n * 4), pos = new Float32Array(n * 3);
  sources.forEach((s, k) => {
    for (let i = 0; i < per; i++) {
      const j = k * per + i;
      org.set([s.pos.x, s.pos.y, s.pos.z], j * 3);
      seed.set([rnd(), rnd(), rnd(), (s.size ?? 1) * (0.6 + rnd() * 0.8)], j * 4);
    }
  });
  const ember = o.kind === 'ember';
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      ...fogUniforms(), uTime: { value: 0 }, uScale: { value: 600 * pixelRatio }, uLife: { value: o.life }, uRise: { value: o.rise },
      uSpread: { value: o.spread }, uSize: { value: new THREE.Vector2(o.size0, o.size1) }, uWind: { value: new THREE.Vector2(o.windX ?? 1.6, o.windZ ?? 0.5) },
      uColor: { value: new THREE.Color(o.color ?? 0x8a8078) }, uOpacity: { value: o.opacity ?? 0.3 }, uSunDir: { value: o.sunDir ?? new THREE.Vector3(0, 1, 0) },
    },
    vertexShader: /* glsl */`
      uniform float uTime, uScale, uLife, uRise, uSpread; uniform vec2 uSize, uWind;
      attribute vec3 aOrigin; attribute vec4 aSeed; varying float vA; varying float vT; 
      ${FOG_V}
      void main() {
        float t = fract( uTime / uLife * ( 0.75 + 0.5 * aSeed.x ) + aSeed.y );
        vec3 p = aOrigin;
        float ang = aSeed.z * 6.2832;
        p.xz += vec2( cos( ang ), sin( ang ) ) * uSpread * ( 0.15 + t ) * aSeed.w;
        p.y += t * uRise * ( 0.7 + 0.6 * aSeed.x );
        p.xz += uWind * t * t * uLife * 0.5;
        p.x += sin( uTime * ${ember ? '5.0' : '0.5'} + aSeed.y * 31.0 ) * ${ember ? '0.12' : '0.35'} * t;
        vec4 mvPosition = viewMatrix * vec4( p, 1.0 );
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = min( mix( uSize.x, uSize.y, t ) * aSeed.w * uScale / -mvPosition.z, 900.0 );
        vA = smoothstep( 0.0, ${ember ? '0.05' : '0.2'}, t ) * ( 1.0 - t ) * step( 0.0001, aSeed.w );
        vT = t;
        #include <fog_vertex>
      }`,
    fragmentShader: ember ? /* glsl */`
      uniform vec3 uColor; uniform float uOpacity; varying float vA; varying float vT;
      ${FOG_F}
      void main() {
        float r = length( gl_PointCoord - 0.5 );
        float a = smoothstep( 0.5, 0.0, r ) * vA;
        gl_FragColor = vec4( uColor * mix( 9.0, 2.0, vT ) * a * uOpacity, 1.0 );
        ${END}
      }` : /* glsl */`
      uniform vec3 uColor; uniform float uOpacity; varying float vA; varying float vT;
      ${FOG_F}
      void main() {
        vec2 q = gl_PointCoord - 0.5;
        float r = length( q );
        float a = smoothstep( 0.5, 0.05, r ) * vA * uOpacity;
        if ( a < 0.004 ) discard;
        // fake lighting: warm rim on the sun side, cool core
        float lit = 0.75 + 0.5 * ( q.x * -0.9 - q.y * 0.6 );
        gl_FragColor = vec4( uColor * lit * mix( 0.7, 1.15, vT ), a );
        #include <fog_fragment>
        ${END}
      }`,
    transparent: true, depthWrite: false, fog: !ember,
    blending: ember ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
  const p = points(n, { position: [pos, 3], aOrigin: [org, 3], aSeed: [seed, 4] }, mat, o.kind);
  p.userData.per = per;
  /** enable / disable every particle of one source (used when the beacon is lit) */
  p.userData.setSource = (k, on, size = 1) => {
    const a = p.geometry.attributes.aSeed;
    for (let i = 0; i < per; i++) a.setW(k * per + i, on ? size * (0.6 + 0.8 * ((i * 0.618) % 1)) : 0);
    a.needsUpdate = true;
  };
  return p;
}

// ---------------------------------------------------------------- flames

const flameFrag = /* glsl */`
  uniform float uTime; uniform float uGain; varying float vSeed; varying float vOn;
  float hash( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
  float noise( vec2 p ) {
    vec2 i = floor( p ), f = fract( p ); f = f * f * ( 3.0 - 2.0 * f );
    return mix( mix( hash( i ), hash( i + vec2( 1, 0 ) ), f.x ), mix( hash( i + vec2( 0, 1 ) ), hash( i + vec2( 1, 1 ) ), f.x ), f.y );
  }
  float fbm( vec2 p ) { return noise( p ) * 0.55 + noise( p * 2.1 + 3.7 ) * 0.3 + noise( p * 4.3 + 1.1 ) * 0.15; }
  void main() {
    vec2 uv = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );
    float t = uTime * 1.9 + vSeed * 17.0;
    float n = fbm( vec2( uv.x * 3.2 + vSeed * 9.0, uv.y * 2.4 - t ) );
    float n2 = fbm( vec2( uv.x * 6.0 - vSeed * 5.0, uv.y * 4.5 - t * 1.6 ) );
    float x = uv.x - 0.5 + ( n - 0.5 ) * 0.34 * uv.y;
    float width = mix( 0.3, 0.02, pow( uv.y, 0.8 ) ) * ( 0.75 + n2 * 0.5 );
    float body = smoothstep( width, width * 0.25, abs( x ) );
    body *= smoothstep( 0.0, 0.1, uv.y ) * smoothstep( 1.0, 0.45, uv.y + ( n2 - 0.5 ) * 0.45 );
    float core = body * smoothstep( 0.75, 0.05, uv.y ) * smoothstep( width * 0.7, 0.0, abs( x ) );
    vec3 col = mix( vec3( 1.0, 0.22, 0.03 ), vec3( 1.0, 0.62, 0.16 ), body ) * body * 2.6;
    col += vec3( 1.0, 0.85, 0.5 ) * core * 4.5;
    gl_FragColor = vec4( col * vOn * uGain, 1.0 );
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

/** One draw call for every fire in the village. fires: [{ pos, size, lit }] */
export function createFlames(fires, pixelRatio) {
  const n = fires.length, pos = new Float32Array(n * 3), aSize = new Float32Array(n), aSeed = new Float32Array(n), aOn = new Float32Array(n);
  fires.forEach((f, i) => { pos.set([f.pos.x, f.pos.y, f.pos.z], i * 3); aSize[i] = f.size; aSeed[i] = (i * 0.37) % 1; aOn[i] = f.lit ? 1 : 0; });
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uScale: { value: 600 * pixelRatio }, uGain: { value: 1 } },
    vertexShader: /* glsl */`
      uniform float uScale; attribute float aSize, aSeed, aOn; varying float vSeed; varying float vOn;
      void main() {
        vec4 mv = modelViewMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * mv;
        gl_PointSize = min( aSize * 1.9 * uScale / -mv.z, 1000.0 );
        vSeed = aSeed; vOn = aOn;
      }`,
    fragmentShader: flameFrag,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const p = points(n, { position: [pos, 3], aSize: [aSize, 1], aSeed: [aSeed, 1], aOn: [aOn, 1] }, mat, 'flames');
  p.userData.setLit = (i, on) => { p.geometry.attributes.aOn.setX(i, on ? 1 : 0); p.geometry.attributes.aOn.needsUpdate = true; };
  return p;
}
