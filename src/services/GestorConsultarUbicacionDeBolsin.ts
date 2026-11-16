import { InterfazGPSTracker } from "@/adapters/InterfazGPSTracker";
import type { PuntoBolsin } from "@/dtos/seguimiento-bolsines.dto";
import type { BolsinRepositoryPrisma } from "@/infrastructure/BolsinRepositoryPrisma";

// Sedes XTR de los fixtures del seed, por identidad local del bolsín.
const origenesOficiales = new Map([
  ["CM-CBA:101", "CM-CBA-01"],
  ["CM-SF:102", "CM-ROS-02"],
  ["CM-MZA:103", "CM-MDZ-03"],
  ["CM-BA:104", "CM-BA-01"],
  ["CM-TUC:105", "CM-TUC-01"],
  ["CM-SAL:106", "CM-SLA-01"],
  ["CM-NEU:107", "CM-NQN-01"],
  ["CM-BA:108", "CM-MDQ-01"],
  ["CM-BA:109", "CM-LPL-01"],
  ["CM-CBA:110", "CM-CBA-02"],
]);

export class GestorConsultarUbicacionDeBolsin {
  constructor(
    private readonly bolsines: Pick<BolsinRepositoryPrisma, "listarEnviados">,
    private readonly crearTracker: () => Pick<
      InterfazGPSTracker,
      "obtenerLocalizacionDeBolsines"
    > = () => new InterfazGPSTracker(),
  ) {}

  async consultar(idComision: number, codigoComision: string) {
    const enviados = await this.bolsines.listarEnviados(idComision);
    const consultables = enviados.flatMap((bolsin) => {
      const origen = origenesOficiales.get(
        `${codigoComision}:${bolsin.numeroBolsin}`,
      );
      return origen ? [{ bolsin, origen }] : [];
    });
    const puntos: PuntoBolsin[] = [];
    if (consultables.length) {
      const filas = await this.crearTracker().obtenerLocalizacionDeBolsines(
        "XTR-4500L",
        consultables.map(({ bolsin }) => bolsin.numeroBolsin),
        consultables.map(({ origen }) => origen),
        [],
      );
      const registros = new Map(
        consultables.map(({ bolsin }) => [String(bolsin.numeroBolsin), bolsin]),
      );
      for (const [numero, latitud, longitud, actualizado] of filas) {
        const bolsin = registros.get(numero);
        if (!bolsin) continue;
        puntos.push({
          id: bolsin.id,
          numero: bolsin.numeroBolsin,
          precinto: bolsin.numeroPrecinto,
          destino: bolsin.cmDestino.nombre,
          latitud: Number(latitud),
          longitud: Number(longitud),
          actualizado,
        });
      }
    }
    return { puntos, sinUbicacion: enviados.length - puntos.length };
  }
}
