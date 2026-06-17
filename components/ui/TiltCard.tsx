"use client";

import { useRef, useState, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`
    );
  };

  const onLeave = () => setTransform("");

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transform }}
    >
      {children}
    </div>
  );
}
