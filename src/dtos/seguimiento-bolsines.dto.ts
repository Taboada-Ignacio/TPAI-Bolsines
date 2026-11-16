export type PuntoBolsin = {
  id: number;
  numero: number;
  precinto: number | null;
  destino: string;
  codigoDestino: string;
  latitud: number;
  longitud: number;
  actualizado: string;
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
