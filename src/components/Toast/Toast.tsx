import React from "react";

export type ToastVariant = "info" | "success" | "error" | "warning";

export interface ToastProps {
  message: React.ReactNode;
  variant?: ToastVariant;
  onDismiss?: () => void;
  className?: string;
}

const icons: Record<ToastVariant, React.ReactNode> = {
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7v4M8 5.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 8.5L7 10.5L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 6L10 10M10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2L14.5 13H1.5L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7v3M8 11.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const variantStyles: Record<ToastVariant, string> = {
  info:    "text-accent border-accent/30 bg-accent/5",
  success: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  error:   "text-red-400 border-red-400/30 bg-red-400/5",
  warning: "text-amber-400 border-amber-400/30 bg-amber-400/5",
};

export default function Toast({
  message,
  variant = "info",
  onDismiss,
  className = "",
}: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`inline-flex items-start gap-3 rounded-card border px-4 py-3 font-body text-sm shadow-lg ${variantStyles[variant]} ${className}`}
    >
      <span className="mt-px shrink-0">{icons[variant]}</span>
      <span className="flex-1 text-white/80">{message}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          className="ml-1 shrink-0 opacity-40 transition-opacity duration-fast hover:opacity-100"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

export interface ToastStackProps {
  children: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

const positions: Record<NonNullable<ToastStackProps["position"]>, string> = {
  "top-right":    "top-4 right-4",
  "top-left":     "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left":  "bottom-4 left-4",
};

export function ToastStack({ children, position = "bottom-right" }: ToastStackProps) {
  return (
    <div className={`fixed z-50 flex flex-col gap-2 ${positions[position]}`}>
      {children}
    </div>
  );
}
