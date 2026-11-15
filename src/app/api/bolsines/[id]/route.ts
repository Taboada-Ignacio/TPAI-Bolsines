import { bolsinEdicionSchema } from "@/dtos/bolsin.dto";
import { leerEntrada, leerId, responder } from "../../_catalogos/http";
import { bolsinService } from "../servicio";

type Contexto = RouteContext<"/api/bolsines/[id]">;

export function GET(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () =>
    Response.json(await bolsinService.buscarPorId(await leerId(params))),
  );
}

export function PUT(request: Request, { params }: Contexto): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    const datos = await leerEntrada(request, bolsinEdicionSchema);
    return Response.json(await bolsinService.actualizar(id, datos));
  });
}

export function DELETE(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () => {
    await bolsinService.eliminar(await leerId(params));
    return new Response(null, { status: 204 });
  });
}
