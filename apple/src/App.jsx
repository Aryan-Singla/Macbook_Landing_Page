import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer.jsx";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";

const App = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Overlay text */}
      <div className="absolute flex flex-col items-center text-white top-30 left-1/2 -translate-x-1/2 font-helvetica">
        <h3 className="text-7xl tracking-tighter font-bold mt-10">
          MacBook Pro.
        </h3>
        <p className="text-center width-3/4 mt-8 font-medium">
          Welcome to the world of the Apple
        </p>
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
        <ScrollControls pages={3} className="hide-scrollbar">
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
