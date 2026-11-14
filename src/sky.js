// Golden-hour sky dome, sun/fill lights and image-based lighting.
// IBL comes from assets/hdri/sky.hdr when present, otherwise the procedural dome is
// baked through PMREMGenerator so reflections always match what you see.
import * as THREE from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { CONFIG } from './config.js';

export const HORIZON = new THREE.Color().setRGB(0.66, 0.5, 0.4);   // warm grey-peach (linear)
const ZENITH = new THREE.Color().setRGB(0.13, 0.2, 0.34);
const SUN_COL = new THREE.Color().setRGB(1.0, 0.56, 0.27);

const skyVert = /* glsl */`
  varying vec3 vDir;
  void main() {
    vDir = normalize( position );
    vec4 p = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    gl_Position = p.xyww;
  }`;
const skyFrag = /* glsl */`
  uniform vec3 uSun; uniform vec3 uHorizon; uniform vec3 uZenith; uniform vec3 uSunCol;
  uniform float uTime; uniform float uEnv;
  varying vec3 vDir;
  float hash( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
  float noise( vec2 p ) {
    vec2 i = floor( p ), f = fract( p ); f = f * f * ( 3.0 - 2.0 * f );
    return mix( mix( hash( i ), hash( i + vec2( 1, 0 ) ), f.x ), mix( hash( i + vec2( 0, 1 ) ), hash( i + vec2( 1, 1 ) ), f.x ), f.y );
  }
  float fbm( vec2 p ) { float a = 0.5, s = 0.0; for ( int i = 0; i < 5; i++ ) { s += a * noise( p ); p = p * 2.1 + 7.3; a *= 0.5; } return s; }
  void main() {
    vec3 d = normalize( vDir );
    float h = max( d.y, 0.0 );
    float sd = max( dot( d, uSun ), 0.0 );
    // gradient: hazy horizon -> cool zenith, warmer on the sun side
    vec3 col = mix( uZenith, uHorizon, pow( 1.0 - h, 5.0 ) );
    col = mix( col, uHorizon * vec3( 1.25, 1.0, 0.8 ), pow( 1.0 - h, 12.0 ) * 0.6 );
    col += uSunCol * ( pow( sd, 6.0 ) * 0.22 + pow( sd, 40.0 ) * 0.5 ) * ( 1.0 - h * 0.6 );
    // streaky high cloud, lit from below by the low sun
    vec2 cp = d.xz / ( h + 0.12 ) * 0.9 + vec2( uTime * 0.004, 0.0 );
    float cl = smoothstep( 0.46, 0.8, fbm( cp * vec2( 0.55, 1.6 ) ) ) * smoothstep( 0.02, 0.22, h );
    vec3 cloudCol = mix( vec3( 0.34, 0.3, 0.33 ), uSunCol * 1.25 + 0.12, pow( sd, 2.5 ) * 0.85 + 0.12 );
    col = mix( col, cloudCol, cl * 0.75 );
    // sun: soft halo + HDR disc (the disc is what the bloom pass picks up)
    col += uSunCol * pow( sd, 700.0 ) * 1.1;
    col += uSunCol * smoothstep( 0.99965, 0.99985, sd ) * mix( 14.0, 9.0, uEnv );
    // below the horizon: haze fading to dark ground (matters for IBL bounce)
    float below = smoothstep( 0.0, -0.25, d.y );
    col = mix( col, uHorizon * 0.22, below );
    gl_FragColor = vec4( col, 1.0 );
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

export function sunDirection() {
  const el = THREE.MathUtils.degToRad(CONFIG.sunElevationDeg), az = THREE.MathUtils.degToRad(CONFIG.sunAzimuthDeg);
  return new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el)).normalize();
}

async function exists(url) {
  try {
    const r = await fetch(url, { method: 'HEAD' });
    return r.ok && !(r.headers.get('content-type') || '').includes('text/html');
  } catch { return false; }
}

export async function createSky(renderer, scene) {
  const sunDir = sunDirection();
  const uniforms = {
    uSun: { value: sunDir }, uHorizon: { value: HORIZON }, uZenith: { value: ZENITH }, uSunCol: { value: SUN_COL },
    uTime: { value: 0 }, uEnv: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: skyVert, fragmentShader: skyFrag, side: THREE.BackSide, depthWrite: false, fog: false });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), mat);
  dome.scale.setScalar(1200); dome.frustumCulled = false; dome.renderOrder = -10; dome.name = 'sky';
  scene.add(dome);

  scene.fog = new THREE.FogExp2(HORIZON.clone(), CONFIG.fogDensity);

  // ---- image based lighting
  const pmrem = new THREE.PMREMGenerator(renderer);
  let usedHDRI = false;
  if (await exists('assets/hdri/sky.hdr')) {
    try {
      const hdr = await new HDRLoader().loadAsync('assets/hdri/sky.hdr');
      hdr.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = pmrem.fromEquirectangular(hdr).texture;
      scene.environmentRotation.y = CONFIG.hdriRotationY;
      if (CONFIG.hdriAsBackground) {
        scene.background = hdr; scene.backgroundRotation.y = CONFIG.hdriRotationY;
        dome.visible = false;
      }
      usedHDRI = true;
      console.info('[sky] using assets/hdri/sky.hdr');
    } catch (e) { console.warn('[sky] HDRI failed to load, using procedural sky', e); }
  }
  if (!usedHDRI) {
    const envScene = new THREE.Scene();
    const envMat = mat.clone();
    envMat.uniforms = { ...uniforms, uEnv: { value: 1 } };
    const envDome = new THREE.Mesh(dome.geometry, envMat);
    envDome.scale.setScalar(100);
    envScene.add(envDome);
    scene.environment = pmrem.fromScene(envScene, 0, 0.1, 1000).texture;
    envMat.dispose();
  }
  pmrem.dispose();
  scene.environmentIntensity = 0.85;

  // ---- direct light: low warm sun + cool sky fill
  const sun = new THREE.DirectionalLight(new THREE.Color().setRGB(1.0, 0.66, 0.4), 4.6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(CONFIG.shadowMapSize, CONFIG.shadowMapSize);
  const R = CONFIG.shadowRange, cam = sun.shadow.camera;
  cam.left = -R; cam.right = R; cam.top = R; cam.bottom = -R; cam.near = 1; cam.far = 260;
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.05; sun.shadow.radius = 2.5;
  scene.add(sun, sun.target);

  const hemi = new THREE.HemisphereLight(new THREE.Color().setRGB(0.5, 0.62, 0.85), new THREE.Color().setRGB(0.2, 0.17, 0.14), 0.55);
  scene.add(hemi);

  // Keep the shadow box centred on the player, snapped to shadow texels so edges don't crawl.
  const lightView = new THREE.Matrix4().lookAt(sunDir, new THREE.Vector3(), new THREE.Vector3(0, 1, 0));
  const inv = lightView.clone().invert(), v = new THREE.Vector3();
  function follow(playerPos) {
    const texel = (2 * R) / sun.shadow.mapSize.x;
    v.copy(playerPos).applyMatrix4(inv);
    v.x = Math.round(v.x / texel) * texel; v.y = Math.round(v.y / texel) * texel; v.z = Math.round(v.z / texel) * texel;
    v.applyMatrix4(lightView);
    sun.target.position.copy(v);
    sun.position.copy(v).addScaledVector(sunDir, 130);
    sun.target.updateMatrixWorld();
  }

  return { dome, sun, hemi, sunDir, uniforms, follow, usedHDRI };
}
