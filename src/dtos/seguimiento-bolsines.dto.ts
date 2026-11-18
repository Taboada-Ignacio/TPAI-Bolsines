import type {
  CmOrigenSeguimiento,
  RecorridoMapa,
} from "./seguimiento-bolsin.dto";

export type UbicacionGpsBolsin = {
  numero: number;
  latitud: number;
  longitud: number;
  actualizado: string;
};

export type EstadoCobertura = "vivo" | "sin_cobertura";

export type RemitoResumen = {
  numero: string;
  asunto: string;
  tipoDocumento: string;
};

export type PuntoBolsin = UbicacionGpsBolsin & {
  id?: number;
  precinto: number | null;
  destino: string;
  codigoDestino?: string;
  direccionDestino?: string;
  cmOrigen?: CmOrigenSeguimiento;
  recorrido?: RecorridoMapa;
  pesoKg?: number;
  emailGcm?: string | null;
  estadoCobertura: EstadoCobertura;
  remito?: RemitoResumen | null;
};

export type MapaConPosiciones = {
  estilo: string;
  comisionOrigen?: CmOrigenSeguimiento;
  puntos: PuntoBolsin[];
};

export type SeguimientoBolsines = {
  comision: string;
  mapa: MapaConPosiciones;
  sinUbicacion: number;
};
