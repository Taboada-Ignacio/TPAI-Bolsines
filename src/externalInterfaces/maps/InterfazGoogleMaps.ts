import type { UbicacionGpsBolsin } from "@/dtos/seguimiento-bolsines.dto";
import type { ServidorGoogleMaps } from "@/integrations/maps/ServidorGoogleMaps";

export class InterfazGoogleMaps {
  constructor(private readonly servidor: ServidorGoogleMaps) {}

  obtenerMapaConPosicionDeBolsines(puntos: UbicacionGpsBolsin[]) {
    return this.servidor.getMapaLocation(puntos);
  }
}
