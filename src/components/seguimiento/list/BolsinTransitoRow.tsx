"use client";

import { MapPin } from "lucide-react";
import type { BolsinSeguimiento } from "@/dtos/seguimiento-bolsin.dto";
import { cn } from "@/lib/cn";

export interface BolsinTransitoRowProps {
  bolsin: BolsinSeguimiento;
  seleccionado: boolean;
  resaltado?: boolean;
  onSeleccionar: (nroBolsin: number) => void;
  onHoverChange?: (nroBolsin: number | null) => void;
  className?: string;
}

const FECHA_HORA_FORMATTER = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

function formatearFechaHora(iso: string | undefined): string {
  if (!iso) return "Sin registro";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Sin registro";
  return FECHA_HORA_FORMATTER.format(date);
}

export function BolsinTransitoRow({
  bolsin,
  seleccionado,
  resaltado = false,
  onSeleccionar,
  onHoverChange,
  className,
}: BolsinTransitoRowProps) {
  const enVivo = bolsin.ubicacion?.estadoCobertura === "vivo";
  const fechaFormateada = formatearFechaHora(
    bolsin.ubicacion?.fechaHoraActualizacion,
  );

  return (
    <button
      type="button"
      data-seg-row=""
      data-bolsin-nro={bolsin.nroBolsin}
      aria-pressed={seleccionado}
      onClick={() => onSeleccionar(bolsin.nroBolsin)}
      onMouseEnter={() => onHoverChange?.(bolsin.nroBolsin)}
      onMouseLeave={() => onHoverChange?.(null)}
      className={cn(
        "w-full text-left px-3 py-2.5 rounded-[14px] border flex flex-col gap-1.5 cursor-pointer",
        "transition-[background-color,border-color] duration-[var(--dur-fast)] ease-[var(--ease-firm)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        seleccionado
          ? "bg-surface border-primary"
          : resaltado
            ? "bg-hover border-edge"
            : "bg-transparent border-transparent hover:bg-hover",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
        <div className="min-w-0 flex items-baseline gap-2">
          <span className="font-display font-bold text-[15px] tracking-[-0.02em] text-fg tabular-nums">
            Bolsín #{bolsin.nroBolsin}
          </span>
          <span className="font-mono text-[11px] font-medium text-muted truncate">
            {bolsin.numeroPrecinto}
          </span>
        </div>

        {enVivo ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-lime text-on-lime border border-lime-edge font-mono text-[10px] font-semibold whitespace-nowrap shrink-0">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-on-lime"
            />
            Última actualización
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber/15 text-amber-ink border border-amber/40 font-mono text-[10px] font-semibold whitespace-nowrap shrink-0">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-amber"
            />
            Sin cobertura
          </span>
        )}
      </div>

      <div className="flex items-center gap-1.5 text-[13px] font-semibold text-fg min-w-0">
        <MapPin
          aria-hidden="true"
          className="size-3.5 shrink-0 text-muted"
          strokeWidth={2}
        />
        <span className="shrink-0 text-xs font-medium text-muted">Destino</span>
        <span className="truncate">{bolsin.cmDestino.nombre}</span>
      </div>

      <div className="flex items-center justify-between gap-2 text-[11px] text-muted">
        <span>Última act.</span>
        <span className="font-mono tabular-nums">{fechaFormateada}</span>
      </div>
    </button>
  );
}
