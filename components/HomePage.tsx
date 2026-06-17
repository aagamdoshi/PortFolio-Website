"use client";

import dynamic from "next/dynamic";
import { useLenisSmooth } from "@/hooks/useLenisSmooth";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionRail } from "@/components/layout/SectionRail";
import { CursorGlow } from "@/components/interactive/CursorGlow";
import { ScrollProgress } from "@/components/interactive/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Beyond } from "@/components/sections/Beyond";
import { Contact } from "@/components/sections/Contact";

const ScrollBackdrop = dynamic(
  () =>
    import("@/components/three/ScrollBackdrop").then((m) => m.ScrollBackdrop),
  { ssr: false }
);

export function HomePage() {
  useLenisSmooth();

  return (
    <>
      <ScrollBackdrop />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <SectionRail />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Beyond />
        <Contact />
      </main>
      <Footer className="relative z-[2]" />
    </>
  );
}
