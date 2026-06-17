"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let frame = 0;
    const tick = () => {
      const p = window.__scrollProgress ?? 0;
      setProgress(Math.round(p * 100));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="fixed bottom-6 left-6 z-50 hidden font-mono text-[11px] tracking-widest text-text-muted md:block"
      aria-hidden
    >
      <span className="text-accent-cyan">{String(progress).padStart(3, "0")}</span>
      <span className="mx-2 text-white/20">/</span>
      <span>100</span>
    </div>
  );
}
