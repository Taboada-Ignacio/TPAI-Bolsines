import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { servicio } from "@/app/api/auth/sesion";
import { empleadoService } from "@/app/api/empleados/servicio";
import {
  SESSION_COOKIE_NAME,
  verifySessionCookie,
} from "@/services/auth/session-cookie";
import { SesionInvalida } from "@/services/SesionService";

export interface SesionVista {
  nombre: string;
  apellido: string;
  iniciales: string;
  usuario: string;
  rol: string;
  horaIngreso: string;
  cm: {
    codigo: string;
    nombre: string;
    sigla: string;
  };
}

export interface SesionPerfil {
  usuario: { nombre: string };
  empleado: { nombre: string; apellido: string };
  rol: { nombre: string };
  comisionMedica: { codigo: string; nombre: string };
  sesion: { fechaHoraInicio: string | Date };
}

export function derivarSiglaCm(nombre: string, codigo?: string): string {
  const cleanCode = (codigo ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase();

  if (cleanCode.length === 3) {
    return cleanCode;
  }

  const normalizedName = nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^\s*CM\s+/i, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase();

  if (normalizedName.length >= 3) {
    return normalizedName.slice(0, 3);
  }

  return (normalizedName || cleanCode || "CM").padEnd(3, "X").slice(0, 3);
}

function derivarIniciales(nombre: string, apellido: string): string {
  const first = nombre.trim().charAt(0);
  const second = apellido.trim().charAt(0);
  return `${first}${second}`.toUpperCase() || "US";
}

function formatearHora(value: string | Date): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "--:--";
  }
  return new Intl.DateTimeFormat("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function mapLoginResponseToSesionVista(
  session: SesionPerfil,
): SesionVista {
  const { usuario, empleado, rol, comisionMedica, sesion } = session;
  return {
    nombre: empleado.nombre,
    apellido: empleado.apellido,
    iniciales: derivarIniciales(empleado.nombre, empleado.apellido),
    usuario: usuario.nombre,
    rol: rol.nombre,
    horaIngreso: formatearHora(sesion.fechaHoraInicio),
    cm: {
      codigo: comisionMedica.codigo,
      nombre: comisionMedica.nombre,
      sigla: derivarSiglaCm(comisionMedica.nombre, comisionMedica.codigo),
    },
  };
}

async function consultarSesionActual() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const sessionId = verifySessionCookie(raw);

  if (sessionId === null) {
    redirect("/login");
  }

  try {
    return await servicio.consultar(sessionId);
  } catch (error) {
    if (error instanceof SesionInvalida) {
      // Limpia la cookie antes de volver a /login para evitar un bucle 307 con proxy.ts.
      redirect("/api/auth/limpiar-sesion");
    }
    throw error;
  }
}

export async function getSesionActual(): Promise<SesionVista> {
  const perfil = await consultarSesionActual();
  return mapLoginResponseToSesionVista(perfil);
}

export interface PerfilActual {
  sesion: SesionVista;
  empleadoId: number;
  email: string;
  rolId: number;
  comisionMedicaId: number;
}

export async function getPerfilActual(): Promise<PerfilActual> {
  const perfil = await consultarSesionActual();
  const empleado = await empleadoService.buscarPorId(perfil.empleado.id);
  return {
    sesion: mapLoginResponseToSesionVista(perfil),
    empleadoId: empleado.id,
    email: empleado.email,
    rolId: empleado.rol.id,
    comisionMedicaId: empleado.comisionMedica.id,
  };
}
