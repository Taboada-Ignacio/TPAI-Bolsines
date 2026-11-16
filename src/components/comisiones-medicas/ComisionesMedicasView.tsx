"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  AlertCircle,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { PageActions } from "@/components/layout/PageActions";
import { PageHeading } from "@/components/layout/PageHeading";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { Marker } from "@/components/ui/display/Marker";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { SplitFlap } from "@/components/ui/display/SplitFlap";
import { Skeleton } from "@/components/ui/feedback/Skeleton";
import { Field } from "@/components/ui/forms/Field";
import { Input } from "@/components/ui/forms/Input";
import { Pagination } from "@/components/ui/navigation/Pagination";
import { MasterDetailSplit } from "@/components/ui/surfaces/MasterDetailSplit";
import { ResponsiveSheet } from "@/components/ui/surfaces/ResponsiveSheet";
import {
  comisionMedicaEntradaSchema,
  type ComisionMedica,
  type ComisionMedicaEntrada,
} from "@/services/catalogos/comisiones-medicas";

gsap.registerPlugin(useGSAP);

const PAGE_SIZE = 8;

type FormErrors = Partial<
  Record<keyof ComisionMedicaEntrada | "general", string>
>;

const EMPTY_FORM: ComisionMedicaEntrada = {
  codigo: "",
  nombre: "",
  direccion: "",
  email: "",
  telefono: "",
};

