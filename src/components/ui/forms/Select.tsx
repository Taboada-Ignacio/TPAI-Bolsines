"use client";

import { ChevronDown } from "lucide-react";
import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "sans" | "mono";
  invalid?: boolean;
}

/** Selector estilizado con tokens semánticos claro/oscuro y foco accesible. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { variant = "sans", invalid = false, className, children, ...props },
    ref,
  ) {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          aria-invalid={invalid || undefined}
          className={cn(
            "h-11 w-full appearance-none rounded-control border border-line bg-surface pl-3.5 pr-10 text-[15px] text-fg",
            "transition-[border-color,box-shadow,background-color] duration-[var(--dur-instant)]",
            "hover:border-fg/60",
            "focus:border-accent focus:ring-2 focus:ring-accent/25 focus:outline-none",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            "disabled:bg-raised disabled:cursor-not-allowed disabled:opacity-75",
            invalid &&
              "border-danger focus:border-danger focus:ring-danger/20 focus-visible:outline-danger",
            variant === "mono" && "font-mono tabular-nums",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
        />
      </div>
    );
  },
);
