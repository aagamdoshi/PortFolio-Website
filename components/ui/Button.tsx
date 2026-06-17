import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  external?: boolean;
  download?: string;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external,
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const variants = {
    primary:
      "bg-gradient-to-r from-accent-cyan/20 to-accent-violet/20 border border-accent-cyan/30 text-white hover:from-accent-cyan/30 hover:to-accent-violet/30 hover:shadow-[0_0_30px_var(--glow-cyan)]",
    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20",
    ghost: "text-text-muted hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (download) {
      return (
        <a href={href} download={download} className={classes}>
          {children}
        </a>
      );
    }
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
