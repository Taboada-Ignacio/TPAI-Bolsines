import { filaGps } from "@/dtos/localizacion-gps.dto";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";

export function validarCodigosCM(codigos: string[], cantidad: number): void {
  if (codigos.length !== cantidad || codigos.some((codigo) => !codigo.trim())) {
    throw new ErrorGPSTracker("CONFIGURACION");
  }
}

export function validarFilaGps(fila: string[], nroBolsin: number): string[] {
  const validacion = filaGps.safeParse(fila);
  if (!validacion.success || validacion.data[0] !== nroBolsin) {
    throw new ErrorGPSTracker("RESPUESTA_INVALIDA");
  }
  return [...fila];
}
