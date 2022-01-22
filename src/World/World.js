import { loadModels } from './components/models/models.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createObjects } from './components/objects.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import {BoxGeometry, BoxHelper, Mesh, SpotLightHelper} from "../../vendor/three/build/three.module.js";
import {updateSize} from "./components/models/setupModel.js";
import {createSkybox} from "./components/skybox.js";


let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    controls = createControls(camera, renderer.domElement);
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const lights = createLights();

    loop.updatables.push(controls);
    scene.add(...lights);
    // scene.add(new SpotLightHelper(lights[0]));

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const models = await loadModels();
    scene.add(...models);
    //scene.add(new BoxHelper(models[0]));

    const minY = models.reduce((min, cur) => {
      updateSize(cur);
      return Math.min(min, -cur.size.y / 2);
    }, -models[0].size.y / 2);
    const objects = await createObjects(minY);
    scene.add(...objects);

    // const pos = models[0].position;
    // const size = models[0].size;
    // controls.target.set(0, 0, 0);

    const skybox = await createSkybox();
    scene.add(skybox);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