export function ComisionesMedicasView() {
  const [comisiones, setComisiones] = useState<ComisionMedica[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadTick, setReloadTick] = useState(0);

  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [formOpen, setFormOpen] = useState(false);
  const [editando, setEditando] = useState<ComisionMedica | null>(null);
  const [form, setForm] = useState<ComisionMedicaEntrada>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [saving, setSaving] = useState(false);

  const [eliminando, setEliminando] = useState<ComisionMedica | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch("/api/comisiones-medicas", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("No se pudieron cargar las comisiones médicas.");
        }
        const data = (await response.json()) as ComisionMedica[];
        setComisiones(data);
        setError(null);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(
          "No pudimos obtener el listado de comisiones médicas. Verificá la conexión e intentá nuevamente.",
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

  const filtradas = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    if (!q) return comisiones;
    return comisiones.filter(
      (cm) =>
        cm.codigo.toLowerCase().includes(q) ||
        cm.nombre.toLowerCase().includes(q) ||
        cm.direccion.toLowerCase().includes(q) ||
        cm.email.toLowerCase().includes(q),
    );
  }, [comisiones, busqueda]);

  const totalPages = Math.max(1, Math.ceil(filtradas.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);

  const paginadas = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filtradas.slice(start, start + PAGE_SIZE);
  }, [filtradas, safePage]);

  const indiceSeleccionado = filtradas.findIndex((cm) => cm.id === selectedId);
  const seleccionada =
    indiceSeleccionado >= 0 ? filtradas[indiceSeleccionado]! : null;

  useGSAP(
    () => {
      if (loading || paginadas.length === 0) return;
      const root = listRef.current;
      if (!root) return;
      const items = root.querySelectorAll("[data-cm-item]");
      if (!items.length) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) {
            gsap.set(items, { autoAlpha: 1, y: 0 });
            return;
          }
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 10 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.34,
              stagger: 0.035,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            },
          );
        },
      );
    },
    { scope: listRef, dependencies: [loading, safePage, busqueda, filtradas.length] },
  );

  function handleBusqueda(valor: string) {
    setBusqueda(valor);
    setPage(1);
  }

  function abrirCrear() {
    setEditando(null);
    setForm(EMPTY_FORM);
    setErrors({});
    setFormOpen(true);
  }

  function abrirEditar(cm: ComisionMedica) {
    setEditando(cm);
    setForm({
      codigo: cm.codigo.replace(/^CM-/i, "").slice(0, 3).toUpperCase(),
      nombre: cm.nombre,
      direccion: cm.direccion,
      email: cm.email,
      telefono: cm.telefono,
    });
    setErrors({});
    setFormOpen(true);
  }

  function actualizarCampo(campo: keyof ComisionMedicaEntrada, valor: string) {
    const nextValor =
      campo === "codigo"
        ? valor.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 3)
        : valor;
    setForm((prev) => ({ ...prev, [campo]: nextValor }));
    setErrors((prev) => {
      if (!prev[campo] && !prev.general) return prev;
      const next = { ...prev };
      delete next[campo];
      delete next.general;
      return next;
    });
  }

  function abrirEliminar(cm: ComisionMedica) {
    setDeleteError(null);
    setEliminando(cm);
  }

  function cerrarEliminar() {
    if (deleting) return;
    setEliminando(null);
    setDeleteError(null);
  }

  async function handleGuardar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;

    const sufijo = form.codigo.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 3);
    const parsed = comisionMedicaEntradaSchema.safeParse({
      ...form,
      codigo: sufijo ? `CM-${sufijo}` : "",
    });

    if (!parsed.success) {
      const nextErrors: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ComisionMedicaEntrada | undefined;
        if (key && !nextErrors[key]) {
          nextErrors[key] =
            key === "codigo" ? "Ingresá hasta 3 letras." : issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    const codigoNorm = parsed.data.codigo.toUpperCase();
    const datos: ComisionMedicaEntrada = {
      ...parsed.data,
      codigo: codigoNorm,
    };

    setSaving(true);
    setErrors({});

    try {
      const endpoint = editando
        ? `/api/comisiones-medicas/${editando.id}`
        : "/api/comisiones-medicas";
      const response = await fetch(endpoint, {
        method: editando ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        let mensaje = body?.error;
        if (!mensaje) {
          if (response.status === 400) {
            mensaje = "Revisá los datos ingresados e intentá nuevamente.";
          } else if (response.status === 409) {
            mensaje = "Ya existe una comisión médica con ese código o nombre.";
          } else if (response.status === 404) {
            mensaje = "No encontramos la comisión médica que querés editar.";
          } else {
            mensaje = "No pudimos guardar la comisión médica. Intentá de nuevo.";
          }
        }

        setErrors({ general: mensaje });
        return;
      }

      const guardada = (await response.json()) as ComisionMedica;
      if (editando) {
        setComisiones((prev) =>
          prev.map((cm) => (cm.id === guardada.id ? guardada : cm)),
        );
      } else {
        setComisiones((prev) => [guardada, ...prev]);
        setPage(1);
      }

      setFormOpen(false);
    } catch {
      setErrors({
        general:
          "Error de conexión con el servidor. Verificá tu red e intentá nuevamente.",
      });
    } finally {
      setSaving(false);
    }
  }

  async function confirmarEliminar() {
    if (!eliminando || deleting) return;
    setDeleting(true);
    setDeleteError(null);

    try {
      const response = await fetch(`/api/comisiones-medicas/${eliminando.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        let mensaje = body?.error;
        if (!mensaje) {
          if (response.status === 409) {
            mensaje =
              "No podés eliminar esta sede porque tiene usuarios o bolsines asociados.";
          } else if (response.status === 404) {
            mensaje = "La comisión médica ya no existe en el servidor.";
          } else {
            mensaje = "No pudimos eliminar la comisión médica. Intentá nuevamente.";
          }
        }

        setDeleteError(mensaje);
        return;
      }

      const idEliminado = eliminando.id;
      const nextList = comisiones.filter((cm) => cm.id !== idEliminado);
      setComisiones(nextList);
      if (selectedId === idEliminado) {
        setSelectedId(null);
      }
      const nextTotalPages = Math.max(1, Math.ceil(nextList.length / PAGE_SIZE));
      if (safePage > nextTotalPages) {
        setPage(nextTotalPages);
      }
      setEliminando(null);
      setDeleteError(null);
    } catch {
      setDeleteError("Error de conexión con el servidor al intentar eliminar.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <>
      <PageActions>
        <IconButton
          aria-label="Nueva comisión médica"
          onClick={abrirCrear}
          title="Nueva comisión médica"
        >
          <Plus className="size-[18px]" aria-hidden="true" />
        </IconButton>
      </PageActions>

      <div className="flex flex-row items-end justify-between gap-2 sm:gap-4">
        <PageHeading
          rotulo="Parámetros · Sedes"
          className="min-w-0 [&_h1]:text-[clamp(2.3rem,6vw,4rem)]"
        >
          Comisiones
          <br />
          <Marker>médicas.</Marker>
        </PageHeading>

        <Button
          variant="lime"
          size="md"
          onClick={abrirCrear}
          leftIcon={<Plus className="size-4" />}
          className="rounded-full px-3.5 sm:px-5 text-[13px] sm:text-sm text-on-lime self-end shrink-0"
        >
          Nueva comisión
        </Button>
      </div>

      <div className="mt-7 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={busqueda}
            onChange={(e) => handleBusqueda(e.target.value)}
            placeholder="Buscar por código, provincia o dirección…"
            aria-label="Buscar comisiones médicas"
            className="rounded-full pl-10 pr-10"
          />
          {busqueda ? (
            <button
              type="button"
              onClick={() => handleBusqueda("")}
              aria-label="Limpiar búsqueda"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 size-7 grid place-items-center rounded-full text-muted hover:text-fg hover:bg-hover cursor-pointer"
            >
              <X className="size-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        <MicroLabel aria-live="polite" className="shrink-0">
          {loading
            ? "Cargando sedes…"
            : filtradas.length === comisiones.length
              ? `${comisiones.length} ${comisiones.length === 1 ? "sede" : "sedes"}`
              : `${filtradas.length} de ${comisiones.length} sedes`}
        </MicroLabel>
      </div>

      <div ref={listRef}>
        {loading ? (
          <div className="flex flex-col gap-3" aria-busy="true">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 rounded-[18px] border border-edge bg-raised/40 p-4 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:border-b sm:border-hair sm:bg-transparent sm:px-3"
              >
                <div className="flex items-center gap-4">
                  <Skeleton className="h-10 w-20 rounded-control" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-3 w-36" />
                  </div>
                </div>
                <Skeleton className="h-8 w-20 rounded-full" />
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
              className="rounded-full"
            >
              <RefreshCw className="size-4" aria-hidden="true" />
              Reintentar
            </Button>
          </div>
        ) : filtradas.length === 0 ? (
          <div className="py-12 px-4 text-center rounded-[18px] border border-edge bg-raised/40">
            <p className="font-display text-lg font-semibold text-fg">
              {busqueda
                ? `No hay comisiones que coincidan con “${busqueda}”`
                : "Todavía no hay comisiones médicas cargadas"}
            </p>
            <p className="text-sm text-muted mt-1">
              {busqueda
                ? "Probá con otro código o limpiá el filtro para ver todas las sedes."
                : "Creá la primera sede para empezar a operar."}
            </p>
            {busqueda ? (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleBusqueda("")}
                className="mt-4 rounded-full"
              >
                Ver todas
              </Button>
            ) : (
              <Button
                variant="lime"
                size="sm"
                onClick={abrirCrear}
                className="mt-4 rounded-full text-on-lime"
              >
                Nueva comisión
              </Button>
            )}
          </div>
        ) : (
          <>
            {/* Mobile: Cards */}
            <div className="grid grid-cols-1 gap-3 sm:hidden">
              {paginadas.map((cm) => {
                const siglaCorta = cm.codigo.replace(/^CM-/i, "");
                return (
                  <article
                    key={cm.id}
                    data-cm-item=""
                    className="rounded-[18px] border border-edge bg-raised/50 px-3.5 py-3 flex flex-col gap-2.5"
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <SplitFlap text={siglaCorta} size="sm" className="mt-0.5 shrink-0" />
                        <div className="min-w-0 flex-1">
                          <strong className="block font-display text-[17px] font-bold tracking-[-0.03em] leading-tight text-fg truncate">
                            {cm.nombre}
                          </strong>
                          <p className="text-[12.5px] text-muted mt-0.5 truncate">
                            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.06em]">
                              {cm.codigo}
                            </span>
                            <span aria-hidden="true"> · </span>
                            {cm.direccion}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5 shrink-0 -mr-1 -mt-1">
                        <IconButton
                          aria-label={`Editar ${cm.nombre}`}
                          title="Editar"
                          onClick={() => abrirEditar(cm)}
                          className="rounded-full"
                        >
                          <Pencil className="size-4" aria-hidden="true" />
                        </IconButton>
                        <IconButton
                          aria-label={`Eliminar ${cm.nombre}`}
                          title="Eliminar"
                          onClick={() => abrirEliminar(cm)}
                          className="rounded-full hover:text-danger-ink"
                        >
                          <Trash2 className="size-4" aria-hidden="true" />
                        </IconButton>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-hair font-mono text-[11.5px] text-muted flex items-center justify-between gap-3">
                      <span className="truncate min-w-0">{cm.email}</span>
                      <span className="shrink-0">{cm.telefono}</span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Desktop: Tablero + Panel de detalle integrado */}
            <MasterDetailSplit
              storageKey="bolsines:comisiones:panel-ancho"
              detailLabel="Detalle de comisión médica"
              className="hidden sm:block"
              posicion={
                seleccionada && indiceSeleccionado >= 0
                  ? { actual: indiceSeleccionado + 1, total: filtradas.length }
                  : null
              }
              hasAnterior={indiceSeleccionado > 0}
              hasSiguiente={
                indiceSeleccionado >= 0 &&
                indiceSeleccionado < filtradas.length - 1
              }
              onAnterior={() => {
                if (indiceSeleccionado > 0) {
                  setSelectedId(filtradas[indiceSeleccionado - 1]!.id);
                }
              }}
              onSiguiente={() => {
                if (indiceSeleccionado < filtradas.length - 1) {
                  setSelectedId(filtradas[indiceSeleccionado + 1]!.id);
                }
              }}
              onCerrar={() => setSelectedId(null)}
              master={
                <div>
                  {/* Encabezado de columnas */}
                  <div className="grid grid-cols-[140px_minmax(0,1fr)_auto] @lg:grid-cols-[140px_minmax(180px,1.3fr)_minmax(150px,1fr)_minmax(190px,1.1fr)_84px] items-center gap-4 px-3 py-2.5 border-y border-hair">
                    <MicroLabel>Código</MicroLabel>
                    <MicroLabel>Sede</MicroLabel>
                    <MicroLabel className="hidden @lg:block">Ubicación</MicroLabel>
                    <MicroLabel className="hidden @lg:block">Contacto</MicroLabel>
                    <MicroLabel className="text-right">Acciones</MicroLabel>
                  </div>

                  <div>
                    {paginadas.map((cm) => {
                      const siglaCorta = cm.codigo.replace(/^CM-/i, "");
                      const estaSeleccionada = cm.id === seleccionada?.id;
                      return (
                        <div
                          key={cm.id}
                          data-cm-item=""
                          onClick={() => setSelectedId(cm.id)}
                          className={
                            estaSeleccionada
                              ? "group grid grid-cols-[140px_minmax(0,1fr)_auto] @lg:grid-cols-[140px_minmax(180px,1.3fr)_minmax(150px,1fr)_minmax(190px,1.1fr)_84px] items-center gap-4 px-3 py-3.5 border-b border-hair border-l-2 border-l-accent bg-raised/90 cursor-pointer transition-colors duration-120"
                              : "group grid grid-cols-[140px_minmax(0,1fr)_auto] @lg:grid-cols-[140px_minmax(180px,1.3fr)_minmax(150px,1fr)_minmax(190px,1.1fr)_84px] items-center gap-4 px-3 py-3.5 border-b border-hair transition-colors duration-120 hover:bg-hover cursor-pointer"
                          }
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <SplitFlap text={siglaCorta} size="md" />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <strong className="font-display text-[17px] font-bold tracking-[-0.025em] leading-snug text-fg truncate">
                                {cm.nombre}
                              </strong>
                              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted shrink-0">
                                {cm.codigo}
                              </span>
                            </div>
                            <p className="text-[12.5px] text-muted mt-0.5 truncate @lg:hidden">
                              {cm.direccion} · {cm.telefono}
                            </p>
                          </div>

                          <div className="hidden @lg:block min-w-0">
                            <p className="text-[13.5px] text-fg/90 truncate">
                              {cm.direccion}
                            </p>
                          </div>

                          <div className="hidden @lg:block min-w-0">
                            <p className="font-mono text-[12px] text-fg/90 truncate">
                              {cm.email}
                            </p>
                            <p className="font-mono text-[12px] text-muted mt-0.5 tabular-nums">
                              {cm.telefono}
                            </p>
                          </div>

                          <div
                            className="flex items-center justify-end gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <IconButton
                              aria-label={`Editar ${cm.nombre}`}
                              title="Editar"
                              onClick={() => abrirEditar(cm)}
                              className="rounded-full"
                            >
                              <Pencil className="size-4" aria-hidden="true" />
                            </IconButton>
                            <IconButton
                              aria-label={`Eliminar ${cm.nombre}`}
                              title="Eliminar"
                              onClick={() => abrirEliminar(cm)}
                              className="rounded-full hover:text-danger-ink"
                            >
                              <Trash2 className="size-4" aria-hidden="true" />
                            </IconButton>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Pagination
                    page={safePage}
                    totalPages={totalPages}
                    totalItems={filtradas.length}
                    pageSize={PAGE_SIZE}
                    onPageChange={setPage}
                  />
                </div>
              }
              detail={
                seleccionada ? (
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-3.5">
                      <SplitFlap
                        text={seleccionada.codigo.replace(/^CM-/i, "")}
                        size="md"
                        className="shrink-0"
                      />
                      <div className="min-w-0">
                        <MicroLabel>{seleccionada.codigo}</MicroLabel>
                        <h3 className="font-display text-[20px] font-bold tracking-[-0.03em] leading-tight text-fg mt-0.5">
                          {seleccionada.nombre}
                        </h3>
                      </div>
                    </div>

                    <dl className="border-t border-hair divide-y divide-hair">
                      <div className="py-3">
                        <dt>
                          <MicroLabel>Dirección</MicroLabel>
                        </dt>
                        <dd className="text-[14px] text-fg mt-1">
                          {seleccionada.direccion}
                        </dd>
                      </div>
                      <div className="py-3">
                        <dt>
                          <MicroLabel>Email de contacto</MicroLabel>
                        </dt>
                        <dd className="font-mono text-[13px] text-fg mt-1 break-all">
                          {seleccionada.email}
                        </dd>
                      </div>
                      <div className="py-3">
                        <dt>
                          <MicroLabel>Teléfono</MicroLabel>
                        </dt>
                        <dd className="font-mono text-[13px] text-fg mt-1">
                          {seleccionada.telefono}
                        </dd>
                      </div>
                    </dl>

                    <div className="pt-2 border-t border-hair flex items-center gap-2">
                      <Button
                        type="button"
                        variant="primary"
                        size="sm"
                        leftIcon={<Pencil className="size-3.5" />}
                        onClick={() => abrirEditar(seleccionada)}
                        className="rounded-full flex-1"
                      >
                        Editar sede
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        leftIcon={
                          <Trash2 className="size-3.5 text-danger-ink" />
                        }
                        onClick={() => abrirEliminar(seleccionada)}
                        className="rounded-full text-danger-ink"
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                ) : null
              }
            />
          </>
        )}
      </div>

      {!loading && !error && filtradas.length > 0 ? (
        <div className="sm:hidden">
          <Pagination
            page={safePage}
            totalPages={totalPages}
            totalItems={filtradas.length}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />
        </div>
      ) : null}

      {/* SideSheet en desktop / BottomSheet en mobile: Crear / Editar */}
      <ResponsiveSheet
        open={formOpen}
        onClose={() => {
          if (!saving) setFormOpen(false);
        }}
        labelledBy="cm-form-titulo"
      >
        <div className="flex items-center justify-between gap-3 mb-5">
          <div>
            <MicroLabel className="block">
              {editando ? editando.codigo : "Alta de sede"}
            </MicroLabel>
            <h2
              id="cm-form-titulo"
              className="font-display text-xl font-bold tracking-[-0.03em] text-fg mt-0.5"
            >
              {editando ? "Editar comisión médica" : "Nueva comisión médica"}
            </h2>
          </div>
          <IconButton
            aria-label="Cerrar formulario"
            onClick={() => {
              if (!saving) setFormOpen(false);
            }}
            disabled={saving}
            className="rounded-full"
          >
            <X className="size-[18px]" aria-hidden="true" />
          </IconButton>
        </div>

        <form
          onSubmit={handleGuardar}
          noValidate
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <Field id="cm-codigo" label="Código" error={errors.codigo}>
              <div
                className={
                  "h-11 w-full rounded-control border bg-surface flex items-center overflow-hidden transition-[border-color,box-shadow] duration-[var(--dur-instant)] " +
                  (errors.codigo
                    ? "border-danger focus-within:border-danger focus-within:ring-2 focus-within:ring-danger/20"
                    : "border-line hover:border-ink/60 focus-within:border-cobalt focus-within:ring-2 focus-within:ring-cobalt/25")
                }
              >
                <span
                  aria-hidden="true"
                  className="h-full px-3 flex items-center bg-raised/70 border-r border-hair font-mono text-[15px] font-semibold text-muted select-none shrink-0"
                >
                  CM-
                </span>
                <input
                  id="cm-codigo"
                  type="text"
                  inputMode="text"
                  maxLength={3}
                  autoCapitalize="characters"
                  aria-invalid={Boolean(errors.codigo) || undefined}
                  value={form.codigo}
                  onChange={(e) => actualizarCampo("codigo", e.target.value)}
                  placeholder="CBA"
                  className="h-full w-full bg-transparent px-3 font-mono text-[15px] font-semibold uppercase tracking-[0.06em] text-ink placeholder:text-muted/65 focus:outline-none"
                />
              </div>
            </Field>

            <Field
              id="cm-nombre"
              label="Nombre"
              error={errors.nombre}
              className="sm:col-span-2"
            >
              <Input
                id="cm-nombre"
                value={form.nombre}
                onChange={(e) => actualizarCampo("nombre", e.target.value)}
                placeholder="Comisión Médica Córdoba"
                invalid={Boolean(errors.nombre)}
              />
            </Field>
          </div>

          <Field id="cm-direccion" label="Dirección" error={errors.direccion}>
            <Input
              id="cm-direccion"
              value={form.direccion}
              onChange={(e) => actualizarCampo("direccion", e.target.value)}
              placeholder="Av. Colón 123, Córdoba"
              invalid={Boolean(errors.direccion)}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Field id="cm-email" label="Email" error={errors.email}>
              <Input
                id="cm-email"
                type="email"
                value={form.email}
                onChange={(e) => actualizarCampo("email", e.target.value)}
                placeholder="cm-cordoba@example.com"
                invalid={Boolean(errors.email)}
              />
            </Field>

            <Field id="cm-telefono" label="Teléfono" error={errors.telefono}>
              <Input
                id="cm-telefono"
                type="tel"
                variant="mono"
                value={form.telefono}
                onChange={(e) => actualizarCampo("telefono", e.target.value)}
                placeholder="0351-400-0005"
                invalid={Boolean(errors.telefono)}
              />
            </Field>
          </div>

          {errors.general ? (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-control border border-danger/40 bg-danger/10 p-3 text-sm text-danger-ink"
            >
              <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{errors.general}</span>
            </div>
          ) : null}

          <div className="mt-2 flex items-center justify-end gap-2.5">
            <Button
              variant="ghost"
              size="md"
              onClick={() => setFormOpen(false)}
              disabled={saving}
              className="rounded-full"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              loading={saving}
              className="rounded-full px-5"
            >
              {editando ? "Guardar cambios" : "Crear comisión"}
            </Button>
          </div>
        </form>
      </ResponsiveSheet>

      {/* SideSheet en desktop / BottomSheet en mobile: Confirmar Eliminar */}
      <ResponsiveSheet
        open={Boolean(eliminando)}
        onClose={cerrarEliminar}
        labelledBy="cm-delete-titulo"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <MicroLabel className="block">Confirmar baja</MicroLabel>
            <h2
              id="cm-delete-titulo"
              className="font-display text-xl font-bold tracking-[-0.03em] text-fg mt-0.5"
            >
              ¿Eliminar {eliminando?.nombre}?
            </h2>
          </div>
          <IconButton
            aria-label="Cerrar confirmación"
            onClick={cerrarEliminar}
            disabled={deleting}
            className="rounded-full shrink-0"
          >
            <X className="size-[18px]" aria-hidden="true" />
          </IconButton>
        </div>

        <p className="text-sm text-muted mt-3 leading-relaxed">
          Se quitará la sede{" "}
          <span className="font-mono font-semibold text-fg">
            {eliminando?.codigo}
          </span>{" "}
          del catálogo. Si tiene usuarios o bolsines asociados, el servidor
          impedirá borrarla.
        </p>

        {deleteError ? (
          <div
            role="alert"
            className="mt-4 flex items-start gap-2.5 rounded-control border border-danger/40 bg-danger/10 p-3 text-sm text-danger-ink"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{deleteError}</span>
          </div>
        ) : null}

        <div className="mt-6 flex items-center justify-end gap-2.5">
          <Button
            variant="ghost"
            size="md"
            onClick={cerrarEliminar}
            disabled={deleting}
            className="rounded-full"
          >
            Cancelar
          </Button>
          <Button
            variant="danger"
            size="md"
            loading={deleting}
            onClick={confirmarEliminar}
            className="rounded-full px-5"
          >
            Eliminar sede
          </Button>
        </div>
      </ResponsiveSheet>
    </>
  );
}
