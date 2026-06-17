"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function ScrollOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const p = typeof window !== "undefined" ? (window.__scrollProgress ?? 0) : 0;
    const t = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.25 + p * Math.PI * 1.5;
      meshRef.current.rotation.y = t * 0.35 + p * Math.PI * 3;
      meshRef.current.position.x = -3.5 + p * 7;
      meshRef.current.position.y = 1.8 - p * 3.6 + Math.sin(p * Math.PI * 2) * 0.6;
      meshRef.current.position.z = Math.cos(p * Math.PI) * 1.8;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15 - p * Math.PI * 2;
      ringRef.current.rotation.x = Math.PI / 2.5 + p * 0.4;
      ringRef.current.position.x = -3.5 + p * 7;
      ringRef.current.position.y = 1.8 - p * 3.6;
    }
  });

  return (
    <>
      <Float speed={2} floatIntensity={0.35}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.3, 1]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.28} />
        </mesh>
      </Float>
      <mesh ref={ringRef}>
        <torusGeometry args={[2.1, 0.03, 16, 80]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.32} />
      </mesh>
    </>
  );
}

function ScrollBackdropCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#22d3ee" />
      <ScrollOrb />
    </Canvas>
  );
}

export function ScrollBackdrop() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.innerWidth < 768;
    setEnabled(!reduced && !narrow);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] opacity-60"
      aria-hidden
    >
      <ScrollBackdropCanvas />
    </div>
  );
}
