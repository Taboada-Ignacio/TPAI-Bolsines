import { NextRequest } from "next/server";
import { describe, expect, it, vi } from "vitest";
import { GET as consultarSeguimiento } from "@/app/api/auth/cu36/seguimiento/route";
import {
  firmarSesion,
  nombreCookie,
  servicio as servicioSesion,
} from "@/app/api/auth/sesion";
import { InterfazGPSTracker } from "@/externalInterfaces/gpsTracker/InterfazGPSTracker";
import { BolsinRepositoryPrisma } from "@/persistence/BolsinRepositoryPrisma";
import { InterfazGoogleMaps } from "@/externalInterfaces/maps/InterfazGoogleMaps";
import { PantallaConsultarUbicacionDeBolsines } from "@/app/api/auth/cu36/seguimiento/PantallaConsultarUbicacionDeBolsines";
import { Bolsin } from "@/domain/Bolsin";
import { CambioEstadoBolsin } from "@/domain/CambioEstadoBolsin";
import { ComisionMedica } from "@/domain/ComisionMedica";
import { Empleado } from "@/domain/Empleado";
import { Estado } from "@/domain/Estado";
import { Rol } from "@/domain/Rol";
import { Sesion } from "@/domain/Sesion";
import { Usuario } from "@/domain/Usuario";
import { ServidorGoogleMaps } from "@/integrations/maps/ServidorGoogleMaps";
import { ErrorGPSTracker } from "@/lib/gps-tracker/ErrorGPSTracker";
import { GestorConsultarUbicacionDeBolsin } from "@/services/GestorConsultarUbicacionDeBolsin";
import { GestorNotificarUbicacionBolsin } from "@/services/GestorNotificarUbicacionBolsin";
import { ErrorEnvioCorreo } from "@/services/ServicioCorreo";
import { SesionInvalida } from "@/services/SesionService";

