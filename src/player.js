// First-person controller: pointer-lock mouse look / touch look, WASD + virtual joystick,
// circle colliders, terrain + pier following, head bob and a hand-held torch.
import * as THREE from 'three';
import { CONFIG, isMobile } from './config.js';
import { terrainH } from './layout.js';
import { pole } from './structures.js';
import { prep } from './geo.js';

const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));

export class Player {
  constructor(camera, dom, world, mats) {
    this.camera = camera; this.world = world; this.dom = dom;
    this.pos = new THREE.Vector3(-3, 0, 30);
    this.pos.y = terrainH(this.pos.x, this.pos.z);
    this.vel = new THREE.Vector3(); this.velY = 0; this.onGround = true;
    this.yaw = 0.25; this.pitch = 0.03; this.yawS = this.yaw; this.pitchS = this.pitch;
    this.bob = 0; this.bobAmp = 0; this.land = 0; this.speed = 0;
    this.keys = new Set(); this.move = new THREE.Vector2(); this.run = false; this.jumpQueued = false;
    this.enabled = false; this.torchOn = true;
    this.onInteract = () => {};
    camera.rotation.order = 'YXZ';
    this.#bindKeyboard(); this.#bindMouse();
    this.#buildTorch(mats);
  }

  #bindKeyboard() {
    addEventListener('keydown', (e) => {
      if (e.repeat) return;
      this.keys.add(e.code);
      if (!this.enabled) return;
      if (e.code === 'Space') { this.jumpQueued = true; e.preventDefault(); }
      if (e.code === 'KeyE') this.onInteract();
      if (e.code === 'KeyF') this.toggleTorch();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
  }
  #bindMouse() {
    document.addEventListener('mousemove', (e) => {
      if (!this.enabled || document.pointerLockElement !== this.dom) return;
      this.look(e.movementX * CONFIG.lookSensitivity, e.movementY * CONFIG.lookSensitivity);
    });
  }
  look(dx, dy) {
    this.yaw -= dx;
    this.pitch = THREE.MathUtils.clamp(this.pitch - dy, -1.45, 1.45);
  }
  toggleTorch() { this.torchOn = !this.torchOn; }

