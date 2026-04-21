import React from "react";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  helper?: string;
  error?: string;
  disabled?: boolean;
  dropdownSize?: "sm" | "md";
  className?: string;
  id?: string;
}

const triggerBase =
  "flex w-full cursor-pointer items-center justify-between gap-2 rounded-card border bg-[var(--color-bg)] font-body text-white transition-colors duration-default outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-40";

const triggerSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-base",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      className={`shrink-0 text-white/40 transition-transform duration-fast ${open ? "rotate-180" : ""}`}
    >
      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="shrink-0 text-accent">
      <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  helper,
  error,
  disabled = false,
  dropdownSize = "md",
  className = "",
  id,
}: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const listboxRef = React.useRef<HTMLUListElement>(null);
  const triggerId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : "dropdown");
  const listboxId = `${triggerId}-listbox`;

  const selectedOption = options.find((o) => o.value === value);
  const borderClass = error
    ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500"
    : open
    ? "border-accent ring-1 ring-accent"
    : "border-border";

  // Close on outside click
  React.useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  // Scroll active option into view
  React.useEffect(() => {
    if (!open || activeIndex < 0) return;
    const item = listboxRef.current?.children[activeIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  function getEnabledIndex(from: number, direction: 1 | -1): number {
    let i = from + direction;
    while (i >= 0 && i < options.length) {
      if (!options[i].disabled) return i;
      i += direction;
    }
    return from;
  }

  function handleTriggerKeyDown(e: React.KeyboardEvent) {
    if (disabled) return;
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (open && activeIndex >= 0 && !options[activeIndex].disabled) {
          selectOption(options[activeIndex].value);
        } else {
          openDropdown();
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!open) {
          openDropdown();
        } else {
          setActiveIndex((i) => getEnabledIndex(i, 1));
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!open) {
          openDropdown();
        } else {
          setActiveIndex((i) => getEnabledIndex(i === -1 ? options.length : i, -1));
        }
        break;
      case "Escape":
      case "Tab":
        setOpen(false);
        setActiveIndex(-1);
        break;
    }
  }

  function openDropdown() {
    setOpen(true);
    const selectedIndex = options.findIndex((o) => o.value === value);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : getEnabledIndex(-1, 1));
  }

  function selectOption(val: string) {
    onChange?.(val);
    setOpen(false);
    setActiveIndex(-1);
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label id={`${triggerId}-label`} htmlFor={triggerId} className="font-body text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <div ref={containerRef} className="relative">
        <button
          type="button"
          id={triggerId}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-labelledby={label ? `${triggerId}-label` : undefined}
          aria-activedescendant={open && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined}
          aria-invalid={!!error}
          aria-disabled={disabled}
          disabled={disabled}
          onClick={() => (open ? (setOpen(false), setActiveIndex(-1)) : openDropdown())}
          onKeyDown={handleTriggerKeyDown}
          className={`${triggerBase} ${borderClass} ${triggerSizes[dropdownSize]}`}
        >
          <span className={selectedOption ? "text-white" : "text-white/30"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronIcon open={open} />
        </button>

        {open && (
          <ul
            ref={listboxRef}
            id={listboxId}
            role="listbox"
            aria-label={label ?? "Options"}
            className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 max-h-60 overflow-y-auto rounded-card border border-border bg-surface py-1 shadow-lg"
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;
              return (
                <li
                  key={option.value}
                  id={`${listboxId}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  onPointerEnter={() => !option.disabled && setActiveIndex(index)}
                  onClick={() => !option.disabled && selectOption(option.value)}
                  className={[
                    "flex cursor-pointer items-center justify-between px-4 font-body text-sm transition-colors duration-fast",
                    dropdownSize === "sm" ? "py-1.5" : "py-2.5",
                    option.disabled
                      ? "cursor-not-allowed opacity-40"
                      : isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/5",
                    isSelected ? "text-white" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span>{option.label}</span>
                  {isSelected && <CheckIcon />}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {error && <p className="font-body text-sm text-red-400">{error}</p>}
      {!error && helper && <p className="font-body text-sm text-white/40">{helper}</p>}
    </div>
  );
}
