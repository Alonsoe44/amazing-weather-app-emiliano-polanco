import { useEffect, useState } from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const useLoad3dModel = (url: string) => {
  const [model, setModel] = useState(null as any);
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const bakedTexture = textureLoader.load("assets/texture.jpg");
    bakedTexture.flipY = false;
    bakedTexture.encoding = THREE.sRGBEncoding;
    const basicMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("draco/");

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.load(url, async (gltf) => {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = basicMaterial;
        }
      });
      const nodes = await gltf.parser.getDependencies("node");
      setModel(nodes[0]);
    });
  }, [url]);

  return model;
};

export default useLoad3dModel;
