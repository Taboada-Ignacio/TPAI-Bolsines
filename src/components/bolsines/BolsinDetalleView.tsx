"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Lock,
  LockOpen,
  PackageX,
  Pencil,
  RefreshCw,
  Send,
  Trash2,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BolsinDeleteSheet } from "@/components/bolsines/BolsinDeleteSheet";
import { BolsinEstadoBadge } from "@/components/bolsines/BolsinEstadoBadge";
import { BolsinFormSheet } from "@/components/bolsines/BolsinFormSheet";
import {
  BolsinPrecintoSheet,
  type PrecintoAccion,
} from "@/components/bolsines/BolsinPrecintoSheet";
import { PageActions } from "@/components/layout/PageActions";
import { PageHeading } from "@/components/layout/PageHeading";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { Marker } from "@/components/ui/display/Marker";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { SplitFlap } from "@/components/ui/display/SplitFlap";
import { Skeleton } from "@/components/ui/feedback/Skeleton";
import {
  formatDuracion,
  formatFechaHora,
  formatPesoKg,
  type BolsinDetalleItem,
  type BolsinListadoItem,
  type CatalogoComision,
  type CatalogoEmpleado,
  type CatalogoEstado,
  type CatalogosBolsin,
} from "@/lib/bolsines";
import { cn } from "@/lib/cn";

gsap.registerPlugin(useGSAP);

export interface BolsinDetalleViewProps {
  id: number;
}

