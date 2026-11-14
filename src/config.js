export const isMobile =
  matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent);

export const CONFIG = {
  // --- look ---
  exposure: 0.9,
  fov: 70,
  sunElevationDeg: 10,          // golden hour: 8–12
  sunAzimuthDeg: 250,           // compass bearing the sun sits at (0 = north/-Z, 90 = east/+X)
  fogDensity: 0.0027,
  // If you drop an HDRI into assets/hdri/sky.hdr, rotate it (radians) until its sun
  // lines up with the DirectionalLight (watch the shadows vs. the bright spot in the sky).
  hdriRotationY: 0,
  hdriAsBackground: true,

  // --- quality ---
  pixelRatioCap: isMobile ? 1.5 : 2,
  shadowMapSize: 2048,
  shadowRange: isMobile ? 30 : 36,      // half-size of the shadow box that follows the player
  textureSize: isMobile ? 512 : 1024,
  torchLights: isMobile ? 3 : 4,        // real PointLights shared between the nearest fires
  snowCount: isMobile ? 1400 : 4000,
  grassCount: isMobile ? 1500 : 4200,
  nearTrees: isMobile ? 90 : 150,
  farTrees: isMobile ? 450 : 1000,
  minFps: 45,
  adaptive: !new URLSearchParams(location.search).has('lockquality'), // ?lockquality keeps every effect on

  // --- feel ---
  walkSpeed: 3.3,
  runSpeed: 6.2,
  jumpSpeed: 5.2,
  gravity: 16,
  eyeHeight: 1.68,
  lookSensitivity: 0.0022,
  touchLookSensitivity: 0.0045,
};
