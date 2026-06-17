"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/content/portfolio";
import { scrollToSection } from "@/hooks/useLenisSmooth";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#beyond", label: "More" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "border-b border-white/5 bg-bg-deep/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <span className="gradient-text">{portfolio.name.split(" ")[0]}</span>
          <span className="text-white/60">.</span>
        </a>

        <ul className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-accent-cyan"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/5 bg-bg-deep/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg text-text-muted"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
