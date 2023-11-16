// import { Canvas } from "@react-three/fiber";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Suspense, useRef } from "react";
// import { OrbitControls, Environment } from "@react-three/drei";
// import LoadingScreen from "../Loading";

// const Setup = () => {
//   const gltf = useLoader(GLTFLoader, "/lang-bac.glb");
//   const modelRef = useRef();

//   return (
//     <>
//       <primitive object={gltf.scene} ref={modelRef} scale={0.7} />
//     </>
//   );
// };

const Model = () => {
  return (
    <>
      {/* <Canvas camera={{ position: [15, 10, -15], fov: 25 }}>
        <ambientLight intensity={0.3} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Environment preset="sunset" />
        <OrbitControls
          makeDefault
          minPolarAngle={1}
          maxPolarAngle={Math.PI - Math.PI / 2}
        />
        <Suspense fallback={null}>
          <Setup />
        </Suspense>
      </Canvas>
      <LoadingScreen /> */}
      <div>
        <img src="/chua-chay.png" alt="" />
      </div>
    </>
  );
};

export default Model;
