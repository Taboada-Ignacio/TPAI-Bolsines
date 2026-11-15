import { parametrosQx } from "@/dtos/gps-simulator.dto";
import { camposGps, responderGps } from "../../http";

export function GET(request: Request): Promise<Response> {
  return responderGps(
    request,
    parametrosQx,
    (ubicacion) =>
      new Response(camposGps(ubicacion).join(","), {
        headers: { "Content-Type": "text/csv; charset=utf-8" },
      }),
  );
}
