import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import * as THREE from "three";
import React from "react";
import { useFrame } from "@react-three/fiber";

const MacContainer = () => {
  const model = useGLTF("./mac.glb");

  let tex = useTexture("./red.jpg");

  const meshes = {};

  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  // Ensure the screen mesh exists before modifying it
  if (meshes.screen) {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.roughness = 1;
  }

  const data = useScroll();

  useFrame(() => {
    if (meshes.screen) {
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(
        180 - data.offset * 90
      );
    }
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
