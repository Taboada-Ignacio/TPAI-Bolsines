"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  AlertCircle,
  ArrowRight,
  Eye,
  Package,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Trash2,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { BolsinDeleteSheet } from "@/components/bolsines/BolsinDeleteSheet";
import { BolsinEstadoBadge } from "@/components/bolsines/BolsinEstadoBadge";
import { BolsinFormSheet } from "@/components/bolsines/BolsinFormSheet";
import { PageActions } from "@/components/layout/PageActions";
import { PageHeading } from "@/components/layout/PageHeading";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { Marker } from "@/components/ui/display/Marker";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { SplitFlap } from "@/components/ui/display/SplitFlap";
import { Skeleton } from "@/components/ui/feedback/Skeleton";
import { Select } from "@/components/ui/forms/Select";
import { Pagination } from "@/components/ui/navigation/Pagination";
import {
  formatFechaCorta,
  formatPesoKg,
  type BolsinListadoItem,
  type CatalogoComision,
  type CatalogoEmpleado,
  type CatalogoEstado,
  type CatalogosBolsin,
} from "@/lib/bolsines";

gsap.registerPlugin(useGSAP);

const PAGE_SIZE = 10;

type SheetState =
  | { tipo: "crear" }
  | { tipo: "editar"; bolsin: BolsinListadoItem }
  | null;

