import React from "react";

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: React.ReactNode;
  size?: "sm" | "md";
}

const track = {
  sm: "h-4 w-7",
  md: "h-5 w-9",
};
const thumb = {
  sm: "h-3 w-3 translate-x-0.5 peer-checked:translate-x-3.5",
  md: "h-3.5 w-3.5 translate-x-0.5 peer-checked:translate-x-[1.125rem]",
};

export default function Toggle({
  label,
  size = "md",
  className = "",
  id,
  ...props
}: ToggleProps) {
  const toggleId = id ?? (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <label
      htmlFor={toggleId}
      className={`inline-flex cursor-pointer items-center gap-3 ${props.disabled ? "cursor-not-allowed opacity-40" : ""} ${className}`}
    >
      <span className="relative inline-flex shrink-0">
        <input
          type="checkbox"
          role="switch"
          id={toggleId}
          className={`peer sr-only`}
          {...props}
        />
        <span
          className={`block rounded-pill border border-border bg-surface transition-colors duration-default peer-checked:border-accent peer-checked:bg-accent/20 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent ${track[size]}`}
        />
        <span
          className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-white/40 transition-all duration-default peer-checked:bg-accent ${thumb[size]}`}
        />
      </span>
      {label && (
        <span className="font-body text-sm text-white/80 select-none">{label}</span>
      )}
    </label>
  );
}
