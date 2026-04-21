import React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helper?: string;
  error?: string;
  inputSize?: "sm" | "md";
}

const inputBase =
  "w-full rounded-card border bg-[var(--color-bg)] font-body text-white placeholder:text-white/30 transition-colors duration-default outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-40 disabled:cursor-not-allowed";

const inputSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-base",
};

export default function Input({
  label,
  helper,
  error,
  inputSize = "md",
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderClass = error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-border";

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="font-body text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${inputBase} ${borderClass} ${inputSizes[inputSize]} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="font-body text-sm text-red-400">
          {error}
        </p>
      )}
      {!error && helper && (
        <p id={`${inputId}-helper`} className="font-body text-sm text-white/40">
          {helper}
        </p>
      )}
    </div>
  );
}