  #buildTorch(mats) {
    const g = new THREE.Group();
    const handle = new THREE.Mesh(pole(0.017, 0.022, 0.62, 7, 0.6), mats.wood);
    const head = new THREE.Mesh(prep(new THREE.CylinderGeometry(0.036, 0.028, 0.15, 8)), mats.cloth);
    head.position.y = 0.36; head.material = mats.cloth.clone(); head.material.color.set(0x2b2019);
    const band = new THREE.Mesh(prep(new THREE.CylinderGeometry(0.031, 0.031, 0.02, 8)), mats.iron); band.position.y = 0.28;
    const tip = new THREE.Mesh(prep(new THREE.SphereGeometry(0.034, 8, 6)), mats.coal); tip.position.y = 0.44;
    g.add(handle, head, band, tip);
    this.torchLight = new THREE.PointLight(new THREE.Color().setRGB(1, 0.55, 0.22), 0, 16, 1.8);
    this.torchLight.position.set(0, 0.62, 0.05);
    g.add(this.torchLight);
    g.rotation.set(-0.3, 0, -0.3);
    this.torch = g; this.torchRest = new THREE.Vector3(0.36, -0.4, -0.6);
    this.torchFlamePos = new THREE.Vector3(0, 0.535, 0);
    g.position.copy(this.torchRest);
    this.camera.add(g);
    this.sway = new THREE.Vector2();
  }

  #ground(x, z, y) {
    let g = terrainH(x, z), deck = false;
    for (const p of this.world.platforms) {
      if (x > p.x0 && x < p.x1 && z > p.z0 && z < p.z1 && y > p.y - 0.7) { if (p.y > g) { g = p.y; deck = true; } }
    }
    return { g, deck };
  }

  update(dt, time) {
    // ---- input -> wish direction
    const k = this.keys;
    let mx = this.move.x, mz = this.move.y;
    if (!isMobile || k.size) {
      mx += (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0);
      mz += (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
    }
    const len = Math.hypot(mx, mz); if (len > 1) { mx /= len; mz /= len; }
    const running = this.run || k.has('ShiftLeft') || k.has('ShiftRight');
    const max = this.enabled ? (running && mz > 0 ? CONFIG.runSpeed : CONFIG.walkSpeed) : 0;
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    const wx = (mx * cos - mz * sin) * max, wz = (-mx * sin - mz * cos) * max;
    const accel = this.onGround ? 11 : 3;
    this.vel.x = damp(this.vel.x, wx, accel, dt); this.vel.z = damp(this.vel.z, wz, accel, dt);

    // ---- move + collide (2D circles), per-axis so we slide along things
    const pr = 0.34, old = this.pos.clone();
    let nx = this.pos.x + this.vel.x * dt, nz = this.pos.z + this.vel.z * dt;
    for (let it = 0; it < 2; it++) for (const c of this.world.colliders) {
      const dx = nx - c.x, dz = nz - c.z, rr = c.r + pr;
      if (Math.abs(dx) > rr || Math.abs(dz) > rr) continue;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 1e-8) { const d = Math.sqrt(d2), push = (rr - d) / d; nx += dx * push; nz += dz * push; }
    }
    // water, steep slopes and the edge of the map stop you
    const walkable = (x, z) => {
      const { g, deck } = this.#ground(x, z, this.pos.y);
      // can't walk underneath a pier deck
      for (const p of this.world.platforms) if (!deck && x > p.x0 && x < p.x1 && z > p.z0 && z < p.z1 && this.pos.y <= p.y - 0.7) return false;
      if (!deck && g < -0.45) return false;
      if (!deck && g - this.pos.y > 0.75 && this.onGround) return false;
      return Math.hypot(x, z + 10) < 118;
    };
    if (!walkable(nx, nz)) {
      if (walkable(nx, old.z)) nz = old.z; else if (walkable(old.x, nz)) nx = old.x; else { nx = old.x; nz = old.z; }
    }
    this.pos.x = nx; this.pos.z = nz;
    this.speed = Math.hypot(nx - old.x, nz - old.z) / Math.max(dt, 1e-4);

    // ---- vertical
    const { g } = this.#ground(nx, nz, this.pos.y);
    if (this.onGround) {
      if (this.jumpQueued && this.enabled) { this.velY = CONFIG.jumpSpeed; this.onGround = false; }
      else if (this.pos.y - g > 0.45) { this.onGround = false; this.velY = 0; }
      else this.pos.y = damp(this.pos.y, g, 18, dt);
    }
    if (!this.onGround) {
      this.velY -= CONFIG.gravity * dt; this.pos.y += this.velY * dt;
      if (this.pos.y <= g) { this.pos.y = g; this.onGround = true; this.land = Math.min(0.14, -this.velY * 0.014); this.velY = 0; }
    }
    this.jumpQueued = false;

    // ---- camera: smoothed look, head bob, sway, landing dip
    const dyaw = this.yaw - this.yawS, dpitch = this.pitch - this.pitchS;
    this.yawS = damp(this.yawS, this.yaw, 26, dt); this.pitchS = damp(this.pitchS, this.pitch, 26, dt);
    const moving = this.onGround ? Math.min(1, this.speed / CONFIG.walkSpeed) : 0;
    this.bobAmp = damp(this.bobAmp, moving, 8, dt);
    this.bob += dt * (5.2 + this.speed * 1.25) * (moving > 0.05 ? 1 : 0);
    this.land = damp(this.land, 0, 9, dt);
    const by = Math.sin(this.bob * 2) * 0.032 * this.bobAmp, bx = Math.cos(this.bob) * 0.022 * this.bobAmp;
    const breathe = Math.sin(time * 1.3) * 0.006;
    const cam = this.camera;
    cam.position.set(this.pos.x + cos * bx, this.pos.y + CONFIG.eyeHeight + by + breathe - this.land, this.pos.z - sin * bx);
    cam.rotation.set(this.pitchS + by * 0.12, this.yawS, -bx * 0.35 - (this.vel.x * cos - this.vel.z * sin) * 0.0035);

    // ---- hand torch lags behind the view a little and bounces with each step
    this.sway.x = damp(this.sway.x, THREE.MathUtils.clamp(dyaw * 1.4, -0.1, 0.1), 10, dt);
    this.sway.y = damp(this.sway.y, THREE.MathUtils.clamp(dpitch * 1.4, -0.1, 0.1), 10, dt);
    const t = this.torch, show = this.torchOn ? 0 : -0.75;
    t.position.set(
      this.torchRest.x + this.sway.x + bx * 0.6,
      damp(t.position.y, this.torchRest.y + show - by * 0.9 - this.sway.y - this.land * 0.6, 12, dt),
      this.torchRest.z);
    t.rotation.z = -0.3 + this.sway.x * 1.5 + bx * 1.2;
    t.visible = t.position.y > -0.95;
    const flick = 0.82 + 0.12 * Math.sin(time * 11.3) + 0.08 * Math.sin(time * 23.7 + 1.3) + 0.06 * Math.sin(time * 5.1);
    this.torchLight.intensity = damp(this.torchLight.intensity, this.torchOn ? 5.5 * flick : 0, 6, dt);
  }

  /** compass heading in degrees: 0 = north (-Z), 90 = east (+X) */
  get heading() { return ((-this.yawS * 180 / Math.PI) % 360 + 360) % 360; }
}
