import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

const Setup = () => {
  const gltf = useLoader(GLTFLoader, "/potiontest.glb");
  const modelRef = useRef();

  return (
    <>
      <primitive object={gltf.scene} ref={modelRef} scale={1} />
    </>
  );
};

const Model = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Setup />
    </Canvas>
  );
};

export default Model;
