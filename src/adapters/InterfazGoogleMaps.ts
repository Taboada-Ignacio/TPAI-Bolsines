import type { PuntoBolsin } from "@/dtos/seguimiento-bolsines.dto";
import type { ServidorGoogleMaps } from "@/infrastructure/ServidorGoogleMaps";

export class InterfazGoogleMaps {
  constructor(private readonly servidor: ServidorGoogleMaps) {}

  obtenerMapaConPosicionDeBolsines(puntos: PuntoBolsin[]) {
    return this.servidor.getMapaLocation(puntos);
  }
}
