import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helper?: string;
  error?: string;
}

const textareaBase =
  "w-full rounded-card border bg-[var(--color-bg)] px-4 py-2.5 font-body text-base text-white placeholder:text-white/30 transition-colors duration-default outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-40 disabled:cursor-not-allowed resize-y min-h-[100px]";

export default function Textarea({
  label,
  helper,
  error,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const textareaId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderClass = error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-border";

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="font-body text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`${textareaBase} ${borderClass} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : helper ? `${textareaId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="font-body text-sm text-red-400">
          {error}
        </p>
      )}
      {!error && helper && (
        <p id={`${textareaId}-helper`} className="font-body text-sm text-white/40">
          {helper}
        </p>
      )}
    </div>
  );
}
