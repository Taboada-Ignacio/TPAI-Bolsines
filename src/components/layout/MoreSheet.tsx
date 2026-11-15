"use client";

import { LogOut, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { Sheet } from "@/components/ui/surfaces/Sheet";
import type { Destino } from "@/lib/navigation";
import type { SesionVista } from "@/services/auth/sesion-actual";

export interface MoreSheetProps {
  open: boolean;
  onClose: () => void;
  sesion: SesionVista;
  extras: Destino[];
  activoId?: string;
}

export function MoreSheet({
  open,
  onClose,
  sesion,
  extras,
  activoId,
}: MoreSheetProps) {
  const titleId = useId();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Si la API no responde, igual redirigimos al login
    } finally {
      onClose();
      router.replace("/login");
    }
  }

  function handleToggleTheme() {
    const root = document.documentElement;
    const isDark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";
    root.dataset.theme = next;
    document.cookie = `bolsines_tema=${next}; path=/; max-age=31536000; samesite=lax`;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", next === "dark" ? "#0A0F1A" : "#C7D1DD");
    }
  }

  return (
    <Sheet open={open} onClose={onClose} labelledBy={titleId}>
      <div className="flex items-center gap-3 pb-4 border-b border-hair">
        <span className="size-11 rounded-[14px] border border-edge grid place-items-center font-mono text-xs font-semibold tracking-[0.06em] text-fg">
          {sesion.iniciales}
        </span>
        <div className="min-w-0">
          <h2
            id={titleId}
            className="font-display text-base font-bold tracking-[-0.02em] text-fg truncate"
          >
            {sesion.nombre} {sesion.apellido}
          </h2>
          <p className="text-[13px] text-muted truncate">{sesion.rol}</p>
          <MicroLabel className="block mt-0.5">{sesion.cm.nombre}</MicroLabel>
        </div>
      </div>

      {extras.length > 0 ? (
        <div className="py-3 border-b border-hair flex flex-col gap-1">
          <MicroLabel className="px-2 mb-1">Más destinos</MicroLabel>
          {extras.map((destino) => {
            const Icon = destino.icono;
            const isActive = destino.id === activoId;
            return (
              <Link
                key={destino.id}
                href={destino.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className="flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm font-semibold text-fg hover:bg-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Icon className="size-[18px]" aria-hidden="true" />
                <span>{destino.nombre}</span>
              </Link>
            );
          })}
        </div>
      ) : null}

      <div className="pt-3 flex flex-col gap-1.5">
        <button
          type="button"
          onClick={handleToggleTheme}
          className="w-full flex items-center justify-between rounded-[12px] px-3 py-2.5 text-sm font-semibold text-fg hover:bg-hover transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="flex items-center gap-3">
            <Sun className="size-[18px] hidden dark:block" aria-hidden="true" />
            <Moon className="size-[18px] dark:hidden" aria-hidden="true" />
            <span>Cambiar tema</span>
          </span>
          <MicroLabel>Claro / Oscuro</MicroLabel>
        </button>

        <button
          type="button"
          disabled={loggingOut}
          onClick={handleLogout}
          className="w-full flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm font-semibold text-danger-ink hover:bg-hover transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50"
        >
          <LogOut className="size-[18px]" aria-hidden="true" />
          <span>{loggingOut ? "Cerrando sesión…" : "Cerrar sesión"}</span>
        </button>
      </div>
    </Sheet>
  );
}
