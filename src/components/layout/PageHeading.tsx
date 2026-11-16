import type { ReactNode } from "react";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { cn } from "@/lib/cn";

export interface PageHeadingProps {
  rotulo: string;
  children: ReactNode;
  className?: string;
}

export function PageHeading({ rotulo, children, className }: PageHeadingProps) {
  return (
    <div className={className}>
      <MicroLabel className="block">{rotulo}</MicroLabel>
      <h1
        className={cn(
          "font-display font-bold text-[clamp(2.5rem,6vw,4rem)] leading-[0.94] tracking-[-0.05em] text-fg mt-2.5",
        )}
      >
        {children}
      </h1>
    </div>
  );
}
