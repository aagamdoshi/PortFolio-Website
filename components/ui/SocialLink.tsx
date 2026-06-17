import { SocialIcon, SocialIconName } from "@/components/ui/SocialIcons";

interface SocialLinkProps {
  href: string;
  icon: SocialIconName;
  label: string;
  sublabel?: string;
  external?: boolean;
  download?: string;
  className?: string;
}

export function SocialLink({
  href,
  icon,
  label,
  sublabel,
  external = true,
  download,
  className = "",
}: SocialLinkProps) {
  const isExternal =
    !download &&
    (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));

  return (
    <a
      href={href}
      {...(download ? { download } : {})}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-white/10 hover:bg-white/[0.03] ${className}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent-cyan transition-colors group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10">
        <SocialIcon name={icon} className="h-[18px] w-[18px]" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-white transition-colors group-hover:text-accent-cyan">
          {label}
        </span>
        {sublabel && (
          <span className="block truncate text-xs text-text-muted">{sublabel}</span>
        )}
      </span>
    </a>
  );
}
