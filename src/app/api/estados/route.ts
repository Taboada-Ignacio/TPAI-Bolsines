import { estadoEntradaSchema, estadoRespuesta } from "@/dtos/estado.dto";
import { leerEntrada, responder } from "../_catalogos/http";
import { estadoService } from "../_catalogos/servicios";

export function GET(): Promise<Response> {
  return responder(async () => {
    const registros = await estadoService.listar();
    return Response.json(registros.map(estadoRespuesta));
  });
}

export function POST(request: Request): Promise<Response> {
  return responder(async () => {
    const datos = await leerEntrada(request, estadoEntradaSchema);
    const registro = await estadoService.crear(datos);
    return Response.json(estadoRespuesta(registro), { status: 201 });
  });
}
