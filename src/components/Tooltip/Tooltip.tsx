import React from "react";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  placement?: TooltipPlacement;
  className?: string;
}

const placements: Record<TooltipPlacement, { wrapper: string; tooltip: string; arrow: string }> = {
  top: {
    wrapper: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    tooltip: "",
    arrow: "top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-surface",
  },
  bottom: {
    wrapper: "top-full left-1/2 -translate-x-1/2 mt-2",
    tooltip: "",
    arrow: "bottom-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-surface",
  },
  left: {
    wrapper: "right-full top-1/2 -translate-y-1/2 mr-2",
    tooltip: "",
    arrow: "left-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-surface",
  },
  right: {
    wrapper: "left-full top-1/2 -translate-y-1/2 ml-2",
    tooltip: "",
    arrow: "right-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-surface",
  },
};

export default function Tooltip({
  content,
  children,
  placement = "top",
  className = "",
}: TooltipProps) {
  const p = placements[placement];

  return (
    <span className={`group relative inline-flex ${className}`}>
      {children}
      <span
        role="tooltip"
        className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-card bg-surface border border-border px-2.5 py-1.5 font-body text-xs text-white/80 opacity-0 transition-opacity duration-fast group-hover:opacity-100 group-focus-within:opacity-100 ${p.wrapper}`}
      >
        {content}
        <span className={`absolute h-0 w-0 ${p.arrow}`} />
      </span>
    </span>
  );
}
