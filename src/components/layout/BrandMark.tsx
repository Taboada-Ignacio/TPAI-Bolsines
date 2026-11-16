import { cn } from "@/lib/cn";

export interface BrandMarkProps {
  size?: "sm" | "md";
  className?: string;
}

export function BrandMark({ size = "md", className }: BrandMarkProps) {
  const isSm = size === "sm";

  return (
    <div
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex items-center justify-center bg-brand-cobalt text-[#EEF2F6] font-display font-bold shadow-[0_3px_0_var(--brand-cobalt-deep)]",
          isSm
            ? "size-7 rounded-[7px] text-sm"
            : "size-9 rounded-[9px] text-base",
        )}
      >
        B
      </span>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-[-0.02em] text-fg",
            isSm ? "text-sm" : "text-base",
          )}
        >
          Sistema de Bolsines
        </span>
        <span className="font-serif italic text-[13.5px] text-muted mt-0.5">
          sistema de bolsines
        </span>
      </div>
    </div>
  );
}
