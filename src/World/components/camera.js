import { PerspectiveCamera } from '../../../vendor/three/build/three.module.js';

function createCamera() {
  const camera = new PerspectiveCamera(60, 1, 0.01, 10000);

  camera.position.set(0, 0, -120);

  return camera;
}

export { createCamera };
