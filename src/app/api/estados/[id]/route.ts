import { estadoEntradaSchema, estadoRespuesta } from "@/dtos/estado.dto";
import { leerEntrada, leerId, responder } from "../../_catalogos/http";
import { estadoService } from "../../_catalogos/servicios";

type Contexto = RouteContext<"/api/estados/[id]">;

export function GET(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    const registro = await estadoService.buscarPorId(id);
    return Response.json(estadoRespuesta(registro));
  });
}

export function PUT(request: Request, { params }: Contexto): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    const datos = await leerEntrada(request, estadoEntradaSchema);
    const registro = await estadoService.actualizar(id, datos);
    return Response.json(estadoRespuesta(registro));
  });
}

export function DELETE(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    await estadoService.eliminar(id);
    return new Response(null, { status: 204 });
  });
}
