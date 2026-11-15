"use client";

import { LogOut } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useSyncExternalStore } from "react";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { Island } from "@/components/ui/surfaces/Island";
import { useDestinoActivo } from "@/hooks/useDestinoActivo";
import { useLiquidIndicator } from "@/hooks/useLiquidIndicator";
import { cn } from "@/lib/cn";
import type { Destino } from "@/lib/navigation";
import type { SesionVista } from "@/services/auth/sesion-actual";

const emptySubscribe = () => () => {};

function BolsinMini3DFallback() {
  return (
    <span
      aria-hidden="true"
      className="flex-none size-[42px] rounded-[13px] bg-fg/5 border border-edge"
    />
  );
}

const BolsinMini3D = dynamic(
  () => import("@/components/layout/BolsinMini3D").then((m) => m.BolsinMini3D),
  {
    ssr: false,
    loading: BolsinMini3DFallback,
  },
);

export interface SideIslandProps {
  destinos: Destino[];
  sesion: SesionVista;
}

export function SideIsland({ destinos, sesion }: SideIslandProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const [loggingOut, setLoggingOut] = useState(false);
  const activo = useDestinoActivo();
  const router = useRouter();
  const itemsRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useLiquidIndicator({
    axis: "y",
    activeId: activo?.id,
    containerRef: itemsRef,
    blobRef,
    itemRefs: linkRefs,
  });

  async function handleLogout() {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Si la API no responde, igual redirigimos al login
    } finally {
      router.replace("/login");
    }
  }

  return (
    <Island
      as="nav"
      aria-label="Navegación principal"
      data-side-island=""
      className={cn(
        "group/side hidden md:flex fixed z-40 left-[var(--isle-gap)] top-[var(--isle-gap)] bottom-[var(--isle-gap)]",
        "w-[var(--side-w)] rounded-[var(--isle-r)] p-2 flex-col overflow-hidden",
        "bg-surface/65 backdrop-blur-[22px] backdrop-saturate-150",
        "shadow-[inset_0_1px_0_rgb(255_255_255/0.55),0_12px_32px_-16px_rgb(11_18_32/0.2)]",
        "dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_12px_32px_-16px_rgb(0_0_0/0.45)]",
        "transition-[width,background-color,border-color] duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "has-[:focus-visible]:w-[var(--side-w-open)]",
        "[@media(hover:hover)_and_(pointer:fine)]:hover:w-[var(--side-w-open)]",
      )}
    >
      {/* Mini bolsín 3D */}
      <div className="flex items-center gap-[11px] mb-[18px] whitespace-nowrap">
        {isClient ? <BolsinMini3D /> : <BolsinMini3DFallback />}
        <span className="side-lbl min-w-0">
          <strong className="block font-display text-sm tracking-[-0.02em] leading-[1.1] text-fg">
            Bolsines
          </strong>
          <MicroLabel className="block mt-0.5">{sesion.cm.sigla}</MicroLabel>
        </span>
      </div>

      {/* Destinos */}
      <div
        ref={itemsRef}
        className="relative flex flex-col gap-1.5 flex-1 min-h-0 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          ref={blobRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 w-full h-[42px] rounded-[14px] bg-lime border border-lime-edge"
        />

        {destinos.map((destino) => {
          const Icon = destino.icono;
          const isActive = activo?.id === destino.id;

          return (
            <Link
              key={destino.id}
              ref={(el) => {
                linkRefs.current[destino.id] = el;
              }}
              href={destino.href}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                if (isActive) {
                  document.getElementById("contenido")?.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className={cn(
                "relative h-[42px] rounded-[14px] flex items-center gap-[13px] pl-[11px] font-semibold text-sm whitespace-nowrap",
                "transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                isActive
                  ? "text-on-lime"
                  : "text-muted hover:bg-hover hover:text-fg",
              )}
            >
              <Icon className="flex-none size-5" aria-hidden="true" />
              <span className="side-lbl">{destino.nombre}</span>
            </Link>
          );
        })}
      </div>

      {/* Pie: perfil + cerrar sesión directo */}
      <div className="flex flex-col gap-1.5 pt-2 border-t border-hair">
        <Link
          href="/perfil"
          aria-label="Ir a Mi perfil"
          className="flex items-center gap-[11px] whitespace-nowrap rounded-[14px] hover:bg-hover transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="flex-none size-[42px] rounded-[14px] border border-edge grid place-items-center font-mono text-[11px] font-semibold tracking-[0.06em] text-fg">
            {sesion.iniciales}
          </span>
          <span className="side-lbl min-w-0">
            <strong className="block text-[13px] font-semibold leading-[1.15] text-fg truncate">
              {sesion.nombre} {sesion.apellido}
            </strong>
            <MicroLabel className="block mt-0.5 truncate">
              {sesion.cm.nombre}
            </MicroLabel>
          </span>
        </Link>

        <button
          type="button"
          disabled={loggingOut}
          onClick={handleLogout}
          aria-label="Cerrar sesión"
          className={cn(
            "relative h-[42px] rounded-[14px] flex items-center gap-[13px] pl-[11px] font-semibold text-sm whitespace-nowrap cursor-pointer",
            "text-danger-ink hover:bg-hover transition-colors duration-150",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            "disabled:opacity-50",
          )}
        >
          <LogOut className="flex-none size-5" aria-hidden="true" />
          <span className="side-lbl">
            {loggingOut ? "Cerrando…" : "Cerrar sesión"}
          </span>
        </button>
      </div>
    </Island>
  );
}
