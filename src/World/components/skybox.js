import {
  BackSide,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  TextureLoader
} from "../../../vendor/three/build/three.module.js";

export async function createSkybox() {
  const loader = new TextureLoader();

  const textures = await Promise.all([
    loader.loadAsync( './assets/textures/flame_ft.jpg'),
    loader.loadAsync( './assets/textures/flame_bk.jpg'),
    loader.loadAsync( './assets/textures/flame_up.jpg'),
    loader.loadAsync( './assets/textures/flame_dn.jpg'),
    loader.loadAsync( './assets/textures/flame_rt.jpg'),
    loader.loadAsync( './assets/textures/flame_lf.jpg'),
  ]);

  const materialArray = textures.map((texture) => {
    const material = new MeshBasicMaterial( { map: texture });
    material.side = BackSide;
    return material;
  });

  const skyboxGeo = new BoxGeometry( 10000, 10000, 10000);

  return new Mesh(skyboxGeo, materialArray);
}
