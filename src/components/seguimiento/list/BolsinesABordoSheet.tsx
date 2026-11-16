"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MapPin, Truck, X } from "lucide-react";
import { useId, useRef } from "react";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { ResponsiveSheet } from "@/components/ui/surfaces/ResponsiveSheet";
import { cn } from "@/lib/cn";
import type { UnidadTransporte } from "@/lib/seguimiento/agrupador-unidades";

gsap.registerPlugin(useGSAP);

export interface BolsinesABordoSheetProps {
  unidad: UnidadTransporte | null;
  open: boolean;
  onClose: () => void;
  onSeleccionarBolsin: (nroBolsin: number) => void;
}

/**
 * Sheet mobile (< 768px) "Bolsines a bordo" cuando el usuario toca un camión con N bolsines.
 */
export function BolsinesABordoSheet({
  unidad,
  open,
  onClose,
  onSeleccionarBolsin,
}: BolsinesABordoSheetProps) {
  const titleId = useId();
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      if (!open || !unidad) return;
      const list = listRef.current;
      if (!list) return;

      const cards = list.querySelectorAll<HTMLElement>("[data-abordo-card]");
      if (cards.length === 0) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce || !context.conditions?.motion) {
            gsap.set(cards, { autoAlpha: 1, y: 0, duration: 0 });
            return;
          }
          gsap.fromTo(
            cards,
            { autoAlpha: 0, y: 10 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.28,
              stagger: 0.05,
              ease: "power2.out",
            },
          );
        },
      );
    },
    { scope: listRef, dependencies: [open, unidad?.id] },
  );

  return (
    <ResponsiveSheet
      open={open && unidad !== null}
      onClose={onClose}
      labelledBy={titleId}
      className="flex flex-col"
    >
      {unidad ? (
        <>
          <div className="flex items-center justify-between gap-2 border-b border-hair px-4 pb-3 pt-1">
            <div className="min-w-0">
              <MicroLabel className="inline-flex items-center gap-1.5">
                <Truck aria-hidden="true" className="size-3.5" />
                {unidad.etiqueta} · {unidad.bolsines.length} a bordo
              </MicroLabel>
              <h2
                id={titleId}
                className="truncate font-display text-base font-bold tracking-[-0.02em] text-fg"
              >
                Bolsines a bordo
              </h2>
            </div>

            <IconButton aria-label="Cerrar listado a bordo" onClick={onClose}>
              <X className="size-4" />
            </IconButton>
          </div>

          <ul
            ref={listRef}
            className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-4"
          >
            {unidad.bolsines.map((bolsin) => {
              const enVivo = bolsin.ubicacion?.estadoCobertura === "vivo";
              return (
                <li key={bolsin.nroBolsin} data-abordo-card="">
                  <button
                    type="button"
                    onClick={() => onSeleccionarBolsin(bolsin.nroBolsin)}
                    className={cn(
                      "flex min-h-12 w-full flex-col gap-1.5 rounded-[14px] border border-edge bg-surface px-3.5 py-3 text-left",
                      "cursor-pointer transition-colors duration-[var(--dur-fast)] hover:bg-hover",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-[15px] font-bold tracking-[-0.02em] text-fg tabular-nums">
                          Bolsín #{bolsin.nroBolsin}
                        </span>
                        <span className="font-mono text-[11px] font-medium text-muted">
                          {String(bolsin.numeroPrecinto)}
                        </span>
                      </div>

                      {enVivo ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-lime-edge bg-lime px-2 py-0.5 font-mono text-[10px] font-semibold text-on-lime">
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-on-lime"
                          />
                          En vivo
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber/40 bg-amber/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-ink">
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-amber"
                          />
                          Sin cobertura
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-[12.5px] font-semibold text-fg">
                      <MapPin
                        aria-hidden="true"
                        className="size-3.5 shrink-0 text-muted"
                      />
                      <span className="truncate">{bolsin.cmDestino.nombre}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </ResponsiveSheet>
  );
}
