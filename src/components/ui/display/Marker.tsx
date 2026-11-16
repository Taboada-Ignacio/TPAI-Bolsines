import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface MarkerProps {
  children: ReactNode;
  className?: string;
}

export function Marker({ children, className }: MarkerProps) {
  return (
    <span
      className={cn(
        "px-[0.08em] text-on-lime [box-decoration-break:clone] [-webkit-box-decoration-break:clone]",
        "bg-[linear-gradient(var(--lime),var(--lime))] bg-no-repeat [background-position:0_62%] [background-size:100%_74%]",
        className,
      )}
    >
      {children}
    </span>
  );
}
