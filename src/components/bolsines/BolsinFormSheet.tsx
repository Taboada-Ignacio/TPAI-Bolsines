"use client";

import { AlertCircle, Info, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/actions/Button";
import { IconButton } from "@/components/ui/actions/IconButton";
import { MicroLabel } from "@/components/ui/display/MicroLabel";
import { Field } from "@/components/ui/forms/Field";
import { Input } from "@/components/ui/forms/Input";
import { Select } from "@/components/ui/forms/Select";
import { ResponsiveSheet } from "@/components/ui/surfaces/ResponsiveSheet";
import {
  bolsinAltaFormSchema,
  bolsinEdicionFormSchema,
  toLocalDateTimeInput,
  type BolsinListadoItem,
  type CatalogosBolsin,
} from "@/lib/bolsines";

interface FormState {
  fecha: string;
  numeroBolsin: string;
  numeroPrecinto: string;
  peso: string;
  cmOrigenId: string;
  cmDestinoId: string;
  estadoId: string;
  responsableCEId: string;
  remitoNumero: string;
  remitoAsunto: string;
  remitoTipoDocumento: string;
}

const TIPOS_DOCUMENTO = [
  "Expediente médico",
  "Documentación clínica",
  "Nota legal",
  "Remito interno",
] as const;

type FormErrors = Partial<Record<keyof FormState | "general", string>>;

export interface BolsinFormSheetProps {
  open: boolean;
  mode: "crear" | "editar";
  bolsin?: BolsinListadoItem | null;
  catalogos: CatalogosBolsin;
  onClose: () => void;
  onSuccess: (guardado: BolsinListadoItem) => void;
}

function buildInitialState(
  mode: "crear" | "editar",
  bolsin: BolsinListadoItem | null | undefined,
  catalogos: CatalogosBolsin,
): FormState {
  if (mode === "editar" && bolsin) {
    return {
      fecha: toLocalDateTimeInput(bolsin.fecha),
      numeroBolsin: String(bolsin.numeroBolsin),
      numeroPrecinto:
        bolsin.numeroPrecinto !== null ? String(bolsin.numeroPrecinto) : "",
      peso: String(bolsin.peso),
      cmOrigenId: String(bolsin.cmOrigen.id),
      cmDestinoId: String(bolsin.cmDestino.id),
      estadoId: "",
      responsableCEId: "",
      remitoNumero: bolsin.remito?.numero ?? "",
      remitoAsunto: bolsin.remito?.asunto ?? "",
      remitoTipoDocumento: bolsin.remito?.tipoDocumento ?? "",
    };
  }

  return {
    fecha: toLocalDateTimeInput(),
    numeroBolsin: "",
    numeroPrecinto: "",
    peso: "",
    cmOrigenId: catalogos.comisiones[0] ? String(catalogos.comisiones[0].id) : "",
    cmDestinoId: catalogos.comisiones[1]
      ? String(catalogos.comisiones[1].id)
      : catalogos.comisiones[0]
        ? String(catalogos.comisiones[0].id)
        : "",
    estadoId: catalogos.estadosBolsin[0]
      ? String(catalogos.estadosBolsin[0].id)
      : "",
    responsableCEId: catalogos.empleados[0]
      ? String(catalogos.empleados[0].id)
      : "",
    remitoNumero: "",
    remitoAsunto: "",
    remitoTipoDocumento: "",
  };
}

/** Sheet adaptativo para Alta (POST) y Edición (PUT) de bolsines contra la API real. */
export function BolsinFormSheet({
  open,
  mode,
  bolsin,
  catalogos,
  onClose,
  onSuccess,
}: BolsinFormSheetProps) {
  return (
    <ResponsiveSheet
      open={open}
      onClose={onClose}
      labelledBy="bolsin-form-title"
      size="md"
    >
      {open ? (
        <BolsinFormContent
          key={`${mode}-${bolsin?.id ?? "new"}`}
          mode={mode}
          bolsin={bolsin}
          catalogos={catalogos}
          onClose={onClose}
          onSuccess={onSuccess}
        />
      ) : null}
    </ResponsiveSheet>
  );
}

function BolsinFormContent({
  mode,
  bolsin,
  catalogos,
  onClose,
  onSuccess,
}: Omit<BolsinFormSheetProps, "open">) {
  const [form, setForm] = useState<FormState>(() =>
    buildInitialState(mode, bolsin, catalogos),
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) =>
      prev[key] || prev.general
        ? { ...prev, [key]: undefined, general: undefined }
        : prev,
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const basePayload = {
      fecha: form.fecha,
      numeroBolsin: Number(form.numeroBolsin),
      numeroPrecinto: Number(form.numeroPrecinto),
      peso: Number(form.peso),
      cmOrigenId: Number(form.cmOrigenId),
      cmDestinoId: Number(form.cmDestinoId),
      remitoNumero: form.remitoNumero,
      remitoAsunto: form.remitoAsunto,
      remitoTipoDocumento: form.remitoTipoDocumento,
    };

    const parsed =
      mode === "crear"
        ? bolsinAltaFormSchema.safeParse({
            ...basePayload,
            estadoId: Number(form.estadoId),
            responsableCEId: Number(form.responsableCEId),
          })
        : bolsinEdicionFormSchema.safeParse(basePayload);

    if (!parsed.success) {
      const nextErrors: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormErrors | undefined;
        if (key && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    const fechaIso = new Date(parsed.data.fecha).toISOString();
    if (Number.isNaN(Date.parse(fechaIso))) {
      setErrors({ fecha: "Ingresá una fecha y hora válida." });
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const url =
        mode === "crear" ? "/api/bolsines" : `/api/bolsines/${bolsin?.id}`;
      const method = mode === "crear" ? "POST" : "PUT";

      const remitoAdjunto =
        parsed.data.remitoNumero &&
        parsed.data.remitoAsunto &&
        parsed.data.remitoTipoDocumento
          ? {
              numero: parsed.data.remitoNumero,
              asunto: parsed.data.remitoAsunto,
              tipoDocumento: parsed.data.remitoTipoDocumento,
            }
          : null;

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          fecha: fechaIso,
          ...(remitoAdjunto ? { remito: remitoAdjunto } : {}),
        }),
      });

      const body = (await response.json().catch(() => null)) as
        | BolsinListadoItem
        | { error?: string }
        | null;

      if (!response.ok) {
        const message =
          (body && "error" in body && body.error) ||
          (response.status === 409
            ? "Ya existe un bolsín con ese número en la comisión de origen."
            : "No se pudo guardar el bolsín. Verificá los datos e intentá de nuevo.");
        setErrors({ general: message });
        return;
      }

      const guardado = body as BolsinListadoItem;
      onSuccess({
        ...guardado,
        remito: guardado.remito ?? remitoAdjunto,
        precintoAnterior: bolsin?.precintoAnterior ?? null,
      });
      onClose();
    } catch {
      setErrors({
        general: "No pudimos conectarnos con el servidor. Intentá nuevamente.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const esCrear = mode === "crear";

  return (
    <>
      <div className="flex items-start justify-between gap-4 border-b border-hair px-5 py-4 sm:px-6">
        <div>
          <MicroLabel className="block">
            {esCrear ? "Nuevo registro" : `Bolsín #${bolsin?.numeroBolsin ?? ""}`}
          </MicroLabel>
          <h2
            id="bolsin-form-title"
            className="mt-1 font-display text-xl font-bold tracking-tight text-fg"
          >
            {esCrear ? "Nuevo bolsín" : "Editar bolsín"}
          </h2>
        </div>
        <IconButton
          aria-label="Cerrar panel"
          onClick={onClose}
          disabled={submitting}
          className="shrink-0"
        >
          <X className="size-4" aria-hidden="true" />
        </IconButton>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-5 sm:px-6"
      >
        {errors.general ? (
          <div
            role="alert"
            className="flex items-start gap-2.5 rounded-control border border-danger/40 bg-danger/10 p-3 text-sm text-danger-ink"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{errors.general}</span>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            id="bolsin-numero"
            label="N.º de bolsín"
            error={errors.numeroBolsin}
          >
            <Input
              id="bolsin-numero"
              type="number"
              inputMode="numeric"
              min={1}
              variant="mono"
              placeholder="Ej. 8420"
              value={form.numeroBolsin}
              invalid={Boolean(errors.numeroBolsin)}
              aria-describedby={
                errors.numeroBolsin ? "bolsin-numero-error" : undefined
              }
              onChange={(e) => updateField("numeroBolsin", e.target.value)}
            />
          </Field>

          <Field
            id="bolsin-precinto"
            label="N.º de precinto"
            error={errors.numeroPrecinto}
          >
            <Input
              id="bolsin-precinto"
              type="number"
              inputMode="numeric"
              min={1}
              variant="mono"
              placeholder="Ej. 99412"
              value={form.numeroPrecinto}
              invalid={Boolean(errors.numeroPrecinto)}
              aria-describedby={
                errors.numeroPrecinto ? "bolsin-precinto-error" : undefined
              }
              onChange={(e) => updateField("numeroPrecinto", e.target.value)}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field id="bolsin-peso" label="Peso (kg)" error={errors.peso}>
            <Input
              id="bolsin-peso"
              type="number"
              inputMode="decimal"
              step="0.1"
              min="0.1"
              variant="mono"
              placeholder="Ej. 4.5"
              value={form.peso}
              invalid={Boolean(errors.peso)}
              aria-describedby={errors.peso ? "bolsin-peso-error" : undefined}
              onChange={(e) => updateField("peso", e.target.value)}
            />
          </Field>

          <Field id="bolsin-fecha" label="Fecha y hora" error={errors.fecha}>
            <Input
              id="bolsin-fecha"
              type="datetime-local"
              variant="mono"
              value={form.fecha}
              invalid={Boolean(errors.fecha)}
              aria-describedby={errors.fecha ? "bolsin-fecha-error" : undefined}
              onChange={(e) => updateField("fecha", e.target.value)}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            id="bolsin-origen"
            label="CM de origen"
            error={errors.cmOrigenId}
          >
            <Select
              id="bolsin-origen"
              value={form.cmOrigenId}
              invalid={Boolean(errors.cmOrigenId)}
              aria-describedby={
                errors.cmOrigenId ? "bolsin-origen-error" : undefined
              }
              onChange={(e) => updateField("cmOrigenId", e.target.value)}
            >
              <option value="">Seleccionar origen…</option>
              {catalogos.comisiones.map((cm) => (
                <option key={cm.id} value={cm.id}>
                  {cm.codigo} — {cm.nombre}
                </option>
              ))}
            </Select>
          </Field>

          <Field
            id="bolsin-destino"
            label="CM de destino"
            error={errors.cmDestinoId}
          >
            <Select
              id="bolsin-destino"
              value={form.cmDestinoId}
              invalid={Boolean(errors.cmDestinoId)}
              aria-describedby={
                errors.cmDestinoId ? "bolsin-destino-error" : undefined
              }
              onChange={(e) => updateField("cmDestinoId", e.target.value)}
            >
              <option value="">Seleccionar destino…</option>
              {catalogos.comisiones.map((cm) => (
                <option key={cm.id} value={cm.id}>
                  {cm.codigo} — {cm.nombre}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        {esCrear ? (
          <div className="grid grid-cols-1 gap-4 border-t border-hair pt-4 sm:grid-cols-2">
            <Field
              id="bolsin-estado"
              label="Estado inicial"
              error={errors.estadoId}
            >
              <Select
                id="bolsin-estado"
                value={form.estadoId}
                invalid={Boolean(errors.estadoId)}
                aria-describedby={
                  errors.estadoId ? "bolsin-estado-error" : undefined
                }
                onChange={(e) => updateField("estadoId", e.target.value)}
              >
                <option value="">Seleccionar estado…</option>
                {catalogos.estadosBolsin.map((estado) => (
                  <option key={estado.id} value={estado.id}>
                    {estado.nombre}
                  </option>
                ))}
              </Select>
            </Field>

            <Field
              id="bolsin-responsable"
              label="Responsable de alta"
              error={errors.responsableCEId}
            >
              <Select
                id="bolsin-responsable"
                value={form.responsableCEId}
                invalid={Boolean(errors.responsableCEId)}
                aria-describedby={
                  errors.responsableCEId
                    ? "bolsin-responsable-error"
                    : undefined
                }
                onChange={(e) => updateField("responsableCEId", e.target.value)}
              >
                <option value="">Seleccionar empleado…</option>
                {catalogos.empleados.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.apellido}, {emp.nombre}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
        ) : (
          <div className="flex items-start gap-2.5 rounded-control border border-edge bg-raised/60 p-3 text-[13px] text-muted">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              La edición actualiza los datos físicos y ruta del bolsín. El
              estado vigente y sus responsables se preservan en el historial.
            </span>
          </div>
        )}

        {/* Remito y documentación asociada */}
        <fieldset className="flex flex-col gap-3 rounded-[14px] border border-edge bg-raised/40 p-3.5">
          <legend className="px-1 font-mono text-[10px] font-semibold tracking-wider text-muted uppercase">
            Remito y documentación asociada
          </legend>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field
              id="bolsin-remito-numero"
              label="N.º de remito"
              error={errors.remitoNumero}
            >
              <Input
                id="bolsin-remito-numero"
                type="text"
                value={form.remitoNumero}
                invalid={Boolean(errors.remitoNumero)}
                aria-describedby={
                  errors.remitoNumero ? "bolsin-remito-numero-error" : undefined
                }
                onChange={(e) => updateField("remitoNumero", e.target.value)}
                placeholder="Ej. REM-4401"
              />
            </Field>

            <Field
              id="bolsin-remito-tipo"
              label="Tipo de documento"
              error={errors.remitoTipoDocumento}
            >
              <Select
                id="bolsin-remito-tipo"
                value={form.remitoTipoDocumento}
                invalid={Boolean(errors.remitoTipoDocumento)}
                aria-describedby={
                  errors.remitoTipoDocumento
                    ? "bolsin-remito-tipo-error"
                    : undefined
                }
                onChange={(e) =>
                  updateField("remitoTipoDocumento", e.target.value)
                }
              >
                <option value="">Seleccionar tipo…</option>
                {TIPOS_DOCUMENTO.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </Select>
            </Field>
          </div>

          <Field
            id="bolsin-remito-asunto"
            label="Asunto / detalle documental"
            error={errors.remitoAsunto}
          >
            <Input
              id="bolsin-remito-asunto"
              type="text"
              value={form.remitoAsunto}
              invalid={Boolean(errors.remitoAsunto)}
              aria-describedby={
                errors.remitoAsunto ? "bolsin-remito-asunto-error" : undefined
              }
              onChange={(e) => updateField("remitoAsunto", e.target.value)}
              placeholder="Ej. Dictamen Junta Médica #882"
            />
          </Field>
        </fieldset>

        <div className="mt-auto flex flex-col-reverse gap-2.5 border-t border-hair pt-4 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={submitting}
          >
            Cancelar
          </Button>
          <Button type="submit" variant="primary" loading={submitting}>
            {esCrear ? "Crear bolsín" : "Guardar cambios"}
          </Button>
        </div>
      </form>
    </>
  );
}
