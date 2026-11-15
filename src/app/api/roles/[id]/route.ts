import { rolEntradaSchema, rolRespuesta } from "@/dtos/rol.dto";
import { leerEntrada, leerId, responder } from "../../_catalogos/http";
import { rolService } from "../../_catalogos/servicios";

type Contexto = RouteContext<"/api/roles/[id]">;

export function GET(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    const registro = await rolService.buscarPorId(id);
    return Response.json(rolRespuesta(registro));
  });
}

export function PUT(request: Request, { params }: Contexto): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    const datos = await leerEntrada(request, rolEntradaSchema);
    const registro = await rolService.actualizar(id, datos);
    return Response.json(rolRespuesta(registro));
  });
}

export function DELETE(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    await rolService.eliminar(id);
    return new Response(null, { status: 204 });
  });
}
