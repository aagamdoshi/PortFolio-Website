import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = "",
  onClick,
}: GlassCardProps) {
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
      className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:border-white/15 ${className}`}
    >
      {children}
    </div>
  );
}
