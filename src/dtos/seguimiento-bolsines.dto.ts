export type EstadoCobertura = "vivo" | "sin_cobertura";

export type RemitoResumen = {
  numero: string;
  asunto: string;
  tipoDocumento: string;
};

export type PuntoBolsin = {
  id: number;
  numero: number;
  precinto: number | null;
  destino: string;
  codigoDestino: string;
  latitud: number;
  longitud: number;
  actualizado: string;
  pesoKg?: number;
  emailGcm?: string | null;
  estadoCobertura: EstadoCobertura;
  remito?: RemitoResumen | null;
};

export type MapaConPosiciones = {
  estilo: string;
  puntos: PuntoBolsin[];
};

export type SeguimientoBolsines = {
  comision: string;
  mapa: MapaConPosiciones;
  sinUbicacion: number;
};
