"use client";

import { useState } from "react";
import { portfolio } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TiltCard } from "@/components/ui/TiltCard";

export function Experience() {
  const [active, setActive] = useState(-1);

  return (
    <section id="experience" className="relative section-padding-compact bg-bg-surface/30">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Experience"
          title="Career journey"
          subtitle="Three roles across product engineering and platform leadership."
        />

        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-stagger
        >
          {portfolio.experience.map((job, index) => {
            const isActive = active === index;

            return (
              <div key={job.company} data-stagger-item>
                <TiltCard>
                  <GlassCard
                    className={`h-full cursor-pointer p-5 transition-all duration-300 ${
                      isActive ? "border-accent-cyan/30 shadow-[0_0_30px_var(--glow-cyan)]" : ""
                    }`}
                    onClick={() => setActive(isActive ? -1 : index)}
                  >
                    <p className="text-xs font-medium text-accent-cyan">{job.period}</p>
                    <h3 className="mt-1 font-display text-xl font-bold">{job.role}</h3>
                    <p className="text-base text-white/85">{job.company}</p>
                    {job.product && (
                      <p className="mt-0.5 text-xs text-text-muted">{job.product}</p>
                    )}

                    <ul className="mt-4 space-y-2">
                      {(isActive ? job.highlights : job.highlights.slice(0, 2)).map(
                        (highlight) => (
                          <li
                            key={highlight.slice(0, 40)}
                            className="flex gap-2 text-xs leading-relaxed text-text-muted"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                            {highlight}
                          </li>
                        )
                      )}
                    </ul>

                    {!isActive && job.highlights.length > 2 && (
                      <p className="mt-2 text-xs text-accent-cyan/70">Tap for more →</p>
                    )}

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.technologies
                        .slice(0, isActive ? undefined : 5)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </GlassCard>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
