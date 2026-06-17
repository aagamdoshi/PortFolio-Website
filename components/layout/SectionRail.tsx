"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "@/hooks/useLenisSmooth";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "beyond", label: "More" },
  { id: "contact", label: "Contact" },
];

export function SectionRail() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const currentIndex = sections.findIndex((s) => s.id === active);

  const go = (dir: -1 | 1) => {
    const next = sections[currentIndex + dir];
    if (next) scrollToSection(next.id);
  };

  return (
    <aside
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex"
      aria-label="Section navigation"
    >
      <button
        type="button"
        onClick={() => go(-1)}
        disabled={currentIndex <= 0}
        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-bg-deep/50 text-sm text-text-muted transition-colors hover:border-accent-cyan/40 hover:bg-bg-deep/70 hover:text-accent-cyan disabled:opacity-30"
        aria-label="Previous section"
      >
        ↑
      </button>

      <div className="flex flex-col items-end gap-1 py-1">
        {sections.map(({ id, label }) => {
          const showLabel = hovered === id || active === id;
          return (
            <div
              key={id}
              className="relative flex h-7 w-7 items-center justify-center"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md border border-white/10 bg-bg-elevated px-2.5 py-1 text-[11px] font-medium text-white shadow-lg transition-all duration-200 ${
                  showLabel
                    ? "translate-x-0 opacity-100"
                    : "translate-x-1 opacity-0"
                }`}
              >
                {label}
              </span>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                aria-label={`Go to ${label}`}
                aria-current={active === id ? "true" : undefined}
                className={`pointer-events-auto h-2.5 w-2.5 shrink-0 rounded-full transition-all ${
                  active === id
                    ? "scale-125 bg-accent-cyan shadow-[0_0_8px_var(--glow-cyan)]"
                    : "bg-white/25 hover:bg-white/55"
                }`}
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => go(1)}
        disabled={currentIndex >= sections.length - 1}
        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-bg-deep/50 text-sm text-text-muted transition-colors hover:border-accent-cyan/40 hover:bg-bg-deep/70 hover:text-accent-cyan disabled:opacity-30"
        aria-label="Next section"
      >
        ↓
      </button>
    </aside>
  );
}
