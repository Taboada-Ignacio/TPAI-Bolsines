import { bolsinService } from "../../servicio";
import { leerResponsableOpcional, responderTransicion } from "../transicion";

type Contexto = RouteContext<"/api/bolsines/[id]/reabrir">;

export function POST(request: Request, { params }: Contexto): Promise<Response> {
  return responderTransicion(params, async (id) => {
    const responsableCEId = await leerResponsableOpcional(request);
    return bolsinService.reabrir(id, responsableCEId);
  });
}
