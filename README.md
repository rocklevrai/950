# Fjordheim

A first-person Viking village at golden hour, built with Three.js (r187, ES modules, no build step).

Everything is procedural out of the box — textures, sky, buildings, ships, trees — and every
procedural piece is swapped for a real file automatically if you drop one into `/assets`.

## Run it

Browsers block ES modules on `file://`, so serve the folder:

```bash
npx serve .          # or: python3 -m http.server 8080
```

## Publish on GitHub Pages

1. Push this folder to a repository (keep `index.html` at the root).
2. Repo → **Settings → Pages → Deploy from a branch → `main` / root**.
3. Open `https://<user>.github.io/<repo>/`.

All paths are relative, so it works from a sub-path. `.nojekyll` is included so Pages serves the files untouched.

## Controls

| | Desktop | Mobile |
|---|---|---|
| Move | `W A S D` / arrows | left joystick |
| Look | mouse (click to capture) | drag anywhere else |
| Run | `Shift` | RUN (toggle) |
| Jump | `Space` | JUMP |
| Interact | `E` | INTERACT |
| Torch | `F` | TORCH |

URL switches: `?stats` (fps, draw calls, triangles, quality tier) · `?lockquality` (never auto-reduce effects) · `?nolock` (no pointer lock).

## Project layout

```
index.html            HUD markup + styles, import map (Three.js from CDN, pinned)
src/
  main.js             renderer, scene assembly, frame loop
  config.js           every tunable: sun angle, fog, quality caps, movement
  textures.js         PBR sets: real files if present, procedural canvas otherwise
  sky.js              sky dome, sun + hemisphere light, HDRI / PMREM environment, shadow fitting
  terrain.js          terrain (grass/mud/puddle shader), water, mountain layers
  layout.js           village plan + height field shared by everything
  structures.js       longhouses, smithy, piers, longships, racks, fences, rune stones
  world.js            materials, merged statics, instanced props/trees/grass, LOD, glTF overrides
  particles.js        snow, smoke, mist, embers, flames (all GPU-animated)
  post.js             bloom → tone map → grade/vignette/grain → SMAA/FXAA, auto quality tiers
  player.js           controller, collisions, head bob, hand torch
  hud.js              compass, objectives, prompts, touch controls
  geo.js, noise.js    geometry + noise helpers
assets/
  textures/  models/  hdri/      optional real assets (see below)
```

## Optional real assets (all CC0)

The game probes for these exact filenames at start-up. Anything missing falls back to the
procedural version (you will see harmless 404s in the console for files you have not added).

### HDRI → `assets/hdri/sky.hdr`

Download a **2K `.hdr`** from Poly Haven and rename it to `sky.hdr`. Low-sun candidates:

- `venice_sunset` — https://polyhaven.com/a/venice_sunset
- `victoria_sunset` — https://polyhaven.com/a/victoria_sunset
- `evening_field` — https://polyhaven.com/a/evening_field

Then set `hdriRotationY` in `src/config.js` so the HDRI's sun lines up with the shadows, and
nudge the fog colour (`HORIZON` in `src/sky.js`) toward the HDRI's horizon. Set
`hdriAsBackground: false` to keep the procedural sky and use the HDRI for lighting only.

### Textures → `assets/textures/`

Each set needs three **1K JPGs** (2K for wood/turf if you like). On Poly Haven choose JPG and the
maps *Diffuse*, *Normal (GL)*, *Rough*, then rename to the names below.

| Set | Files | Suggested Poly Haven asset |
|---|---|---|
| Timber | `wood_diff.jpg` `wood_nor_gl.jpg` `wood_rough.jpg` | `weathered_brown_planks` or `raw_plank_wall` |
| Thatch | `thatch_diff.jpg` `thatch_nor_gl.jpg` `thatch_rough.jpg` | `thatch_roof_angled` (search “thatch”) |
| Turf | `turf_diff.jpg` `turf_nor_gl.jpg` `turf_rough.jpg` | `forest_ground_04` or `aerial_grass_rock` |
| Mud | `mud_diff.jpg` `mud_nor_gl.jpg` `mud_rough.jpg` | `brown_mud_leaves_01` or `dirt_floor` |
| Stone | `stone_diff.jpg` `stone_nor_gl.jpg` `stone_rough.jpg` | `rock_pitted_mossy` or `rock_wall_05` |
| Iron | `iron_diff.jpg` `iron_nor_gl.jpg` `iron_rough.jpg` | `rusty_metal_03` |
| Bark | `bark_diff.jpg` `bark_nor_gl.jpg` `bark_rough.jpg` | any bark set (search “bark”) |
| Water ripples | `water_nor_gl.jpg` (normal only) | any ambientCG water normal, optional |

Poly Haven filenames look like `weathered_brown_planks_diff_1k.jpg`, so renaming is just swapping
the prefix and dropping `_1k`. ambientCG works too (https://ambientcg.com — search Planks, Thatch,
Ground, Rock, Metal, Bark): rename `_Color` → `_diff`, `_NormalGL` → `_nor_gl`, `_Roughness` → `_rough`.

Notes: wood grain should run horizontally in the image; thatch strands vertically. If a set
looks too big or small, change the tile size passed to `triUV(...)`/`rbox(...)` (default 2 m).

### Models → `assets/models/` (binary glTF, `.glb`)

| File | Replaces | Where to get one |
|---|---|---|
| `pine.glb` | detailed pines near the village | Kenney **Nature Kit** — https://kenney.nl/assets/nature-kit |
| `rock.glb` | boulders and shore rocks | Kenney **Nature Kit** |
| `barrel.glb` | barrels | Quaternius **Fantasy Props MegaKit** — https://quaternius.com |
| `crate.glb` | crates | Quaternius **Fantasy Props MegaKit** / Kenney **Pirate Kit** |
| `longship.glb` | the four longships | Kenney **Pirate Kit** — https://kenney.nl/assets/pirate-kit (`ship-small`) |

Models are auto-scaled (pine 13 m tall, barrel 1 m, crate 0.72 m, ship 17 m long) and instanced.
If a pack ships `.gltf` + `.bin`, convert to a single `.glb` first (e.g. https://gltf.report).
Quaternius' **Medieval Village MegaKit** is a good source of extra set dressing.

Be aware that Kenney/Quaternius models are deliberately low-poly and stylised: the textures and
HDRI push the look toward photoreal, the models pull it away. The procedural buildings and ships
are not replaceable by design.

## Tuning

- **Look**: `src/config.js` — sun elevation/bearing, exposure, fog density.
- **Grade**: `GradeShader` in `src/post.js` — saturation, teal/warm split, vignette, grain.
- **Performance**: counts and caps in `src/config.js` (mobile values are already lower).
  Below 45 fps the game steps down automatically: AA pass → bloom → render scale → shadow map size.
