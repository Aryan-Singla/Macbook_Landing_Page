import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer.jsx";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";

const App = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Overlay text */}
      <div className="absolute flex flex-col items-center text-white top-31 left-1/2 transform -translate-x-1/2 font-['Helvetica_Now_Display']">
        <h3 className="text-7xl tracking-tighter">macbook pro</h3>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        {/* Environment for lighting */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
          ]}
        />
        {/* ScrollControls for handling scroll events */}
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
