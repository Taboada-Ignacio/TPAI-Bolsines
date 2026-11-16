import type { NextRequest } from "next/server";
import { InterfazGoogleMaps } from "@/adapters/InterfazGoogleMaps";
import { BolsinRepositoryPrisma } from "@/infrastructure/BolsinRepositoryPrisma";
import { EmpleadoRepositoryPrisma } from "@/infrastructure/EmpleadoRepositoryPrisma";
import { ServidorGoogleMaps } from "@/infrastructure/ServidorGoogleMaps";
import { ServicioCorreoSMTP } from "@/infrastructure/ServicioCorreoSMTP";
import { GestorConsultarUbicacionDeBolsin } from "@/services/GestorConsultarUbicacionDeBolsin";
import { GestorNotificarUbicacionBolsin } from "@/services/GestorNotificarUbicacionBolsin";
import {
  leerSesion,
  nombreCookie,
  responderSesion,
  servicio,
} from "../../sesion";
import { PantallaConsultarUbicacionDeBolsines } from "./PantallaConsultarUbicacionDeBolsines";

export const pantalla = new PantallaConsultarUbicacionDeBolsines(
  new GestorConsultarUbicacionDeBolsin(
    servicio,
    new BolsinRepositoryPrisma(),
    new EmpleadoRepositoryPrisma(),
    new InterfazGoogleMaps(new ServidorGoogleMaps()),
    new GestorNotificarUbicacionBolsin(new ServicioCorreoSMTP()),
  ),
);

export function atenderSeguimiento(
  request: NextRequest,
  atender: (idSesion: number) => Promise<Response>,
) {
  return responderSesion(async () =>
    atender(leerSesion(request.cookies.get(nombreCookie)?.value)),
  );
}
