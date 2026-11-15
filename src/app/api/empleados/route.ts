import { empleadoAltaSchema } from "@/dtos/empleado.dto";
import { leerEntrada, responder } from "../_catalogos/http";
import { empleadoService } from "./servicio";

export function GET(): Promise<Response> {
  return responder(async () => Response.json(await empleadoService.listar()));
}

export function POST(request: Request): Promise<Response> {
  return responder(async () => {
    const datos = await leerEntrada(request, empleadoAltaSchema);
    return Response.json(await empleadoService.crear(datos), { status: 201 });
  });
}
