import React from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  helper?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  selectSize?: "sm" | "md";
}

const selectBase =
  "w-full cursor-pointer appearance-none rounded-card border bg-[var(--color-bg)] font-body text-white transition-colors duration-default outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-40 disabled:cursor-not-allowed";

const selectSizes = {
  sm: "px-3 py-1.5 pr-8 text-sm",
  md: "px-4 py-2.5 pr-10 text-base",
};

export default function Select({
  label,
  helper,
  error,
  options,
  placeholder,
  selectSize = "md",
  className = "",
  id,
  ...props
}: SelectProps) {
  const selectId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderClass = error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-border";

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="font-body text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={`${selectBase} ${borderClass} ${selectSizes[selectSize]} ${className}`}
          aria-invalid={!!error}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {error && (
        <p className="font-body text-sm text-red-400">{error}</p>
      )}
      {!error && helper && (
        <p className="font-body text-sm text-white/40">{helper}</p>
      )}
    </div>
  );
}
