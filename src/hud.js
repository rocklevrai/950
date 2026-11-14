// Minimal cinematic HUD: compass strip, objective panel, prompts, and touch controls.
import { isMobile, CONFIG } from './config.js';

const $ = (id) => document.getElementById(id);
const AMBER = '#e8a33d', WHITE = 'rgba(236,230,218,';
const CARD = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };

export class HUD {
  constructor(player, world) {
    this.player = player; this.world = world;
    this.canvas = $('compass'); this.ctx = this.canvas.getContext('2d');
    this.objectives = [
      { id: 'docks', text: 'Walk down to the docks', done: false },
      { id: 'runes', text: 'Read the rune stones', count: 0, of: 3, done: false },
      { id: 'hall', text: 'Enter the Great Hall', done: false },
      { id: 'beacon', text: 'Light the harbour beacon', done: false },
    ];
    this.found = new Set(); this.read = new Set();
    this.toastTimer = 0; this.loreTimer = 0; this.target = null;
    this.#resize(); addEventListener('resize', () => this.#resize());
    this.#renderObjectives();
    if (isMobile) this.#bindTouch();
    document.body.classList.toggle('mobile', isMobile);
  }

  #resize() {
    const dpr = Math.min(devicePixelRatio, 2), w = Math.min(560, innerWidth - 48), h = 58;
    this.w = Math.max(220, w); this.h = h;
    this.canvas.width = this.w * dpr; this.canvas.height = h * dpr;
    this.canvas.style.width = this.w + 'px'; this.canvas.style.height = h + 'px';
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  #renderObjectives() {
    const done = this.objectives.every((o) => o.done);
    $('obj-title').textContent = done ? 'The village is yours' : 'Explore the village';
    $('obj-list').innerHTML = this.objectives.map((o) =>
      `<li class="${o.done ? 'done' : ''}"><span class="tick">${o.done ? '◆' : '◇'}</span><span>${o.text}</span>${o.of ? `<span class="num">${o.count}/${o.of}</span>` : ''}</li>`).join('');
  }
  complete(id) {
    const o = this.objectives.find((x) => x.id === id);
    if (o && !o.done) { o.done = true; this.#renderObjectives(); }
  }
  toast(text, sub = 'DISCOVERED') {
    $('toast-main').textContent = text; $('toast-sub').textContent = sub;
    $('toast').classList.add('show'); this.toastTimer = 3.6;
  }
  lore(text) { $('lore').textContent = text; $('lore').classList.add('show'); this.loreTimer = 7; }

  /** Called by the player when INTERACT is pressed. */
  interact() {
    const t = this.target; if (!t) return;
    if (t.text) {
      this.lore(t.text);
      if (!this.read.has(t.id)) {
        this.read.add(t.id);
        const o = this.objectives.find((x) => x.id === 'runes'); o.count = this.read.size; o.done = o.count >= o.of;
        this.#renderObjectives();
      }
    }
    if (t.fire && !t.fire.lit) { t.onLight?.(); this.complete('beacon'); this.toast('THE BEACON BURNS', 'SHIPS WILL FIND THEIR WAY HOME'); t.done = true; }
  }

  update(dt) {
    const p = this.player.pos;
    // discoveries
    for (const poi of this.world.pois) {
      if (poi.radius && !this.found.has(poi.id) && Math.hypot(p.x - poi.pos.x, p.z - poi.pos.z) < poi.radius) {
        this.found.add(poi.id); this.toast(poi.name === 'GREAT HALL' ? 'THE GREAT HALL' : 'THE ' + poi.name);
        this.complete(poi.id);
      }
    }
    // nearest interactable in front of the player
    let best = null, bd = 1e9;
    const fx = -Math.sin(this.player.yawS), fz = -Math.cos(this.player.yawS);
    for (const it of this.world.interactables) {
      if (it.done) continue;
      const dx = it.pos.x - p.x, dz = it.pos.z - p.z, d = Math.hypot(dx, dz);
      if (d < it.radius && d < bd && (dx * fx + dz * fz) / (d || 1) > 0.35) { best = it; bd = d; }
    }
    if (best !== this.target) {
      this.target = best;
      $('prompt').classList.toggle('show', !!best);
      if (best) $('prompt-text').textContent = best.label;
      $('btn-interact')?.classList.toggle('hot', !!best);
    }
    if (this.toastTimer > 0 && (this.toastTimer -= dt) <= 0) $('toast').classList.remove('show');
    if (this.loreTimer > 0 && (this.loreTimer -= dt) <= 0) $('lore').classList.remove('show');
    this.#drawCompass();
  }

  #drawCompass() {
    const c = this.ctx, w = this.w, h = this.h, head = this.player.heading, span = 150, ppd = w / span, cx = w / 2;
    c.clearRect(0, 0, w, h);
    const fade = (x) => Math.max(0, 1 - Math.pow(Math.abs(x - cx) / (w / 2), 3));
    c.textAlign = 'center'; c.lineWidth = 1;
    const start = Math.floor((head - span / 2) / 5) * 5;
    for (let d = start; d <= head + span / 2; d += 5) {
      const x = cx + (d - head) * ppd, a = fade(x), deg = ((d % 360) + 360) % 360;
      if (a <= 0) continue;
      const major = deg % 45 === 0, mid = deg % 15 === 0;
      c.strokeStyle = WHITE + (major ? 0.95 : mid ? 0.6 : 0.3) * a + ')';
      c.beginPath(); c.moveTo(x + 0.5, 20); c.lineTo(x + 0.5, 20 + (major ? 11 : mid ? 7 : 4)); c.stroke();
      if (major) {
        c.fillStyle = (deg === 0 ? `rgba(232,163,61,${a})` : WHITE + a + ')');
        c.font = '500 15px "Barlow Condensed", "Oswald", sans-serif';
        c.fillText(CARD[deg], x, 14);
      } else if (deg % 15 === 0) {
        c.fillStyle = WHITE + 0.5 * a + ')';
        c.font = '9px "JetBrains Mono", ui-monospace, monospace';
        c.fillText(String(deg).padStart(3, '0'), x, 13);
      }
    }
    // centre caret
    c.fillStyle = AMBER; c.beginPath(); c.moveTo(cx, 19); c.lineTo(cx - 4, 12.5); c.lineTo(cx + 4, 12.5); c.fill();
    // points of interest: amber diamonds with distance
    const p = this.player.pos;
    for (const poi of this.world.pois) {
      if (poi.rune ? this.read.has(poi.id) : (poi.id === 'beacon' ? this.world.beaconFire.lit : this.found.has(poi.id))) continue;
      const dx = poi.pos.x - p.x, dz = poi.pos.z - p.z, dist = Math.hypot(dx, dz);
      let rel = ((Math.atan2(dx, -dz) * 180 / Math.PI - head + 540) % 360) - 180;
      const edge = Math.abs(rel) > span / 2 - 6;
      rel = Math.max(-span / 2 + 6, Math.min(span / 2 - 6, rel));
      const x = cx + rel * ppd, s = edge ? 3.5 : 5;
      c.save(); c.translate(x, 39); c.rotate(Math.PI / 4);
      c.fillStyle = edge ? 'rgba(232,163,61,0.45)' : AMBER; c.fillRect(-s / 1.1, -s / 1.1, s * 1.8, s * 1.8);
      if (!edge) { c.fillStyle = 'rgba(20,16,12,0.9)'; c.fillRect(-1.2, -1.2, 2.4, 2.4); }
      c.restore();
      if (!edge) {
        c.fillStyle = WHITE + '0.85)'; c.font = '9px "JetBrains Mono", ui-monospace, monospace';
        c.fillText(`${Math.round(dist)}m`, x, 56);
      }
    }
  }

  #bindTouch() {
    const pl = this.player, stick = $('stick'), nub = $('nub');
    let stickId = null, lookId = null, sx = 0, sy = 0, lx = 0, ly = 0;
    const R = 52;
    const setStick = (x, y) => {
      let dx = x - sx, dy = y - sy; const l = Math.hypot(dx, dy); if (l > R) { dx *= R / l; dy *= R / l; }
      nub.style.transform = `translate(${dx}px, ${dy}px)`;
      pl.move.set(dx / R, -dy / R);
    };
    stick.addEventListener('touchstart', (e) => {
      const t = e.changedTouches[0]; stickId = t.identifier;
      const r = stick.getBoundingClientRect(); sx = r.left + r.width / 2; sy = r.top + r.height / 2;
      setStick(t.clientX, t.clientY); e.preventDefault(); e.stopPropagation();
    }, { passive: false });
    const surface = $('game');
    surface.addEventListener('touchstart', (e) => {
      if (lookId !== null) return;
      const t = e.changedTouches[0]; lookId = t.identifier; lx = t.clientX; ly = t.clientY;
    }, { passive: true });
    addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stickId) setStick(t.clientX, t.clientY);
        else if (t.identifier === lookId) {
          if (pl.enabled) pl.look((t.clientX - lx) * CONFIG.touchLookSensitivity, (t.clientY - ly) * CONFIG.touchLookSensitivity);
          lx = t.clientX; ly = t.clientY;
        }
      }
      if (pl.enabled) e.preventDefault();
    }, { passive: false });
    const end = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stickId) { stickId = null; nub.style.transform = ''; pl.move.set(0, 0); }
        if (t.identifier === lookId) lookId = null;
      }
    };
    addEventListener('touchend', end); addEventListener('touchcancel', end);
    const btn = (id, down, up) => {
      const el = $(id);
      el.addEventListener('touchstart', (e) => { down(); el.classList.add('on'); e.preventDefault(); e.stopPropagation(); }, { passive: false });
      el.addEventListener('touchend', (e) => { up?.(); if (id !== 'btn-run' || !pl.run) el.classList.remove('on'); e.preventDefault(); }, { passive: false });
    };
    btn('btn-jump', () => { pl.jumpQueued = true; });
    btn('btn-interact', () => pl.onInteract());
    btn('btn-run', () => { pl.run = !pl.run; });     // toggle
    btn('btn-torch', () => pl.toggleTorch());
  }
}
