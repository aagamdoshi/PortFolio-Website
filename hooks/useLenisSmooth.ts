"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __lenis?: Lenis;
    __scrollProgress?: number;
  }
}

function setupScrollAnimations() {
  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      gsap.from(el, {
        y: 72,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((container) => {
      const items = container.querySelectorAll(":scope > [data-stagger-item]");
      if (!items.length) return;

      gsap.from(items, {
        y: 56,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 82%",
          once: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "0.25");
      gsap.to(el, {
        yPercent: speed * -100,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    const heroContent = document.querySelector("[data-hero-content]");
    if (heroContent) {
      gsap.to(heroContent, {
        yPercent: 28,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

  });

  ScrollTrigger.refresh();
  return ctx;
}

export function useLenisSmooth() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.querySelectorAll("[data-reveal], [data-stagger-item]").forEach((el) => {
        gsap.set(el, { opacity: 1, y: 0 });
      });
      return;
    }

    const lenis = new Lenis({
      lerp: 0.085,
      duration: 1.35,
      smoothWheel: true,
    });

    window.__lenis = lenis;

    lenis.on("scroll", (instance) => {
      ScrollTrigger.update();
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      window.__scrollProgress = limit > 0 ? instance.scroll / limit : 0;
    });

    const lenisRaf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);

    const animCtx = setupScrollAnimations();

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 400);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("resize", onResize);
      animCtx.revert();
      gsap.ticker.remove(lenisRaf);
      lenis.destroy();
      delete window.__lenis;
      delete window.__scrollProgress;
    };
  }, []);
}

export function scrollToSection(target: string) {
  const selector = target.startsWith("#") ? target : `#${target}`;
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(selector, { offset: -72, duration: 1.4 });
    return;
  }
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}
