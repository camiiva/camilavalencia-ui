import React from "react";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

export interface RadioGroupProps {
  children: React.ReactNode;
  legend?: string;
  className?: string;
}

export function RadioGroup({ children, legend, className = "" }: RadioGroupProps) {
  return (
    <fieldset className={`flex flex-col gap-3 border-0 p-0 m-0 ${className}`}>
      {legend && (
        <legend className="font-body text-sm font-medium text-white/80 mb-1">{legend}</legend>
      )}
      {children}
    </fieldset>
  );
}

export default function Radio({
  label,
  className = "",
  id,
  ...props
}: RadioProps) {
  const radioId = id ?? (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <label
      htmlFor={radioId}
      className={`inline-flex cursor-pointer items-center gap-2.5 ${props.disabled ? "cursor-not-allowed opacity-40" : ""} ${className}`}
    >
      <span className="relative inline-flex h-4 w-4 shrink-0">
        <input
          type="radio"
          id={radioId}
          className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-border bg-[var(--color-bg)] transition-colors duration-default checked:border-accent checked:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed"
          {...props}
        />
        <span className="pointer-events-none absolute inset-0 hidden items-center justify-center peer-checked:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-text-dark" />
        </span>
      </span>
      {label && (
        <span className="font-body text-sm text-white/80 select-none">{label}</span>
      )}
    </label>
  );
}
