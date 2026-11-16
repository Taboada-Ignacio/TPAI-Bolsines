import { cn } from "@/lib/cn";
import { getEstadoBadgeVariant, type EstadoBadgeVariant } from "@/lib/bolsines";

const VARIANT_CLASSES: Record<EstadoBadgeVariant, string> = {
  lime: "bg-lime text-on-lime border border-lime-edge",
  primary: "bg-primary text-on-primary border border-transparent",
  amber: "bg-amber text-brand-ink border border-transparent",
  danger: "bg-danger text-white border border-transparent",
  neutral: "bg-raised text-fg border border-edge",
};

export interface BolsinEstadoBadgeProps {
  nombre: string | null | undefined;
  className?: string;
}

/** Pill semántica accesible para el estado actual o histórico de un bolsín. */
export function BolsinEstadoBadge({
  nombre,
  className,
}: BolsinEstadoBadgeProps) {
  const variant = getEstadoBadgeVariant(nombre);
  const label = nombre?.trim() || "Sin estado";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.06em] whitespace-nowrap",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          variant === "lime" || variant === "amber"
            ? "bg-brand-ink"
            : variant === "primary" || variant === "danger"
              ? "bg-current"
              : "bg-muted",
        )}
      />
      {label}
    </span>
  );
}
