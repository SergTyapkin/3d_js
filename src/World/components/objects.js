import {
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PlaneBufferGeometry,
  TextureLoader
} from "../../../vendor/three/build/three.module.js";

export async function createObjects(floorY = 0) {
  // Create materials
  const loader = new TextureLoader();
  const textures = await Promise.all([
    loader.loadAsync( './assets/skyboxes/cliffs/dn.png'),
  ]);

  const mat1 = new MeshBasicMaterial({map: textures[0]});
  const mat2 = new MeshPhongMaterial({
    color: 0x105942,
    shininess: 0.2,
  });

  // Create meshes
  const geoPlane = new PlaneBufferGeometry(9000, 9000);

  // Create objects
  const plane = new Mesh(geoPlane, mat1);
  plane.rotation.x = -Math.PI / 2;
  console.log(floorY)
  plane.position.y = floorY;
  plane.receiveShadow = true;
  plane.castShadow = true;

  return [];
}
