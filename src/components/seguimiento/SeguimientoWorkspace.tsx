"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ListFilter, RefreshCw, Search, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { PageActions } from "@/components/layout/PageActions";
import { BolsinDetallePanel } from "@/components/seguimiento/detail/BolsinDetallePanel";
import { SeguimientoFiltrosBar } from "@/components/seguimiento/filters/SeguimientoFiltrosBar";
import { BolsinesABordoSheet } from "@/components/seguimiento/list/BolsinesABordoSheet";
import { BolsinesTransitoList } from "@/components/seguimiento/list/BolsinesTransitoList";
import { MapaSeguimiento } from "@/components/seguimiento/map/MapaSeguimiento";
import { ConfirmarNotificacionModal } from "@/components/seguimiento/notifications/ConfirmarNotificacionModal";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { SplitFlap } from "@/components/ui/display/SplitFlap";
import { Input } from "@/components/ui/forms/Input";
import { Island } from "@/components/ui/surfaces/Island";
import { ResponsiveSheet } from "@/components/ui/surfaces/ResponsiveSheet";
import {
  MODELOS_GPS,
  type BolsinSeguimiento,
  type CmOrigenSeguimiento,
  type ModeloGps,
} from "@/dtos/seguimiento-bolsin.dto";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";
import {
  agruparEnUnidadesTransporte,
  type UnidadTransporte,
} from "@/lib/seguimiento/agrupador-unidades";
import {
  ErrorSeguimientoCliente,
  obtenerSeguimientoBolsines,
} from "@/services/seguimiento/seguimiento-cliente";

gsap.registerPlugin(useGSAP);

/** Filtra bolsines en tránsito por texto de precinto (insensible a mayúsculas) y código de CM destino. */
export function filtrarBolsinesSeguimiento(
  bolsines: BolsinSeguimiento[],
  precintoQuery: string,
  cmDestinoCodigo: string,
): BolsinSeguimiento[] {
  const query = precintoQuery.trim().toLowerCase();
  const destino = cmDestinoCodigo.trim();

  if (query.length === 0 && destino.length === 0) {
    return bolsines;
  }

  return bolsines.filter((bolsin) => {
    const coincidePrecinto =
      query.length === 0 ||
      String(bolsin.numeroPrecinto).toLowerCase().includes(query);
    const coincideDestino =
      destino.length === 0 || bolsin.cmDestino.codigo === destino;

    return coincidePrecinto && coincideDestino;
  });
}

