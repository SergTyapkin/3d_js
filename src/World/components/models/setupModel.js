import {Box3, Vector3} from '../../../../vendor/three/build/three.module.js';

function setupModel(data) {
  const model = data.scene.children[0];

  const box = new Box3().setFromObject(model);
  model.size = new Vector3(
    box.max.x - box.min.x,
    box.max.y - box.min.y,
    box.max.z - box.min.z,
  )

  // model.scale.set(100 / model.size.x, 100 / model.size.y, 100 / model.size.z);
  return model;
}

export { setupModel };
