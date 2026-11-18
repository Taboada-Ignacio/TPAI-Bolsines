import type { NextRequest } from "next/server";
import { InterfazGoogleMaps } from "@/externalInterfaces/maps/InterfazGoogleMaps";
import { BolsinRepositoryPrisma } from "@/persistence/BolsinRepositoryPrisma";
import { EmpleadoRepositoryPrisma } from "@/persistence/EmpleadoRepositoryPrisma";
import { ServidorGoogleMaps } from "@/integrations/maps/ServidorGoogleMaps";
import { ServicioCorreoSMTP } from "@/integrations/mail/ServicioCorreoSMTP";
import { GestorConsultarUbicacionDeBolsin } from "@/services/GestorConsultarUbicacionDeBolsin";
import { GestorNotificarUbicacionBolsin } from "@/services/GestorNotificarUbicacionBolsin";
import {
  leerSesion,
  nombreCookie,
  responderSesion,
  servicio,
} from "../../sesion";
import { PantallaConsultarUbicacionDeBolsines } from "./PantallaConsultarUbicacionDeBolsines";

const bolsines = new BolsinRepositoryPrisma();
const mapas = new InterfazGoogleMaps(new ServidorGoogleMaps(bolsines));

export const pantalla = new PantallaConsultarUbicacionDeBolsines(
  new GestorConsultarUbicacionDeBolsin(
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
