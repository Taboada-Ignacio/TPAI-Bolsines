import { describe, expect, it } from "vitest";
import type { BolsinSeguimiento } from "@/dtos/seguimiento-bolsin.dto";
import { agruparEnUnidadesTransporte } from "@/lib/seguimiento/agrupador-unidades";

const CM_ORIGEN = {
  codigo: "CM-01",
  nombre: "CM-01 Córdoba",
  direccion: "Av. Vélez Sarsfield 2311, Córdoba",
};

const BOLSINES_MULTI: BolsinSeguimiento[] = [
  {
    nroBolsin: 104,
    numeroPrecinto: "P-9021",
    cmOrigen: CM_ORIGEN,
    cmDestino: {
      codigo: "CM-02",
      nombre: "CM-02 Rosario",
      emailGcm: "gcm.rosario@art-bolsines.gob.ar",
    },
    ubicacion: {
      latitud: -32.9468,
      longitud: -60.6393,
      fechaHoraActualizacion: "2026-11-15T14:22:00.000Z",
      estadoCobertura: "vivo",
    },
    remitos: [],
  },
  {
    nroBolsin: 108,
    numeroPrecinto: "P-9034",
    cmOrigen: CM_ORIGEN,
    cmDestino: {
      codigo: "CM-03",
      nombre: "CM-03 Buenos Aires",
      emailGcm: "gcm.caba@art-bolsines.gob.ar",
    },
    ubicacion: {
      latitud: -34.6037,
      longitud: -58.3816,
      fechaHoraActualizacion: "2026-11-15T14:19:00.000Z",
      estadoCobertura: "vivo",
    },
    remitos: [],
  },
  {
    nroBolsin: 112,
    numeroPrecinto: "P-9047",
    cmOrigen: CM_ORIGEN,
    cmDestino: {
      codigo: "CM-04",
      nombre: "CM-04 Mendoza",
      emailGcm: "gcm.mendoza@art-bolsines.gob.ar",
    },
    ubicacion: {
      latitud: -32.8895,
      longitud: -68.8458,
      fechaHoraActualizacion: "2026-11-15T11:04:00.000Z",
      estadoCobertura: "sin_cobertura",
    },
    remitos: [],
  },
  {
    nroBolsin: 119,
    numeroPrecinto: "P-9052",
    cmOrigen: CM_ORIGEN,
    cmDestino: {
      codigo: "CM-05",
      nombre: "CM-05 Tucumán",
      emailGcm: "gcm.tucuman@art-bolsines.gob.ar",
    },
    ubicacion: {
      latitud: -26.8083,
      longitud: -65.2176,
      fechaHoraActualizacion: "2026-11-15T14:24:00.000Z",
      estadoCobertura: "vivo",
    },
    remitos: [],
  },
];

describe("agruparEnUnidadesTransporte", () => {
  it("devuelve arreglo vacío cuando no hay bolsines", () => {
    expect(agruparEnUnidadesTransporte([])).toEqual([]);
  });

  it("agrupa un único bolsín en una UnidadTransporte", () => {
    const unidades = agruparEnUnidadesTransporte([BOLSINES_MULTI[0]!]);
    expect(unidades).toHaveLength(1);
    expect(unidades[0]).toMatchObject({
      id: "RN9-ida",
      ruta: "RN9",
      sentido: "ida",
      tieneA3: false,
      estado: "vivo",
      coincidenciasFiltro: 1,
    });
    expect(unidades[0]?.coordenadas).toEqual([-60.6393, -32.9468]);
  });

  it("agrupa N bolsines por corredor y sentido, calcula centroide y marca A3", () => {
    const unidades = agruparEnUnidadesTransporte(BOLSINES_MULTI);
    expect(unidades).toHaveLength(3);

    const rn9Ida = unidades.find((u) => u.id === "RN9-ida");
    expect(rn9Ida?.bolsines.map((b) => b.nroBolsin)).toEqual([104, 108]);
    expect(rn9Ida?.tieneA3).toBe(false);
    expect(rn9Ida?.estado).toBe("vivo");
    expect(rn9Ida?.coordenadas[0]).toBeCloseTo((-60.6393 + -58.3816) / 2, 4);
    expect(rn9Ida?.coordenadas[1]).toBeCloseTo((-32.9468 + -34.6037) / 2, 4);

    const rn7Ida = unidades.find((u) => u.id === "RN7-ida");
    expect(rn7Ida?.bolsines.map((b) => b.nroBolsin)).toEqual([112]);
    expect(rn7Ida?.tieneA3).toBe(true);
    expect(rn7Ida?.estado).toBe("alerta_a3");

    const rn9Vuelta = unidades.find((u) => u.id === "RN9-vuelta");
    expect(rn9Vuelta?.bolsines.map((b) => b.nroBolsin)).toEqual([119]);
    expect(rn9Vuelta?.tieneA3).toBe(false);
  });

  it("calcula coincidenciasFiltro para atenuar camiones sin coincidencias", () => {
    const unidades = agruparEnUnidadesTransporte(BOLSINES_MULTI, {
      bolsinesFiltrados: [BOLSINES_MULTI[2]!], // Solo #112 en RN7-ida
    });

    const rn7Ida = unidades.find((u) => u.id === "RN7-ida");
    const rn9Ida = unidades.find((u) => u.id === "RN9-ida");
    const rn9Vuelta = unidades.find((u) => u.id === "RN9-vuelta");

    expect(rn7Ida?.coincidenciasFiltro).toBe(1);
    expect(rn9Ida?.coincidenciasFiltro).toBe(0);
    expect(rn9Vuelta?.coincidenciasFiltro).toBe(0);
  });

  it("maneja bolsines con ubicacion null marcando tieneA3 en true", () => {
    const sinUbicacion: BolsinSeguimiento = {
      ...BOLSINES_MULTI[0]!,
      nroBolsin: 999,
      ubicacion: null,
    };

    const unidades = agruparEnUnidadesTransporte([sinUbicacion]);
    expect(unidades).toHaveLength(1);
    expect(unidades[0]?.tieneA3).toBe(true);
    expect(unidades[0]?.estado).toBe("alerta_a3");
  });
});
