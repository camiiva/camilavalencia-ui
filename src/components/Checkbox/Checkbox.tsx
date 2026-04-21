import React from "react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  indeterminate?: boolean;
}

export default function Checkbox({
  label,
  indeterminate,
  className = "",
  id,
  ...props
}: CheckboxProps) {
  const ref = React.useRef<HTMLInputElement>(null);
  const checkboxId = id ?? (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);

  return (
    <label
      htmlFor={checkboxId}
      className={`inline-flex cursor-pointer items-center gap-2.5 ${props.disabled ? "cursor-not-allowed opacity-40" : ""} ${className}`}
    >
      <span className="relative inline-flex h-4 w-4 shrink-0">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className="peer h-4 w-4 cursor-pointer appearance-none rounded-[4px] border border-border bg-[var(--color-bg)] transition-colors duration-default checked:border-accent checked:bg-accent indeterminate:border-accent indeterminate:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed"
          {...props}
        />
        <span className="pointer-events-none absolute inset-0 hidden items-center justify-center peer-checked:flex">
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="#0a2326" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="pointer-events-none absolute inset-0 hidden items-center justify-center peer-indeterminate:flex">
          <svg width="8" height="2" viewBox="0 0 8 2" fill="none">
            <path d="M1 1H7" stroke="#0a2326" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </span>
      {label && (
        <span className="font-body text-sm text-white/80 select-none">{label}</span>
      )}
    </label>
  );
}
