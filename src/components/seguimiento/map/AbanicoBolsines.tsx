"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMemo, useRef } from "react";
import type { BolsinSeguimiento } from "@/dtos/seguimiento-bolsin.dto";
import { cn } from "@/lib/cn";
import { PreviewBolsinCard } from "./PreviewBolsinCard";

gsap.registerPlugin(useGSAP);

export interface AbanicoBolsinesProps {
  bolsines: BolsinSeguimiento[];
  seleccionadoNro: number | null;
  hoveredBolsinNro: number | null;
  onHoverBolsin: (nroBolsin: number | null) => void;
  onSeleccionarBolsin: (nroBolsin: number) => void;
}

interface PosicionPolar {
  bolsin: BolsinSeguimiento;
  x: number;
  y: number;
}

/**
 * Abanico orbital desplegado alrededor del camión en desktop (>= 768px).
 */
export function AbanicoBolsines({
  bolsines,
  seleccionadoNro,
  hoveredBolsinNro,
  onHoverBolsin,
  onSeleccionarBolsin,
}: AbanicoBolsinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const posiciones = useMemo<PosicionPolar[]>(() => {
    const total = bolsines.length;
    if (total === 0) return [];

    const radio = total > 4 ? 72 : 60;
    // Arco superior de -155° a -25° para despejar la parte inferior
    const anguloInicio = total === 1 ? -Math.PI / 2 : (-155 * Math.PI) / 180;
    const anguloFin = total === 1 ? -Math.PI / 2 : (-25 * Math.PI) / 180;

    return bolsines.map((bolsin, index) => {
      const t = total === 1 ? 0.5 : index / (total - 1);
      const theta = anguloInicio + t * (anguloFin - anguloInicio);
      return {
        bolsin,
        x: Math.round(Math.cos(theta) * radio),
        y: Math.round(Math.sin(theta) * radio),
      };
    });
  }, [bolsines]);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const chips = root.querySelectorAll<HTMLElement>("[data-abanico-chip]");
      if (chips.length === 0) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const reduced = Boolean(context.conditions?.reduce);
          chips.forEach((chip, idx) => {
            const pos = posiciones[idx];
            if (!pos) return;
            if (reduced) {
              gsap.set(chip, {
                x: pos.x,
                y: pos.y,
                scale: 1,
                autoAlpha: 1,
                duration: 0,
              });
            } else {
              gsap.fromTo(
                chip,
                { x: 0, y: 0, scale: 0.4, autoAlpha: 0 },
                {
                  x: pos.x,
                  y: pos.y,
                  scale: 1,
                  autoAlpha: 1,
                  duration: 0.28,
                  delay: idx * 0.04,
                  ease: "back.out(1.4)",
                },
              );
            }
          });
        },
      );
    },
    { scope: containerRef, dependencies: [posiciones] },
  );

  const bolsinHovered = useMemo(
    () => bolsines.find((b) => b.nroBolsin === hoveredBolsinNro) ?? null,
    [bolsines, hoveredBolsinNro],
  );

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
    >
      {posiciones.map(({ bolsin }) => {
        const enVivo = bolsin.ubicacion?.estadoCobertura === "vivo";
        const seleccionado = bolsin.nroBolsin === seleccionadoNro;
        const hovered = bolsin.nroBolsin === hoveredBolsinNro;

        return (
          <button
            key={bolsin.nroBolsin}
            type="button"
            data-abanico-chip=""
            onMouseEnter={() => onHoverBolsin(bolsin.nroBolsin)}
            onMouseLeave={() => onHoverBolsin(null)}
            onFocus={() => onHoverBolsin(bolsin.nroBolsin)}
            onBlur={() => onHoverBolsin(null)}
            onClick={(event) => {
              event.stopPropagation();
              onSeleccionarBolsin(bolsin.nroBolsin);
            }}
            aria-label={`Bolsín #${bolsin.nroBolsin}, ${bolsin.numeroPrecinto !== null ? `precinto ${String(bolsin.numeroPrecinto)}` : "sin precinto"}, destino ${bolsin.cmDestino.nombre}, ${enVivo ? "en vivo" : "sin cobertura"}`}
            className={cn(
              "pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[11px] font-bold tabular-nums",
              "cursor-pointer transition-colors duration-[var(--dur-fast)]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              seleccionado || hovered
                ? "border-primary bg-primary text-on-primary"
                : enVivo
                  ? "border-lime-edge bg-lime text-on-lime"
                  : "border-amber/60 bg-surface text-amber-ink",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "size-1.5 rounded-full",
                seleccionado || hovered
                  ? "bg-on-primary"
                  : enVivo
                    ? "bg-on-lime"
                    : "bg-amber",
              )}
            />
            #{bolsin.nroBolsin}
          </button>
        );
      })}

      {bolsinHovered ? (
        <div className="absolute left-1/2 -top-28 z-40 -translate-x-1/2">
          <PreviewBolsinCard bolsin={bolsinHovered} />
        </div>
      ) : null}
    </div>
  );
}
