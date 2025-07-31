"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useState } from "react";

/* ----------- Cube Piece with Premium Color ----------- */
function CubePiece({ position, color }) {
  return (
    <RoundedBox
      args={[0.9, 0.9, 0.9]} // chhota taake gap dikhe
      radius={0.08}
      smoothness={4}
      position={position}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={color}
        roughness={0.22} // shiny surface
        metalness={0.4}  // reflection enhance
        emissive={"#003d66"} // cyan glow feel
        emissiveIntensity={0.05}
      />
    </RoundedBox>
  );
}

/* ----------- Rubik's Cube Group ----------- */
function RubiksCube() {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  // rotation animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    cubeRef.current.rotation.y = t * (hovered ? 0.6 : 0.3);
    cubeRef.current.rotation.x = t * 0.15;
  });

  // Premium gradient dark blue color set
  const faceColors = {
    front: "#012b52",   // Deep Navy Blue
    back: "#02345c",    // Slightly lighter navy
    left: "#013e73",    // Teal tint
    right: "#014e8f",   // Medium blue
    top: "#02223d",     // Dark top
    bottom: "#011726",  // Darkest bottom
  };

  const parts = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        parts.push([x, y, z]);
      }
    }
  }

  return (
    <group
      ref={cubeRef}
      scale={1.4}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {parts.map(([x, y, z], i) => (
        <CubePiece
          key={i}
          position={[x, y, z]}
          color={
            Math.abs(z) === 1
              ? faceColors.front
              : Math.abs(x) === 1
              ? faceColors.left
              : Math.abs(y) === 1
              ? faceColors.top
              : "#010f1c" // inner darker shade
          }
        />
      ))}
    </group>
  );
}

/* ----------- Canvas Export ----------- */
export default function PremiumGradientCube() {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <Canvas
        shadows
        camera={{ position: [5, 5, 8], fov: 40 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true }} // Transparent background
      >
        {/* Lights optimized for shine */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          color="#89d9ff"
          intensity={1.5}
          castShadow
        />
        <pointLight position={[-5, -5, 5]} color="#007fff" intensity={0.8} />

        {/* Cube */}
        <RubiksCube />

        {/* Controls */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />

        {/* Glow effect */}
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