/** Vista de detalle completo de un bolsín con ficha operativa e historial de estados. */
export function BolsinDetalleView({ id }: BolsinDetalleViewProps) {
  const router = useRouter();
  const [bolsin, setBolsin] = useState<BolsinDetalleItem | null>(null);
  const [catalogos, setCatalogos] = useState<CatalogosBolsin>({
    comisiones: [],
    estadosBolsin: [],
    empleados: [],
  });
  const idValido = Number.isInteger(id) && id > 0;
  const [loading, setLoading] = useState(idValido);
  const [notFound, setNotFound] = useState(!idValido);
  const [error, setError] = useState<string | null>(null);
  const [reloadTick, setReloadTick] = useState(0);

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [precintoAccion, setPrecintoAccion] = useState<PrecintoAccion | null>(
    null,
  );
  const [enviando, setEnviando] = useState(false);
  const [accionError, setAccionError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!idValido) return;
    const controller = new AbortController();

    async function load() {
      try {
        const [resDetalle, resCm, resEstados, resEmpleados] = await Promise.all([
          fetch(`/api/bolsines/${id}`, { signal: controller.signal }),
          fetch("/api/comisiones-medicas", { signal: controller.signal }),
          fetch("/api/estados", { signal: controller.signal }),
          fetch("/api/empleados", { signal: controller.signal }),
        ]);

        if (resDetalle.status === 404 || resDetalle.status === 400) {
          setNotFound(true);
          return;
        }

        if (!resDetalle.ok || !resCm.ok || !resEstados.ok || !resEmpleados.ok) {
          throw new Error("No se pudo obtener el detalle del bolsín.");
        }

        const [detalleData, cmData, estadosData, empleadosData] =
          (await Promise.all([
            resDetalle.json(),
            resCm.json(),
            resEstados.json(),
            resEmpleados.json(),
          ])) as [
            BolsinDetalleItem,
            CatalogoComision[],
            CatalogoEstado[],
            CatalogoEmpleado[],
          ];

        setBolsin(detalleData);
        setCatalogos({
          comisiones: cmData,
          estadosBolsin: estadosData.filter(
            (estado) => estado.ambito.toUpperCase() === "BOLSIN",
          ),
          empleados: empleadosData,
        });
        setError(null);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(
          "No pudimos cargar el detalle del bolsín. Verificá tu conexión e intentá nuevamente.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void load();
    return () => controller.abort();
  }, [id, idValido, reloadTick]);

  function handleReintentar() {
    if (!idValido) return;
    setLoading(true);
    setError(null);
    setNotFound(false);
    setReloadTick((t) => t + 1);
  }

  useGSAP(
    () => {
      if (loading || !bolsin) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline();
        tl.from("[data-detalle-card]", {
          autoAlpha: 0,
          y: 12,
          duration: 0.32,
          stagger: 0.05,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        }).from(
          "[data-historial-item]",
          {
            autoAlpha: 0,
            x: -10,
            duration: 0.28,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
          },
          "-=0.14",
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-detalle-card], [data-historial-item]", {
          autoAlpha: 1,
          x: 0,
          y: 0,
        });
      });
    },
    { scope: containerRef, dependencies: [loading, bolsin?.id] },
  );

  function handleEditSuccess(actualizado: BolsinListadoItem) {
    setBolsin((prev) => (prev ? { ...prev, ...actualizado } : null));
    setReloadTick((t) => t + 1);
  }

  async function handleMarcarEnviado() {
    if (!bolsin || enviando) return;
    setEnviando(true);
    setAccionError(null);
    try {
      const res = await fetch(`/api/bolsines/${bolsin.id}/enviar`, {
        method: "POST",
      });
      const body = (await res.json().catch(() => null)) as
        | BolsinListadoItem
        | { error?: string }
        | null;
      if (!res.ok) {
        setAccionError(
          (body && "error" in body && body.error) ||
            "No se pudo marcar el bolsín como enviado.",
        );
        return;
      }
      handleEditSuccess(body as BolsinListadoItem);
    } catch {
      setAccionError(
        "No pudimos conectarnos con el servidor. Intentá nuevamente.",
      );
    } finally {
      setEnviando(false);
    }
  }

  function handleDeleted() {
    setDeleteOpen(false);
    router.push("/bolsines");
  }

  if (loading) {
    return (
      <div className="flex flex-col gap-6" aria-busy="true">
        <Skeleton className="h-5 w-36" />
        <div className="flex flex-col gap-3">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-6 w-40 rounded-full" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Skeleton className="h-24 rounded-[18px]" />
          <Skeleton className="h-24 rounded-[18px]" />
          <Skeleton className="h-24 rounded-[18px]" />
        </div>
        <Skeleton className="h-64 rounded-[var(--isle-r)]" />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-[var(--isle-r)] border border-edge bg-surface/70 px-6 py-14 text-center">
        <PackageX className="size-10 text-muted" aria-hidden="true" />
        <h1 className="font-display text-2xl font-bold text-fg">
          No encontramos ese bolsín
        </h1>
        <p className="max-w-md text-sm text-muted">
          El bolsín #{id} no existe o fue dado de baja del sistema.
        </p>
        <Link
          href="/bolsines"
          className="mt-2 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-on-primary shadow-[var(--shadow-key-cobalt)] transition-transform active:translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Volver a bolsines
        </Link>
      </div>
    );
  }

  if (error || !bolsin) {
    return (
      <div
        role="alert"
        className="flex flex-col items-start gap-4 rounded-[var(--isle-r)] border border-danger/35 bg-danger/10 p-6"
      >
        <div className="flex items-center gap-2.5 text-danger-ink">
          <AlertCircle className="size-5 shrink-0" aria-hidden="true" />
          <p className="text-sm font-medium">
            {error ?? "Ocurrió un error al cargar el bolsín."}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleReintentar}
          >
            <RefreshCw className="size-4" aria-hidden="true" />
            Reintentar
          </Button>
          <Link
            href="/bolsines"
            className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-fg hover:bg-hover focus-visible:outline-2 focus-visible:outline-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver al listado
          </Link>
        </div>
      </div>
    );
  }

  const cambioActual =
    bolsin.cambiosEstado.find((c) => c.fechaHoraFin === null) ??
    bolsin.cambiosEstado[bolsin.cambiosEstado.length - 1] ??
    null;

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      <PageActions>
        <IconButton
          aria-label={`Editar bolsín ${bolsin.numeroBolsin}`}
          onClick={() => setEditOpen(true)}
        >
          <Pencil className="size-[18px]" aria-hidden="true" />
        </IconButton>
      </PageActions>

      <div>
        <Link
          href="/bolsines"
          className="inline-flex items-center gap-1.5 rounded-full py-1 text-sm font-medium text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Volver a bolsines
        </Link>
      </div>

      {/* Cabecera de identidad */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <PageHeading rotulo={`Registro ${formatFechaHora(bolsin.fecha)}`}>
            Bolsín <Marker>#{bolsin.numeroBolsin}</Marker>
          </PageHeading>
          <div className="flex flex-wrap items-center gap-3">
            <SplitFlap
              text={String(bolsin.numeroBolsin).padStart(4, "0")}
              size="lg"
            />
            <BolsinEstadoBadge
              nombre={
                bolsin.estadoActual?.nombre ?? cambioActual?.estado.nombre
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {(bolsin.estadoActual?.nombre ?? cambioActual?.estado.nombre) ===
          "Creado" ? (
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={() => setPrecintoAccion("cerrar")}
              leftIcon={<Lock className="size-4" aria-hidden="true" />}
              className="rounded-full"
            >
              Poner precinto
            </Button>
          ) : null}
          {(bolsin.estadoActual?.nombre ?? cambioActual?.estado.nombre) ===
          "Cerrado" ? (
            <>
              <Button
                type="button"
                variant="primary"
                size="sm"
                loading={enviando}
                onClick={() => void handleMarcarEnviado()}
                leftIcon={<Send className="size-4" aria-hidden="true" />}
                className="rounded-full"
              >
                Marcar como Enviado
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                disabled={enviando}
                onClick={() => setPrecintoAccion("reabrir")}
                leftIcon={<LockOpen className="size-4" aria-hidden="true" />}
                className="rounded-full"
              >
                Abrir de nuevo
              </Button>
            </>
          ) : null}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setEditOpen(true)}
            className="rounded-full border border-edge bg-surface"
          >
            <Pencil className="size-4" aria-hidden="true" />
            Editar datos
          </Button>
          <Button
            type="button"
            variant="danger"
            size="sm"
            onClick={() => setDeleteOpen(true)}
            className="rounded-full"
          >
            <Trash2 className="size-4" aria-hidden="true" />
            Eliminar
          </Button>
        </div>
      </header>

      {accionError ? (
        <div
          role="alert"
          className="flex items-center gap-2.5 rounded-control border border-danger/35 bg-danger/10 px-4 py-3 text-sm text-danger-ink"
        >
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          <span>{accionError}</span>
        </div>
      ) : null}

      {/* Ficha operativa */}
      <section aria-labelledby="ficha-operativa-title">
        <h2 id="ficha-operativa-title" className="sr-only">
          Ficha operativa del bolsín
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div
            data-detalle-card=""
            className="rounded-[18px] border border-edge bg-surface/85 p-4 sm:col-span-2"
          >
            <MicroLabel className="block">Ruta operativa</MicroLabel>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-base font-semibold text-fg">
              <span>
                {bolsin.cmOrigen.codigo}{" "}
                <span className="font-normal text-muted">
                  ({bolsin.cmOrigen.nombre})
                </span>
              </span>
              <ArrowRight
                className="size-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <span>
                {bolsin.cmDestino.codigo}{" "}
                <span className="font-normal text-muted">
                  ({bolsin.cmDestino.nombre})
                </span>
              </span>
            </div>
          </div>

          <div
            data-detalle-card=""
            className="rounded-[18px] border border-edge bg-surface/85 p-4"
          >
            <MicroLabel className="block">N.º de precinto</MicroLabel>
            <strong className="mt-2 block font-mono text-lg font-semibold text-fg">
              {bolsin.numeroPrecinto !== null
                ? bolsin.numeroPrecinto
                : "Sin precinto"}
            </strong>
          </div>

          <div
            data-detalle-card=""
            className="rounded-[18px] border border-edge bg-surface/85 p-4"
          >
            <MicroLabel className="block">Peso declarado</MicroLabel>
            <strong className="mt-2 block font-mono text-lg font-semibold text-fg">
              {formatPesoKg(bolsin.peso)}
            </strong>
          </div>

          <div
            data-detalle-card=""
            className="rounded-[18px] border border-edge bg-surface/85 p-4 sm:col-span-2 lg:col-span-4"
          >
            <MicroLabel className="block">
              Remito y documentación asociada
            </MicroLabel>
            {bolsin.remito ? (
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-fg">
                    {bolsin.remito.asunto}
                  </p>
                  <p className="text-xs text-muted">
                    {bolsin.remito.tipoDocumento}
                  </p>
                </div>
                <span className="rounded-full border border-edge bg-raised px-2.5 py-0.5 font-mono text-xs font-semibold text-fg">
                  {bolsin.remito.numero}
                </span>
              </div>
            ) : (
              <p className="mt-2 text-sm text-muted">
                Sin remito asociado todavía. Usá «Editar datos» para cargar el
                remito y su documentación.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Historial de cambios de estado */}
      <section
        aria-labelledby="historial-estados-title"
        className="rounded-[var(--isle-r)] border border-edge bg-surface/85 p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hair pb-4">
          <div>
            <MicroLabel className="block">Trazabilidad</MicroLabel>
            <h2
              id="historial-estados-title"
              className="mt-1 font-display text-xl font-bold tracking-tight text-fg"
            >
              Historial de cambios de estado
            </h2>
          </div>
          <MicroLabel>
            {bolsin.cambiosEstado.length}{" "}
            {bolsin.cambiosEstado.length === 1 ? "registro" : "registros"}
          </MicroLabel>
        </div>

        {bolsin.cambiosEstado.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted">
            Sin cambios de estado registrados todavía.
          </p>
        ) : (
          <ol
            aria-label="Historial de cambios de estado"
            className="relative mt-6 ml-2.5 flex flex-col gap-6 border-l border-hair pl-6"
          >
            {bolsin.cambiosEstado.map((cambio) => {
              const esActual = cambio.fechaHoraFin === null;
              return (
                <li
                  key={cambio.id}
                  data-historial-item=""
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[31px] top-1.5 size-3 rounded-full border-2",
                      esActual
                        ? "border-lime-edge bg-lime"
                        : "border-line bg-surface",
                    )}
                  />

                  <div
                    className={cn(
                      "rounded-[16px] border p-4 transition-colors",
                      esActual
                        ? "border-edge bg-raised/75"
                        : "border-hair bg-canvas/25",
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <BolsinEstadoBadge nombre={cambio.estado.nombre} />
                        {esActual ? (
                          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
                            Estado vigente
                          </span>
                        ) : null}
                      </div>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-muted">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {formatDuracion(
                          cambio.fechaHoraInicio,
                          cambio.fechaHoraFin,
                        )}
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                      <div>
                        <MicroLabel className="block">Período</MicroLabel>
                        <p className="mt-0.5 font-mono text-xs text-fg">
                          {formatFechaHora(cambio.fechaHoraInicio)} →{" "}
                          {cambio.fechaHoraFin
                            ? formatFechaHora(cambio.fechaHoraFin)
                            : "En curso"}
                        </p>
                      </div>
                      <div>
                        <MicroLabel className="block">Responsable</MicroLabel>
                        <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-fg">
                          <UserCheck
                            className="size-3.5 text-muted"
                            aria-hidden="true"
                          />
                          {cambio.responsableCE.apellido},{" "}
                          {cambio.responsableCE.nombre}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </section>

      <BolsinFormSheet
        open={editOpen}
        mode="editar"
        bolsin={bolsin}
        catalogos={catalogos}
        onClose={() => setEditOpen(false)}
        onSuccess={handleEditSuccess}
      />

      <BolsinDeleteSheet
        bolsin={deleteOpen ? bolsin : null}
        onClose={() => setDeleteOpen(false)}
        onDeleted={handleDeleted}
      />

      <BolsinPrecintoSheet
        open={precintoAccion !== null}
        accion={precintoAccion}
        bolsin={bolsin}
        estadosBolsin={catalogos.estadosBolsin}
        onClose={() => setPrecintoAccion(null)}
        onSuccess={handleEditSuccess}
      />
    </div>
  );
}
