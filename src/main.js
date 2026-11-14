// Fjordheim — entry point: renderer, scene assembly and the frame loop.
import * as THREE from 'three';
import { CONFIG, isMobile } from './config.js';
import { buildTextures } from './textures.js';
import { createSky } from './sky.js';
import { createTerrain, createWater, createMountains } from './terrain.js';
import { makeMaterials, buildWorld } from './world.js';
import { createSnow, createEmitter, createFlames } from './particles.js';
import { createPost } from './post.js';
import { Player } from './player.js';
import { HUD } from './hud.js';
import { inHouse, shoreZ } from './layout.js';
import { mulberry32 } from './noise.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const status = (t, f) => { $('status').textContent = t; if (f !== undefined) $('bar').firstElementChild.style.width = `${f * 100}%`; };
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));

// ---------------------------------------------------------------- renderer
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = CONFIG.exposure;
renderer.shadowMap.enabled = true;
// Three r182+ folded the old PCFSoftShadowMap into PCFShadowMap (which is now the soft,
// hardware-filtered variant); asking for PCFSoftShadowMap only logs a deprecation warning.
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setPixelRatio(Math.min(devicePixelRatio, CONFIG.pixelRatioCap));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(CONFIG.fov, innerWidth / innerHeight, 0.08, 2600);
scene.add(camera);

init().catch((e) => { console.error(e); status('Something went wrong — see the console'); });

