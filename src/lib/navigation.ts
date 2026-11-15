import { Building2, House, MapPinned, type LucideIcon } from "lucide-react";

export type Destino = {
  id: string;
  href: string;
  nombre: string;
  nombreCorto: string;
  detalle: string;
  icono: LucideIcon;
  cuerpo: "padded" | "bleed";
  enTablero: boolean;
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
];

export const MAX_DESTINOS_PILDORA = 3;

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
      label: destino?.nombreCorto ?? decoded,
    };
  });
}
