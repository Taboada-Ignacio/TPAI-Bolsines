import type { NextRequest } from "next/server";
import { ServicioCorreoSMTP } from "@/infrastructure/ServicioCorreoSMTP";
import { GestorNotificarUbicacionBolsin } from "@/services/GestorNotificarUbicacionBolsin";
import {
  leerSesion,
  nombreCookie,
  responderSesion,
  servicio,
} from "../../sesion";
import { PantNotificarUbicacionBolsin } from "./PantNotificarUbicacionBolsin";

const pantalla = new PantNotificarUbicacionBolsin(
  new GestorNotificarUbicacionBolsin(new ServicioCorreoSMTP()),
);

export function POST(request: NextRequest) {
  return responderSesion(async () => {
    await servicio.consultar(
      leerSesion(request.cookies.get(nombreCookie)?.value),
    );
    return pantalla.atender(request);
  });
}
