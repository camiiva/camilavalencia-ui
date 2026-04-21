import React from "react";

export type BadgeVariant = "default" | "accent" | "muted";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-surface border border-border text-accent",
  accent:  "bg-accent text-text-dark",
  muted:   "bg-surface border border-border text-white/50",
};

const sizes: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill font-body font-medium leading-none ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
