"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { ActionsIsland } from "@/components/layout/ActionsIsland";
import { DockPill } from "@/components/layout/DockPill";
import { EnterCurtain } from "@/components/layout/EnterCurtain";
import { IdentityIsland } from "@/components/layout/IdentityIsland";
import { SideIsland } from "@/components/layout/SideIsland";
import { SkipLink } from "@/components/layout/SkipLink";
import { getDestinosVisibles } from "@/lib/navigation";
import type { SesionVista } from "@/services/auth/sesion-actual";

gsap.registerPlugin(useGSAP);

export interface AppShellProps {
  sesion: SesionVista;
  entrada?: boolean;
  children: ReactNode;
}

export function AppShell({ sesion, entrada = false, children }: AppShellProps) {
  const pathname = usePathname();
  const destinosVisibles = getDestinosVisibles(sesion.rol);
  const shellRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const main = document.getElementById("contenido");
    main?.focus({ preventScroll: true });
  }, [pathname]);

  useGSAP(
    () => {
      if (!entrada) return;

      document.cookie = "bolsines_entrada=; path=/; max-age=0; samesite=lax";

      const curtain = curtainRef.current;
      const shell = shellRef.current;
      if (!curtain || !shell) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) {
            gsap.set(curtain, { display: "none" });
            return;
          }

          const tl = gsap.timeline();

          tl.fromTo(
            curtain,
            { clipPath: "inset(0 0 0% 0)" },
            {
              clipPath: "inset(0 0 100% 0)",
              duration: 0.6,
              ease: "expo.out",
              onComplete: () => {
                gsap.set(curtain, { display: "none" });
              },
            },
            0,
          );

          const side = shell.querySelector("[data-side-island]");
          if (side) {
            tl.from(
              side,
              {
                x: -18,
                autoAlpha: 0,
                duration: 0.5,
                ease: "expo.out",
                clearProps: "transform,opacity,visibility",
              },
              0.12,
            );
          }

          const top = shell.querySelector("[data-top-islands]");
          if (top) {
            tl.from(
              top,
              {
                y: -14,
                autoAlpha: 0,
                duration: 0.5,
                ease: "expo.out",
                clearProps: "transform,opacity,visibility",
              },
              0.2,
            );
          }

          const dock = shell.querySelector("[data-dock-pill]");
          if (dock) {
            tl.from(
              dock,
              {
                y: 18,
                autoAlpha: 0,
                duration: 0.5,
                ease: "expo.out",
                clearProps: "transform,opacity,visibility",
              },
              0.2,
            );
          }
        },
      );
    },
    { scope: shellRef, dependencies: [entrada] },
  );

  return (
    <div ref={shellRef} className="relative min-h-dvh">
      <SkipLink />

      {/* Bandas gráficas nítidas detrás del rail izquierdo para revelar el frosted glass del SideIsland (stageshow/backgrounds.md) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 left-0 -z-10 hidden w-[260px] overflow-hidden md:block"
      >
        <div className="absolute -left-10 top-[14%] h-24 w-[280px] -rotate-12 bg-brand-cobalt/35 dark:bg-brand-cobalt/45" />
        <div className="absolute -left-6 top-[32%] h-10 w-[260px] -rotate-12 bg-lime/55 dark:bg-lime/40" />
        <div className="absolute -left-12 bottom-[16%] h-28 w-[300px] -rotate-12 bg-brand-cobalt/25 dark:bg-brand-cobalt/35" />
      </div>

      <SideIsland destinos={destinosVisibles} sesion={sesion} />

      <header
        data-top-islands=""
        className="pointer-events-none fixed z-30 top-[var(--isle-gap)] left-[var(--isle-gap)] md:left-[var(--shell-left)] right-[var(--isle-gap)] flex items-start justify-between gap-2 transition-[left] duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&>*]:pointer-events-auto"
      >
        <IdentityIsland sigla={sesion.cm.sigla} cmNombre={sesion.cm.nombre} />
        <ActionsIsland sesion={sesion} />
      </header>

      <DockPill destinos={destinosVisibles} sesion={sesion} />

      {children}

      <EnterCurtain ref={curtainRef} visible={entrada} />
    </div>
  );
}
