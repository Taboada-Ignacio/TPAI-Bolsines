"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  AlertTriangle,
  Pencil,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { PageBody } from "@/components/layout/PageBody";
import { PageHeading } from "@/components/layout/PageHeading";
import type { CatalogoOpcion } from "@/components/perfil/PerfilView";
import { Button } from "@/components/ui/actions/Button";
import { Marker } from "@/components/ui/display/Marker";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { Field } from "@/components/ui/forms/Field";
import { Input } from "@/components/ui/forms/Input";
import { PasswordInput } from "@/components/ui/forms/PasswordInput";
import { Select } from "@/components/ui/forms/Select";
import { ResponsiveSheet } from "@/components/ui/surfaces/ResponsiveSheet";
import { MasterDetailSplit } from "@/components/ui/surfaces/MasterDetailSplit";
import type { RegistroEmpleado } from "@/domain/RepositorioEmpleado";
import { empleadoAltaSchema, empleadoEdicionSchema } from "@/dtos/empleado.dto";

gsap.registerPlugin(useGSAP);

/** Filtra empleados por nombre, apellido, email, usuario, rol o comisión médica. */
export function filtrarEmpleados(
  empleados: RegistroEmpleado[],
  busqueda: string,
): RegistroEmpleado[] {
  const q = busqueda.trim().toLowerCase();
  if (!q) return empleados;
  return empleados.filter((emp) =>
    [
      emp.nombre,
      emp.apellido,
      emp.email,
      emp.usuario.nombre,
      emp.rol.nombre,
      emp.comisionMedica.codigo,
      emp.comisionMedica.nombre,
    ]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

/** Impide la autoeliminación del usuario autenticado. */
export function puedeEliminarEmpleado(
  empleadoId: number,
  empleadoActualId: number,
): boolean {
  return empleadoId !== empleadoActualId;
}

/** Obtiene las iniciales de un empleado para el avatar del detalle. */
export function inicialesDeEmpleado(nombre: string, apellido: string): string {
  return (
    `${nombre.trim().charAt(0)}${apellido.trim().charAt(0)}`.toUpperCase() ||
    "US"
  );
}

export interface EmpleadosViewProps {
  empleadosIniciales: RegistroEmpleado[];
  roles: CatalogoOpcion[];
  comisiones: CatalogoOpcion[];
  empleadoActualId: number;
}

type FormMode =
  | { tipo: "cerrado" }
  | { tipo: "crear" }
  | { tipo: "editar"; empleado: RegistroEmpleado };

type FormValues = {
  nombre: string;
  apellido: string;
  email: string;
  usuario: string;
  contrasena: string;
  rolId: string;
  comisionMedicaId: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export function EmpleadosView({
  empleadosIniciales,
  roles,
  comisiones,
  empleadoActualId,
}: EmpleadosViewProps) {
  const router = useRouter();
  const [empleados, setEmpleados] =
    useState<RegistroEmpleado[]>(empleadosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [mode, setMode] = useState<FormMode>({ tipo: "cerrado" });
  const [deleteTarget, setDeleteTarget] = useState<RegistroEmpleado | null>(
    null,
  );
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const [values, setValues] = useState<FormValues>({
    nombre: "",
    apellido: "",
    email: "",
    usuario: "",
    contrasena: "",
    rolId: roles[0] ? String(roles[0].id) : "",
    comisionMedicaId: comisiones[0] ? String(comisiones[0].id) : "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [anuncio, setAnuncio] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const montoInicialRef = useRef(true);

  const filtrados = useMemo(
    () => filtrarEmpleados(empleados, busqueda),
    [busqueda, empleados],
  );

  const indiceSeleccionado = filtrados.findIndex((e) => e.id === selectedId);
  const seleccionado =
    indiceSeleccionado >= 0 ? filtrados[indiceSeleccionado]! : null;

  useEffect(() => {
    if (montoInicialRef.current) {
      montoInicialRef.current = false;
      return;
    }
    setAnuncio(
      `${filtrados.length} ${filtrados.length === 1 ? "empleado encontrado" : "empleados encontrados"}.`,
    );
  }, [busqueda, filtrados.length]);

  useGSAP(
    () => {
      if (filtrados.length === 0) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-empleado-item]", {
          autoAlpha: 0,
          y: 10,
          duration: 0.28,
          stagger: 0.04,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-empleado-item]", { autoAlpha: 1, y: 0 });
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (!seleccionado) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-empleado-detail]", {
          autoAlpha: 0,
          y: 8,
          duration: 0.22,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-empleado-detail]", { autoAlpha: 1, y: 0 });
      });
    },
    { scope: containerRef, dependencies: [seleccionado?.id] },
  );

  function abrirCrear() {
    setValues({
      nombre: "",
      apellido: "",
      email: "",
      usuario: "",
      contrasena: "",
      rolId: roles[0] ? String(roles[0].id) : "",
      comisionMedicaId: comisiones[0] ? String(comisiones[0].id) : "",
    });
    setErrors({});
    setServerError(null);
    setMode({ tipo: "crear" });
  }

  function abrirEditar(empleado: RegistroEmpleado) {
    setValues({
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      email: empleado.email,
      usuario: empleado.usuario.nombre,
      contrasena: "",
      rolId: String(empleado.rol.id),
      comisionMedicaId: String(empleado.comisionMedica.id),
    });
    setErrors({});
    setServerError(null);
    setMode({ tipo: "editar", empleado });
  }

  function cerrarSheet() {
    if (saving) return;
    setMode({ tipo: "cerrado" });
  }

  function setField<K extends keyof FormValues>(key: K, val: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: val }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setServerError(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving || mode.tipo === "cerrado") return;

    const basePayload = {
      nombre: values.nombre,
      apellido: values.apellido,
      email: values.email,
      rolId: Number(values.rolId),
      comisionMedicaId: Number(values.comisionMedicaId),
    };

    if (mode.tipo === "crear") {
      const parsed = empleadoAltaSchema.safeParse({
        ...basePayload,
        usuario: {
          nombre: values.usuario,
          contrasena: values.contrasena,
        },
      });

      if (!parsed.success) {
        const nextErrors: FormErrors = {};
        for (const issue of parsed.error.issues) {
          const path = issue.path;
          const field =
            path[0] === "usuario" && path[1] === "contrasena"
              ? "contrasena"
              : path[0] === "usuario" && path[1] === "nombre"
                ? "usuario"
                : (path[0] as keyof FormValues | undefined);
          if (field && !nextErrors[field]) {
            nextErrors[field] =
              field === "email"
                ? "Ingresá un email válido."
                : field === "contrasena"
                  ? "Ingresá una contraseña."
                  : "Completá este campo.";
          }
        }
        setErrors(nextErrors);
        return;
      }

      setSaving(true);
      try {
        const res = await fetch("/api/empleados", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        });
        const body = (await res.json().catch(() => null)) as
          | RegistroEmpleado
          | { error?: string }
          | null;

        if (!res.ok) {
          const msg =
            body && "error" in body && body.error
              ? body.error
              : "No pudimos crear el empleado.";
          if (res.status === 409) {
            setErrors({ usuario: msg });
          } else {
            setServerError(msg);
          }
          return;
        }

        if (body && "id" in body) {
          setEmpleados((prev) => [...prev, body]);
          setAnuncio(`Empleado ${body.nombre} ${body.apellido} creado.`);
        } else {
          setAnuncio("Empleado creado.");
        }
        setMode({ tipo: "cerrado" });
        router.refresh();
      } catch {
        setServerError("No pudimos conectar con el servidor. Probá de nuevo.");
      } finally {
        setSaving(false);
      }
      return;
    }

    // Modo editar
    const parsed = empleadoEdicionSchema.safeParse(basePayload);
    if (!parsed.success) {
      const nextErrors: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof FormValues | undefined;
        if (field && !nextErrors[field]) {
          nextErrors[field] =
            field === "email"
              ? "Ingresá un email válido."
              : "Completá este campo.";
        }
      }
      setErrors(nextErrors);
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(`/api/empleados/${mode.empleado.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json().catch(() => null)) as
        | RegistroEmpleado
        | { error?: string }
        | null;

      if (!res.ok) {
        setServerError(
          body && "error" in body && body.error
            ? body.error
            : "No pudimos actualizar el empleado.",
        );
        return;
      }

      if (body && "id" in body) {
        setEmpleados((prev) =>
          prev.map((e) => (e.id === body.id ? body : e)),
        );
        setAnuncio(`Cambios de ${body.nombre} ${body.apellido} guardados.`);
      } else {
        setAnuncio("Cambios guardados.");
      }
      setMode({ tipo: "cerrado" });
      router.refresh();
    } catch {
      setServerError("No pudimos conectar con el servidor. Probá de nuevo.");
    } finally {
      setSaving(false);
    }
  }

  async function confirmarEliminacion() {
    if (!deleteTarget || deleting) return;
    setDeleting(true);
    setDeleteError(null);
    try {
      const res = await fetch(`/api/empleados/${deleteTarget.id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setDeleteError(
          body?.error ??
            "No pudimos eliminar el empleado (puede tener actividad asociada).",
        );
        return;
      }
      const deletedId = deleteTarget.id;
      const deletedNombre = `${deleteTarget.nombre} ${deleteTarget.apellido}`;
      setEmpleados((prev) => prev.filter((e) => e.id !== deletedId));
      setSelectedId((prev) => (prev === deletedId ? null : prev));
      setDeleteTarget(null);
      setAnuncio(`Empleado ${deletedNombre} eliminado.`);
      router.refresh();
    } catch {
      setDeleteError("No pudimos conectar con el servidor. Probá de nuevo.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <PageBody variant="padded">
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {anuncio}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <PageHeading rotulo="Administración · sistema">
            Gestión de <Marker>empleados</Marker>
          </PageHeading>
          <p className="font-serif italic text-[18px] sm:text-[20px] text-muted mt-2">
            alta de usuarios, roles y comisiones médicas
          </p>
        </div>

        <Button
          type="button"
          variant="primary"
          size="md"
          leftIcon={<Plus className="size-4" />}
          onClick={abrirCrear}
          className="rounded-full shrink-0 self-start sm:self-auto"
        >
          Nuevo empleado
        </Button>
      </div>

      {/* Buscador */}
      <div className="mt-6 mb-4 flex items-center justify-between gap-4">
        <div className="relative w-full max-w-[360px]">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre, usuario, rol o sede…"
            aria-label="Buscar empleados"
            className="h-10 rounded-full pl-10 pr-4 text-[14px]"
          />
        </div>
        <MicroLabel className="hidden sm:block">
          {filtrados.length}{" "}
          {filtrados.length === 1 ? "empleado" : "empleados"}
        </MicroLabel>
      </div>

      {/* Listado + Panel de detalle integrado (desktop) */}
      <div ref={containerRef} className="min-w-0">
        <MasterDetailSplit
          storageKey="bolsines:empleados:panel-ancho"
          detailLabel="Detalle del empleado"
          posicion={
            seleccionado && indiceSeleccionado >= 0
              ? { actual: indiceSeleccionado + 1, total: filtrados.length }
              : null
          }
          hasAnterior={indiceSeleccionado > 0}
          hasSiguiente={
            indiceSeleccionado >= 0 && indiceSeleccionado < filtrados.length - 1
          }
          onAnterior={() => {
            if (indiceSeleccionado > 0) {
              setSelectedId(filtrados[indiceSeleccionado - 1]!.id);
            }
          }}
          onSiguiente={() => {
            if (indiceSeleccionado < filtrados.length - 1) {
              setSelectedId(filtrados[indiceSeleccionado + 1]!.id);
            }
          }}
          onCerrar={() => setSelectedId(null)}
          master={
            <div className="rounded-[20px] border border-edge bg-surface overflow-hidden min-w-0">
              {filtrados.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-[14px] text-muted">
                    {busqueda.trim().length > 0
                      ? "No encontramos empleados con ese criterio."
                      : "Todavía no hay empleados cargados."}
                  </p>
                  {busqueda.trim().length > 0 ? (
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => setBusqueda("")}
                      className="rounded-full mt-4"
                    >
                      Limpiar búsqueda
                    </Button>
                  ) : null}
                </div>
              ) : (
                <div>
                  <div className="hidden @md:grid grid-cols-[minmax(180px,1.3fr)_minmax(140px,1fr)_auto] @lg:grid-cols-[minmax(180px,1.25fr)_minmax(140px,1fr)_minmax(120px,0.85fr)_minmax(170px,1.1fr)_168px] items-center gap-4 px-4 py-2.5 border-b border-hair">
                    <MicroLabel>Empleado</MicroLabel>
                    <MicroLabel>Rol</MicroLabel>
                    <MicroLabel className="hidden @lg:block">Sede</MicroLabel>
                    <MicroLabel className="hidden @lg:block">Email</MicroLabel>
                    <MicroLabel className="text-right">Acciones</MicroLabel>
                  </div>

                  <div className="divide-y divide-hair">
                    {filtrados.map((emp) => {
                      const esPropio = !puedeEliminarEmpleado(
                        emp.id,
                        empleadoActualId,
                      );
                      const estaSeleccionado = emp.id === seleccionado?.id;
                      return (
                        <div
                          key={emp.id}
                          data-empleado-item
                          role="button"
                          tabIndex={0}
                          aria-pressed={estaSeleccionado}
                          onClick={() => setSelectedId(emp.id)}
                          onKeyDown={(e) => {
                            if (
                              e.target instanceof HTMLElement &&
                              e.target.closest("button, a, input, select, textarea") &&
                              e.target !== e.currentTarget
                            ) {
                              return;
                            }
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setSelectedId(emp.id);
                            }
                          }}
                          className={
                            estaSeleccionado
                              ? "flex flex-col gap-3 p-4 @md:grid @md:grid-cols-[minmax(180px,1.3fr)_minmax(140px,1fr)_auto] @lg:grid-cols-[minmax(180px,1.25fr)_minmax(140px,1fr)_minmax(120px,0.85fr)_minmax(170px,1.1fr)_168px] @md:items-center @md:gap-4 bg-raised/90 border-l-2 border-l-accent cursor-pointer transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
                              : "flex flex-col gap-3 p-4 @md:grid @md:grid-cols-[minmax(180px,1.3fr)_minmax(140px,1fr)_auto] @lg:grid-cols-[minmax(180px,1.25fr)_minmax(140px,1fr)_minmax(120px,0.85fr)_minmax(170px,1.1fr)_168px] @md:items-center @md:gap-4 border-l-2 border-l-transparent hover:bg-hover/40 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
                          }
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <strong className="font-display text-[15px] font-semibold text-fg truncate">
                                {emp.nombre} {emp.apellido}
                              </strong>
                              {esPropio ? (
                                <span className="rounded-full border border-edge bg-raised px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted shrink-0">
                                  Vos
                                </span>
                              ) : null}
                            </div>
                            <p className="font-mono text-[12px] text-muted truncate mt-0.5">
                              @{emp.usuario.nombre}
                            </p>
                            <p className="text-[12.5px] text-muted mt-0.5 truncate @md:hidden">
                              {emp.rol.nombre} · {emp.comisionMedica.codigo}
                            </p>
                          </div>

                          <div className="hidden @md:block min-w-0">
                            <p className="text-[13.5px] text-fg/90 truncate">
                              {emp.rol.nombre}
                            </p>
                            <p className="font-mono text-[11.5px] text-muted truncate mt-0.5 @lg:hidden">
                              {emp.comisionMedica.codigo} · {emp.email}
                            </p>
                          </div>

                          <div className="hidden @lg:block min-w-0">
                            <span className="inline-block rounded-[6px] border border-edge bg-raised px-2 py-0.5 font-mono text-[11.5px] font-semibold text-fg">
                              {emp.comisionMedica.codigo}
                            </span>
                          </div>

                          <div className="hidden @lg:block min-w-0">
                            <p className="font-mono text-[12px] text-muted truncate">
                              {emp.email}
                            </p>
                          </div>

                          <div
                            className="flex flex-wrap items-center justify-end gap-1 shrink-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              leftIcon={<Pencil className="size-3.5" />}
                              onClick={() => abrirEditar(emp)}
                              className="rounded-full"
                            >
                              Editar
                            </Button>
                            {!esPropio ? (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                leftIcon={
                                  <Trash2 className="size-3.5 text-danger-ink" />
                                }
                                onClick={() => {
                                  setDeleteError(null);
                                  setDeleteTarget(emp);
                                }}
                                className="rounded-full text-danger-ink"
                              >
                                Eliminar
                              </Button>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          }
          detail={
            seleccionado ? (
              <div data-empleado-detail className="flex flex-col gap-5">
                <div className="flex items-center gap-3.5">
                  <span className="size-12 shrink-0 rounded-[14px] border border-edge bg-surface grid place-items-center font-mono text-[13px] font-semibold tracking-[0.06em] text-fg">
                    {inicialesDeEmpleado(
                      seleccionado.nombre,
                      seleccionado.apellido,
                    )}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[19px] font-bold leading-tight text-fg truncate">
                      {seleccionado.nombre} {seleccionado.apellido}
                    </h3>
                    <p className="font-mono text-[12.5px] text-muted truncate mt-0.5">
                      @{seleccionado.usuario.nombre}
                    </p>
                  </div>
                </div>

                <dl className="border-t border-hair divide-y divide-hair">
                  <div className="py-3">
                    <dt>
                      <MicroLabel>Email</MicroLabel>
                    </dt>
                    <dd className="text-[14px] font-medium text-fg mt-1 break-all">
                      {seleccionado.email}
                    </dd>
                  </div>
                  <div className="py-3">
                    <dt>
                      <MicroLabel>Rol asignado</MicroLabel>
                    </dt>
                    <dd className="text-[14px] font-medium text-fg mt-1">
                      {seleccionado.rol.nombre}
                    </dd>
                  </div>
                  <div className="py-3">
                    <dt>
                      <MicroLabel>Comisión médica</MicroLabel>
                    </dt>
                    <dd className="mt-1 flex items-center gap-2 flex-wrap">
                      <span className="rounded-[6px] border border-edge bg-surface px-2 py-0.5 font-mono text-[12px] font-semibold text-fg">
                        {seleccionado.comisionMedica.codigo}
                      </span>
                      <span className="text-[14px] text-fg">
                        {seleccionado.comisionMedica.nombre}
                      </span>
                    </dd>
                  </div>
                </dl>

                <div className="pt-2 border-t border-hair flex flex-wrap items-center gap-2">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    leftIcon={<Pencil className="size-3.5" />}
                    onClick={() => abrirEditar(seleccionado)}
                    className="rounded-full flex-1"
                  >
                    Editar datos
                  </Button>
                  {puedeEliminarEmpleado(seleccionado.id, empleadoActualId) ? (
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      leftIcon={<Trash2 className="size-3.5 text-danger-ink" />}
                      onClick={() => {
                        setDeleteError(null);
                        setDeleteTarget(seleccionado);
                      }}
                      className="rounded-full text-danger-ink"
                    >
                      Eliminar
                    </Button>
                  ) : null}
                </div>
              </div>
            ) : null
          }
        />
      </div>

      {/* Sheet Crear / Editar */}
      <ResponsiveSheet
        open={mode.tipo !== "cerrado"}
        onClose={cerrarSheet}
        labelledBy="empleado-sheet-title"
        size="md"
      >
        <div className="flex items-center justify-between pb-4 border-b border-hair">
          <div>
            <MicroLabel>
              {mode.tipo === "crear" ? "Alta de usuario" : "Edición"}
            </MicroLabel>
            <h2
              id="empleado-sheet-title"
              className="font-display text-[20px] font-bold text-fg mt-0.5"
            >
              {mode.tipo === "crear"
                ? "Nuevo empleado"
                : mode.tipo === "editar"
                  ? `${mode.empleado.nombre} ${mode.empleado.apellido}`
                  : ""}
            </h2>
          </div>
          <button
            type="button"
            onClick={cerrarSheet}
            aria-label="Cerrar panel"
            className="size-9 rounded-full grid place-items-center text-muted hover:bg-hover hover:text-fg transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field id="emp-nombre" label="Nombre" error={errors.nombre}>
              <Input
                id="emp-nombre"
                value={values.nombre}
                readOnly={saving}
                invalid={Boolean(errors.nombre)}
                placeholder="Sofía"
                className="h-11 rounded-full px-4"
                onChange={(e) => setField("nombre", e.target.value)}
              />
            </Field>

            <Field id="emp-apellido" label="Apellido" error={errors.apellido}>
              <Input
                id="emp-apellido"
                value={values.apellido}
                readOnly={saving}
                invalid={Boolean(errors.apellido)}
                placeholder="Acosta"
                className="h-11 rounded-full px-4"
                onChange={(e) => setField("apellido", e.target.value)}
              />
            </Field>
          </div>

          <Field id="emp-email" label="Email" error={errors.email}>
            <Input
              id="emp-email"
              type="email"
              value={values.email}
              readOnly={saving}
              invalid={Boolean(errors.email)}
              placeholder="sacosta@example.com"
              className="h-11 rounded-full px-4"
              onChange={(e) => setField("email", e.target.value)}
            />
          </Field>

          {mode.tipo === "crear" ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field id="emp-usuario" label="Usuario" error={errors.usuario}>
                <Input
                  id="emp-usuario"
                  value={values.usuario}
                  readOnly={saving}
                  invalid={Boolean(errors.usuario)}
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  placeholder="sacosta"
                  className="h-11 rounded-full px-4"
                  onChange={(e) => setField("usuario", e.target.value)}
                />
              </Field>

              <Field
                id="emp-contrasena"
                label="Contraseña inicial"
                error={errors.contrasena}
              >
                <PasswordInput
                  id="emp-contrasena"
                  value={values.contrasena}
                  readOnly={saving}
                  invalid={Boolean(errors.contrasena)}
                  placeholder="••••••"
                  className="h-11 rounded-full pl-4 pr-11"
                  onChange={(e) => setField("contrasena", e.target.value)}
                />
              </Field>
            </div>
          ) : null}

          <Field id="emp-rol" label="Rol" error={errors.rolId}>
            <Select
              id="emp-rol"
              value={values.rolId}
              disabled={saving}
              invalid={Boolean(errors.rolId)}
              className="h-11 rounded-full pl-4"
              onChange={(e) => setField("rolId", e.target.value)}
            >
              {roles.map((rol) => (
                <option key={rol.id} value={String(rol.id)}>
                  {rol.nombre}
                </option>
              ))}
            </Select>
          </Field>

          <Field
            id="emp-cm"
            label="Comisión médica"
            error={errors.comisionMedicaId}
          >
            <Select
              id="emp-cm"
              value={values.comisionMedicaId}
              disabled={saving}
              invalid={Boolean(errors.comisionMedicaId)}
              className="h-11 rounded-full pl-4"
              onChange={(e) => setField("comisionMedicaId", e.target.value)}
            >
              {comisiones.map((cm) => (
                <option key={cm.id} value={String(cm.id)}>
                  {cm.codigo ? `${cm.codigo} · ${cm.nombre}` : cm.nombre}
                </option>
              ))}
            </Select>
          </Field>

          {serverError ? (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-[16px] border border-danger/25 bg-danger/5 px-4 py-2.5 text-[13px] font-medium text-danger-ink"
            >
              <AlertTriangle
                className="size-4 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{serverError}</span>
            </div>
          ) : null}

          <div className="pt-3 flex items-center justify-end gap-2 border-t border-hair">
            <Button
              type="button"
              variant="ghost"
              size="md"
              disabled={saving}
              onClick={cerrarSheet}
              className="rounded-full"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              loading={saving}
              className="rounded-full px-6"
            >
              {saving
                ? "Guardando…"
                : mode.tipo === "crear"
                  ? "Crear empleado"
                  : "Guardar cambios"}
            </Button>
          </div>
        </form>
      </ResponsiveSheet>

      {/* Sheet Confirmar Eliminación */}
      <ResponsiveSheet
        open={Boolean(deleteTarget)}
        onClose={() => {
          if (!deleting) setDeleteTarget(null);
        }}
        labelledBy="empleado-delete-title"
        size="sm"
      >
        <div className="flex flex-col gap-4">
          <div>
            <MicroLabel>Confirmar baja</MicroLabel>
            <h2
              id="empleado-delete-title"
              className="font-display text-[20px] font-bold text-fg mt-1"
            >
              Eliminar empleado
            </h2>
            <p className="text-[14px] text-muted mt-2">
              ¿Querés eliminar a{" "}
              <strong className="text-fg">
                {deleteTarget?.nombre} {deleteTarget?.apellido}
              </strong>{" "}
              (@{deleteTarget?.usuario.nombre})? Esta acción no se puede
              deshacer.
            </p>
          </div>

          {deleteError ? (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-[16px] border border-danger/25 bg-danger/5 px-4 py-2.5 text-[13px] font-medium text-danger-ink"
            >
              <AlertTriangle
                className="size-4 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{deleteError}</span>
            </div>
          ) : null}

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-hair">
            <Button
              type="button"
              variant="ghost"
              size="md"
              disabled={deleting}
              onClick={() => setDeleteTarget(null)}
              className="rounded-full"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              variant="danger"
              size="md"
              loading={deleting}
              onClick={confirmarEliminacion}
              className="rounded-full"
            >
              {deleting ? "Eliminando…" : "Eliminar"}
            </Button>
          </div>
        </div>
      </ResponsiveSheet>
    </PageBody>
  );
}
