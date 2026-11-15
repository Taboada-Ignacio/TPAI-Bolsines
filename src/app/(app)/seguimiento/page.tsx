"use client";

import { RefreshCw } from "lucide-react";
import { useState } from "react";
import { PageActions } from "@/components/layout/PageActions";
import { PageBody } from "@/components/layout/PageBody";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { Island } from "@/components/ui/surfaces/Island";
import { cn } from "@/lib/cn";

export default function SeguimientoPage() {
  const [refreshing, setRefreshing] = useState(false);

  function handleRefresh() {
    setRefreshing(true);
    window.setTimeout(() => setRefreshing(false), 600);
  }

  return (
    <PageBody variant="bleed">
      <h1 className="sr-only">Seguimiento</h1>

      <PageActions>
        <IconButton
          aria-label="Actualizar"
          onClick={handleRefresh}
          disabled={refreshing}
        >
          <RefreshCw
            className={cn("size-[18px]", refreshing && "animate-spin")}
            aria-hidden="true"
          />
        </IconButton>
      </PageActions>

      {/* Base visual a sangre lista para conectar el mapa del CU 36 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-canvas overflow-hidden"
      >
        <svg
          viewBox="0 0 900 520"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <rect width="900" height="520" className="fill-raised" />
          <path
            d="M-20 400 C160 340 260 470 430 410 S720 330 930 420 V540 H-20Z"
            className="fill-canvas"
          />
          <g
            className="stroke-surface"
            strokeWidth="13"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M-20 150 H930" />
            <path d="M-20 290 H930" />
            <path d="M230 -20 V540" />
            <path d="M500 -20 V540" />
            <path d="M740 -20 V540" />
            <path d="M-20 40 L930 370" strokeWidth="8" />
          </g>
          <path
            d="M260 340 C340 310 370 230 470 240 S590 170 680 150 S780 110 820 90"
            fill="none"
            className="stroke-accent"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1 9"
          />
          <path
            d="M260 340 C340 310 370 230 470 240 S550 195 590 180"
            fill="none"
            className="stroke-accent"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="260"
            cy="340"
            r="7"
            className="fill-accent stroke-raised"
            strokeWidth="3"
          />
          <circle
            cx="590"
            cy="180"
            r="9"
            className="fill-lime stroke-brand-ink"
            strokeWidth="2.5"
          />
          <circle
            cx="380"
            cy="430"
            r="8"
            className="fill-amber stroke-brand-ink"
            strokeWidth="2.5"
          />
          <circle
            cx="820"
            cy="90"
            r="7"
            className="fill-raised stroke-accent"
            strokeWidth="3"
          />
        </svg>
      </div>

      <Island className="fixed z-10 left-[var(--isle-gap)] md:left-[var(--shell-left)] right-[var(--isle-gap)] md:right-auto bottom-[calc(var(--dock-h)+20px+env(safe-area-inset-bottom))] md:bottom-4 rounded-[18px] px-4 py-3 md:max-w-[310px]">
        <MicroLabel className="block">Pantalla a sangre</MicroLabel>
        <strong className="block font-display text-base tracking-[-0.025em] text-fg mt-1.5 mb-1">
          Acá va el mapa del CU 36
        </strong>
        <p className="text-[13px] leading-[1.4] text-muted">
          Las islas flotan sobre el mapa; la lista y el detalle se suman como
          islas nuevas.
        </p>
      </Island>
    </PageBody>
  );
}
