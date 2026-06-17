import { portfolio } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Skills() {
  return (
    <section id="skills" className="relative section-padding-compact">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Skills"
          title="Tech stack"
          subtitle="Full toolkit across languages, AI, cloud, and architecture."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {portfolio.skills.map((category) => (
            <GlassCard key={category.name} data-stagger-item className="!p-5">
              <h3 className="mb-3 font-display text-sm font-semibold text-accent-cyan">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-text-muted transition-colors hover:border-accent-cyan/30 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
