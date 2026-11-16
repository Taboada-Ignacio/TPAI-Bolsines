import { z } from "zod";

export const MODELOS_GPS = ["XTR-4500L", "QX-7A", "MTR-900"] as const;

export const modeloGpsSchema = z.enum(MODELOS_GPS);
export type ModeloGps = z.infer<typeof modeloGpsSchema>;

export const ESTADOS_COBERTURA = ["vivo", "sin_cobertura"] as const;

export const estadoCoberturaSchema = z.enum(ESTADOS_COBERTURA);
export type EstadoCobertura = z.infer<typeof estadoCoberturaSchema>;

const textoObligatorio = z.string().trim().min(1);

export const ubicacionBolsinSchema = z.object({
  latitud: z.number().finite().min(-90).max(90),
  longitud: z.number().finite().min(-180).max(180),
  fechaHoraActualizacion: z.iso.datetime({ offset: true }),
  estadoCobertura: estadoCoberturaSchema,
});
export type UbicacionBolsin = z.infer<typeof ubicacionBolsinSchema>;

export const cmOrigenSeguimientoSchema = z.object({
  codigo: textoObligatorio,
  nombre: textoObligatorio,
  direccion: textoObligatorio,
});
export type CmOrigenSeguimiento = z.infer<typeof cmOrigenSeguimientoSchema>;

export const cmDestinoSeguimientoSchema = z.object({
  codigo: textoObligatorio,
  nombre: textoObligatorio,
  emailGcm: z.email().nullable().optional(),
});
export type CmDestinoSeguimiento = z.infer<typeof cmDestinoSeguimientoSchema>;

export const remitoSeguimientoSchema = z.object({
  numero: textoObligatorio,
  asunto: textoObligatorio,
  tipoDocumento: textoObligatorio,
});
export type RemitoSeguimiento = z.infer<typeof remitoSeguimientoSchema>;

export const bolsinSeguimientoSchema = z.object({
  nroBolsin: z.number().int().positive(),
  numeroPrecinto: z.union([textoObligatorio, z.number().int().positive()]),
  cmOrigen: cmOrigenSeguimientoSchema.optional(),
  cmDestino: cmDestinoSeguimientoSchema,
  ubicacion: ubicacionBolsinSchema.nullable(),
  remitos: z.array(remitoSeguimientoSchema),
  pesoKg: z.number().finite().positive().optional(),
});
export type BolsinSeguimiento = z.infer<typeof bolsinSeguimientoSchema>;

export const seguimientoResponseSchema = z.object({
  cmOrigen: cmOrigenSeguimientoSchema,
  modeloGps: modeloGpsSchema,
  bolsines: z.array(bolsinSeguimientoSchema),
});
export type SeguimientoResponse = z.infer<typeof seguimientoResponseSchema>;

export const notificarUbicacionRequestSchema = z.object({
  nroBolsin: z.number().int().positive(),
  modeloGps: modeloGpsSchema,
});
export type NotificarUbicacionRequest = z.infer<
  typeof notificarUbicacionRequestSchema
>;

export const notificarUbicacionResponseSchema = z.object({
  enviado: z.boolean(),
  destinatarioEmail: z.email(),
  destinatarioNombre: textoObligatorio,
  fechaEnvio: z.iso.datetime({ offset: true }),
});
export type NotificarUbicacionResponse = z.infer<
  typeof notificarUbicacionResponseSchema
>;
