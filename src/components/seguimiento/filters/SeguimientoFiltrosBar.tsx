"use client";

import { Search, X } from "lucide-react";
import { useId } from "react";
import { Button } from "@/components/ui/actions/Button";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { Input } from "@/components/ui/forms/Input";
import { Select } from "@/components/ui/forms/Select";
import { cn } from "@/lib/cn";

export interface SeguimientoFiltrosBarProps {
  precintoQuery: string;
  onPrecintoChange: (value: string) => void;
  cmDestinoCodigo: string;
  onCmDestinoChange: (codigo: string) => void;
  destinosDisponibles: Array<{ codigo: string; nombre: string }>;
  totalFiltrados: number;
  totalGeneral: number;
  onLimpiarFiltros: () => void;
  disabled?: boolean;
  className?: string;
}

/** Barra de filtros controlados para buscar bolsines por precinto y CM destino. */
export function SeguimientoFiltrosBar({
  precintoQuery,
  onPrecintoChange,
  cmDestinoCodigo,
  onCmDestinoChange,
  destinosDisponibles,
  totalFiltrados,
  totalGeneral,
  onLimpiarFiltros,
  disabled = false,
  className,
}: SeguimientoFiltrosBarProps) {
  const precintoId = useId();
  const destinoId = useId();

  const hayFiltrosActivos =
    precintoQuery.trim().length > 0 || cmDestinoCodigo !== "";

  const etiquetaTotal = totalGeneral === 1 ? "bolsín" : "bolsines";
  const resumenResultados =
    totalFiltrados === totalGeneral
      ? `${totalGeneral} ${etiquetaTotal}`
      : `${totalFiltrados} de ${totalGeneral} ${etiquetaTotal}`;

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 flex flex-col gap-1">
          <label htmlFor={precintoId} className="inline-flex items-center">
            <MicroLabel>N.º de precinto</MicroLabel>
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted"
            />
            <Input
              id={precintoId}
              type="text"
              variant="mono"
              value={precintoQuery}
              onChange={(event) => onPrecintoChange(event.target.value)}
              placeholder="Buscar por precinto (ej. P-9021)"
              disabled={disabled}
              className="h-9 border-edge pl-8 pr-8 text-[13px] font-medium"
            />
            {precintoQuery.length > 0 && (
              <button
                type="button"
                onClick={() => onPrecintoChange("")}
                disabled={disabled}
                aria-label="Limpiar búsqueda por precinto"
                className={cn(
                  "absolute right-1.5 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-[7px] text-muted",
                  "transition-colors duration-[var(--dur-instant)] hover:bg-hover hover:text-fg",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  "disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
                )}
              >
                <X aria-hidden="true" className="size-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-1">
          <label htmlFor={destinoId} className="inline-flex items-center">
            <MicroLabel>CM destino</MicroLabel>
          </label>
          <Select
            id={destinoId}
            value={cmDestinoCodigo}
            onChange={(event) => onCmDestinoChange(event.target.value)}
            disabled={disabled}
            className="h-9 border-edge pl-2.5 pr-8 text-[13px] font-medium"
          >
            <option value="">Todas las comisiones</option>
            {destinosDisponibles.map((destino) => (
              <option key={destino.codigo} value={destino.codigo}>
                {destino.nombre}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-0.5">
        <span
          aria-live="polite"
          aria-atomic="true"
          className="inline-flex items-center rounded-full border border-edge bg-raised px-2.5 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-fg"
        >
          {resumenResultados}
        </span>

        <Button
          variant="ghost"
          size="sm"
          onClick={onLimpiarFiltros}
          disabled={disabled || !hayFiltrosActivos}
          className="h-7 px-2 text-xs text-muted hover:text-fg"
        >
          Limpiar filtros
        </Button>
      </div>
    </div>
  );
}
