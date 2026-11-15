import { cookies } from "next/headers";
import type { LoginResponse } from "@/dtos/auth.dto";
import {
  parseSessionCookie,
  SESSION_COOKIE_NAME,
} from "@/services/auth/session-cookie";

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

export const SESION_DEMO: SesionVista = {
  nombre: "Marcelo",
  apellido: "Gómez",
  iniciales: "MG",
  usuario: "mgomez",
  rol: "Encargado de Bolsines",
  horaIngreso: "08:02",
  cm: {
    codigo: "CM-01",
    nombre: "CM Córdoba",
    sigla: "COR",
  },
};

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

function derivarUsuario(nombre: string, apellido: string): string {
  const first = nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .charAt(0)
    .toLowerCase();
  const last = apellido
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  return `${first}${last}` || "usuario";
}

function formatearHora(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return "08:02";
  }
  return new Intl.DateTimeFormat("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function mapLoginResponseToSesionVista(
  session: LoginResponse,
): SesionVista {
  const { empleado, sesion } = session;
  return {
    nombre: empleado.nombre,
    apellido: empleado.apellido,
    iniciales: derivarIniciales(empleado.nombre, empleado.apellido),
    usuario: derivarUsuario(empleado.nombre, empleado.apellido),
    rol: empleado.rol.nombre,
    horaIngreso: formatearHora(sesion.fechaHoraInicio),
    cm: {
      codigo: empleado.comisionMedica.codigo,
      nombre: empleado.comisionMedica.nombre,
      sigla: derivarSiglaCm(
        empleado.comisionMedica.nombre,
        empleado.comisionMedica.codigo,
      ),
    },
  };
}

export async function getSesionActual(): Promise<SesionVista> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const parsed = parseSessionCookie(raw);

  if (!parsed) {
    return SESION_DEMO;
  }

  return mapLoginResponseToSesionVista(parsed);
}
