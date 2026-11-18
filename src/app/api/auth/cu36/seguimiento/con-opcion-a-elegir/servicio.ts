import type { NextRequest } from "next/server";
import { InterfazGoogleMaps } from "@/externalInterfaces/maps/InterfazGoogleMaps";
import { BolsinRepositoryPrisma } from "@/persistence/BolsinRepositoryPrisma";
import { EmpleadoRepositoryPrisma } from "@/persistence/EmpleadoRepositoryPrisma";
import { ServidorGoogleMaps } from "@/integrations/maps/ServidorGoogleMaps";
import { ServicioCorreoSMTP } from "@/integrations/mail/ServicioCorreoSMTP";
import { GestorConsultarUbicacionesDeBolsinConSeleccion } from "@/services/GestorConsultarUbicacionesDeBolsinConSeleccion";
import { GestorNotificarUbicacionBolsin } from "@/services/GestorNotificarUbicacionBolsin";
import {
  leerSesion,
  nombreCookie,
  responderSesion,
  servicio,
} from "../../../sesion";
import { PantallaConsultarUbicacionDeBolsinesConSeleccion } from "./PantallaConsultarUbicacionDeBolsinesConSeleccion";

const bolsines = new BolsinRepositoryPrisma();
const mapas = new InterfazGoogleMaps(new ServidorGoogleMaps(bolsines));

export const crearPantalla = () =>
  new PantallaConsultarUbicacionDeBolsinesConSeleccion(
    new GestorConsultarUbicacionesDeBolsinConSeleccion(
      servicio,
      bolsines,
      new EmpleadoRepositoryPrisma(),
      mapas,
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
