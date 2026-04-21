import React from "react";

export type CardPadding = "none" | "sm" | "md" | "lg";
export type CardVariant = "default" | "bordered" | "flat";

export interface CardProps {
  children: React.ReactNode;
  padding?: CardPadding;
  variant?: CardVariant;
  className?: string;
  as?: React.ElementType;
}

const paddings: Record<CardPadding, string> = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
};

const variants: Record<CardVariant, string> = {
  default:  "bg-surface border border-border",
  bordered: "bg-transparent border border-border",
  flat:     "bg-surface",
};

export default function Card({
  children,
  padding = "md",
  variant = "default",
  className = "",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag className={`rounded-card ${variants[variant]} ${paddings[padding]} ${className}`}>
      {children}
    </Tag>
  );
}
