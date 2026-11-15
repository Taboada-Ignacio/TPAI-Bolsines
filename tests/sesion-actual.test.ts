import { describe, expect, it } from "vitest";
import {
  derivarSiglaCm,
  mapLoginResponseToSesionVista,
  SESION_DEMO,
} from "@/services/auth/sesion-actual";

describe("sesion-actual", () => {
  it("deriva la sigla de 3 letras de la Comisión Médica", () => {
    expect(derivarSiglaCm("Córdoba")).toBe("COR");
    expect(derivarSiglaCm("CM Córdoba")).toBe("COR");
    expect(derivarSiglaCm("CM Rosario")).toBe("ROS");
    expect(derivarSiglaCm("CM Córdoba", "COR")).toBe("COR");
    expect(derivarSiglaCm("CM Buenos Aires", "CM-02")).toBe("BUE");
  });

  it("expone la sesión demo de Marcelo Gómez", () => {
    expect(SESION_DEMO.nombre).toBe("Marcelo");
    expect(SESION_DEMO.apellido).toBe("Gómez");
    expect(SESION_DEMO.iniciales).toBe("MG");
    expect(SESION_DEMO.cm.sigla).toBe("COR");
  });

  it("mapea una LoginResponse a SesionVista", () => {
    const vista = mapLoginResponseToSesionVista({
      sesion: { fechaHoraInicio: "2026-11-15T11:02:00.000Z" },
      empleado: {
        nombre: "Marcelo",
        apellido: "Gómez",
        rol: { nombre: "Encargado de Bolsines" },
        comisionMedica: { codigo: "CM-01", nombre: "CM Córdoba" },
      },
    });

    expect(vista.iniciales).toBe("MG");
    expect(vista.usuario).toBe("mgomez");
    expect(vista.cm.sigla).toBe("COR");
    expect(vista.rol).toBe("Encargado de Bolsines");
  });
});
