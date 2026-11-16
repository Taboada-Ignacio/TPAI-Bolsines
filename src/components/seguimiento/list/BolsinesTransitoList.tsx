"use client";

import type { KeyboardEvent } from "react";
import { AlertTriangle, Package, SearchX } from "lucide-react";
import type { BolsinSeguimiento } from "@/dtos/seguimiento-bolsin.dto";
import { Button } from "@/components/ui/actions/Button";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { Skeleton } from "@/components/ui/feedback/Skeleton";
import { cn } from "@/lib/cn";
import { BolsinTransitoRow } from "./BolsinTransitoRow";

export interface BolsinesTransitoListProps {
  bolsines: BolsinSeguimiento[];
  totalGeneral: number;
  sinUbicacion?: number;
  loading?: boolean;
  error?: string | null;
  seleccionadoNro: number | null;
  hoveredBolsinNro?: number | null;
  onSeleccionar: (nroBolsin: number) => void;
  onHoverBolsin?: (nroBolsin: number | null) => void;
  onReintentar?: () => void;
  onLimpiarFiltros?: () => void;
  className?: string;
}

const SKELETON_ITEMS = [0, 1, 2, 3];

export function BolsinesTransitoList({
  bolsines,
  totalGeneral,
  sinUbicacion = 0,
  loading = false,
  error = null,
  seleccionadoNro,
  hoveredBolsinNro = null,
  onSeleccionar,
  onHoverBolsin,
  onReintentar,
  onLimpiarFiltros,
  className,
}: BolsinesTransitoListProps) {
  function handleListKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

    const target = event.target as HTMLElement | null;
    if (!target) return;

    const rows = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>("[data-seg-row]"),
    );
    const currentIndex = rows.findIndex((row) => row === target);
    if (currentIndex === -1 || rows.length === 0) return;

    event.preventDefault();
    const delta = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (currentIndex + delta + rows.length) % rows.length;
    rows[nextIndex]?.focus();
  }

  if (loading) {
    return (
      <div
        aria-busy="true"
        aria-live="polite"
        className={cn("flex flex-col gap-2.5 p-2", className)}
      >
        <div className="flex items-center justify-between px-1">
          <MicroLabel>Consultando telemetría GPS...</MicroLabel>
        </div>

        <div className="flex flex-col gap-1.5">
          {SKELETON_ITEMS.map((item) => (
            <div
              key={item}
              className="p-3 rounded-[14px] border border-hair bg-surface/60 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-14" />
                </div>
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
              <Skeleton className="h-4 w-3/4" />
              <div className="flex items-center justify-between">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn("p-2", className)}>
        <div
          role="alert"
          className="rounded-[16px] border border-danger/35 bg-danger/10 p-4 flex flex-col gap-3 text-danger-ink"
        >
          <div className="flex items-start gap-2.5">
            <AlertTriangle
              aria-hidden="true"
              className="size-4 shrink-0 mt-0.5 text-danger"
              strokeWidth={2.2}
            />
            <div className="min-w-0 flex-1">
              <p className="font-display font-bold text-[14px] tracking-[-0.01em]">
                Error al consultar telemetría
              </p>
              <p className="text-[12.5px] leading-[1.45] mt-1">{error}</p>
            </div>
          </div>

          {onReintentar ? (
            <div>
              <Button
                variant="secondary"
                size="sm"
                onClick={onReintentar}
              >
                Reintentar
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  if (totalGeneral === 0) {
    if (sinUbicacion > 0) {
      const etiquetaSinUbi =
        sinUbicacion === 1
          ? "Hay 1 bolsín enviado, pero ninguno informó ubicación GPS."
          : `Hay ${sinUbicacion} bolsines enviados, pero ninguno informó ubicación GPS.`;
      return (
        <div
          aria-live="polite"
          className={cn(
            "px-4 py-8 text-center flex flex-col items-center gap-3",
            className,
          )}
        >
          <div className="size-14 rounded-[18px] border border-amber/40 bg-amber/15 grid place-items-center text-amber-ink">
            <AlertTriangle
              aria-hidden="true"
              className="size-6"
              strokeWidth={1.8}
            />
          </div>
          <div className="flex flex-col gap-1 max-w-[260px]">
            <strong className="font-display text-[15px] font-bold tracking-[-0.02em] text-fg">
              Sin respuesta GPS actual
            </strong>
            <p className="text-[12.5px] leading-[1.45] text-muted">
              {etiquetaSinUbi}
            </p>
          </div>
          {onReintentar ? (
            <Button variant="secondary" size="sm" onClick={onReintentar}>
              Actualizar
            </Button>
          ) : null}
        </div>
      );
    }

    return (
      <div
        aria-live="polite"
        className={cn(
          "px-4 py-8 text-center flex flex-col items-center gap-3",
          className,
        )}
      >
        <div className="size-14 rounded-[18px] border border-edge bg-surface grid place-items-center text-muted">
          <Package aria-hidden="true" className="size-6" strokeWidth={1.8} />
        </div>
        <div className="flex flex-col gap-1 max-w-[240px]">
          <strong className="font-display text-[15px] font-bold tracking-[-0.02em] text-fg">
            Sin bolsines en viaje
          </strong>
          <p className="text-[12.5px] leading-[1.45] text-muted">
            No hay bolsines enviados para tu comisión.
          </p>
        </div>
        {onReintentar ? (
          <Button variant="secondary" size="sm" onClick={onReintentar}>
            Actualizar
          </Button>
        ) : null}
      </div>
    );
  }

  if (bolsines.length === 0) {
    return (
      <div
        aria-live="polite"
        className={cn(
          "px-4 py-8 text-center flex flex-col items-center gap-3",
          className,
        )}
      >
        <div className="size-14 rounded-[18px] border border-edge bg-surface grid place-items-center text-muted">
          <SearchX aria-hidden="true" className="size-6" strokeWidth={1.8} />
        </div>
        <div className="flex flex-col gap-1 max-w-[240px]">
          <strong className="font-display text-[15px] font-bold tracking-[-0.02em] text-fg">
            Sin coincidencias
          </strong>
          <p className="text-[12.5px] leading-[1.45] text-muted">
            No encontramos bolsines que coincidan con tu búsqueda.
          </p>
        </div>
        {onLimpiarFiltros ? (
          <Button variant="secondary" size="sm" onClick={onLimpiarFiltros}>
            Limpiar filtros
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-1 p-2", className)}>
      {sinUbicacion > 0 ? (
        <div
          role="status"
          className="mb-1 flex items-start gap-2 rounded-[12px] border border-amber/40 bg-amber/15 px-3 py-2 text-[12px] leading-[1.4] text-amber-ink"
        >
          <AlertTriangle
            aria-hidden="true"
            className="mt-0.5 size-3.5 shrink-0"
            strokeWidth={2.2}
          />
          <span>
            {sinUbicacion === 1
              ? "1 bolsín enviado sin respuesta GPS actual."
              : `${sinUbicacion} bolsines enviados sin respuesta GPS actual.`}
          </span>
        </div>
      ) : null}

      <ul
        role="list"
        onKeyDown={handleListKeyDown}
        className="flex flex-col gap-1"
      >
        {bolsines.map((bolsin) => (
          <li key={bolsin.nroBolsin}>
            <BolsinTransitoRow
              bolsin={bolsin}
              seleccionado={bolsin.nroBolsin === seleccionadoNro}
              resaltado={bolsin.nroBolsin === hoveredBolsinNro}
              onSeleccionar={onSeleccionar}
              onHoverChange={onHoverBolsin}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
