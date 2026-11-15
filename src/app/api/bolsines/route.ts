import { AmbitoBolsinInvalido } from "@/domain/RepositorioBolsin";
import { bolsinAltaSchema } from "@/dtos/bolsin.dto";
import { leerEntrada, responder } from "../_catalogos/http";
import { bolsinService } from "./servicio";

export function GET(): Promise<Response> {
  return responder(async () => Response.json(await bolsinService.listar()));
}

export function POST(request: Request): Promise<Response> {
  return responder(async () => {
    const datos = await leerEntrada(request, bolsinAltaSchema);
    try {
      return Response.json(await bolsinService.crear(datos), { status: 201 });
    } catch (error) {
      if (error instanceof AmbitoBolsinInvalido) {
        return Response.json({ error: error.message }, { status: 400 });
      }
      throw error;
    }
  });
}
