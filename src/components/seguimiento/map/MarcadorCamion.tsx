"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type FocusEvent, useRef } from "react";
import { cn } from "@/lib/cn";
import type { UnidadTransporte } from "@/lib/seguimiento/agrupador-unidades";
import { AbanicoBolsines } from "./AbanicoBolsines";
import { Camion3D, type EstadoCamion3D } from "./Camion3D";

gsap.registerPlugin(useGSAP);

export interface MarcadorCamionProps {
  unidad: UnidadTransporte;
  isDesktop: boolean;
  filtroActivo: boolean;
  seleccionadoNro: number | null;
  hoveredBolsinNro: number | null;
  abierto: boolean;
  onAbrirChange: (abierto: boolean) => void;
  onHoverBolsin: (nroBolsin: number | null) => void;
  onSeleccionarBolsin: (nroBolsin: number) => void;
  onTapMobile: (unidad: UnidadTransporte) => void;
}

/**
 * Marcador interactivo de una UnidadTransporte sobre Google Maps.
 * Renderiza el Camión 3D flotando directamente sobre el mapa (sin recuadro blanco),
 * con anillo/pulso de estado GSAP (`gsap.matchMedia()`), elevación 3D en hover/focus
 * y badge numérico de bolsines a bordo.
 */
export function MarcadorCamion({
  unidad,
  isDesktop,
  filtroActivo,
  seleccionadoNro,
  hoveredBolsinNro,
  abierto,
  onAbrirChange,
  onHoverBolsin,
  onSeleccionarBolsin,
  onTapMobile,
}: MarcadorCamionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pulseRingRef = useRef<HTMLSpanElement>(null);

  const atenuado = filtroActivo && unidad.coincidenciasFiltro === 0;
  const resaltado = filtroActivo && unidad.coincidenciasFiltro > 0;
  const contieneSeleccionado =
    seleccionadoNro !== null &&
    unidad.bolsines.some((b) => b.nroBolsin === seleccionadoNro);
  const cantidad = unidad.bolsines.length;
  const estadoCamion: EstadoCamion3D =
    contieneSeleccionado || resaltado
      ? "seleccionado"
      : unidad.tieneA3
        ? "alerta_a3"
        : "vivo";

  // Elevación 3D en hover/focus y opacidad por filtro con gsap.matchMedia()
  useGSAP(
    () => {
      const btn = buttonRef.current;
      const wrapper = wrapperRef.current;
      if (!btn || !wrapper) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const reduced = Boolean(context.conditions?.reduce);
          const targetOpacity = atenuado ? 0.15 : 1;
          const elevado = (isDesktop && abierto) || contieneSeleccionado;
          const targetY = isDesktop && abierto ? -8 : contieneSeleccionado ? -4 : 0;
          const targetScale =
            isDesktop && abierto ? 1.12 : contieneSeleccionado ? 1.06 : 1;

          if (reduced) {
            gsap.set(wrapper, { opacity: targetOpacity, duration: 0 });
            gsap.set(btn, { y: targetY, scale: targetScale, duration: 0 });
          } else {
            gsap.to(wrapper, {
              opacity: targetOpacity,
              duration: 0.22,
              ease: "power2.out",
            });
            gsap.to(btn, {
              y: targetY,
              scale: targetScale,
              duration: elevado ? 0.28 : 0.22,
              ease: elevado ? "back.out(1.7)" : "power2.out",
            });
          }
        },
      );
    },
    {
      scope: wrapperRef,
      dependencies: [atenuado, abierto, isDesktop, contieneSeleccionado],
    },
  );

  // Anillo/pulso de estado continuo debajo del camión con gsap.matchMedia()
  useGSAP(
    () => {
      const ring = pulseRingRef.current;
      if (!ring) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const reduced = Boolean(context.conditions?.reduce);
          if (reduced) {
            gsap.set(ring, { scale: 1, autoAlpha: 0.55 });
            return;
          }

          gsap.fromTo(
            ring,
            { scale: 0.78, autoAlpha: 0.72 },
            {
              scale: contieneSeleccionado ? 1.55 : 1.38,
              autoAlpha: 0,
              duration: unidad.tieneA3 ? 1.4 : 1.9,
              repeat: -1,
              ease: "power2.out",
            },
          );
        },
      );
    },
    {
      scope: wrapperRef,
      dependencies: [estadoCamion, contieneSeleccionado, unidad.tieneA3],
    },
  );

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    const next = event.relatedTarget as Node | null;
    if (next && wrapperRef.current?.contains(next)) {
      return;
    }
    onAbrirChange(false);
    onHoverBolsin(null);
  }

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center justify-center"
      onMouseEnter={() => {
        if (isDesktop) onAbrirChange(true);
      }}
      onMouseLeave={() => {
        if (isDesktop) {
          onAbrirChange(false);
          onHoverBolsin(null);
        }
      }}
      onFocus={() => {
        if (isDesktop) onAbrirChange(true);
      }}
      onBlur={handleBlur}
    >
      {isDesktop && abierto ? (
        <AbanicoBolsines
          bolsines={unidad.bolsines}
          seleccionadoNro={seleccionadoNro}
          hoveredBolsinNro={hoveredBolsinNro}
          onHoverBolsin={onHoverBolsin}
          onSeleccionarBolsin={onSeleccionarBolsin}
        />
      ) : null}

      <button
        ref={buttonRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          if (!isDesktop) {
            onTapMobile(unidad);
            return;
          }
          if (unidad.bolsines.length === 1 && unidad.bolsines[0]) {
            onSeleccionarBolsin(unidad.bolsines[0].nroBolsin);
          } else {
            onAbrirChange(!abierto);
          }
        }}
        aria-label={`Camión ${unidad.etiqueta}, ${cantidad} ${cantidad === 1 ? "bolsín" : "bolsines"} a bordo${unidad.tieneA3 ? ", con alerta sin cobertura" : ""}`}
        aria-expanded={isDesktop ? abierto : undefined}
        className={cn(
          "relative inline-flex items-center justify-center border-0 bg-transparent p-0 cursor-pointer",
          "min-h-12 min-w-12 rounded-full",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        )}
      >
        {/* Anillo de pulso de estado debajo del camión */}
        <span
          ref={pulseRingRef}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute bottom-1 left-1/2 h-6 w-11 -translate-x-1/2 rounded-full border-2",
            estadoCamion === "seleccionado"
              ? "border-primary bg-primary/20"
              : estadoCamion === "alerta_a3"
                ? "border-amber bg-amber/20"
                : "border-lime bg-lime/25",
          )}
        />

        {/* Anillo base sutil de anclaje */}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute bottom-1.5 left-1/2 h-4 w-9 -translate-x-1/2 rounded-full border",
            estadoCamion === "seleccionado"
              ? "border-primary/70 bg-primary/15"
              : estadoCamion === "alerta_a3"
                ? "border-amber/70 bg-amber/15"
                : "border-lime-edge/80 bg-lime/20",
          )}
        />

        <Camion3D
          estado={estadoCamion}
          activo={abierto || contieneSeleccionado}
          rumboGrados={unidad.rumboGrados}
          className={isDesktop ? "relative z-10 size-[64px]" : "relative z-10 size-[68px]"}
        />

        {/* Insignia numérica de bolsines a bordo */}
        <span
          className={cn(
            "absolute right-0 top-0 z-20 inline-flex h-5 min-w-5 items-center justify-center rounded-full border px-1 font-mono text-[10px] font-bold tabular-nums shadow-sm",
            contieneSeleccionado || resaltado
              ? "border-primary/50 bg-primary text-on-primary"
              : unidad.tieneA3
                ? "border-amber/50 bg-amber text-brand-ink"
                : "border-lime-edge bg-lime text-on-lime",
          )}
        >
          {cantidad}
        </span>
      </button>
    </div>
  );
}
