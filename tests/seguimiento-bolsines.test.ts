import { describe, expect, it, vi } from "vitest";
import { InterfazGoogleMaps } from "@/adapters/InterfazGoogleMaps";
import { PantallaConsultarUbicacionDeBolsines } from "@/app/api/auth/cu36/seguimiento/PantallaConsultarUbicacionDeBolsines";
import { Bolsin } from "@/domain/Bolsin";
import { CambioEstadoBolsin } from "@/domain/CambioEstadoBolsin";
import { ComisionMedica } from "@/domain/ComisionMedica";
import { Empleado } from "@/domain/Empleado";
import { Estado } from "@/domain/Estado";
import { Rol } from "@/domain/Rol";
import { Sesion } from "@/domain/Sesion";
import { Usuario } from "@/domain/Usuario";
import { ServidorGoogleMaps } from "@/infrastructure/ServidorGoogleMaps";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import { GestorConsultarUbicacionDeBolsin } from "@/services/GestorConsultarUbicacionDeBolsin";
import { GestorNotificarUbicacionBolsin } from "@/services/GestorNotificarUbicacionBolsin";
import { ErrorEnvioCorreo } from "@/services/ServicioCorreo";
import { SesionInvalida } from "@/services/SesionService";

const fecha = new Date("2026-03-07T15:30:00.000Z");
const cordoba = new ComisionMedica(
  "CM-CBA",
  "Av. Central 1",
  "cm@example.test",
  "Córdoba",
  "",
);
const santaFe = new ComisionMedica(
  "CM-SF",
  "Av. Central 2",
  "cm-sf@example.test",
  "Santa Fe",
  "",
);
const usuario = new Usuario("usuario", "");
const encargado = new Empleado(
  "Ana",
  "Pérez",
  "operador@example.test",
  usuario,
  new Rol("Encargado de Bolsines", ""),
  cordoba,
);
const gerente = new Empleado(
  "Juan",
  "Pérez",
  "gcm@example.test",
  usuario,
  new Rol("Gerente de Comisión Médica", ""),
  santaFe,
);

function registro(
  id: number,
  numero: number,
  origen = cordoba,
  estado = "Enviado",
) {
  return {
    id,
    bolsin: new Bolsin(fecha, numero, 200 + id, 600, origen, santaFe, [
      new CambioEstadoBolsin(
        fecha,
        null,
        new Estado(estado, "", "BOLSIN"),
        encargado,
      ),
    ]),
  };
}

function contexto() {
  const primero = registro(1, 101);
  const segundo = registro(2, 110);
  const sesiones = {
    buscarEmpleadoLogueado: vi.fn().mockResolvedValue({
      id: 1,
      usuarioId: 1,
      rolId: 1,
      comisionMedicaId: 5,
      sesion: new Sesion(fecha, null, usuario),
      empleado: encargado,
    }),
  };
  const bolsines = {
    listarEnviados: vi
      .fn()
      .mockResolvedValue([
        primero,
        segundo,
        registro(3, 36011),
        registro(4, 102, santaFe),
        registro(5, 105, cordoba, "Cerrado"),
      ]),
    buscarParaSeguimiento: vi.fn().mockResolvedValue(primero),
  };
  const empleados = {
    listarDeComision: vi.fn().mockResolvedValue([encargado, gerente]),
  };
  const servidor = new ServidorGoogleMaps();
  const mapa = vi.spyOn(servidor, "getMapaLocation");
  const gps = vi
    .fn()
    .mockImplementation(async (_modelo, numeros: number[]) =>
      [...numeros]
        .reverse()
        .map((numero) => [
          String(numero),
          "-31.42",
          "-64.18",
          fecha.toISOString(),
        ]),
    );
  const crearTracker = vi.fn(() => ({ obtenerLocalizacionDeBolsines: gps }));
  const correo = vi.fn().mockResolvedValue(undefined);
  const gestor = new GestorConsultarUbicacionDeBolsin(
    sesiones,
    bolsines,
    empleados,
    new InterfazGoogleMaps(servidor),
    new GestorNotificarUbicacionBolsin({ enviarCorreo: correo }),
    crearTracker,
  );
  return {
    pantalla: new PantallaConsultarUbicacionDeBolsines(gestor),
    sesiones,
    bolsines,
    empleados,
    gps,
    mapa,
    crearTracker,
    correo,
  };
}

function peticion(datos: object = { bolsinId: 1 }) {
  return new Request("http://localhost/seguimiento", {
    method: "POST",
    body: JSON.stringify(datos),
  });
}

