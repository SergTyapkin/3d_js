import { Color, Scene } from '../../../vendor/three/build/three.module.js';

function createScene() {
  const scene = new Scene();

  scene.background = new Color(0xdddddd);

  return scene;
}

export { createScene };
