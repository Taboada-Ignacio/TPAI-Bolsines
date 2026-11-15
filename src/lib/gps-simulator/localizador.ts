import { obtenerRutas } from "./rutas";

const unaHoraEnMilisegundos = 60 * 60 * 1000;

export async function localizarBolsin(numeroBolsin: number) {
  const rutas = await obtenerRutas();
  const indiceRuta =
    ((numeroBolsin % rutas.length) + rutas.length) % rutas.length;
  const segmentos = rutas[indiceRuta];
  const [inicio, fin] = segmentos[Math.floor(Math.random() * segmentos.length)];
  const proporcion = Math.random();
  const ahora = Date.now();
  const retraso = Math.floor(Math.random() * (unaHoraEnMilisegundos + 1));

  return {
    numeroBolsin,
    latitud: inicio[1] + proporcion * (fin[1] - inicio[1]),
    longitud: inicio[0] + proporcion * (fin[0] - inicio[0]),
    fechaHoraActualizacion: new Date(ahora - retraso).toISOString(),
  };
}
