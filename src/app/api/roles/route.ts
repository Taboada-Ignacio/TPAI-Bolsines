import { rolEntradaSchema, rolRespuesta } from "@/dtos/rol.dto";
import { leerEntrada, responder } from "../_catalogos/http";
import { rolService } from "../_catalogos/servicios";

export function GET(): Promise<Response> {
  return responder(async () => {
    const registros = await rolService.listar();
    return Response.json(registros.map(rolRespuesta));
  });
}

export function POST(request: Request): Promise<Response> {
  return responder(async () => {
    const datos = await leerEntrada(request, rolEntradaSchema);
    const registro = await rolService.crear(datos);
    return Response.json(rolRespuesta(registro), { status: 201 });
  });
}
