import { describe, expect, it } from "vitest";
import {
  derivarSiglaCm,
  mapLoginResponseToSesionVista,
} from "@/services/auth/sesion-actual";

describe("sesion-actual", () => {
  it("deriva la sigla de 3 letras de la Comisión Médica", () => {
    expect(derivarSiglaCm("Córdoba")).toBe("COR");
    expect(derivarSiglaCm("CM Córdoba")).toBe("COR");
    expect(derivarSiglaCm("CM Rosario")).toBe("ROS");
    expect(derivarSiglaCm("CM Córdoba", "COR")).toBe("COR");
    expect(derivarSiglaCm("CM Buenos Aires", "CM-02")).toBe("BUE");
  });

  it("mapea una respuesta de sesión del backend a SesionVista", () => {
    const vista = mapLoginResponseToSesionVista({
      usuario: { nombre: "mgomez" },
      empleado: { nombre: "Marcelo", apellido: "Gómez" },
      rol: { nombre: "Encargado de Bolsines" },
      comisionMedica: { codigo: "CM-01", nombre: "CM Córdoba" },
      sesion: { fechaHoraInicio: "2026-11-15T11:02:00.000Z" },
    });

    expect(vista.iniciales).toBe("MG");
    expect(vista.usuario).toBe("mgomez");
    expect(vista.cm.sigla).toBe("COR");
    expect(vista.rol).toBe("Encargado de Bolsines");
  });
});
