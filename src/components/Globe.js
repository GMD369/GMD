"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useState, useEffect } from "react";

function CubePiece({ position, color }) {
  return (
    <RoundedBox
      args={[0.92, 0.92, 0.92]} // Thoda chota size for smaller globe
      radius={0.22} // Edges thoda aur rounded
      smoothness={6} // Smoother corners
      position={position}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={color}
        roughness={0.22}
        metalness={0.4}
        emissive={"#003d66"}
        emissiveIntensity={0.06}
      />
    </RoundedBox>
  );
}

function RubiksCube({ isMobile }) {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    cubeRef.current.rotation.y = t * (hovered ? 0.6 : 0.3);
    cubeRef.current.rotation.x = t * 0.15;
  });

  const faceColors = {
    front: "#012b52",
    back: "#02345c",
    left: "#013e73",
    right: "#014e8f",
    top: "#02223d",
    bottom: "#011726",
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
      scale={isMobile ? 1.5 : 1.2} // Globe thoda chota for both mobile & desktop
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
              : "#010f1c"
          }
        />
      ))}
    </group>
  );
}

export default function PremiumGradientCube() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <Canvas
        shadows
        camera={{
          position: isMobile ? [6.5, 6.5, 9.5] : [5, 5, 8], // camera thoda door mobile par
          fov: 40,
        }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={isMobile ? 0.4 : 0.3} />
        <directionalLight
          position={[5, 8, 5]}
          color="#89d9ff"
          intensity={isMobile ? 1.7 : 1.5}
          castShadow
        />
        <pointLight
          position={[-5, -5, 5]}
          color="#007fff"
          intensity={isMobile ? 1 : 0.8}
        />

        <RubiksCube isMobile={isMobile} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate />

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