async function init() {
  // ---- textures: real files if present, procedural otherwise
  const T = await buildTextures(renderer, CONFIG.textureSize, (f, name) => status(`Weathering ${name}`, f * 0.45));
  const mats = makeMaterials(T);

  // ---- sky, light, fog, IBL
  status('Lighting the sky', 0.48); await nextFrame();
  const sky = await createSky(renderer, scene);
  renderer.setClearColor(scene.fog.color);

  // ---- land and water
  status('Carving the fjord', 0.55); await nextFrame();
  const water = createWater(T);
  scene.add(createTerrain(T), water, createMountains(T));

  // ---- village
  let s = 0.6;
  const W = await buildWorld(T, mats, async (t) => { s = Math.min(0.92, s + 0.035); status(t, s); await nextFrame(); });
  scene.add(W.group);

  // ---- fire: one Points draw call for all flames + a small pool of real lights
  const pr = renderer.getPixelRatio();
  const flames = createFlames(W.fires, pr); scene.add(flames);
  const lightFires = W.fires.filter((f) => f.light);
  const pool = Array.from({ length: CONFIG.torchLights }, () => {
    const l = new THREE.PointLight(new THREE.Color().setRGB(1, 0.5, 0.18), 0, 24, 1.7);
    l.userData.base = 0; scene.add(l); return l;
  });

  // ---- particles
  const embers = createEmitter(lightFires, 14, { kind: 'ember', life: 2.4, rise: 3.2, spread: 0.5, size0: 0.05, size1: 0.02, color: 0xff7a22, opacity: 1, windX: 0.5, windZ: 0.15, seed: 5 }, pr);
  lightFires.forEach((f, k) => embers.userData.setSource(k, f.lit, f.size));
  const smoke = createEmitter(W.smokes, 26, { kind: 'smoke', life: 13, rise: 9, spread: 2.2, size0: 1.2, size1: 7.5, color: 0x9a8f86, opacity: 0.2, windX: 0.55, windZ: 0.18, seed: 7 }, pr);
  const rnd = mulberry32(99), mistSrc = [];
  for (let i = 0; i < 46; i++) { const x = (rnd() * 2 - 1) * 330; mistSrc.push({ pos: new THREE.Vector3(x, 1.5 + rnd() * 5, shoreZ(x) + 45 + rnd() * 230), size: 0.7 + rnd() }); }
  const mist = createEmitter(mistSrc, 2, { kind: 'smoke', life: 70, rise: 2, spread: 14, size0: 34, size1: 52, color: 0xd9b89c, opacity: 0.085, windX: 0.05, windZ: 0.01, seed: 9 }, pr);
  const snow = createSnow(CONFIG.snowCount, pr);
  scene.add(smoke, mist, embers, snow);

  // ---- player, HUD, post
  const player = new Player(camera, canvas, W, mats);
  const handFlame = createFlames([{ pos: player.torchFlamePos, size: 0.125, lit: true }], pr);
  handFlame.material.uniforms.uGain.value = 0.55;
  player.torch.add(handFlame);
  const hud = new HUD(player, W);
  player.onInteract = () => hud.interact();
  const beaconIt = W.interactables.find((i) => i.id === 'beacon');
  beaconIt.onLight = () => {
    W.beaconFire.lit = true;
    flames.userData.setLit(W.fires.indexOf(W.beaconFire), true);
    embers.userData.setSource(lightFires.indexOf(W.beaconFire), true, W.beaconFire.size);
  };
  const post = createPost(renderer, scene, camera);

  const particleSystems = [flames, handFlame, embers, smoke, mist, snow];
  function resize() {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h); post.setSize(w, h);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    const scale = (h * renderer.getPixelRatio() * 0.5) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    for (const p of particleSystems) p.material.uniforms.uScale.value = scale;
  }
  post.setResizeHook(resize);
  addEventListener('resize', resize); addEventListener('orientationchange', () => setTimeout(resize, 200));
  resize();

  // ---- compile shaders and upload textures before the first real frame
  status('Kindling the fires', 0.96); await nextFrame();
  player.update(0.016, 0); sky.follow(player.pos);
  if (renderer.compileAsync) await renderer.compileAsync(scene, camera);
  post.render(0.016, 0, sky.sun);

  // ---- start / pause
  const overlay = $('overlay'), hudEl = $('hud');
  let started = false;
  const setPlaying = (on) => {
    player.enabled = on; overlay.classList.toggle('hidden', on); hudEl.classList.toggle('on', on);
    if (on && !started) { started = true; setTimeout(() => hud.toast('FJORDHEIM', 'GOLDEN HOUR · THE NORTH WAY'), 600); }
    if (!on) status(isMobile ? 'Tap to continue' : 'Click to continue', 1);
  };
  status(isMobile ? 'Tap to enter' : 'Click to enter', 1); $('status').classList.add('ready');
  overlay.addEventListener('click', () => {
    if (isMobile || params.has('nolock')) { setPlaying(true); document.documentElement.requestFullscreen?.().catch(() => {}); }
    else canvas.requestPointerLock();
  });
  document.addEventListener('pointerlockchange', () => setPlaying(document.pointerLockElement === canvas));
  canvas.addEventListener('click', () => { if (!isMobile && !params.has('nolock') && document.pointerLockElement !== canvas) canvas.requestPointerLock(); });
  if (params.has('autostart')) setPlaying(true);

  // ---- frame loop
  const timer = new THREE.Timer(); timer.connect(document);
  let time = 0, lightTimer = 0, snowFade = 1, statTimer = 0;
  const showStats = params.has('stats');
  renderer.info.autoReset = false;
  renderer.setAnimationLoop(() => {
    timer.update();
    const dt = Math.min(timer.getDelta(), 0.05); time += dt;
    renderer.info.reset();
    player.update(dt, time);
    hud.update(dt);
    sky.follow(player.pos);
    sky.dome.position.copy(camera.position);

    // nearest fires get the real lights; intensity fades with distance so hand-overs are invisible
    if ((lightTimer -= dt) <= 0) {
      lightTimer = 0.25;
      const near = lightFires.filter((f) => f.lit).map((f) => ({ f, d: f.pos.distanceTo(player.pos) })).sort((a, b) => a.d - b.d);
      pool.forEach((l, i) => {
        const n = near[i];
        if (!n) { l.userData.base = 0; return; }
        l.position.copy(n.f.pos); l.position.y -= 0.15;
        l.userData.base = n.f.power * 26 * (1 - THREE.MathUtils.smoothstep(n.d, 22, 40)); l.userData.seed = W.fires.indexOf(n.f);
      });
    }
    for (const l of pool) {
      const s2 = l.userData.seed * 1.7;
      l.intensity = l.userData.base * (0.8 + 0.13 * Math.sin(time * 9.7 + s2) + 0.09 * Math.sin(time * 21.3 + s2 * 2.1) + 0.06 * Math.sin(time * 4.3 + s2));
    }

    // uniforms
    for (const p of particleSystems) p.material.uniforms.uTime.value = time;
    snow.material.uniforms.uCam.value.copy(camera.position);
    snowFade += ((inHouse(player.pos.x, player.pos.z, -0.2) ? 0 : 1) - snowFade) * Math.min(1, dt * 3);
    snow.material.uniforms.uOpacity.value = snowFade;
    water.userData.uTime.value = time; sky.uniforms.uTime.value = time; mats.tuft.userData.uTime.value = time;
    for (const ship of W.ships) {
      const sd = ship.userData.seed;
      ship.position.y = ship.userData.baseY + Math.sin(time * 0.8 + sd * 2) * 0.045;
      ship.rotation.x = Math.sin(time * 0.6 + sd) * 0.014; ship.rotation.z = Math.sin(time * 0.47 + sd * 3) * 0.006;
    }

    post.render(dt, time, sky.sun);

    if (showStats && (statTimer -= dt) <= 0) {
      statTimer = 0.5; const i = renderer.info.render;
      $('stats').innerHTML = `<b>${post.fps.toFixed(0)}</b> FPS<br>${i.calls} CALLS<br>${(i.triangles / 1000).toFixed(0)}K TRIS<br>TIER ${post.tier}`;
    }
  });

  window.__fjord = { renderer, scene, camera, player, post, world: W, sky, hud, setPlaying };
}
