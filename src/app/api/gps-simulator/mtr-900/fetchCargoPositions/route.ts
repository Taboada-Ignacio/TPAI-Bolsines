import { parametrosMtr } from "@/dtos/gps-simulator.dto";
import { camposGps, responderGps } from "../../http";

export function GET(request: Request): Promise<Response> {
  return responderGps(request, parametrosMtr, (ubicacion) =>
    Response.json([camposGps(ubicacion)]),
  );
}
