import { parametrosXtr } from "@/dtos/gps-simulator.dto";
import { responderGps } from "../../http";

export function GET(request: Request): Promise<Response> {
  return responderGps(request, parametrosXtr, (ubicacion) =>
    Response.json(ubicacion),
  );
}
