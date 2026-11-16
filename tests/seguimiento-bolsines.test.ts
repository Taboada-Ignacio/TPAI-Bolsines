import { describe, expect, it, vi } from "vitest";
import { GestorConsultarUbicacionDeBolsin } from "@/services/GestorConsultarUbicacionDeBolsin";

describe("Consulta de ubicaciones del CU 36", () => {
  it("envía juntas las sedes oficiales de la misma CM y conserva todos los puntos devueltos", async () => {
    const destino = { nombre: "Comisión Médica Santa Fe" };
    const listarEnviados = vi.fn().mockResolvedValue([
      { id: 1, numeroBolsin: 101, numeroPrecinto: 201, cmDestino: destino },
      { id: 2, numeroBolsin: 110, numeroPrecinto: 210, cmDestino: destino },
      { id: 3, numeroBolsin: 36011, numeroPrecinto: 211, cmDestino: destino },
    ]);
    const actualizado = "2026-03-07T15:30:00.000Z";
    const obtenerLocalizacionDeBolsines = vi.fn().mockResolvedValue([
      ["110", "-31.4167", "-64.1833", actualizado],
      ["101", "-31.4201", "-64.1888", actualizado],
    ]);
    const gestor = new GestorConsultarUbicacionDeBolsin(
      { listarEnviados },
      () => ({ obtenerLocalizacionDeBolsines }),
    );

    const resultado = await gestor.consultar(5, "CM-CBA");
    expect(listarEnviados).toHaveBeenCalledWith(5);
    expect(obtenerLocalizacionDeBolsines).toHaveBeenCalledExactlyOnceWith(
      "XTR-4500L",
      [101, 110],
      ["CM-CBA-01", "CM-CBA-02"],
      [],
    );
    expect(resultado).toEqual({
      sinUbicacion: 1,
      puntos: [
        {
          id: 2,
          numero: 110,
          precinto: 210,
          destino: destino.nombre,
          latitud: -31.4167,
          longitud: -64.1833,
          actualizado,
        },
        {
          id: 1,
          numero: 101,
          precinto: 201,
          destino: destino.nombre,
          latitud: -31.4201,
          longitud: -64.1888,
          actualizado,
        },
      ],
    });
  });

  it("omite el GPS cuando la CM no tiene bolsines consultables", async () => {
    const listarEnviados = vi.fn().mockResolvedValue([]);
    const crearTracker = vi.fn();
    const gestor = new GestorConsultarUbicacionDeBolsin(
      { listarEnviados },
      crearTracker,
    );
    await expect(gestor.consultar(5, "CM-CBA")).resolves.toEqual({
      puntos: [],
      sinUbicacion: 0,
    });
    expect(crearTracker).not.toHaveBeenCalled();
  });
});
