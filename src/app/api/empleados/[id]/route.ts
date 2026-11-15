import { empleadoEdicionSchema } from "@/dtos/empleado.dto";
import { leerEntrada, leerId, responder } from "../../_catalogos/http";
import { empleadoService } from "../servicio";

type Contexto = RouteContext<"/api/empleados/[id]">;

export function GET(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () =>
    Response.json(await empleadoService.buscarPorId(await leerId(params))),
  );
}

export function PUT(request: Request, { params }: Contexto): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    const datos = await leerEntrada(request, empleadoEdicionSchema);
    return Response.json(await empleadoService.actualizar(id, datos));
  });
}

export function DELETE(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () => {
    await empleadoService.eliminar(await leerId(params));
    return new Response(null, { status: 204 });
  });
}
