"use client";

import type { BolsinSeguimiento } from "@/dtos/seguimiento-bolsin.dto";
import { cn } from "@/lib/cn";
import { PreviewBolsinCard } from "./PreviewBolsinCard";

export interface MarcadorBolsinProps {
  bolsin: BolsinSeguimiento;
  isDesktop: boolean;
  filtroActivo: boolean;
  coincideFiltro: boolean;
  seleccionado: boolean;
  hovered: boolean;
  onHoverChange: (hovered: boolean) => void;
  onSeleccionar: (nroBolsin: number) => void;
}

/**
 * Marcador individual de un bolsín sobre Google Maps (`GoogleMarkerOverlay`).
 * Reemplaza al marcador de camión agrupado: 1 marcador = 1 bolsín = 1 viaje/ruta.
 */
export function MarcadorBolsin({
  bolsin,
  isDesktop,
  filtroActivo,
  coincideFiltro,
  seleccionado,
  hovered,
  onHoverChange,
  onSeleccionar,
}: MarcadorBolsinProps) {
  const enVivo = bolsin.ubicacion?.estadoCobertura === "vivo";
  const atenuado = filtroActivo && !coincideFiltro && !seleccionado;
  const estadoTexto = enVivo ? "señal en vivo" : "sin cobertura";
  const ariaLabel = `Bolsín #${bolsin.nroBolsin}, precinto ${String(bolsin.numeroPrecinto)}, destino ${bolsin.cmDestino.nombre}, ${estadoTexto}`;

  return (
    <div
      data-map-marker=""
      className={cn(
        "relative flex items-center justify-center transition-opacity duration-[var(--dur-fast)]",
        atenuado ? "opacity-15" : "opacity-100",
      )}
      onMouseEnter={() => {
        if (isDesktop) onHoverChange(true);
      }}
      onMouseLeave={() => {
        if (isDesktop) onHoverChange(false);
      }}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full",
          enVivo && !seleccionado && "animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite] motion-reduce:animate-none",
          seleccionado
            ? "bg-primary/35"
            : enVivo
              ? "bg-lime/45"
              : "bg-amber/35",
        )}
      />

      <button
        type="button"
        aria-label={ariaLabel}
        aria-pressed={seleccionado}
        onFocus={() => {
          if (isDesktop) onHoverChange(true);
        }}
        onBlur={() => {
          if (isDesktop) onHoverChange(false);
        }}
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => {
          event.stopPropagation();
          onSeleccionar(bolsin.nroBolsin);
        }}
        className={cn(
          "relative inline-flex min-h-12 min-w-12 md:min-h-9 md:min-w-0 items-center justify-center gap-1.5 rounded-full border-[1.5px] px-3 py-1.5",
          "font-mono text-xs font-bold leading-none tabular-nums whitespace-nowrap cursor-pointer",
          "transition-transform duration-[var(--dur-fast)] ease-[var(--ease-expo)] motion-reduce:transition-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          seleccionado
            ? "z-30 scale-110 border-primary bg-primary text-on-primary"
            : hovered
              ? "z-25 -translate-y-1 scale-105 border-primary bg-surface text-fg"
              : enVivo
                ? "z-10 border-lime-edge bg-lime text-on-lime hover:-translate-y-0.5 hover:scale-105"
                : "z-10 border-amber/70 bg-surface text-amber-ink hover:-translate-y-0.5 hover:scale-105",
        )}
      >
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <path d="M6 7h12l1 13H5L6 7Z" />
          <path d="M9 7V5a3 3 0 0 1 6 0v2" />
        </svg>
        <span>#{bolsin.nroBolsin}</span>
      </button>

      {isDesktop && hovered && !seleccionado && (
        <div className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-2.5 -translate-x-1/2">
          <PreviewBolsinCard bolsin={bolsin} />
        </div>
      )}
    </div>
  );
}
