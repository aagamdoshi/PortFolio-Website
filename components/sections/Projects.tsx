"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);
  const total = portfolio.projects.length;

  useEffect(() => {
    const horizontal = sectionRef.current?.querySelector<HTMLElement>(
      "[data-horizontal-scroll]"
    );
    const track = sectionRef.current?.querySelector<HTMLElement>(
      "[data-horizontal-track]"
    );
    if (!horizontal || !track || window.innerWidth < 1024) return;

    const slides = track.querySelectorAll<HTMLElement>("[data-project-slide]");
    const getScroll = () => Math.max(track.scrollWidth - horizontal.offsetWidth, 100);

    const tween = gsap.to(track, {
      x: () => -getScroll(),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        pin: true,
        scrub: 1,
        end: () => `+=${Math.max(getScroll(), 100)}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          setHintVisible(self.progress < 0.92);
          const slideProgress = self.progress * Math.max(total - 1, 1);
          setActiveIndex(Math.min(Math.round(slideProgress), total - 1));

          slides.forEach((slide, i) => {
            const dist = Math.abs(i - slideProgress);
            const scale = Math.max(0.9, 1 - dist * 0.05);
            const opacity = Math.max(0.4, 1 - dist * 0.35);
            const y = dist * 24;
            gsap.set(slide, {
              scale,
              opacity,
              y,
              transformOrigin: "center center",
            });

            const img = slide.querySelector<HTMLElement>("[data-project-image]");
            if (img) {
              gsap.set(img, { x: dist * -40 * Math.sign(i - slideProgress) });
            }
          });
        },
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [total]);

  return (
    <section id="projects" ref={sectionRef} className="relative bg-bg-surface/40">
      <div className="section-padding-compact pb-10 pt-14 lg:pb-0">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Featured work"
            title="Selected projects"
            subtitle="Scroll to explore — each project fills the viewport as you move."
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6 pb-14 lg:hidden md:px-10">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div
        data-horizontal-scroll
        className="relative hidden h-screen overflow-hidden lg:block"
      >
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-bg-deep/30 via-transparent to-bg-deep/20" />

        <div className="pointer-events-none absolute left-8 top-8 z-30 font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
          Featured
        </div>

        <div className="pointer-events-none absolute right-8 top-8 z-30 font-mono text-sm text-accent-cyan">
          {String(activeIndex + 1).padStart(2, "0")}
          <span className="text-text-muted"> / {String(total).padStart(2, "0")}</span>
        </div>

        {hintVisible && (
          <div className="pointer-events-none absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.25em] text-text-muted">
            <span className="animate-pulse">Scroll</span>
            <span className="text-accent-cyan">↓</span>
          </div>
        )}

        <div data-horizontal-track className="absolute left-0 top-0 flex h-full items-center">
          {portfolio.projects.map((project, i) => (
            <article
              key={project.title}
              data-project-slide
              className="flex h-full w-screen shrink-0 items-center px-[8vw]"
            >
              <div className="grid w-full max-w-7xl grid-cols-12 items-center gap-8">
                <div className="col-span-12 lg:col-span-7">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
                    <div
                      data-project-image
                      className="absolute inset-0 will-change-transform"
                    >
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          priority={i === 0}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-bg-deep/10 to-transparent" />
                    </div>
                    {project.honor && (
                      <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-200 backdrop-blur">
                        <span>🏆</span>
                        {project.honor}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-5">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
                    Project {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.05]">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <Button href={project.liveUrl} external variant="primary">
                        Live demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button href={project.githubUrl} external variant="secondary">
                        Source
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div
            data-project-slide
            className="flex h-full w-[50vw] shrink-0 items-center justify-center px-[8vw]"
          >
            <p className="max-w-md font-display text-3xl leading-snug text-text-muted">
              More on{" "}
              <a
                href={portfolio.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text underline-offset-4 hover:underline"
              >
                GitHub →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof portfolio.projects)[0];
}) {
  return (
    <GlassCard className="group relative overflow-hidden !p-0">
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        {project.honor && (
          <div className="absolute left-3 top-3 z-10 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold text-amber-200">
            🏆 {project.honor}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-bg-deep/20 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex gap-2">
          {project.liveUrl && (
            <Button href={project.liveUrl} external variant="primary" className="!text-xs">
              Live demo
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} external variant="secondary" className="!text-xs">
              Source
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
