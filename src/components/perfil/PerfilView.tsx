"use client";

import { AlertTriangle, CheckCircle2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { PageBody } from "@/components/layout/PageBody";
import { PageHeading } from "@/components/layout/PageHeading";
import { Button } from "@/components/ui/actions/Button";
import { Marker } from "@/components/ui/display/Marker";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { Field } from "@/components/ui/forms/Field";
import { Input } from "@/components/ui/forms/Input";
import { Select } from "@/components/ui/forms/Select";
import { empleadoEdicionSchema } from "@/dtos/empleado.dto";
import type { PerfilActual } from "@/services/auth/sesion-actual";

export interface CatalogoOpcion {
  id: number;
  nombre: string;
  codigo?: string;
}

export interface PerfilViewProps {
  perfil: PerfilActual;
  roles: CatalogoOpcion[];
  comisiones: CatalogoOpcion[];
}

type FieldErrors = Partial<
  Record<"nombre" | "apellido" | "email" | "rolId" | "comisionMedicaId", string>
>;

export function PerfilView({ perfil, roles, comisiones }: PerfilViewProps) {
  const router = useRouter();
  const [nombre, setNombre] = useState(perfil.sesion.nombre);
  const [apellido, setApellido] = useState(perfil.sesion.apellido);
  const [email, setEmail] = useState(perfil.email);
  const [rolId, setRolId] = useState(String(perfil.rolId));
  const [comisionMedicaId, setComisionMedicaId] = useState(
    String(perfil.comisionMedicaId),
  );

  const [saving, setSaving] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState<{
    tipo: "ok" | "error";
    mensaje: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;

    const parsed = empleadoEdicionSchema.safeParse({
      nombre,
      apellido,
      email,
      rolId: Number(rolId),
      comisionMedicaId: Number(comisionMedicaId),
    });

    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors | undefined;
        if (key && !nextErrors[key]) {
          nextErrors[key] =
            key === "email"
              ? "Ingresá un email válido."
              : "Completá este campo.";
        }
      }
      setFieldErrors(nextErrors);
      setFeedback(null);
      return;
    }

    setFieldErrors({});
    setFeedback(null);
    setSaving(true);

    try {
      const res = await fetch(`/api/empleados/${perfil.empleadoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setFeedback({
          tipo: "error",
          mensaje: body?.error ?? "No pudimos guardar los cambios.",
        });
        return;
      }

      setFeedback({
        tipo: "ok",
        mensaje: "Datos actualizados.",
      });
      router.refresh();
    } catch {
      setFeedback({
        tipo: "error",
        mensaje: "No pudimos conectar con el servidor. Probá de nuevo.",
      });
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Si falla la red, igual salimos al login.
    } finally {
      router.replace("/login");
    }
  }

  return (
    <PageBody variant="padded">
      <PageHeading rotulo={`${perfil.sesion.rol} · cuenta`}>
        Tu <Marker>perfil</Marker>
      </PageHeading>

      <p className="font-serif italic text-[20px] text-muted mt-2 mb-7">
        datos de usuario y sesión activa
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
        {/* Isla de identidad y sesión */}
        <section
          aria-label="Resumen de sesión"
          className="rounded-[20px] border border-edge bg-surface p-6 flex flex-col justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="size-14 shrink-0 rounded-[16px] border border-edge bg-raised grid place-items-center font-mono text-[15px] font-semibold tracking-[0.06em] text-fg">
              {perfil.sesion.iniciales}
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-[20px] font-bold leading-tight text-fg truncate">
                {perfil.sesion.nombre} {perfil.sesion.apellido}
              </h2>
              <p className="font-mono text-[13px] text-muted mt-0.5 truncate">
                @{perfil.sesion.usuario}
              </p>
            </div>
          </div>

          <dl className="border-t border-hair divide-y divide-hair">
            <div className="py-3 flex items-center justify-between gap-4">
              <dt>
                <MicroLabel>Comisión</MicroLabel>
              </dt>
              <dd className="font-mono text-[13px] font-semibold text-fg text-right">
                {perfil.sesion.cm.codigo} ·{" "}
                {perfil.sesion.cm.nombre.replace(/^CM\s+/i, "")}
              </dd>
            </div>
            <div className="py-3 flex items-center justify-between gap-4">
              <dt>
                <MicroLabel>Rol asignado</MicroLabel>
              </dt>
              <dd className="text-[13.5px] font-medium text-fg text-right">
                {perfil.sesion.rol}
              </dd>
            </div>
            <div className="py-3 flex items-center justify-between gap-4">
              <dt>
                <MicroLabel>Ingreso de turno</MicroLabel>
              </dt>
              <dd className="font-mono text-[13px] font-semibold text-fg">
                {perfil.sesion.horaIngreso} hs
              </dd>
            </div>
          </dl>

          <div className="pt-2 border-t border-hair">
            <Button
              type="button"
              variant="secondary"
              size="md"
              loading={loggingOut}
              onClick={handleLogout}
              leftIcon={<LogOut className="size-4" />}
              className="w-full rounded-full"
            >
              {loggingOut ? "Cerrando sesión…" : "Cerrar sesión"}
            </Button>
          </div>
        </section>

        {/* Formulario de edición */}
        <section
          aria-label="Editar datos personales"
          className="rounded-[20px] border border-edge bg-surface p-6"
        >
          <div className="mb-5 pb-4 border-b border-hair">
            <MicroLabel>Datos del empleado</MicroLabel>
            <h2 className="font-display text-[18px] font-bold text-fg mt-1">
              Actualizar información
            </h2>
          </div>

          <form
            noValidate
            aria-busy={saving || undefined}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                id="perfil-nombre"
                label="Nombre"
                error={fieldErrors.nombre}
              >
                <Input
                  id="perfil-nombre"
                  value={nombre}
                  readOnly={saving}
                  invalid={Boolean(fieldErrors.nombre)}
                  className="h-11 rounded-full px-4"
                  onChange={(e) => {
                    setNombre(e.target.value);
                    setFieldErrors((p) => ({ ...p, nombre: undefined }));
                  }}
                />
              </Field>

              <Field
                id="perfil-apellido"
                label="Apellido"
                error={fieldErrors.apellido}
              >
                <Input
                  id="perfil-apellido"
                  value={apellido}
                  readOnly={saving}
                  invalid={Boolean(fieldErrors.apellido)}
                  className="h-11 rounded-full px-4"
                  onChange={(e) => {
                    setApellido(e.target.value);
                    setFieldErrors((p) => ({ ...p, apellido: undefined }));
                  }}
                />
              </Field>
            </div>

            <Field id="perfil-email" label="Email" error={fieldErrors.email}>
              <Input
                id="perfil-email"
                type="email"
                value={email}
                readOnly={saving}
                invalid={Boolean(fieldErrors.email)}
                className="h-11 rounded-full px-4"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFieldErrors((p) => ({ ...p, email: undefined }));
                }}
              />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field id="perfil-rol" label="Rol" error={fieldErrors.rolId}>
                <Select
                  id="perfil-rol"
                  value={rolId}
                  disabled={saving}
                  invalid={Boolean(fieldErrors.rolId)}
                  className="h-11 rounded-full pl-4"
                  onChange={(e) => setRolId(e.target.value)}
                >
                  {roles.map((rol) => (
                    <option key={rol.id} value={String(rol.id)}>
                      {rol.nombre}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field
                id="perfil-cm"
                label="Comisión médica"
                error={fieldErrors.comisionMedicaId}
              >
                <Select
                  id="perfil-cm"
                  value={comisionMedicaId}
                  disabled={saving}
                  invalid={Boolean(fieldErrors.comisionMedicaId)}
                  className="h-11 rounded-full pl-4"
                  onChange={(e) => setComisionMedicaId(e.target.value)}
                >
                  {comisiones.map((cm) => (
                    <option key={cm.id} value={String(cm.id)}>
                      {cm.codigo ? `${cm.codigo} · ${cm.nombre}` : cm.nombre}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            {feedback ? (
              <div
                role={feedback.tipo === "error" ? "alert" : "status"}
                className={
                  feedback.tipo === "ok"
                    ? "flex items-center gap-2 rounded-full border border-edge bg-raised px-4 py-2.5 text-[13.5px] font-medium text-fg"
                    : "flex items-center gap-2 rounded-full border border-danger/25 bg-danger/5 px-4 py-2.5 text-[13.5px] font-medium text-danger-ink"
                }
              >
                {feedback.tipo === "ok" ? (
                  <CheckCircle2
                    className="size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                ) : (
                  <AlertTriangle
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span>{feedback.mensaje}</span>
              </div>
            ) : null}

            <div className="pt-2 flex justify-end">
              <Button
                type="submit"
                variant="primary"
                size="md"
                loading={saving}
                className="rounded-full px-6"
              >
                {saving ? "Guardando…" : "Guardar cambios"}
              </Button>
            </div>
          </form>
        </section>
      </div>
    </PageBody>
  );
}
