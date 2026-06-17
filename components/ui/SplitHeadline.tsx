"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SplitHeadlineProps {
  lines: string[];
  accentIndices?: number[];
  className?: string;
}

export function SplitHeadline({
  lines,
  accentIndices = [],
  className = "",
}: SplitHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const words = ref.current?.querySelectorAll("[data-word-inner]");
    if (!words?.length || reduced) return;

    gsap.from(words, {
      yPercent: 110,
      opacity: 0,
      duration: 1.1,
      stagger: 0.07,
      ease: "power4.out",
      delay: 0.15,
    });
  }, []);

  return (
    <h1
      ref={ref}
      className={`font-display font-bold leading-[0.92] tracking-tight ${className}`}
    >
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden py-0.5">
          <span
            data-word-inner
            className={`inline-block ${
              accentIndices.includes(i) ? "gradient-text" : "text-white"
            }`}
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
