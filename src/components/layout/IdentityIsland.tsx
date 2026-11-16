"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { SplitFlap } from "@/components/ui/display/SplitFlap";
import { Island } from "@/components/ui/surfaces/Island";
import { cn } from "@/lib/cn";
import { getBreadcrumbSegments } from "@/lib/navigation";

gsap.registerPlugin(useGSAP);

export interface IdentityIslandProps {
  sigla: string;
  cmNombre: string;
  titulo?: string;
}

export function IdentityIsland({
  sigla,
  cmNombre,
  titulo,
}: IdentityIslandProps) {
  const pathname = usePathname();
  const segments = getBreadcrumbSegments(pathname);
  const cmCorta = cmNombre.replace(/^CM\s+/i, "");
  const activeRef = useRef<HTMLSpanElement>(null);
  const isFirstRender = useRef(true);

  const items = segments.map((seg, index) => ({
    ...seg,
    label:
      titulo && index === segments.length - 1 ? titulo : seg.label,
  }));

  useGSAP(
    () => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      const el = activeRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) {
            gsap.set(el, { autoAlpha: 1, y: 0 });
            return;
          }
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 5 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.22,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            },
          );
        },
      );
    },
    { dependencies: [pathname] },
  );

  return (
    <Island className="h-[var(--top-h)] rounded-[var(--top-r)] flex items-center px-2 min-w-0 max-w-full">
      <nav aria-label="Ruta de navegación" className="min-w-0">
        <ol className="flex items-center gap-1 min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <li className="shrink-0">
            <Link
              href="/inicio"
              title={`CM origen · ${cmCorta}`}
              aria-label={`CM origen · ${cmCorta} — Ir a Inicio`}
              className={cn(
                "relative inline-flex items-center justify-center h-[34px] px-2.5 rounded-[6px] overflow-hidden",
                "bg-mech text-mech-fg/85 hover:text-lime transition-colors duration-150",
                "font-mono text-[13px] font-semibold tracking-[0.06em] uppercase select-none",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              )}
            >
              <SplitFlap text={sigla} variant="inline" flipTrigger={pathname} />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/60"
              />
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={item.href}
                className="flex items-center gap-1 min-w-0 shrink-0"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-[13px] font-semibold text-muted/60 select-none px-0.5"
                >
                  /
                </span>

                {isLast ? (
                  <span
                    ref={activeRef}
                    aria-current="page"
                    data-identity-title=""
                    className={cn(
                      "relative inline-flex items-center h-[34px] px-2.5 rounded-[6px] overflow-hidden",
                      "bg-mech text-mech-fg select-none",
                      "font-mono text-[13px] font-semibold tracking-[0.03em] uppercase whitespace-nowrap",
                    )}
                  >
                    <span className="truncate max-w-[42vw] sm:max-w-[240px]">
                      <SplitFlap
                        text={item.label}
                        variant="inline"
                        flipTrigger={pathname}
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/60"
                    />
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center h-[34px] px-2.5 rounded-[6px] overflow-hidden",
                      "bg-mech text-mech-fg/80 hover:text-lime transition-colors duration-150 select-none",
                      "font-mono text-[13px] font-semibold tracking-[0.03em] uppercase whitespace-nowrap",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    )}
                  >
                    <span className="truncate max-w-[160px]">
                      <SplitFlap
                        text={item.label}
                        variant="inline"
                        flipTrigger={pathname}
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/60"
                    />
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Island>
  );
}
