"use client";

import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { portfolio } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SocialLink } from "@/components/ui/SocialLink";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { submitContactForm } from "@/lib/formspree";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitContactForm({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    });

    setLoading(false);

    if (result.ok) {
      toast.success(result.message);
      form.reset();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <section id="contact" className="relative section-padding-compact">
      <div
        className="pointer-events-none absolute inset-0"
        data-parallax
        data-speed="0.2"
      >
        <div className="absolute bottom-0 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-accent-cyan/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Contact"
          title="Let's connect"
        />

        <div className="grid gap-8 lg:grid-cols-2" data-stagger>
          <GlassCard data-stagger-item>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-accent-cyan/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-accent-cyan/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-accent-cyan/50"
                  placeholder="Tell me about your project..."
                />
              </div>
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-full border border-accent-cyan/30 bg-gradient-to-r from-accent-cyan/20 to-accent-violet/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:from-accent-cyan/30 hover:to-accent-violet/30 hover:shadow-[0_0_30px_var(--glow-cyan)] disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </GlassCard>

          <div className="space-y-6" data-stagger-item>
            <GlassCard>
              <h3 className="mb-4 font-display text-lg font-semibold">
                Direct contact
              </h3>
              <div className="space-y-1">
                <a
                  href={`mailto:${portfolio.contact.email}`}
                  className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent-cyan group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10">
                    <SocialIcon name="email" className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white group-hover:text-accent-cyan">
                      Email
                    </span>
                    <span className="block truncate text-xs text-text-muted">
                      {portfolio.contact.email}
                    </span>
                  </span>
                </a>
                <a
                  href={`tel:${portfolio.contact.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent-cyan group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10">
                    <SocialIcon name="phone" className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white group-hover:text-accent-cyan">
                      Phone
                    </span>
                    <span className="block text-xs text-text-muted">
                      {portfolio.contact.phone}
                    </span>
                  </span>
                </a>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="mb-4 font-display text-lg font-semibold">
                Social profiles
              </h3>
              <div className="space-y-1">
                <SocialLink
                  href={portfolio.contact.linkedin}
                  icon="linkedin"
                  label="LinkedIn"
                  sublabel="linkedin.com/in/aagam-doshi"
                />
                <SocialLink
                  href={portfolio.contact.github}
                  icon="github"
                  label="GitHub"
                  sublabel="github.com/aagamdoshi"
                />
                <SocialLink
                  href={portfolio.contact.resumeUrl}
                  icon="resume"
                  label="Resume"
                  sublabel="Download CV (PDF)"
                  download="Aagam_Doshi_Resume.pdf"
                  external={false}
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
