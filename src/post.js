// Post-processing chain + automatic quality scaling.
// RenderPass -> UnrealBloom (HDR, high threshold) -> OutputPass (ACES + sRGB) -> grade -> SMAA/FXAA
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { FXAAPass } from 'three/addons/postprocessing/FXAAPass.js';
import { CONFIG, isMobile } from './config.js';

const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uGrain: { value: 0.035 }, uVignette: { value: 0.55 } },
  vertexShader: /* glsl */`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float uTime, uGrain, uVignette; varying vec2 vUv;
    float hash( vec2 p ) { vec3 p3 = fract( vec3( p.xyx ) * 0.1031 ); p3 += dot( p3, p3.yzx + 33.33 ); return fract( ( p3.x + p3.y ) * p3.z ); }
    void main() {
      vec3 c = texture2D( tDiffuse, vUv ).rgb;
      float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
      c = mix( vec3( l ), c, 0.86 );                                              // slightly desaturated
      c += vec3( -0.022, 0.012, 0.03 ) * ( 1.0 - smoothstep( 0.0, 0.45, l ) );    // teal shadows
      c += vec3( 0.04, 0.012, -0.035 ) * smoothstep( 0.4, 1.0, l );               // warm highlights
      c = ( c - 0.5 ) * 1.07 + 0.5;                                               // a touch of contrast
      vec2 q = vUv - 0.5;
      c *= mix( 1.0, smoothstep( 0.95, 0.3, length( q * vec2( 1.0, 0.85 ) ) ), uVignette );
      c += ( hash( gl_FragCoord.xy + fract( uTime ) * 311.0 ) - 0.5 ) * uGrain * ( 1.0 - l * 0.5 );
      gl_FragColor = vec4( c, 1.0 );
    }`,
};

export function createPost(renderer, scene, camera) {
  const composer = new EffectComposer(renderer);
  const size = renderer.getSize(new THREE.Vector2());
  const bloom = new UnrealBloomPass(size.clone(), 0.22, 0.45, 1.0);
  const grade = new ShaderPass(GradeShader);
  const aa = isMobile ? new FXAAPass() : new SMAAPass();
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  composer.addPass(grade);
  composer.addPass(aa);

  // ---- adaptive quality: step down one tier whenever the average falls below CONFIG.minFps
  const tiers = [
    () => { aa.enabled = false; return 'anti-aliasing pass off'; },
    () => { bloom.enabled = false; return 'bloom off'; },
    () => { setRatio(Math.max(1, renderer.getPixelRatio() * 0.75)); return 'render scale reduced'; },
    (sun) => { sun.shadow.mapSize.set(1024, 1024); sun.shadow.map?.dispose(); sun.shadow.map = null; return 'shadow map 1024'; },
    () => { setRatio(Math.max(0.75, renderer.getPixelRatio() * 0.75)); grade.uniforms.uGrain.value = 0; return 'render scale reduced again'; },
  ];
  let tier = 0, acc = 0, frames = 0, warm = 4, fps = 60;
  function setRatio(r) { renderer.setPixelRatio(r); composer.setPixelRatio(r); onResize(); }
  let onResize = () => {};

  return {
    composer, bloom, grade, aa,
    get fps() { return fps; }, get tier() { return tier; },
    setResizeHook(fn) { onResize = fn; },
    setSize(w, h) { composer.setSize(w, h); },
    render(dt, time, sun) {
      grade.uniforms.uTime.value = time;
      composer.render(dt);
      if (!CONFIG.adaptive || document.hidden || dt > 0.5) return;
      if (warm > 0) { warm -= dt; return; }
      acc += dt; frames++;
      if (acc >= 2) {
        fps = frames / acc; acc = 0; frames = 0;
        if (fps < CONFIG.minFps && tier < tiers.length) {
          console.info(`[quality] ${fps.toFixed(0)} fps -> ${tiers[tier](sun)}`);
          tier++; warm = 2;
        }
      }
    },
  };
}
