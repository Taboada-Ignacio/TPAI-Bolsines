"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  "primary" | "lime" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-cobalt text-surface border border-ink/20 shadow-key-cobalt hover:bg-[#025bc7] active:shadow-[0_2px_0_#01397d]",
  lime: "bg-lime text-ink border border-ink shadow-key-lime hover:bg-[#d8ff5e] active:shadow-[0_2px_0_#9ec91e]",
  secondary:
    "bg-surface text-ink border border-ink shadow-key-ink hover:bg-white active:shadow-[0_2px_0_#0b1220]",
  ghost:
    "bg-transparent text-ink border border-transparent hover:bg-ink/5 active:bg-ink/10",
  danger:
    "bg-danger text-white border border-ink/20 shadow-key-danger hover:bg-[#d01645] active:shadow-[0_2px_0_#881337]",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm gap-1.5",
  md: "h-11 px-4 text-[15px] gap-2",
  lg: "h-[52px] px-5 text-base gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      leftIcon,
      children,
      className,
      type = "button",
      ...props
    },
    ref,
  ) {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        className={cn(
          "inline-flex items-center justify-center rounded-control font-display font-semibold tracking-[-0.01em] select-none cursor-pointer",
          "transition-[transform,box-shadow,background-color,opacity] duration-[var(--dur-instant)] ease-[var(--ease-firm)]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt",
          !isDisabled && "hover:-translate-y-px active:translate-y-[2px]",
          isDisabled &&
            "opacity-55 shadow-none cursor-not-allowed translate-y-0",
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          className,
        )}
        {...props}
      >
        {loading ? (
          <span
            aria-hidden="true"
            className="size-4 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin"
          />
        ) : leftIcon ? (
          <span aria-hidden="true" className="shrink-0 inline-flex">
            {leftIcon}
          </span>
        ) : null}
        <span>{children}</span>
      </button>
    );
  },
);
