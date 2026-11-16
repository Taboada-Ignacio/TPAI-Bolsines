import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function MicroLabel({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
