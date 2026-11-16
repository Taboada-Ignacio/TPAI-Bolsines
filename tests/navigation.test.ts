import { House } from "lucide-react";
import { describe, expect, it } from "vitest";
import {
  DESTINOS,
  ROL_ADMIN,
  esDestinoActivo,
  getBreadcrumbSegments,
  getDestinoActivo,
  getDestinosTablero,
  getDestinosVisibles,
  repartirDestinosPildora,
  type Destino,
} from "@/lib/navigation";

describe("navigation", () => {
  it("detecta coincidencia exacta y subrutas para el destino activo", () => {
    expect(esDestinoActivo("/inicio", { href: "/inicio" })).toBe(true);
    expect(esDestinoActivo("/seguimiento", { href: "/seguimiento" })).toBe(
      true,
    );
    expect(esDestinoActivo("/seguimiento/8420", { href: "/seguimiento" })).toBe(
      true,
    );
    expect(
      esDestinoActivo("/seguimiento-extra", { href: "/seguimiento" }),
    ).toBe(false);
    expect(esDestinoActivo("/otra", { href: "/inicio" })).toBe(false);
  });

  it("resuelve getDestinoActivo sobre DESTINOS", () => {
    expect(getDestinoActivo("/inicio")?.id).toBe("inicio");
    expect(getDestinoActivo("/seguimiento/8420")?.id).toBe("seguimiento");
    expect(getDestinoActivo("/empleados")?.id).toBe("empleados");
    expect(getDestinoActivo("/perfil")?.id).toBe("perfil");
    expect(getDestinoActivo("/inexistente")).toBeUndefined();
  });

  it("filtra destinos visibles según rol (incluye Empleados solo para admin)", () => {
    const admin = getDestinosVisibles(ROL_ADMIN);
    expect(admin.map((d) => d.id)).toEqual([
      "inicio",
      "seguimiento",
      "comisiones-medicas",
      "bolsines",
      "empleados",
      "perfil",
    ]);

    const operador = getDestinosVisibles("Operador");
    expect(operador.map((d) => d.id)).toEqual([
      "inicio",
      "seguimiento",
      "comisiones-medicas",
      "bolsines",
      "perfil",
    ]);
  });

  it("reparte como máximo 3 destinos en la píldora y el resto en Más", () => {
    const base = repartirDestinosPildora(DESTINOS);
    expect(base.principales).toHaveLength(3);
    expect(base.extras.map((d) => d.id)).toEqual([
      "bolsines",
      "empleados",
      "perfil",
    ]);

    const mockCinco: Destino[] = [1, 2, 3, 4, 5].map((n) => ({
      id: `d-${n}`,
      href: `/d-${n}`,
      nombre: `Destino ${n}`,
      nombreCorto: `D${n}`,
      detalle: "",
      icono: House,
      cuerpo: "padded",
      enTablero: true,
    }));

    const repartidos = repartirDestinosPildora(mockCinco);
    expect(repartidos.principales.map((d) => d.id)).toEqual([
      "d-1",
      "d-2",
      "d-3",
    ]);
    expect(repartidos.extras.map((d) => d.id)).toEqual(["d-4", "d-5"]);
  });

  it("filtra destinos visibles en el tablero de Inicio", () => {
    const tablero = getDestinosTablero(DESTINOS);
    expect(tablero.map((d) => d.id)).toEqual([
      "seguimiento",
      "comisiones-medicas",
      "bolsines",
    ]);
    expect(tablero[0]).toMatchObject({
      nombre: "Seguimiento",
      detalle: "Consultar ubicación de bolsines",
      href: "/seguimiento",
    });
  });

  it("construye segmentos de breadcrumb tipo URL desde pathname", () => {
    expect(getBreadcrumbSegments("/inicio")).toEqual([
      { href: "/inicio", label: "Inicio" },
    ]);
    expect(getBreadcrumbSegments("/seguimiento/8420")).toEqual([
      { href: "/seguimiento", label: "Seguimiento" },
      { href: "/seguimiento/8420", label: "8420" },
    ]);
    expect(getBreadcrumbSegments("/seguimiento/mi-bolsin")).toEqual([
      { href: "/seguimiento", label: "Seguimiento" },
      { href: "/seguimiento/mi-bolsin", label: "mi bolsin" },
    ]);
    expect(getBreadcrumbSegments("/perfil")).toEqual([
      { href: "/perfil", label: "Perfil" },
    ]);
    expect(getBreadcrumbSegments("/empleados")).toEqual([
      { href: "/empleados", label: "Empleados" },
    ]);
  });
});
