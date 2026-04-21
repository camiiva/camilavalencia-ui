import React from "react";

export interface DividerProps {
  label?: React.ReactNode;
  className?: string;
}

export default function Divider({ label, className = "" }: DividerProps) {
  if (!label) {
    return <hr className={`border-t border-border ${className}`} />;
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <hr className="flex-1 border-t border-border" />
      <span className="shrink-0 font-body text-sm text-white/40">{label}</span>
      <hr className="flex-1 border-t border-border" />
    </div>
  );
}
