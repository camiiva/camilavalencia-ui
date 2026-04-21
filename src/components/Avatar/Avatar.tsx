import React from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  className?: string;
}

const sizes: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-16 w-16 text-xl",
};

function getInitials(alt?: string, initials?: string): string {
  if (initials) return initials.slice(0, 2).toUpperCase();
  if (!alt) return "?";
  const words = alt.trim().split(/\s+/);
  return words.length >= 2
    ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
    : alt.slice(0, 2).toUpperCase();
}

export default function Avatar({
  src,
  alt = "",
  initials,
  size = "md",
  className = "",
}: AvatarProps) {
  const base = `inline-flex shrink-0 items-center justify-center rounded-full bg-surface border border-border font-body font-medium text-accent select-none overflow-hidden ${sizes[size]} ${className}`;

  if (src) {
    return <img src={src} alt={alt} className={`${base} object-cover`} />;
  }

  return (
    <span className={base} aria-label={alt}>
      {getInitials(alt, initials)}
    </span>
  );
}
