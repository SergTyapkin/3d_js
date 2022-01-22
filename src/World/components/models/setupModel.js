import {Box3, Vector3} from '../../../../vendor/three/build/three.module.js';

export function setupModel(data) {
  const model = data.scene.children[0];

  let boxPrev = new Box3().setFromObject(model);
  model.scale.multiplyScalar(100 / (boxPrev.max.y - boxPrev.min.y));

  model.castShadow = true;
  model.receiveShadow = true;
  return model;
}

export function updateSize(model) {
  let box = new Box3().setFromObject(model);
  model.size = new Vector3(
      box.max.x - box.min.x,
      box.max.y - box.min.y,
      box.max.z - box.min.z,
  )
  model.center = new Vector3(
      (box.max.x + box.min.x) / 2,
      (box.max.y + box.min.y) / 2,
      (box.max.z + box.min.z) / 2,
  )
}
