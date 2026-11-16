import type { PuntoBolsin } from "@/dtos/seguimiento-bolsines.dto";

export function filtrarPuntos(
  puntos: PuntoBolsin[],
  precinto: string,
  destino: string,
) {
  const numero = precinto.trim();
  return puntos.filter(
    (punto) =>
      (!numero ||
        (punto.precinto !== null && String(punto.precinto) === numero)) &&
      (!destino || punto.codigoDestino === destino),
  );
}
