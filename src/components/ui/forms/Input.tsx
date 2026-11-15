"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "sans" | "mono";
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { variant = "sans", invalid = false, className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "h-11 w-full rounded-control border border-line bg-surface px-3.5 text-[15px] text-ink",
        "placeholder:text-muted/65",
        "transition-[border-color,box-shadow,background-color] duration-[var(--dur-instant)]",
        "hover:border-ink/60",
        "focus:border-cobalt focus:ring-2 focus:ring-cobalt/25 focus:outline-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt",
        "disabled:bg-canvas disabled:cursor-not-allowed disabled:opacity-75",
        "read-only:bg-canvas/45",
        invalid &&
          "border-danger focus:border-danger focus:ring-danger/20 focus-visible:outline-danger",
        variant === "mono" && "font-mono tabular-nums",
        className,
      )}
      {...props}
    />
  );
});
