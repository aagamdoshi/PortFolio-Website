"use client";

import Image from "next/image";
import { portfolio } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Beyond() {
  const honor = portfolio.honors[0];

  return (
    <section id="beyond" className="relative section-padding-compact">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Beyond Code"
          title="Education & community"
        />

        {honor && (
          <div className="mb-10" data-reveal>
            <GlassCard className="relative overflow-hidden !p-0">
              <div className="grid md:grid-cols-[1.1fr_1fr]">
                <div className="relative min-h-[220px] overflow-hidden bg-gradient-to-br from-amber-400/10 via-bg-elevated to-accent-violet/10 md:min-h-[280px]">
                  <Image
                    src={honor.image}
                    alt={honor.event}
                    fill
                    className="object-cover opacity-80"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/20 to-bg-deep/70" />
                  <div className="absolute left-5 top-5 rounded-full border border-amber-400/40 bg-amber-400/15 px-4 py-1.5 text-sm font-semibold text-amber-100 backdrop-blur">
                    🏆 {honor.placement}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
                    {honor.date} · {honor.venue}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight md:text-3xl">
                    {honor.event}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
                    {honor.description}
                  </p>
                  <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-amber-400/25 bg-amber-400/10 px-3 py-2 text-sm font-medium text-amber-100">
                    <span aria-hidden>💰</span>
                    {honor.prize}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {honor.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-2" data-stagger>
          <div data-stagger-item className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-accent-cyan">Education</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {portfolio.education.map((edu) => (
                  <GlassCard key={edu.degree} className="!p-4">
                    <p className="text-xs text-accent-cyan">{edu.period}</p>
                    <h4 className="mt-1 font-display text-sm font-semibold leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-xs text-text-muted">{edu.institution}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-accent-violet">Certifications</h3>
              <GlassCard className="!p-4">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {portfolio.certifications.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-start gap-2 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2 text-xs leading-relaxed text-text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>

          <div data-stagger-item className="space-y-4">
            <h3 className="text-sm font-semibold text-accent-cyan">Community events</h3>
            <div className="flex flex-col gap-4">
              {portfolio.community.map((event) => (
                <GlassCard
                  key={event.title}
                  className="group overflow-hidden !p-0"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold">
                      {event.title}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {portfolio.communityGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-text-muted"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
