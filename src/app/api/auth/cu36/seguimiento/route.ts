import { type NextRequest, NextResponse } from "next/server";
import { BolsinRepositoryPrisma } from "@/infrastructure/BolsinRepositoryPrisma";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import { GestorConsultarUbicacionDeBolsin } from "@/services/GestorConsultarUbicacionDeBolsin";
import {
  leerSesion,
  nombreCookie,
  responderSesion,
  servicio,
} from "../../sesion";

const gestor = new GestorConsultarUbicacionDeBolsin(
  new BolsinRepositoryPrisma(),
);
const headers = { "Cache-Control": "no-store" };

export function GET(request: NextRequest) {
  return responderSesion(async () => {
    const { comisionMedica, rol } = await servicio.consultar(
      leerSesion(request.cookies.get(nombreCookie)?.value),
    );
    if (rol.nombre !== "Encargado de Bolsines") {
      return NextResponse.json(
        { error: "El seguimiento requiere el rol Encargado de Bolsines." },
        { status: 403, headers },
      );
    }

    try {
      const resultado = await gestor.consultar(
        comisionMedica.id,
        comisionMedica.codigo,
      );
      return NextResponse.json(
        { comision: comisionMedica.nombre, ...resultado },
        { headers },
      );
    } catch (error) {
      if (!(error instanceof ErrorGPSTracker)) throw error;
      return NextResponse.json(
        { error: "No se pudieron obtener las ubicaciones GPS." },
        { status: 503, headers },
      );
    }
  });
}
