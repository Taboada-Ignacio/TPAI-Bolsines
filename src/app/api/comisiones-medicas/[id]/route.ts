import {
  comisionMedicaEntradaSchema,
  comisionMedicaRespuesta,
} from "@/dtos/comision-medica.dto";
import { leerEntrada, leerId, responder } from "../../_catalogos/http";
import { comisionMedicaService } from "../../_catalogos/servicios";

type Contexto = RouteContext<"/api/comisiones-medicas/[id]">;

export function GET(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    const registro = await comisionMedicaService.buscarPorId(id);
    return Response.json(comisionMedicaRespuesta(registro));
  });
}

export function PUT(request: Request, { params }: Contexto): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    const datos = await leerEntrada(request, comisionMedicaEntradaSchema);
    const registro = await comisionMedicaService.actualizar(id, datos);
    return Response.json(comisionMedicaRespuesta(registro));
  });
}

export function DELETE(
  _request: Request,
  { params }: Contexto,
): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    await comisionMedicaService.eliminar(id);
    return new Response(null, { status: 204 });
  });
}
