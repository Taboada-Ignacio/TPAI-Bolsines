import { z } from "zod";
import { filaGps } from "@/dtos/localizacion-gps.dto";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";

export function validarCodigosCM(codigos: string[], cantidad: number): void {
  if (codigos.length !== cantidad || codigos.some((codigo) => !codigo.trim())) {
    throw new ErrorGPSTracker("CONFIGURACION");
  }
}

const fechaLocalOficial = z.iso.datetime({ local: true });
const zonaArgentina = "-03:00";

export function validarFilaGps(fila: string[], nroBolsin: number): string[] {
  const fecha = fila[3];
  const fechaLocal =
    fecha && !fecha.endsWith("Z") && fechaLocalOficial.safeParse(fecha).success;
  const filaNormalizada = [...fila];
  if (fechaLocal) {
    filaNormalizada[3] = new Date(fecha + zonaArgentina).toISOString();
  }
  const validacion = filaGps.safeParse(filaNormalizada);
  if (!validacion.success || validacion.data[0] !== nroBolsin) {
    throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
  }
  return filaNormalizada;
}
