import { cerrarBolsinSchema } from "@/dtos/bolsin.dto";
import { leerEntrada } from "../../../_catalogos/http";
import { bolsinService } from "../../servicio";
import { responderTransicion } from "../transicion";

type Contexto = RouteContext<"/api/bolsines/[id]/cerrar">;

export function POST(request: Request, { params }: Contexto): Promise<Response> {
  return responderTransicion(params, async (id) => {
    const datos = await leerEntrada(request, cerrarBolsinSchema);
    return bolsinService.cerrar(id, datos.numeroPrecinto, datos.responsableCEId);
  });
}
