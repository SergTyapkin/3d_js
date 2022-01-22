import { GLTFLoader } from '../../../../vendor/three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadModels() {
  const loader = new GLTFLoader();

  const models = await Promise.all([
    loader.loadAsync('/assets/models/Model.glb'),
  ]);
  const positions = [[0, 0, 0]];

  const output = [];
  models.forEach((model, idx) => {
    const out = setupModel(model);
    out.position.copy(out.size.multiplyScalar(-0.5));
    output.push(out);
  });

  return output;
}

export { loadModels };