describe("CU 36", () => {
  it("envía juntas las sedes oficiales y conserva todas las posiciones autorizadas", async () => {
    const { pantalla, sesiones, bolsines, gps, mapa, correo } = contexto();
    const respuesta = await pantalla.habilitarPantalla(7);
    const datos = await respuesta.json();
    expect(respuesta.status).toBe(200);
    expect(sesiones.buscarEmpleadoLogueado).toHaveBeenCalledWith(7);
    expect(bolsines.listarEnviados).toHaveBeenCalledWith(5);
    expect(gps).toHaveBeenCalledExactlyOnceWith(
      "XTR-4500L",
      [101, 110, 36011],
      ["CM-CBA-01", "CM-CBA-02", "CM-CBA-01"],
      [],
    );
    expect(datos.comision).toBe("Córdoba - Av. Central 1");
    expect(datos.sinUbicacion).toBe(0);
    expect(datos.mapa.estilo).toContain("tiles.openfreemap.org");
    expect(
      datos.mapa.puntos.map(({ numero }: { numero: number }) => numero),
    ).toEqual([36011, 110, 101]);
    expect(mapa).toHaveBeenCalledExactlyOnceWith(datos.mapa.puntos);
    expect(correo).not.toHaveBeenCalled();
  });

  it("reenvía modeloGps QX-7A con codigosCMDestino al tracker", async () => {
    const { pantalla, gps } = contexto();
    const respuesta = await pantalla.habilitarPantalla(7, "QX-7A");
    expect(respuesta.status).toBe(200);
    expect(gps).toHaveBeenCalledExactlyOnceWith(
      "QX-7A",
      [101, 110, 36011],
      [],
      ["CM-ROS-02", "CM-ROS-02", "CM-ROS-02"],
    );
  });

  it("omite el GPS cuando la CM no tiene bolsines consultables", async () => {
    const { pantalla, bolsines, crearTracker } = contexto();
    bolsines.listarEnviados.mockResolvedValue([]);
    const respuesta = await pantalla.habilitarPantalla(7);
    expect(await respuesta.json()).toMatchObject({
      mapa: { puntos: [] },
      sinUbicacion: 0,
    });
    expect(crearTracker).not.toHaveBeenCalled();
  });

  it("valida la selección sin enviar correo; confirma con datos del servidor", async () => {
    const { pantalla, bolsines, empleados, correo, gps } = contexto();
    const seleccion = await pantalla.tomarSeleccionDeBolsin(7, peticion());
    expect(await seleccion.json()).toEqual({
      seleccionado: 1,
      confirmarNotificacion: true,
    });
    expect(correo).not.toHaveBeenCalled();
    const respuesta = await pantalla.tomarConfirmacionOpcEnviarCorreoGCM(
      7,
      peticion(),
    );
    expect(await respuesta.json()).toMatchObject({
      aceptada: true,
      destinatarioEmail: "gcm@example.test",
      destinatarioNombre: "Juan Pérez",
      fechaEnvio: expect.any(String),
    });
    expect(bolsines.buscarParaSeguimiento.mock.calls).toEqual([[1], [1]]);
    expect(empleados.listarDeComision).toHaveBeenCalledExactlyOnceWith("CM-SF");
    expect(gps).toHaveBeenCalledExactlyOnceWith(
      "XTR-4500L",
      [101],
      ["CM-CBA-01"],
      [],
    );
    expect(correo).toHaveBeenCalledExactlyOnceWith(
      "gcm@example.test",
      expect.stringContaining("101"),
      expect.stringContaining(fecha.toISOString()),
      expect.stringContaining(fecha.toISOString()),
    );
    expect(correo.mock.calls[0][2]).toContain("Latitud: -31.42");
    expect(correo.mock.calls[0][2]).toContain("Longitud: -64.18");
  });

  it.each([
    [null, 404],
    [registro(1, 102, santaFe), 403],
    [registro(1, 101, cordoba, "Cerrado"), 409],
  ])("rechaza la selección no autorizada (%s)", async (fila, status) => {
    const { pantalla, bolsines, correo } = contexto();
    bolsines.buscarParaSeguimiento.mockResolvedValue(fila);
    expect((await pantalla.tomarSeleccionDeBolsin(7, peticion())).status).toBe(
      status,
    );
    expect(
      (await pantalla.tomarConfirmacionOpcEnviarCorreoGCM(7, peticion()))
        .status,
    ).toBe(status);
    expect(correo).not.toHaveBeenCalled();
  });

  it("rechaza datos adicionales del navegador y roles no autorizados", async () => {
    const { pantalla, sesiones, correo } = contexto();
    expect(
      (
        await pantalla.tomarConfirmacionOpcEnviarCorreoGCM(
          7,
          peticion({ bolsinId: 1, emailDestino: "otro@example.test" }),
        )
      ).status,
    ).toBe(400);
    sesiones.buscarEmpleadoLogueado.mockResolvedValue({ empleado: gerente });
    expect((await pantalla.habilitarPantalla(7)).status).toBe(403);
    expect(correo).not.toHaveBeenCalled();
  });

  it("propaga la sesión inválida al manejador de autenticación", async () => {
    const { pantalla, sesiones, correo } = contexto();
    sesiones.buscarEmpleadoLogueado.mockRejectedValue(new SesionInvalida());
    await expect(pantalla.habilitarPantalla(7)).rejects.toBeInstanceOf(
      SesionInvalida,
    );
    expect(correo).not.toHaveBeenCalled();
  });

  it.each([{ candidatos: [] }, { candidatos: [gerente, gerente] }])(
    "detiene el envío ante un GCM faltante o ambiguo",
    async ({ candidatos }) => {
      const { pantalla, empleados, correo } = contexto();
      empleados.listarDeComision.mockResolvedValue(candidatos);
      expect(
        (await pantalla.tomarConfirmacionOpcEnviarCorreoGCM(7, peticion()))
          .status,
      ).toBe(409);
      expect(correo).not.toHaveBeenCalled();
    },
  );

  it("informa los fallos de GPS y de SMTP", async () => {
    const { pantalla, gps, correo } = contexto();
    gps.mockRejectedValueOnce(new ErrorGPSTracker("TIMEOUT"));
    expect((await pantalla.habilitarPantalla(7)).status).toBe(503);
    gps.mockResolvedValueOnce([]);
    expect(
      (await pantalla.tomarConfirmacionOpcEnviarCorreoGCM(7, peticion()))
        .status,
    ).toBe(503);
    expect(correo).not.toHaveBeenCalled();
    correo.mockRejectedValueOnce(new ErrorEnvioCorreo("SMTP"));
    expect(
      (await pantalla.tomarConfirmacionOpcEnviarCorreoGCM(7, peticion()))
        .status,
    ).toBe(503);
    expect(correo).toHaveBeenCalledTimes(1);
  });
});
