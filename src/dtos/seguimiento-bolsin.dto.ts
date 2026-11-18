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

const coordenadaMapaSchema = z.object({
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
});

const recorridoMapaSchema = z.object({
  origen: coordenadaMapaSchema.nullable(),
  destino: coordenadaMapaSchema.nullable(),
  trazado: z.array(coordenadaMapaSchema).min(2).nullable(),
});
export type RecorridoMapa = z.infer<typeof recorridoMapaSchema>;

export const cmDestinoSeguimientoSchema = z.object({
  codigo: textoObligatorio,
  nombre: textoObligatorio,
  direccion: textoObligatorio.optional(),
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
  id: z.number().int().positive().optional(),
  nroBolsin: z.number().int().positive(),
  numeroPrecinto: z
    .union([textoObligatorio, z.number().int().positive()])
    .nullable(),
  cmOrigen: cmOrigenSeguimientoSchema.optional(),
  cmDestino: cmDestinoSeguimientoSchema,
  ubicacion: ubicacionBolsinSchema.nullable(),
  recorrido: recorridoMapaSchema.optional(),
  remito: remitoSeguimientoSchema.nullable().optional(),
  pesoKg: z.number().finite().positive().optional(),
});
export type BolsinSeguimiento = z.infer<typeof bolsinSeguimientoSchema>;

export const seguimientoResponseSchema = z.object({
  cmOrigen: cmOrigenSeguimientoSchema,
  modeloGps: modeloGpsSchema,
  bolsines: z.array(bolsinSeguimientoSchema),
  estiloMapa: z.string().optional(),
  sinUbicacion: z.number().int().min(0).optional().default(0),
});
export type SeguimientoResponse = z.infer<typeof seguimientoResponseSchema>;

export const cu36PuntoBackendSchema = z.object({
  id: z.number().int().positive().optional(),
  numero: z.number().int().positive(),
  precinto: z.union([textoObligatorio, z.number().int().positive()]).nullable(),
  destino: textoObligatorio,
  codigoDestino: textoObligatorio.optional(),
  destinoCodigo: textoObligatorio.optional(),
  direccionDestino: textoObligatorio.optional(),
  cmOrigen: cmOrigenSeguimientoSchema.optional(),
  recorrido: recorridoMapaSchema.optional(),
  emailGcm: z.email().nullable().optional(),
  pesoKg: z.number().finite().positive().optional(),
  remito: remitoSeguimientoSchema.nullable().optional(),
  latitud: z.number().finite().min(-90).max(90).nullable(),
  longitud: z.number().finite().min(-180).max(180).nullable(),
  actualizado: z.iso.datetime({ offset: true }).nullable(),
  estadoCobertura: estadoCoberturaSchema.optional(),
});
export type Cu36PuntoBackend = z.infer<typeof cu36PuntoBackendSchema>;

export const cu36BackendResponseSchema = z.union([
  z.object({
    comision: textoObligatorio,
    puntos: z.array(cu36PuntoBackendSchema),
    sinUbicacion: z.number().int().min(0),
  }),
  z.object({
    comision: textoObligatorio,
    mapa: z.object({
      estilo: z.string().optional(),
      comisionOrigen: cmOrigenSeguimientoSchema.optional(),
      puntos: z.array(cu36PuntoBackendSchema),
    }),
    sinUbicacion: z.number().int().min(0),
  }),
]);
export type Cu36BackendResponse = z.infer<typeof cu36BackendResponseSchema>;

export const cu36SeleccionResponseSchema = z.object({
  seleccionado: z.number().int().positive(),
  confirmarNotificacion: z.literal(true),
});
export type Cu36SeleccionResponse = z.infer<typeof cu36SeleccionResponseSchema>;

export const cu31BackendResponseSchema = z.object({
  aceptada: z.literal(true),
  destinatarioEmail: z.email().optional(),
  destinatarioNombre: textoObligatorio.optional(),
  fechaEnvio: z.iso.datetime({ offset: true }).optional(),
});

export const notificarUbicacionRequestSchema = z.object({
  bolsinId: z.number().int().positive().optional(),
  nroBolsin: z.number().int().positive(),
  modeloGps: modeloGpsSchema,
  emailDestino: z.email().optional(),
  latitud: z.number().finite().min(-90).max(90).optional(),
  longitud: z.number().finite().min(-180).max(180).optional(),
  fechaHoraActualizacion: z.iso.datetime({ offset: true }).optional(),
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
