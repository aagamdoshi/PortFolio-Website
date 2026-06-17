interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 md:mb-10" data-reveal>
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-base text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