export function SeguimientoWorkspace() {
  const workspaceRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const mobileSearchId = useId();
  const mobileListaTitleId = useId();
  const mobileDetalleTitleId = useId();

  const [modeloGps, setModeloGps] = useState<ModeloGps>(MODELOS_GPS[0]);
  const [bolsines, setBolsines] = useState<BolsinSeguimiento[]>([]);
  const [cmOrigen, setCmOrigen] = useState<CmOrigenSeguimiento | null>(null);
  const [esModoDemo, setEsModoDemo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [precintoQuery, setPrecintoQuery] = useState("");
  const [cmDestinoCodigo, setCmDestinoCodigo] = useState("");
  const [seleccionadoNro, setSeleccionadoNro] = useState<number | null>(null);
  const [hoveredBolsinNro, setHoveredBolsinNro] = useState<number | null>(null);
  const [unidadMobileAbierta, setUnidadMobileAbierta] =
    useState<UnidadTransporte | null>(null);
  const [mobileListaAbierta, setMobileListaAbierta] = useState(false);
  const [mobileDetalleMinimizado, setMobileDetalleMinimizado] = useState(false);
  const [notificarModalAbierto, setNotificarModalAbierto] = useState(false);
  const [refreshTick, setRefreshTick] = useState(0);

  const solicitarRecarga = useCallback(() => {
    setLoading(true);
    setError(null);
    setRefreshTick((prev) => prev + 1);
  }, []);

  const handleModeloGpsChange = useCallback((nuevoModelo: ModeloGps) => {
    setLoading(true);
    setError(null);
    setModeloGps(nuevoModelo);
  }, []);

  useEffect(() => {
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    obtenerSeguimientoBolsines(modeloGps, controller.signal)
      .then((resultado) => {
        if (controller.signal.aborted) return;

        setBolsines(resultado.bolsines);
        setCmOrigen(resultado.cmOrigen);
        setEsModoDemo(resultado.esModoDemo);
        setSeleccionadoNro((prev) => {
          if (prev === null) return null;
          return resultado.bolsines.some((b) => b.nroBolsin === prev)
            ? prev
            : null;
        });
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        const mensaje =
          err instanceof ErrorSeguimientoCliente
            ? err.message
            : "No pudimos consultar la telemetría en este momento. Probá de nuevo.";
        setError(mensaje);
      })
      .finally(() => {
        if (abortControllerRef.current === controller) {
          setLoading(false);
          abortControllerRef.current = null;
        }
      });

    return () => {
      controller.abort();
    };
  }, [modeloGps, refreshTick]);

  useGSAP(
    () => {
      const root = workspaceRef.current;
      if (!root) return;

      const islands = root.querySelectorAll<HTMLElement>("[data-seg-island]");
      if (islands.length === 0) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) {
            gsap.set(islands, {
              autoAlpha: 1,
              y: 0,
              duration: 0,
              clearProps: "transform,opacity,visibility",
            });
            return;
          }

          gsap.fromTo(
            islands,
            { autoAlpha: 0, y: 12 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.48,
              ease: "expo.out",
              stagger: 0.08,
              clearProps: "transform,opacity,visibility",
            },
          );
        },
      );
    },
    { scope: workspaceRef },
  );

  const destinosDisponibles = useMemo(() => {
    const mapa = new Map<string, string>();
    for (const bolsin of bolsines) {
      if (!mapa.has(bolsin.cmDestino.codigo)) {
        mapa.set(bolsin.cmDestino.codigo, bolsin.cmDestino.nombre);
      }
    }
    return Array.from(mapa.entries())
      .map(([codigo, nombre]) => ({ codigo, nombre }))
      .sort((a, b) => a.nombre.localeCompare(b.nombre, "es-AR"));
  }, [bolsines]);

  const bolsinesFiltrados = useMemo(
    () => filtrarBolsinesSeguimiento(bolsines, precintoQuery, cmDestinoCodigo),
    [bolsines, precintoQuery, cmDestinoCodigo],
  );

  const unidades = useMemo(
    () => agruparEnUnidadesTransporte(bolsines, { bolsinesFiltrados }),
    [bolsines, bolsinesFiltrados],
  );

  const filtroActivo =
    precintoQuery.trim().length > 0 || cmDestinoCodigo.trim().length > 0;

  const indiceSeleccionado = useMemo(() => {
    if (seleccionadoNro === null) return -1;
    return bolsinesFiltrados.findIndex((b) => b.nroBolsin === seleccionadoNro);
  }, [bolsinesFiltrados, seleccionadoNro]);

  const bolsinSeleccionado =
    indiceSeleccionado >= 0 ? bolsinesFiltrados[indiceSeleccionado]! : null;

  const puedeAnterior = indiceSeleccionado > 0;
  const puedeSiguiente =
    indiceSeleccionado >= 0 &&
    indiceSeleccionado < bolsinesFiltrados.length - 1;

  const handleSeleccionar = useCallback((nroBolsin: number) => {
    setSeleccionadoNro(nroBolsin);
    setMobileListaAbierta(false);
    setMobileDetalleMinimizado(false);
  }, []);

  const handleLimpiarFiltros = useCallback(() => {
    setPrecintoQuery("");
    setCmDestinoCodigo("");
  }, []);

  const handleAnterior = useCallback(() => {
    if (!puedeAnterior) return;
    const prev = bolsinesFiltrados[indiceSeleccionado - 1];
    if (prev) setSeleccionadoNro(prev.nroBolsin);
  }, [bolsinesFiltrados, indiceSeleccionado, puedeAnterior]);

  const handleSiguiente = useCallback(() => {
    if (!puedeSiguiente) return;
    const next = bolsinesFiltrados[indiceSeleccionado + 1];
    if (next) setSeleccionadoNro(next.nroBolsin);
  }, [bolsinesFiltrados, indiceSeleccionado, puedeSiguiente]);

  useEffect(() => {
    if (!isDesktop || !bolsinSeleccionado || notificarModalAbierto) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSeleccionadoNro(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDesktop, bolsinSeleccionado, notificarModalAbierto]);

  const codigoOrigen = cmOrigen?.codigo ?? "CM-01";
  const etiquetaContador =
    bolsinesFiltrados.length === 1 ? "bolsín" : "bolsines";

  return (
    <div ref={workspaceRef} className="relative h-full w-full overflow-hidden">
      <PageActions>
        <IconButton
          aria-label="Actualizar telemetría"
          title="Actualizar telemetría"
          onClick={solicitarRecarga}
          disabled={loading}
        >
          <RefreshCw
            className={cn("size-[18px]", loading && "animate-spin")}
            aria-hidden="true"
          />
        </IconButton>
      </PageActions>

      {/* Mapa 3D a sangre */}
      <div className="absolute inset-0">
        <MapaSeguimiento
          bolsines={bolsinesFiltrados}
          unidades={unidades}
          seleccionadoNro={bolsinSeleccionado?.nroBolsin ?? null}
          hoveredBolsinNro={hoveredBolsinNro}
          onHoverBolsin={setHoveredBolsinNro}
          onSeleccionar={handleSeleccionar}
          onTapUnidadMobile={(unidad) => setUnidadMobileAbierta(unidad)}
          cmOrigen={cmOrigen}
          loading={loading}
          filtroActivo={filtroActivo}
        />
      </div>

      {/* Desktop / Tablet (>= 768px): Isla maestra flotante izquierda */}
      <Island
        as="aside"
        data-seg-island=""
        aria-label="Bolsines en seguimiento"
        className={cn(
          "fixed z-20 top-[var(--shell-top)] left-[var(--shell-left)] bottom-4",
          "w-[min(368px,calc(100vw-var(--shell-left)-16px))]",
          "rounded-[var(--isle-r)] hidden md:flex flex-col overflow-hidden",
          "transition-[left] duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        )}
      >
        <header className="flex items-start justify-between gap-2 border-b border-hair px-4 py-3.5">
          <div className="flex min-w-0 flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <MicroLabel>CM Origen</MicroLabel>
              {esModoDemo ? (
                <span className="inline-flex items-center rounded-full border border-amber/40 bg-amber/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-ink">
                  Modo demo
                </span>
              ) : null}
            </div>
            <div className="flex items-center gap-2.5">
              <SplitFlap text={codigoOrigen} size="xs" />
              <div className="min-w-0">
                <p className="truncate font-display text-[14px] font-bold tracking-[-0.02em] text-fg">
                  {cmOrigen?.nombre ?? "Cargando comisión..."}
                </p>
                {cmOrigen?.direccion ? (
                  <p className="truncate text-[11.5px] text-muted">
                    {cmOrigen.direccion}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </header>

        <div className="border-b border-hair px-4 py-3">
          <SeguimientoFiltrosBar
            precintoQuery={precintoQuery}
            onPrecintoChange={setPrecintoQuery}
            cmDestinoCodigo={cmDestinoCodigo}
            onCmDestinoChange={setCmDestinoCodigo}
            destinosDisponibles={destinosDisponibles}
            modeloGps={modeloGps}
            onModeloGpsChange={handleModeloGpsChange}
            totalFiltrados={bolsinesFiltrados.length}
            totalGeneral={bolsines.length}
            onLimpiarFiltros={handleLimpiarFiltros}
            disabled={loading && bolsines.length === 0}
          />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <BolsinesTransitoList
            bolsines={bolsinesFiltrados}
            totalGeneral={bolsines.length}
            loading={loading}
            error={error}
            seleccionadoNro={bolsinSeleccionado?.nroBolsin ?? null}
            hoveredBolsinNro={hoveredBolsinNro}
            onSeleccionar={handleSeleccionar}
            onHoverBolsin={setHoveredBolsinNro}
            onReintentar={solicitarRecarga}
            onLimpiarFiltros={handleLimpiarFiltros}
          />
        </div>
      </Island>

      {/* Desktop / Tablet (>= 768px): Isla de detalle flotante derecha */}
      {bolsinSeleccionado ? (
        <Island
          as="section"
          data-seg-island=""
          aria-label={`Detalle del bolsín #${bolsinSeleccionado.nroBolsin}`}
          className={cn(
            "fixed z-20 top-[var(--shell-top)] right-4 bottom-[72px]",
            "w-[min(376px,calc(100vw-var(--shell-left)-400px))]",
            "rounded-[var(--isle-r)] hidden md:flex flex-col overflow-hidden",
          )}
        >
          <BolsinDetallePanel
            bolsin={bolsinSeleccionado}
            cmOrigen={cmOrigen}
            onNotificarClick={() => setNotificarModalAbierto(true)}
            onCerrar={() => setSeleccionadoNro(null)}
            onAnterior={handleAnterior}
            onSiguiente={handleSiguiente}
            puedeAnterior={puedeAnterior}
            puedeSiguiente={puedeSiguiente}
          />
        </Island>
      ) : null}

      {/* Mobile (< 768px): Barra compacta superior */}
      <Island
        data-seg-island=""
        className="fixed z-20 top-[var(--shell-top)] inset-x-[var(--isle-gap)] rounded-[var(--isle-r)] px-3 py-2.5 flex items-center gap-2 md:hidden"
      >
        <div className="relative min-w-0 flex-1">
          <label htmlFor={mobileSearchId} className="sr-only">
            Buscar bolsín por número de precinto
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted"
          />
          <Input
            id={mobileSearchId}
            type="text"
            variant="mono"
            value={precintoQuery}
            onChange={(event) => setPrecintoQuery(event.target.value)}
            placeholder="Buscar precinto..."
            className="h-9 border-edge pl-8 pr-8 text-[13px] font-medium"
          />
          {precintoQuery.length > 0 ? (
            <button
              type="button"
              onClick={() => setPrecintoQuery("")}
              aria-label="Limpiar búsqueda"
              className="absolute right-1.5 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-[7px] text-muted hover:bg-hover hover:text-fg"
            >
              <X aria-hidden="true" className="size-3.5" />
            </button>
          ) : null}
        </div>

        <span
          aria-live="polite"
          className="shrink-0 rounded-full border border-edge bg-raised px-2.5 py-1 font-mono text-[11px] font-semibold tabular-nums text-fg"
        >
          {bolsinesFiltrados.length} {etiquetaContador}
        </span>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => setMobileListaAbierta(true)}
          leftIcon={<ListFilter className="size-3.5" />}
          className="shrink-0"
        >
          Lista
        </Button>
      </Island>

      {/* Mobile (< 768px): Sheet con filtros + lista */}
      <ResponsiveSheet
        open={!isDesktop && mobileListaAbierta}
        onClose={() => setMobileListaAbierta(false)}
        labelledBy={mobileListaTitleId}
        className="flex flex-col"
      >
        <div className="flex items-center justify-between gap-2 border-b border-hair px-4 pb-3 pt-1">
          <div className="min-w-0">
            <MicroLabel>
              {cmOrigen?.codigo ?? "CM-01"} ·{" "}
              {esModoDemo ? "Modo demo" : "En tránsito"}
            </MicroLabel>
            <h2
              id={mobileListaTitleId}
              className="truncate font-display text-base font-bold tracking-[-0.02em] text-fg"
            >
              Bolsines en seguimiento
            </h2>
          </div>
          <IconButton
            aria-label="Cerrar listado"
            onClick={() => setMobileListaAbierta(false)}
          >
            <X className="size-4" />
          </IconButton>
        </div>

        <div className="border-b border-hair px-4 py-3">
          <SeguimientoFiltrosBar
            precintoQuery={precintoQuery}
            onPrecintoChange={setPrecintoQuery}
            cmDestinoCodigo={cmDestinoCodigo}
            onCmDestinoChange={setCmDestinoCodigo}
            destinosDisponibles={destinosDisponibles}
            modeloGps={modeloGps}
            onModeloGpsChange={handleModeloGpsChange}
            totalFiltrados={bolsinesFiltrados.length}
            totalGeneral={bolsines.length}
            onLimpiarFiltros={handleLimpiarFiltros}
            disabled={loading && bolsines.length === 0}
          />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <BolsinesTransitoList
            bolsines={bolsinesFiltrados}
            totalGeneral={bolsines.length}
            loading={loading}
            error={error}
            seleccionadoNro={bolsinSeleccionado?.nroBolsin ?? null}
            hoveredBolsinNro={hoveredBolsinNro}
            onSeleccionar={handleSeleccionar}
            onHoverBolsin={setHoveredBolsinNro}
            onReintentar={solicitarRecarga}
            onLimpiarFiltros={handleLimpiarFiltros}
          />
        </div>
      </ResponsiveSheet>

      {/* Mobile (< 768px): Sheet con detalle del bolsín seleccionado */}
      <ResponsiveSheet
        open={!isDesktop && Boolean(bolsinSeleccionado) && !mobileDetalleMinimizado}
        onClose={() => {
          setSeleccionadoNro(null);
          setMobileDetalleMinimizado(false);
        }}
        labelledBy={mobileDetalleTitleId}
        className="flex flex-col"
      >
        {bolsinSeleccionado ? (
          <>
            <h2 id={mobileDetalleTitleId} className="sr-only">
              Detalle del bolsín #{bolsinSeleccionado.nroBolsin}
            </h2>
            <BolsinDetallePanel
              bolsin={bolsinSeleccionado}
              cmOrigen={cmOrigen}
              onNotificarClick={() => setNotificarModalAbierto(true)}
              onVerEnMapa={() => setMobileDetalleMinimizado(true)}
              onCerrar={() => {
                setSeleccionadoNro(null);
                setMobileDetalleMinimizado(false);
              }}
              onAnterior={handleAnterior}
              onSiguiente={handleSiguiente}
              puedeAnterior={puedeAnterior}
              puedeSiguiente={puedeSiguiente}
              className="min-h-0 flex-1"
            />
          </>
        ) : null}
      </ResponsiveSheet>

      {/* Mobile (< 768px): Barra compacta al minimizar detalle para ver la ruta en el mapa */}
      {!isDesktop && bolsinSeleccionado && mobileDetalleMinimizado ? (
        <Island
          as="aside"
          aria-label={`Ruta del bolsín #${bolsinSeleccionado.nroBolsin}`}
          className="fixed z-20 inset-x-[var(--isle-gap)] bottom-[var(--shell-bottom)] flex items-center justify-between gap-2.5 rounded-[var(--isle-r)] px-3.5 py-2.5 md:hidden"
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-fg tabular-nums">
                Bolsín #{bolsinSeleccionado.nroBolsin}
              </span>
              <span className="font-mono text-[11px] text-muted">
                {bolsinSeleccionado.numeroPrecinto}
              </span>
            </div>
            <p className="truncate text-xs text-muted">
              {(cmOrigen ?? bolsinSeleccionado.cmOrigen)?.codigo ?? "CM-01"} →{" "}
              {bolsinSeleccionado.cmDestino.nombre}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setMobileDetalleMinimizado(false)}
            >
              Ver detalle
            </Button>
            <IconButton
              aria-label="Salir de la ruta"
              title="Salir de la ruta"
              onClick={() => {
                setSeleccionadoNro(null);
                setMobileDetalleMinimizado(false);
              }}
              className="size-8 rounded-[10px] border border-edge bg-surface"
            >
              <X className="size-4" aria-hidden="true" />
            </IconButton>
          </div>
        </Island>
      ) : null}

      {/* Mobile (< 768px): Sheet "Bolsines a bordo" al tocar un camión con N bolsines */}
      <BolsinesABordoSheet
        unidad={unidadMobileAbierta}
        open={!isDesktop && unidadMobileAbierta !== null}
        onClose={() => setUnidadMobileAbierta(null)}
        onSeleccionarBolsin={(nroBolsin) => {
          setUnidadMobileAbierta(null);
          handleSeleccionar(nroBolsin);
        }}
      />

      {/* Modal CU 30/31: Avisar ubicación al gerente */}
      <ConfirmarNotificacionModal
        abierto={notificarModalAbierto}
        bolsin={bolsinSeleccionado}
        cmOrigen={cmOrigen}
        modeloGps={modeloGps}
        onCerrar={() => setNotificarModalAbierto(false)}
      />
    </div>
  );
}
