import type {
  MapaConPosiciones,
  PuntoBolsin,
} from "@/dtos/seguimiento-bolsines.dto";

export class ServidorGoogleMaps {
  getMapaLocation(puntos: PuntoBolsin[]): MapaConPosiciones {
    return { estilo: "https://tiles.openfreemap.org/styles/bright", puntos };
  }
}
