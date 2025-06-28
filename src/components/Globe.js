"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ---------- Sparks ---------- */
function Sparks({ count = 150, spread = 1.6 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 2 * spread;
      const y = (Math.random() - 0.5) * 2 * spread;
      const z = (Math.random() - 0.5) * 2 * spread;
      arr.set([x, y, z], i * 3);
    }
    return arr;
  }, [count, spread]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    points.current.rotation.y = t * 0.25;
    points.current.material.opacity = 0.4 + 0.3 * Math.sin(t * 2);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        sizeAttenuation
        transparent
        depthWrite={false}
        color={new THREE.Color("#00faff")}
      />
    </points>
  );
}

/* ---------- Cube: bounce, blink & spin on hover ---------- */
function GlowingCube() {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    /* spin faster when hovered */
    const spinSpeed = hovered ? 1.6 : 0.4;
    cubeRef.current.rotation.x = t * spinSpeed;
    cubeRef.current.rotation.y = t * spinSpeed;

    /* bounce scale */
    const bounce = hovered ? 1.12 + 0.02 * Math.sin(t * 8) : 1;
    cubeRef.current.scale.lerp(new THREE.Vector3(bounce, bounce, bounce), 0.1);

    /* blink opacity */
    cubeRef.current.material.opacity = hovered
      ? 0.5 + 0.4 * Math.abs(Math.sin(t * 6))
      : 1;
  });

  return (
    <Box
      args={[2, 2, 2]}
      ref={cubeRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshBasicMaterial wireframe color="#00d9ff" transparent opacity={1} />
    </Box>
  );
}

/* ---------- Main Canvas Export ---------- */
export default function CubeWithSparks() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[-3, 2, 3]} color="#00ffff" intensity={0.85} />

      <GlowingCube />
      <Sparks count={150} spread={1.6} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />

      <EffectComposer>
        <Bloom
          intensity={1.4}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.8}
        />
      </EffectComposer>
    </Canvas>
  );
}
