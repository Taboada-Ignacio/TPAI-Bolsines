"use client";

import { LogOut, Menu } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { MoreSheet } from "@/components/layout/MoreSheet";
import { Island } from "@/components/ui/surfaces/Island";
import { useDestinoActivo } from "@/hooks/useDestinoActivo";
import { useLiquidIndicator } from "@/hooks/useLiquidIndicator";
import { cn } from "@/lib/cn";
import { repartirDestinosPildora, type Destino } from "@/lib/navigation";
import type { SesionVista } from "@/services/auth/sesion-actual";

const emptySubscribe = () => () => {};

function BolsinMini3DFallback() {
  return (
    <span
      aria-hidden="true"
      className="flex-none size-[36px] rounded-full ml-0.5 bg-fg/5 border border-edge"
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

export interface DockPillProps {
  destinos: Destino[];
  sesion: SesionVista;
}

export function DockPill({ destinos, sesion }: DockPillProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const [moreOpen, setMoreOpen] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const activo = useDestinoActivo();
  const router = useRouter();
  const { principales, extras } = repartirDestinosPildora(destinos);
  const isExtraActivo = extras.some((destino) => destino.id === activo?.id);
  const navRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useLiquidIndicator({
    axis: "x",
    activeId: activo?.id,
    containerRef: navRef,
    blobRef,
    itemRefs,
    paddingOffset: 5,
  });

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    function checkViewport() {
      if (!vv) return;
      const ratio = vv.height / window.innerHeight;
      setKeyboardOpen(ratio < 0.75);
    }

    vv.addEventListener("resize", checkViewport);
    return () => vv.removeEventListener("resize", checkViewport);
  }, []);

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
    <>
      <Island
        as="nav"
        ref={navRef}
        aria-label="Navegación principal"
        data-dock-pill=""
        className={cn(
          "flex md:hidden fixed z-40 left-1/2 -translate-x-1/2 bottom-[max(10px,env(safe-area-inset-bottom))]",
          "h-[var(--dock-h)] max-w-[calc(100vw-16px)] p-[5px] rounded-full items-center gap-0.5",
          keyboardOpen && "hidden",
        )}
      >
        <div
          ref={blobRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-[5px] top-[5px] h-[42px] rounded-full bg-lime border border-lime-edge"
        />

        {isClient ? (
          <BolsinMini3D className="size-[36px] rounded-full ml-0.5" />
        ) : (
          <BolsinMini3DFallback />
        )}

        {principales.map((destino) => {
          const Icon = destino.icono;
          const isActive = activo?.id === destino.id;

          return (
            <Link
              key={destino.id}
              ref={(el) => {
                itemRefs.current[destino.id] = el;
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
                "relative h-[42px] rounded-full flex items-center gap-1.5 px-3 text-[12.5px] whitespace-nowrap",
                "transition-[color,transform] duration-200 active:scale-95",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                isActive
                  ? "text-on-lime font-bold"
                  : "text-muted font-semibold",
              )}
            >
              <Icon
                className="size-[17px]"
                strokeWidth={2.2}
                aria-hidden="true"
              />
              <span>{destino.nombreCorto}</span>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={() => setMoreOpen(true)}
          aria-expanded={moreOpen}
          className={cn(
            "relative h-[42px] rounded-full flex items-center gap-1.5 px-2.5 text-[12.5px] whitespace-nowrap cursor-pointer transition-[color,background-color,transform] duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            isExtraActivo
              ? "bg-lime text-on-lime font-bold border border-lime-edge"
              : "text-muted font-semibold hover:text-fg",
          )}
        >
          <Menu className="size-[17px]" strokeWidth={2.2} aria-hidden="true" />
          <span>Más</span>
        </button>

        <button
          type="button"
          disabled={loggingOut}
          onClick={handleLogout}
          aria-label="Cerrar sesión"
          title="Cerrar sesión"
          className="relative size-[38px] rounded-full grid place-items-center text-danger-ink whitespace-nowrap cursor-pointer transition-[background-color,transform] duration-150 hover:bg-hover active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50"
        >
          <LogOut
            className="size-[17px]"
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </button>
      </Island>

      <MoreSheet
        open={moreOpen}
        onClose={() => setMoreOpen(false)}
        sesion={sesion}
        extras={extras}
        activoId={activo?.id}
      />
    </>
  );
}
