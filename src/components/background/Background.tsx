import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Background = () => {
  const model: any = useGLTF("./assets/nature.glb");
  const texture = useTexture("./assets/texture.jpg");
  texture.flipY = false;
  const natureRef = useRef<any>();

  useFrame(() => {
    natureRef.current.rotation.y += 0.001;
  });

  return (
    <group position={[0, -1, 0]}>
      <OrbitControls />
      {model && texture && (
        <mesh ref={natureRef} geometry={model.nodes.Terrain001.geometry}>
          <meshBasicMaterial map={texture} />
        </mesh>
      )}
    </group>
  );
};

export default Background;