/** Vista principal de gestión de bolsines conectada a la API real. */
export function BolsinesView() {
  const [bolsines, setBolsines] = useState<BolsinListadoItem[]>([]);
  const [catalogos, setCatalogos] = useState<CatalogosBolsin>({
    comisiones: [],
    estadosBolsin: [],
    empleados: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadTick, setReloadTick] = useState(0);

  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [page, setPage] = useState(1);

  const [sheetState, setSheetState] = useState<SheetState>(null);
  const [eliminando, setEliminando] = useState<BolsinListadoItem | null>(null);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const [resBolsines, resCm, resEstados, resEmpleados] = await Promise.all([
          fetch("/api/bolsines", { signal: controller.signal }),
          fetch("/api/comisiones-medicas", { signal: controller.signal }),
          fetch("/api/estados", { signal: controller.signal }),
          fetch("/api/empleados", { signal: controller.signal }),
        ]);

        if (!resBolsines.ok || !resCm.ok || !resEstados.ok || !resEmpleados.ok) {
          throw new Error("No se pudieron cargar los datos de bolsines.");
        }

        const [dataBolsines, dataCm, dataEstados, dataEmpleados] =
          (await Promise.all([
            resBolsines.json(),
            resCm.json(),
            resEstados.json(),
            resEmpleados.json(),
          ])) as [
            BolsinListadoItem[],
            CatalogoComision[],
            CatalogoEstado[],
            CatalogoEmpleado[],
          ];

        setBolsines(dataBolsines);
        setCatalogos({
          comisiones: dataCm,
          estadosBolsin: dataEstados.filter(
            (estado) => estado.ambito.toUpperCase() === "BOLSIN",
          ),
          empleados: dataEmpleados,
        });
        setError(null);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(
          "No pudimos obtener el listado de bolsines. Verificá la conexión e intentá nuevamente.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void load();
    return () => controller.abort();
  }, [reloadTick]);

  function handleReintentar() {
    setLoading(true);
    setError(null);
    setReloadTick((t) => t + 1);
  }

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return bolsines.filter((b) => {
      if (
        filtroEstado &&
        String(b.estadoActual?.id ?? "") !== filtroEstado
      ) {
        return false;
      }
      if (!q) return true;
      return (
        String(b.numeroBolsin).includes(q) ||
        String(b.numeroPrecinto).includes(q) ||
        b.cmOrigen.codigo.toLowerCase().includes(q) ||
        b.cmOrigen.nombre.toLowerCase().includes(q) ||
        b.cmDestino.codigo.toLowerCase().includes(q) ||
        b.cmDestino.nombre.toLowerCase().includes(q) ||
        (b.estadoActual?.nombre.toLowerCase().includes(q) ?? false)
      );
    });
  }, [bolsines, busqueda, filtroEstado]);

  const totalPages = Math.max(1, Math.ceil(filtrados.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const paginados = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtrados.slice(start, start + PAGE_SIZE);
  }, [filtrados, currentPage]);

  useGSAP(
    () => {
      if (loading || paginados.length === 0) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-bolsin-item]", {
          autoAlpha: 0,
          y: 10,
          duration: 0.28,
          stagger: 0.04,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-bolsin-item]", { autoAlpha: 1, y: 0 });
      });
    },
    { scope: listRef, dependencies: [loading, currentPage, filtrados.length] },
  );

  function handleFormSuccess(guardado: BolsinListadoItem) {
    setBolsines((prev) => {
      const existe = prev.some((b) => b.id === guardado.id);
      if (existe) {
        return prev.map((b) => (b.id === guardado.id ? guardado : b));
      }
      return [guardado, ...prev];
    });
  }

  function handleDeleted(id: number) {
    const nextList = bolsines.filter((b) => b.id !== id);
    setBolsines(nextList);
    setEliminando(null);
    const nextTotalPages = Math.max(1, Math.ceil(nextList.length / PAGE_SIZE));
    if (currentPage > nextTotalPages) {
      setPage(nextTotalPages);
    }
  }

  function limpiarFiltros() {
    setBusqueda("");
    setFiltroEstado("");
    setPage(1);
  }

  return (
    <>
      <PageActions>
        <IconButton
          aria-label="Nuevo bolsín"
          onClick={() => setSheetState({ tipo: "crear" })}
        >
          <Plus className="size-[18px]" aria-hidden="true" />
        </IconButton>
      </PageActions>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageHeading rotulo="Operación · Despacho y custodia">
          <Marker>Bolsines.</Marker>
        </PageHeading>

        <Button
          type="button"
          variant="primary"
          onClick={() => setSheetState({ tipo: "crear" })}
          className="rounded-full self-start sm:self-auto"
        >
          <Plus className="size-4" aria-hidden="true" />
          Nuevo bolsín
        </Button>
      </div>

      {/* Barra de búsqueda y filtro por estado */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-2.5 sm:flex-row sm:items-center">
          <div className="relative w-full sm:max-w-sm">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                setPage(1);
              }}
              placeholder="Buscar por N.º bolsín, precinto o CM…"
              aria-label="Buscar bolsines"
              className="h-11 w-full rounded-full border border-line bg-surface pl-10 pr-10 text-sm text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            />
            {busqueda ? (
              <button
                type="button"
                aria-label="Limpiar búsqueda"
                onClick={() => {
                  setBusqueda("");
                  setPage(1);
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted hover:bg-hover hover:text-fg focus-visible:outline-2 focus-visible:outline-accent"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <div className="w-full sm:w-52">
            <Select
              aria-label="Filtrar por estado"
              value={filtroEstado}
              onChange={(e) => {
                setFiltroEstado(e.target.value);
                setPage(1);
              }}
              className="rounded-full"
            >
              <option value="">Todos los estados</option>
              {catalogos.estadosBolsin.map((estado) => (
                <option key={estado.id} value={estado.id}>
                  {estado.nombre}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <MicroLabel aria-live="polite" className="shrink-0">
          {loading
            ? "Cargando bolsines…"
            : `${filtrados.length} ${filtrados.length === 1 ? "bolsín" : "bolsines"} · Página ${currentPage} de ${totalPages}`}
        </MicroLabel>
      </div>

      {/* Contenido principal */}
      <div ref={listRef} className="mt-5">
        {loading ? (
          <div className="flex flex-col gap-3" aria-busy="true">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 rounded-[18px] border border-edge bg-raised/40 p-4 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:border-b sm:border-hair sm:bg-transparent sm:px-2"
              >
                <div className="flex items-center gap-4">
                  <Skeleton className="h-10 w-20 rounded-control" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-3 w-36" />
                  </div>
                </div>
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div
            role="alert"
            className="flex flex-col items-start gap-4 rounded-[var(--isle-r)] border border-danger/35 bg-danger/10 p-6"
          >
            <div className="flex items-center gap-2.5 text-danger-ink">
              <AlertCircle className="size-5 shrink-0" aria-hidden="true" />
              <p className="text-sm font-medium">{error}</p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleReintentar}
            >
              <RefreshCw className="size-4" aria-hidden="true" />
              Reintentar
            </Button>
          </div>
        ) : bolsines.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-[var(--isle-r)] border border-edge bg-surface/60 px-6 py-12 text-center">
            <Package className="size-8 text-muted" aria-hidden="true" />
            <h2 className="font-display text-lg font-semibold text-fg">
              Todavía no hay bolsines cargados
            </h2>
            <p className="max-w-md text-sm text-muted">
              Registrá el primer bolsín para comenzar a controlar precintos,
              rutas entre comisiones médicas e historial de estados.
            </p>
            <Button
              type="button"
              variant="primary"
              onClick={() => setSheetState({ tipo: "crear" })}
              className="mt-2 rounded-full"
            >
              <Plus className="size-4" aria-hidden="true" />
              Nuevo bolsín
            </Button>
          </div>
        ) : filtrados.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-[var(--isle-r)] border border-edge bg-surface/60 px-6 py-10 text-center">
            <Search className="size-7 text-muted" aria-hidden="true" />
            <h2 className="font-display text-lg font-semibold text-fg">
              Sin coincidencias para tu búsqueda
            </h2>
            <p className="text-sm text-muted">
              Probá con otro número de bolsín, precinto o limpiá los filtros
              activos.
            </p>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={limpiarFiltros}
              className="mt-1 rounded-full"
            >
              Limpiar filtros
            </Button>
          </div>
        ) : (
          <>
            {/* Cards en mobile (< 640px) */}
            <ul className="flex flex-col gap-3 sm:hidden">
              {paginados.map((b) => (
                <li
                  key={b.id}
                  data-bolsin-item=""
                  className="rounded-[18px] border border-edge bg-raised/50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <Link
                      href={`/bolsines/${b.id}`}
                      className="group inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md"
                    >
                      <SplitFlap
                        text={String(b.numeroBolsin).padStart(4, "0")}
                        size="sm"
                      />
                      <span className="font-mono text-xs text-muted group-hover:text-accent">
                        Ver detalle →
                      </span>
                    </Link>
                    <BolsinEstadoBadge nombre={b.estadoActual?.nombre} />
                  </div>

                  <Link
                    href={`/bolsines/${b.id}`}
                    className="mt-3 block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md"
                  >
                    <p className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-fg">
                      <span>{b.cmOrigen.codigo}</span>
                      <ArrowRight
                        className="size-3.5 text-muted"
                        aria-hidden="true"
                      />
                      <span>{b.cmDestino.codigo}</span>
                      <span className="font-normal text-muted">
                        · {b.cmDestino.nombre}
                      </span>
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      Precinto {b.numeroPrecinto} · {formatPesoKg(b.peso)} ·{" "}
                      {formatFechaCorta(b.fecha)}
                    </p>
                  </Link>

                  <div className="mt-3 flex items-center justify-end gap-1.5 border-t border-hair pt-2.5">
                    <Link
                      href={`/bolsines/${b.id}`}
                      className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-medium text-fg hover:bg-hover focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <Eye className="size-3.5" aria-hidden="true" />
                      Detalle
                    </Link>
                    <IconButton
                      aria-label={`Editar bolsín ${b.numeroBolsin}`}
                      onClick={() =>
                        setSheetState({ tipo: "editar", bolsin: b })
                      }
                    >
                      <Pencil className="size-4" aria-hidden="true" />
                    </IconButton>
                    <IconButton
                      aria-label={`Eliminar bolsín ${b.numeroBolsin}`}
                      onClick={() => setEliminando(b)}
                      className="text-danger-ink hover:bg-danger/10"
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                    </IconButton>
                  </div>
                </li>
              ))}
            </ul>

            {/* Tablero continuo en desktop (>= 640px) */}
            <div className="hidden border-t border-hair sm:block">
              {paginados.map((b) => (
                <div
                  key={b.id}
                  data-bolsin-item=""
                  className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 border-b border-hair px-2 py-3.5 transition-colors hover:bg-hover"
                >
                  <Link
                    href={`/bolsines/${b.id}`}
                    aria-label={`Ver detalle del bolsín ${b.numeroBolsin}`}
                    className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <SplitFlap
                      text={String(b.numeroBolsin).padStart(4, "0")}
                      size="sm"
                    />
                  </Link>

                  <Link
                    href={`/bolsines/${b.id}`}
                    className="min-w-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <p className="flex items-center gap-1.5 truncate text-[15px] font-semibold text-fg">
                      <span>{b.cmOrigen.codigo}</span>
                      <span className="font-normal text-muted truncate">
                        {b.cmOrigen.nombre}
                      </span>
                      <ArrowRight
                        className="size-3.5 shrink-0 text-muted"
                        aria-hidden="true"
                      />
                      <span>{b.cmDestino.codigo}</span>
                      <span className="font-normal text-muted truncate">
                        {b.cmDestino.nombre}
                      </span>
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-muted">
                      Precinto {b.numeroPrecinto} · {formatPesoKg(b.peso)} ·{" "}
                      {formatFechaCorta(b.fecha)}
                    </p>
                  </Link>

                  <BolsinEstadoBadge nombre={b.estadoActual?.nombre} />

                  <div className="flex items-center gap-1">
                    <Link
                      href={`/bolsines/${b.id}`}
                      aria-label={`Ver historial del bolsín ${b.numeroBolsin}`}
                      className="inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-raised hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <Eye className="size-4" aria-hidden="true" />
                    </Link>
                    <IconButton
                      aria-label={`Editar bolsín ${b.numeroBolsin}`}
                      onClick={() =>
                        setSheetState({ tipo: "editar", bolsin: b })
                      }
                    >
                      <Pencil className="size-4" aria-hidden="true" />
                    </IconButton>
                    <IconButton
                      aria-label={`Eliminar bolsín ${b.numeroBolsin}`}
                      onClick={() => setEliminando(b)}
                      className="text-danger-ink hover:bg-danger/10"
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              page={currentPage}
              totalPages={totalPages}
              totalItems={filtrados.length}
              pageSize={PAGE_SIZE}
              onPageChange={setPage}
              className="mt-6"
            />
          </>
        )}
      </div>

      <BolsinFormSheet
        open={sheetState !== null}
        mode={sheetState?.tipo ?? "crear"}
        bolsin={sheetState?.tipo === "editar" ? sheetState.bolsin : null}
        catalogos={catalogos}
        onClose={() => setSheetState(null)}
        onSuccess={handleFormSuccess}
      />

      <BolsinDeleteSheet
        bolsin={eliminando}
        onClose={() => setEliminando(null)}
        onDeleted={handleDeleted}
      />
    </>
  );
}
