import {
  Building2,
  House,
  MapPinned,
  Package,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

export const ROL_ADMIN = "Parametrizador del sistema";

export type Destino = {
  id: string;
  href: string;
  nombre: string;
  nombreCorto: string;
  detalle: string;
  icono: LucideIcon;
  cuerpo: "padded" | "bleed";
  enTablero: boolean;
  roles?: readonly string[];
};

export const DESTINOS: Destino[] = [
  {
    id: "inicio",
    href: "/inicio",
    nombre: "Inicio",
    nombreCorto: "Inicio",
    detalle: "",
    icono: House,
    cuerpo: "padded",
    enTablero: false,
  },
  {
    id: "seguimiento",
    href: "/seguimiento",
    nombre: "Seguimiento",
    nombreCorto: "Seguimiento",
    detalle: "Dónde está cada bolsín que salió de tu comisión",
    icono: MapPinned,
    cuerpo: "bleed",
    enTablero: true,
  },
  {
    id: "comisiones-medicas",
    href: "/comisiones-medicas",
    nombre: "Comisiones médicas",
    nombreCorto: "Comisiones",
    detalle: "Sedes, códigos y datos de contacto de cada comisión",
    icono: Building2,
    cuerpo: "padded",
    enTablero: true,
  },
  {
    id: "bolsines",
    href: "/bolsines",
    nombre: "Bolsines",
    nombreCorto: "Bolsines",
    detalle: "Listado general, alta, edición e historial de cada bolsín",
    icono: Package,
    cuerpo: "padded",
    enTablero: true,
  },
  {
    id: "empleados",
    href: "/empleados",
    nombre: "Empleados",
    nombreCorto: "Empleados",
    detalle: "Administración de empleados, roles y comisiones médicas",
    icono: Users,
    cuerpo: "padded",
    enTablero: false,
    roles: [ROL_ADMIN],
  },
  {
    id: "perfil",
    href: "/perfil",
    nombre: "Mi perfil",
    nombreCorto: "Perfil",
    detalle: "Datos de usuario, rol y comisión médica asignada",
    icono: User,
    cuerpo: "padded",
    enTablero: false,
  },
];

export const MAX_DESTINOS_PILDORA = 3;

export function getDestinosVisibles(
  rol?: string,
  destinos: readonly Destino[] = DESTINOS,
): Destino[] {
  return destinos.filter(
    (destino) =>
      !destino.roles || (rol !== undefined && destino.roles.includes(rol)),
  );
}

export function esDestinoActivo(
  pathname: string,
  destino: Pick<Destino, "href">,
): boolean {
  return pathname === destino.href || pathname.startsWith(`${destino.href}/`);
}

export function getDestinoActivo(
  pathname: string,
  destinos: readonly Destino[] = DESTINOS,
): Destino | undefined {
  return destinos.find((destino) => esDestinoActivo(pathname, destino));
}

export function repartirDestinosPildora(
  destinos: readonly Destino[] = DESTINOS,
): { principales: Destino[]; extras: Destino[] } {
  return {
    principales: destinos.slice(0, MAX_DESTINOS_PILDORA),
    extras: destinos.slice(MAX_DESTINOS_PILDORA),
  };
}

export function getDestinosTablero(
  destinos: readonly Destino[] = DESTINOS,
): Destino[] {
  return destinos.filter((destino) => destino.enTablero);
}

export type BreadcrumbSegment = {
  href: string;
  label: string;
};

const RUTAS_ETIQUETAS: Record<string, string> = {
  "/perfil": "Perfil",
  "/empleados": "Empleados",
};

export function getBreadcrumbSegments(
  pathname: string,
  destinos: readonly Destino[] = DESTINOS,
): BreadcrumbSegment[] {
  const parts = pathname.split("/").filter(Boolean);

  return parts.map((part, index) => {
    const href = `/${parts.slice(0, index + 1).join("/")}`;
    const destino = destinos.find((d) => d.href === href);
    const decoded = decodeURIComponent(part).replace(/-/g, " ");
    return {
      href,
      label: destino?.nombreCorto ?? RUTAS_ETIQUETAS[href] ?? decoded,
    };
  });
}
