"use client";

import type { BolsinSeguimiento } from "@/dtos/seguimiento-bolsin.dto";
import { cn } from "@/lib/cn";

export interface MarcadorBolsinProps {
  bolsin: BolsinSeguimiento;
  xPct: number;
  yPct: number;
  seleccionado: boolean;
  onSeleccionar: (nroBolsin: number) => void;
}

export function MarcadorBolsin({
  bolsin,
  xPct,
  yPct,
  seleccionado,
  onSeleccionar,
}: MarcadorBolsinProps) {
  const enVivo = bolsin.ubicacion?.estadoCobertura === "vivo";
  const estadoTexto = enVivo ? "señal en vivo" : "sin cobertura";
  const ariaLabel = `Bolsín #${bolsin.nroBolsin}, precinto ${String(bolsin.numeroPrecinto)}, destino ${bolsin.cmDestino.nombre}, ${estadoTexto}`;

  return (
    <button
      type="button"
      data-seg-marker=""
      aria-label={ariaLabel}
      aria-pressed={seleccionado}
      onPointerDown={(event) => event.stopPropagation()}
      onClick={() => onSeleccionar(bolsin.nroBolsin)}
      style={{ left: `${xPct}%`, top: `${yPct}%` }}
      className={cn(
        "group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer",
        "inline-flex items-center gap-1.5 rounded-full border-[1.5px] px-2.5 py-1 pl-2",
        "font-mono text-[11px] font-semibold leading-none whitespace-nowrap",
        "transition-transform duration-200 ease-[var(--ease-expo)] motion-reduce:transition-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        enVivo
          ? "bg-lime text-on-lime border-lime-edge"
          : "bg-amber text-brand-ink border-brand-ink/70",
        seleccionado
          ? "z-20 scale-115 outline-2 outline-offset-2 outline-primary"
          : "z-10 hover:z-15 hover:scale-105",
      )}
    >
      <span className="relative flex size-2 shrink-0 items-center justify-center">
        {enVivo && (
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 rounded-full bg-brand-ink/55",
              seleccionado
                ? "animate-ping opacity-80"
                : "animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-55",
              "motion-reduce:animate-none",
            )}
          />
        )}
        <span
          aria-hidden="true"
          className="relative size-2 rounded-full bg-brand-ink"
        />
      </span>
      <span>#{bolsin.nroBolsin}</span>
    </button>
  );
}
