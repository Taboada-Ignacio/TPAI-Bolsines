"use client";

import { ChevronDown, ChevronUp, X } from "lucide-react";
import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { BottomSheet } from "@/components/ui/surfaces/BottomSheet";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";

const DEFAULT_MIN_PANEL = 380;
const DEFAULT_INITIAL_PANEL = 480;
const DEFAULT_MIN_MASTER = 420;
const STEP_NORMAL = 16;
const STEP_LARGE = 64;

interface SeparadorPanelProps {
  ancho: number;
  min: number;
  max: number;
  onCambiar: (ancho: number) => void;
}

/** Divisor vertical accesible entre la tabla y el panel de detalle integrado. */
function SeparadorPanel({ ancho, min, max, onCambiar }: SeparadorPanelProps) {
  const inicio = useRef<{ x: number; ancho: number } | null>(null);
  const limitar = (valor: number) => Math.min(Math.max(valor, min), max);

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label="Ancho del panel de detalle"
      aria-valuenow={Math.round(ancho)}
      aria-valuemin={min}
      aria-valuemax={max}
      tabIndex={0}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        inicio.current = { x: e.clientX, ancho };
      }}
      onPointerMove={(e) => {
        if (!inicio.current) return;
        onCambiar(limitar(inicio.current.ancho + (inicio.current.x - e.clientX)));
      }}
      onPointerUp={() => {
        inicio.current = null;
      }}
      onDoubleClick={() => onCambiar(limitar((min + max) / 2))}
      onKeyDown={(e) => {
        const paso = e.shiftKey ? STEP_LARGE : STEP_NORMAL;
        if (e.key === "ArrowLeft") onCambiar(limitar(ancho + paso));
        else if (e.key === "ArrowRight") onCambiar(limitar(ancho - paso));
        else if (e.key === "Home") onCambiar(max);
        else if (e.key === "End") onCambiar(min);
        else return;
        e.preventDefault();
      }}
      className="group relative hidden w-4 shrink-0 cursor-col-resize touch-none select-none items-stretch justify-center focus-visible:outline-none lg:flex"
    >
      <span className="w-px bg-hair transition-all duration-150 group-hover:w-0.5 group-hover:bg-accent group-focus-visible:w-0.5 group-focus-visible:bg-accent group-active:bg-accent" />
    </div>
  );
}

function leerAnchoGuardado(storageKey: string, initialWidth: number, minWidth: number): number {
  if (typeof window === "undefined") return initialWidth;
  try {
    const valor = Number(window.localStorage.getItem(storageKey));
    return Number.isFinite(valor) && valor >= minWidth ? valor : initialWidth;
  } catch {
    return initialWidth;
  }
}

function ignorarTecla(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) ||
    target.getAttribute("role") === "separator"
  );
}

export interface MasterDetailSplitProps {
  /** Contenido principal (tabla / listado). */
  master: ReactNode;
  /** Contenido del panel de detalle cuando hay un elemento seleccionado; null si no hay selección. */
  detail: ReactNode | null;
  /** Título accesible para el panel/sheet de detalle. */
  detailLabel: string;
  /** Posición actual dentro de la lista (ej. 1 de 12). */
  posicion?: { actual: number; total: number } | null;
  onCerrar: () => void;
  onAnterior?: () => void;
  onSiguiente?: () => void;
  hasAnterior?: boolean;
  hasSiguiente?: boolean;
  /** Clave de localStorage para recordar el ancho del panel en desktop. */
  storageKey?: string;
  minPanelWidth?: number;
  initialPanelWidth?: number;
  minMasterWidth?: number;
  className?: string;
}

/**
 * Patrón Costado / Master-Detail integrado:
 * - En desktop (>= lg): lista a la izquierda + separador redimensionable + panel integrado a la derecha.
 * - En mobile (< lg): abre BottomSheet al seleccionar un elemento.
 */