const fecha = new Date("2026-03-07T15:30:00.000Z");
const cordoba = new ComisionMedica(
  "CM-CBA-01",
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
  const servidor = new ServidorGoogleMaps({
    buscarParaMapa: vi.fn().mockResolvedValue([]),
  });
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
      ["CM-CBA-01", "CM-CBA-01", "CM-CBA-01"],
    );
    expect(datos.comision).toBe("Córdoba - Av. Central 1");
    expect(datos.sinUbicacion).toBe(0);
    expect(datos.mapa.estilo).toContain("tiles.openfreemap.org");
    expect(
      datos.mapa.puntos.map(({ numero }: { numero: number }) => numero),
    ).toEqual([101, 110, 36011]);
    expect(mapa).toHaveBeenCalledExactlyOnceWith(
      [101, 110, 36011].map((numero) => ({
        numero,
        latitud: -31.42,
        longitud: -64.18,
        actualizado: fecha.toISOString(),
      })),
    );
    expect(datos.mapa.comisionOrigen).toMatchObject({
      codigo: "CM-CBA-01",
      direccion: "Av. Central 1",
    });
    expect(correo).not.toHaveBeenCalled();
  });

  it("cuenta las ubicaciones ausentes sin dibujar puntos estimados", async () => {
    const { pantalla, gps, mapa } = contexto();
    gps.mockResolvedValueOnce([
      ["110", "-31.42", "-64.18", fecha.toISOString()],
    ]);
    const datos = await (await pantalla.habilitarPantalla(7)).json();
    expect(datos.sinUbicacion).toBe(2);
    expect(mapa).toHaveBeenCalledExactlyOnceWith([
      {
        numero: 110,
        latitud: -31.42,
        longitud: -64.18,
        actualizado: fecha.toISOString(),
      },
    ]);
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
    expect(gps).not.toHaveBeenCalled();
    expect(empleados.listarDeComision).not.toHaveBeenCalled();
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

describe("mapa enriquecido de bolsines", () => {
  const origen = {
    id: 10,
    codigo: "CM-CBA",
    nombre: "Cordoba",
    direccion: "Origen 1",
  };
  const destino = {
    id: 20,
    codigo: "CM-SF",
    nombre: "Santa Fe",
    direccion: "Destino 1",
  };
  const fila = (numeroBolsin: number) => ({
    id: numeroBolsin,
    numeroBolsin,
    numeroPrecinto: 123,
    peso: 2,
    fecha,
    cmOrigen: origen,
    cmDestino: destino,
    remito: null,
  });
  const gps = (numero: number) => ({
    numero,
    latitud: -30,
    longitud: -62,
    actualizado: fecha.toISOString(),
  });

  it("carga ambas comisiones por numero, comparte el trazado y conserva la posicion GPS", async () => {
    const buscarParaMapa = vi.fn().mockResolvedValue([fila(101), fila(110)]);
    const origenMapa = { lat: -31, lng: -64 };
    const destinoMapa = { lat: -32, lng: -60 };
    const resolverSede = vi
      .fn()
      .mockResolvedValueOnce(origenMapa)
      .mockResolvedValueOnce(destinoMapa);
    const trazado = [origenMapa, destinoMapa];
    const resolverRuta = vi.fn().mockResolvedValue(trazado);
    const mapas = new InterfazGoogleMaps(
      new ServidorGoogleMaps({ buscarParaMapa }, resolverSede, resolverRuta),
    );

    const mapa = await mapas.obtenerMapaConPosicionDeBolsines([
      gps(110),
      gps(101),
    ]);

    expect(buscarParaMapa).toHaveBeenCalledExactlyOnceWith([110, 101]);
    expect(resolverSede).toHaveBeenCalledTimes(2);
    expect(resolverRuta).toHaveBeenCalledExactlyOnceWith(
      origenMapa,
      destinoMapa,
    );
    expect(mapa.estilo).toContain("openfreemap.org");
    expect(mapa.puntos.map(({ numero }) => numero)).toEqual([110, 101]);
    expect(mapa.puntos[0]).toMatchObject({
      ...gps(110),
      cmOrigen: { direccion: "Origen 1" },
      direccionDestino: "Destino 1",
      recorrido: { origen: origenMapa, destino: destinoMapa, trazado },
    });
  });

  it("conserva los puntos ante numeros ambiguos y fallas de enrutamiento", async () => {
    const buscarParaMapa = vi
      .fn()
      .mockResolvedValue([
        fila(101),
        { ...fila(101), id: 500, cmOrigen: destino },
        fila(110),
      ]);
    const resolverSede = vi
      .fn()
      .mockResolvedValueOnce({ lat: -31, lng: -64 })
      .mockResolvedValueOnce({ lat: -32, lng: -60 });
    const resolverRuta = vi
      .fn()
      .mockRejectedValue(new Error("Ruta no disponible"));
    const mapas = new InterfazGoogleMaps(
      new ServidorGoogleMaps({ buscarParaMapa }, resolverSede, resolverRuta),
    );

    const { puntos } = await mapas.obtenerMapaConPosicionDeBolsines([
      gps(101),
      gps(110),
      gps(999),
    ]);

    expect(resolverRuta).toHaveBeenCalledTimes(1);
    expect(puntos[0]).toMatchObject({
      ...gps(101),
      recorrido: { origen: null, destino: null, trazado: null },
    });
    expect(puntos[0].id).toBeUndefined();
    expect(puntos[1]).toMatchObject({
      ...gps(110),
      id: 110,
      recorrido: { trazado: null },
    });
    expect(puntos[2]).toMatchObject(gps(999));
    expect(puntos[2].id).toBeUndefined();
  });
});

it("entrega el mapa desde la pantalla real aunque un GPS responda 404", async () => {
  const validarSesion = vi
    .spyOn(servicioSesion, "buscarEmpleadoLogueado")
    .mockResolvedValue({
      id: 1,
      usuarioId: 1,
      rolId: 1,
      comisionMedicaId: 5,
      sesion: new Sesion(fecha, null, usuario),
      empleado: encargado,
    });
  const listar = vi
    .spyOn(BolsinRepositoryPrisma.prototype, "listarEnviados")
    .mockResolvedValue([registro(1, 101), registro(2, 110)]);
  const buscar = vi
    .spyOn(BolsinRepositoryPrisma.prototype, "buscarParaMapa")
    .mockResolvedValue([
      {
        id: 1,
        fecha,
        numeroBolsin: 101,
        numeroPrecinto: 201,
        peso: 2,
        remito: null,
        cmOrigen: {
          id: 5,
          codigo: "CM-CBA",
          nombre: "Cordoba",
          direccion: "Sede ficticia - Cordoba",
        },
        cmDestino: {
          id: 6,
          codigo: "CM-SF",
          nombre: "Santa Fe",
          direccion: "Sede ficticia - Santa Fe",
        },
      },
    ]);
  const tracker = vi
    .spyOn(InterfazGPSTracker.prototype, "obtenerLocalizacionDeBolsines")
    .mockRejectedValueOnce(new ErrorGPSTracker("HTTP", 404))
    .mockResolvedValueOnce([["101", "-31", "-62", fecha.toISOString()]])
    .mockRejectedValueOnce(new ErrorGPSTracker("HTTP", 404));
  const fetchRuta = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
    Response.json({
      code: "Ok",
      routes: [
        {
          geometry: {
            coordinates: [
              [-64.1888, -31.4201],
              [-60.6973, -31.6107],
            ],
          },
        },
      ],
    }),
  );
  try {
    const clave = "clave-de-prueba-no-usar-en-entornos-reales";
    vi.stubEnv("SESSION_SIGNING_KEY", clave);
    const respuesta = await consultarSeguimiento(
      new NextRequest(
        "http://localhost/api/auth/cu36/seguimiento?modeloGps=QX-7A",
        { headers: { cookie: `${nombreCookie}=${firmarSesion(7, clave)}` } },
      ),
    );
    expect(respuesta.status).toBe(200);
    expect(validarSesion).toHaveBeenCalledWith(7);
    expect(listar).toHaveBeenCalledWith(5);
    expect(buscar).toHaveBeenCalledExactlyOnceWith([101]);
    expect(tracker).toHaveBeenNthCalledWith(
      1,
      "XTR-4500L",
      [101, 110],
      ["CM-CBA-01", "CM-CBA-01"],
    );
    expect(tracker).toHaveBeenNthCalledWith(
      3,
      "XTR-4500L",
      [110],
      ["CM-CBA-01"],
    );
    expect(fetchRuta).toHaveBeenCalledTimes(1);
    expect(await respuesta.json()).toMatchObject({
      sinUbicacion: 1,
      mapa: {
        puntos: [
          {
            id: 1,
            numero: 101,
            latitud: -31,
            longitud: -62,
            actualizado: fecha.toISOString(),
            recorrido: {
              trazado: [
                { lat: -31.4201, lng: -64.1888 },
                { lat: -31.6107, lng: -60.6973 },
              ],
            },
          },
        ],
      },
    });
  } finally {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  }
});
