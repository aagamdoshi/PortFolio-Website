import { portfolio } from "@/content/portfolio";
import { SocialIcon } from "@/components/ui/SocialIcons";

const footerLinks = [
  {
    href: portfolio.contact.github,
    icon: "github" as const,
    label: "GitHub",
  },
  {
    href: portfolio.contact.linkedin,
    icon: "linkedin" as const,
    label: "LinkedIn",
  },
  {
    href: `mailto:${portfolio.contact.email}`,
    icon: "email" as const,
    label: "Email",
  },
];

export function Footer({ className = "" }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t border-white/5 bg-bg-surface/50 py-12 ${className}`}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
        <p className="text-sm text-text-muted">
          © {year} {portfolio.name}. Built with Next.js, Three.js & GSAP.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {footerLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-cyan"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent-cyan transition-colors group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10">
                <SocialIcon name={icon} className="h-4 w-4" />
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
