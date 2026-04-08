import React from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "tertiary-no-padding";

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-heading text-base font-medium leading-[1.1] tracking-[-0.2px] transition-all duration-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.97] md:text-[20px]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-pill bg-accent px-6 py-2.5 text-text-dark hover:brightness-90 active:brightness-75 md:px-8 md:py-3",
  secondary:
    "rounded-pill border-2 border-accent bg-transparent px-6 py-2.5 text-accent hover:bg-accent/10 active:bg-accent/20 md:px-8 md:py-3",
  tertiary:
    "rounded-pill bg-transparent px-6 py-2.5 text-accent hover:opacity-70 md:px-8 md:py-3",
  "tertiary-no-padding":
    "bg-transparent p-0 text-accent hover:opacity-70",
};

export default function Button({
  href,
  children,
  className = "",
  variant = "primary",
  icon,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <span className="inline-flex shrink-0 [&>svg]:h-5 [&>svg]:w-5">{icon}</span>}
    </a>
  );
}
