import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

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
    <Canvas shadows camera={{ position: [-15, 10, 15], fov: 25 }}>
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <OrbitControls
        makeDefault
        minPolarAngle={1}
        maxPolarAngle={Math.PI - Math.PI / 2}
      />
      <Setup />
    </Canvas>
  );
};

export default Model;
