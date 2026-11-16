import { z } from "zod";

export interface CatalogoComision {
  id: number;
  codigo: string;
  nombre: string;
}

export interface CatalogoEstado {
  id: number;
  nombre: string;
  descripcion: string;
  ambito: string;
}

export interface CatalogoEmpleado {
  id: number;
  nombre: string;
  apellido: string;
  comisionMedica?: CatalogoComision;
}

export interface RemitoBolsinResumen {
  numero: string;
  asunto: string;
  tipoDocumento: string;
}

export interface BolsinListadoItem {
  id: number;
  fecha: string;
  numeroBolsin: number;
  numeroPrecinto: number | null;
  precintoAnterior?: number | null;
  peso: number;
  cmOrigen: CatalogoComision;
  cmDestino: CatalogoComision;
  estadoActual: { id: number; nombre: string } | null;
  remito?: RemitoBolsinResumen | null;
}

export interface CambioEstadoItem {
  id: number;
  fechaHoraInicio: string;
  fechaHoraFin: string | null;
  estado: { id: number; nombre: string };
  responsableCE: { id: number; nombre: string; apellido: string };
}

export interface BolsinDetalleItem extends BolsinListadoItem {
  cambiosEstado: CambioEstadoItem[];
}

export interface CatalogosBolsin {
  comisiones: CatalogoComision[];
  estadosBolsin: CatalogoEstado[];
  empleados: CatalogoEmpleado[];
}

const enteroPositivo = z
  .number({ error: "Ingresá un número válido." })
  .int("Debe ser un número entero.")
  .positive("Debe ser mayor a 0.")
  .max(2_147_483_647, "El número supera el límite permitido.");

const remitoOpcional = z.object({
  remitoNumero: z.string().trim().optional(),
  remitoAsunto: z.string().trim().optional(),
  remitoTipoDocumento: z.string().trim().optional(),
});

function validarRemitoCompleto<
  T extends {
    cmOrigenId: number;
    cmDestinoId: number;
    remitoNumero?: string;
    remitoAsunto?: string;
    remitoTipoDocumento?: string;
  },
>(schema: z.ZodType<T>) {
  return schema
    .refine((data) => data.cmOrigenId !== data.cmDestinoId, {
      path: ["cmDestinoId"],
      message: "La comisión de destino debe ser distinta a la de origen.",
    })
    .superRefine((data, ctx) => {
      const tieneAlguno = Boolean(
        data.remitoNumero || data.remitoAsunto || data.remitoTipoDocumento,
      );
      if (!tieneAlguno) return;
      if (!data.remitoNumero) {
        ctx.addIssue({
          code: "custom",
          path: ["remitoNumero"],
          message: "Ingresá el N.º de remito.",
        });
      }
      if (!data.remitoAsunto) {
        ctx.addIssue({
          code: "custom",
          path: ["remitoAsunto"],
          message: "Ingresá el asunto de la documentación.",
        });
      }
      if (!data.remitoTipoDocumento) {
        ctx.addIssue({
          code: "custom",
          path: ["remitoTipoDocumento"],
          message: "Seleccioná el tipo de documento.",
        });
      }
    });
}

const bolsinEdicionBaseSchema = z
  .object({
    fecha: z.string().min(1, "La fecha es obligatoria."),
    numeroBolsin: enteroPositivo,
    numeroPrecinto: enteroPositivo,
    peso: z
      .number({ error: "Ingresá un peso válido." })
      .positive("El peso debe ser mayor a 0 kg.")
      .max(9999, "El peso máximo permitido es 9999 kg."),
    cmOrigenId: enteroPositivo,
    cmDestinoId: enteroPositivo,
  })
  .merge(remitoOpcional);

export const bolsinEdicionFormSchema = validarRemitoCompleto(bolsinEdicionBaseSchema);

export const bolsinAltaFormSchema = validarRemitoCompleto(
  bolsinEdicionBaseSchema.extend({
    estadoId: enteroPositivo,
    responsableCEId: enteroPositivo,
  }),
);

export type BolsinEdicionFormValues = z.infer<typeof bolsinEdicionFormSchema>;
export type BolsinAltaFormValues = z.infer<typeof bolsinAltaFormSchema>;

export type EstadoBadgeVariant =
  | "lime"
  | "primary"
  | "amber"
  | "danger"
  | "neutral";

/** Asigna un tono semántico al badge según el nombre del estado del bolsín. */
export function getEstadoBadgeVariant(
  nombreEstado: string | null | undefined,
): EstadoBadgeVariant {
  if (!nombreEstado) return "neutral";
  const normalized = nombreEstado
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (
    normalized.includes("cancel") ||
    normalized.includes("extrav") ||
    normalized.includes("rechaz")
  ) {
    return "danger";
  }
  if (
    normalized.includes("demor") ||
    normalized.includes("cobertura") ||
    normalized.includes("observ") ||
    normalized.includes("incid")
  ) {
    return "amber";
  }
  if (
    normalized.includes("enviad") ||
    normalized.includes("transito") ||
    normalized.includes("curso")
  ) {
    return "lime";
  }
  if (
    normalized.includes("recib") ||
    normalized.includes("entreg") ||
    normalized.includes("finaliz") ||
    normalized.includes("cerr")
  ) {
    return "primary";
  }
  return "neutral";
}

const fechaCortaFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const fechaHoraFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function formatFechaCorta(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return fechaCortaFormatter.format(date);
}

export function formatFechaHora(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return fechaHoraFormatter.format(date);
}

export function formatPesoKg(peso: number): string {
  return `${peso.toLocaleString("es-AR", {
    minimumFractionDigits: peso % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 2,
  })} kg`;
}

/** Calcula una duración legible entre dos timestamps ISO (o hasta `ahora` si sigue abierto). */
export function formatDuracion(
  inicioIso: string,
  finIso: string | null,
  ahora: Date = new Date(),
): string {
  const inicio = new Date(inicioIso).getTime();
  const fin = finIso ? new Date(finIso).getTime() : ahora.getTime();
  if (Number.isNaN(inicio) || Number.isNaN(fin) || fin < inicio) return "—";

  const totalMin = Math.floor((fin - inicio) / 60_000);
  if (totalMin < 1) return "< 1 min";
  if (totalMin < 60) return `${totalMin} min`;

  const horas = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  if (horas < 24) {
    return mins > 0 ? `${horas} h ${mins} min` : `${horas} h`;
  }

  const dias = Math.floor(horas / 24);
  const horasRest = horas % 24;
  return horasRest > 0 ? `${dias} d ${horasRest} h` : `${dias} d`;
}

/** Convierte una fecha ISO (o actual) a valor compatible con `<input type="datetime-local">`. */
export function toLocalDateTimeInput(iso?: string): string {
  const date = iso ? new Date(iso) : new Date();
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
