import { AlertCircle } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface FieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}

export function Field({
  id,
  label,
  error,
  hint,
  className,
  children,
}: FieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted select-none"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-[13px] font-medium text-danger-ink leading-snug"
        >
          <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      ) : hint ? (
        <p id={hintId} className="text-[12px] text-muted leading-snug">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
