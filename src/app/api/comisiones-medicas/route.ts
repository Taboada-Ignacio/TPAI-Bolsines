import {
  comisionMedicaEntradaSchema,
  comisionMedicaRespuesta,
} from "@/dtos/comision-medica.dto";
import { leerEntrada, responder } from "../_catalogos/http";
import { comisionMedicaService } from "../_catalogos/servicios";

export function GET(): Promise<Response> {
  return responder(async () => {
    const registros = await comisionMedicaService.listar();
    return Response.json(registros.map(comisionMedicaRespuesta));
  });
}

export function POST(request: Request): Promise<Response> {
  return responder(async () => {
    const datos = await leerEntrada(request, comisionMedicaEntradaSchema);
    const registro = await comisionMedicaService.crear(datos);
    return Response.json(comisionMedicaRespuesta(registro), { status: 201 });
  });
}
