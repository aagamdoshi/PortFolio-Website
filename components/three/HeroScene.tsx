"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 1500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#22d3ee"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function WireframeIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        state.clock.elapsedTime * 0.15 + pointer.y * 0.4;
      meshRef.current.rotation.y =
        state.clock.elapsedTime * 0.2 + pointer.x * 0.4;
      meshRef.current.position.x = pointer.x * 0.5;
      meshRef.current.position.y = pointer.y * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial
          color="#a78bfa"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

function InnerRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.x = pointer.y * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[3.5, 0.02, 16, 100]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#22d3ee" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#a78bfa" />
      <Stars radius={50} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />
      <ParticleField />
      <WireframeIcosahedron />
      <InnerRing />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
