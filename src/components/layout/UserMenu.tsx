"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { cn } from "@/lib/cn";
import type { SesionVista } from "@/services/auth/sesion-actual";

gsap.registerPlugin(useGSAP);

const emptySubscribe = () => () => {};

export interface UserMenuProps {
  sesion: SesionVista;
  compact?: boolean;
}

export function UserMenu({ sesion, compact = false }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const router = useRouter();
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  useGSAP(
    () => {
      if (!open || !menuRef.current) return;
      const el = menuRef.current;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) {
            gsap.set(el, { autoAlpha: 1, scale: 1 });
            return;
          }
          gsap.fromTo(
            el,
            { autoAlpha: 0, scale: 0.96 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.2,
              ease: "expo.out",
              clearProps: "transform,opacity,visibility",
            },
          );
        },
      );
    },
    { dependencies: [open] },
  );

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node | null;
      if (
        target &&
        !menuRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  async function handleLogout() {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Si la API no responde, igual redirigimos al login
    } finally {
      setOpen(false);
      router.replace("/login");
    }
  }

  const menuPopup =
    open && isClient
      ? createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label="Opciones de cuenta"
            data-user-menu=""
            className={cn(
              "fixed z-50 min-w-[216px] rounded-[16px] border border-edge bg-surface p-2 text-fg",
              compact
                ? "right-[var(--isle-gap)] top-[calc(var(--top-h)+var(--isle-gap)*2)] origin-top-right"
                : "left-[calc(var(--isle-gap)+var(--side-w)+var(--isle-gap))] bottom-[var(--isle-gap)] origin-bottom-left",
            )}
          >
            <div className="px-2.5 py-2 border-b border-hair">
              <p className="text-[13px] font-semibold text-fg leading-tight">
                {sesion.nombre} {sesion.apellido}
              </p>
              <p className="text-[12px] text-muted mt-0.5">{sesion.rol}</p>
              <MicroLabel className="block mt-1">{sesion.cm.nombre}</MicroLabel>
            </div>
            <button
              type="button"
              role="menuitem"
              disabled={loggingOut}
              onClick={handleLogout}
              className="mt-1.5 w-full flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-[13px] font-semibold text-danger-ink hover:bg-hover transition-colors duration-120 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50"
            >
              <LogOut className="size-4" aria-hidden="true" />
              <span>{loggingOut ? "Cerrando sesión…" : "Cerrar sesión"}</span>
            </button>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={`Cuenta de ${sesion.nombre} ${sesion.apellido}`}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-[11px] whitespace-nowrap rounded-[14px] text-left cursor-pointer",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          compact ? "p-0" : "w-full",
        )}
      >
        <span
          className={cn(
            "flex-none grid place-items-center border border-edge font-mono font-semibold tracking-[0.06em] text-fg transition-colors duration-150 hover:bg-hover",
            compact
              ? "size-[38px] rounded-[12px] text-[11px]"
              : "size-[42px] rounded-[14px] text-[11px]",
          )}
        >
          {sesion.iniciales}
        </span>
        {!compact ? (
          <span className="side-lbl min-w-0">
            <strong className="block text-[13px] font-semibold leading-[1.15] text-fg">
              {sesion.nombre} {sesion.apellido}
            </strong>
            <MicroLabel className="block mt-0.5">{sesion.cm.nombre}</MicroLabel>
          </span>
        ) : null}
      </button>

      {menuPopup}
    </div>
  );
}