export function MasterDetailSplit({
  master,
  detail,
  detailLabel,
  posicion,
  onCerrar,
  onAnterior,
  onSiguiente,
  hasAnterior = false,
  hasSiguiente = false,
  storageKey = "bolsines:panel-detalle-ancho",
  minPanelWidth = DEFAULT_MIN_PANEL,
  initialPanelWidth = DEFAULT_INITIAL_PANEL,
  minMasterWidth = DEFAULT_MIN_MASTER,
  className,
}: MasterDetailSplitProps) {
  const esEscritorio = useMediaQuery("(min-width: 1024px)");
  const vistaRef = useRef<HTMLDivElement>(null);
  const [anchoVista, setAnchoVista] = useState(0);
  const [anchoPanel, setAnchoPanel] = useState(() =>
    leerAnchoGuardado(storageKey, initialPanelWidth, minPanelWidth),
  );

  const open = detail !== null;

  useEffect(() => {
    const el = vistaRef.current;
    if (!el) return;
    const observador = new ResizeObserver(([entrada]) => {
      setAnchoVista(entrada.contentRect.width);
    });
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    if (!open || !esEscritorio) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || ignorarTecla(e.target)) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onCerrar();
      } else if (e.key === "j" && hasSiguiente && onSiguiente) {
        e.preventDefault();
        onSiguiente();
      } else if (e.key === "k" && hasAnterior && onAnterior) {
        e.preventDefault();
        onAnterior();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [esEscritorio, hasAnterior, hasSiguiente, onAnterior, onCerrar, onSiguiente, open]);

  const anchoMax = Math.max(minPanelWidth, anchoVista - minMasterWidth);
  const anchoEfectivo = Math.min(anchoPanel, anchoMax);

  function cambiarAncho(ancho: number) {
    setAnchoPanel(ancho);
    try {
      window.localStorage.setItem(storageKey, String(Math.round(ancho)));
    } catch {
      // Sin almacenamiento, vale para la sesión actual.
    }
  }

  const headerDetalle = (
    <div className="flex items-center justify-between gap-2 pb-3 border-b border-hair">
      <div className="flex items-center gap-1.5">
        {onAnterior && onSiguiente ? (
          <>
            <button
              type="button"
              onClick={onAnterior}
              disabled={!hasAnterior}
              aria-label="Elemento anterior"
              title="Anterior (k)"
              className="size-8 rounded-full grid place-items-center text-muted hover:bg-hover hover:text-fg disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
            >
              <ChevronUp className="size-4" />
            </button>
            <button
              type="button"
              onClick={onSiguiente}
              disabled={!hasSiguiente}
              aria-label="Elemento siguiente"
              title="Siguiente (j)"
              className="size-8 rounded-full grid place-items-center text-muted hover:bg-hover hover:text-fg disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
            >
              <ChevronDown className="size-4" />
            </button>
          </>
        ) : null}
        {posicion ? (
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted ml-1 tabular-nums">
            {posicion.actual} de {posicion.total}
          </span>
        ) : null}
      </div>

      <button
        type="button"
        onClick={onCerrar}
        aria-label={`Cerrar ${detailLabel}`}
        title="Cerrar (Esc)"
        className="size-8 rounded-full grid place-items-center text-muted hover:bg-hover hover:text-fg cursor-pointer transition-colors"
      >
        <X className="size-4" />
      </button>
    </div>
  );

  return (
    <div ref={vistaRef} className={cn("w-full", className)}>
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="@container min-w-0 flex-1">{master}</div>

        {open && esEscritorio ? (
          <>
            <SeparadorPanel
              ancho={anchoEfectivo}
              min={minPanelWidth}
              max={anchoMax}
              onCambiar={cambiarAncho}
            />
            <aside
              aria-label={detailLabel}
              style={{ width: `${anchoEfectivo}px` }}
              className="shrink-0 rounded-[20px] border border-edge bg-raised/55 p-5 lg:sticky lg:top-[calc(var(--shell-top)+var(--isle-gap))]"
            >
              {headerDetalle}
              <div className="mt-4">{detail}</div>
            </aside>
          </>
        ) : null}
      </div>

      {!esEscritorio ? (
        <BottomSheet
          open={open}
          onClose={onCerrar}
          labelledBy="master-detail-sheet-title"
        >
          <span id="master-detail-sheet-title" className="sr-only">
            {detailLabel}
          </span>
          {headerDetalle}
          <div className="mt-4">{detail}</div>
        </BottomSheet>
      ) : null}
    </div>
  );
}
