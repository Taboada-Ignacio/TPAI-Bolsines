"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MapPin } from "lucide-react";
import { useRef } from "react";
import type { BolsinSeguimiento } from "@/dtos/seguimiento-bolsin.dto";
import { cn } from "@/lib/cn";

gsap.registerPlugin(useGSAP);

export interface PreviewBolsinCardProps {
  bolsin: BolsinSeguimiento;
  className?: string;
}

/**
 * Tarjeta flotante de vista previa al hacer hover/focus sobre un bolsín del abanico.
 */
export function PreviewBolsinCard({
  bolsin,
  className,
}: PreviewBolsinCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const enVivo = bolsin.ubicacion?.estadoCobertura === "vivo";

  useGSAP(
    () => {
      const el = cardRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) {
            gsap.set(el, { autoAlpha: 1, y: 0, duration: 0 });
            return;
          }
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 8 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.22,
              ease: "power2.out",
            },
          );
        },
      );
    },
    { scope: cardRef, dependencies: [bolsin.nroBolsin] },
  );

  return (
    <div
      ref={cardRef}
      role="status"
      aria-live="polite"
      className={cn(
        "pointer-events-none w-56 rounded-[16px] border border-edge bg-glass p-3 backdrop-blur-[16px]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-[14px] font-bold tracking-[-0.02em] text-fg tabular-nums">
          Bolsín #{bolsin.nroBolsin}
        </span>

        {enVivo ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-lime-edge bg-lime px-2 py-0.5 font-mono text-[10px] font-semibold text-on-lime">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-on-lime" />
            Última actualización
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber/40 bg-amber/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-ink">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-amber" />
            Sin cobertura
          </span>
        )}
      </div>

      <p className="mt-1 font-mono text-[11px] font-medium text-muted">
        Precinto {String(bolsin.numeroPrecinto)}
      </p>

      <div className="mt-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-fg">
        <MapPin aria-hidden="true" className="size-3.5 shrink-0 text-muted" />
        <span className="truncate">{bolsin.cmDestino.nombre}</span>
      </div>
    </div>
  );
}
