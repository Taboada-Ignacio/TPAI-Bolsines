import { afterEach, describe, expect, it, vi } from "vitest";
import { PantallaConsultarUbicacionDeBolsinesConSeleccion } from "@/app/api/auth/cu36/seguimiento/con-opcion-a-elegir/PantallaConsultarUbicacionDeBolsinesConSeleccion";
import { Bolsin } from "@/domain/Bolsin";
import { CambioEstadoBolsin } from "@/domain/CambioEstadoBolsin";
import { ComisionMedica } from "@/domain/ComisionMedica";
import { Empleado } from "@/domain/Empleado";
import { Estado } from "@/domain/Estado";
import { Rol } from "@/domain/Rol";
import { Usuario } from "@/domain/Usuario";
import { InterfazGPSTracker } from "@/externalInterfaces/gpsTracker/InterfazGPSTracker";
import { InterfazGoogleMaps } from "@/externalInterfaces/maps/InterfazGoogleMaps";
import { ServidorGoogleMaps } from "@/integrations/maps/ServidorGoogleMaps";
import { ServicioGPSTrackerMTR900 } from "@/integrations/gpsTracker/ServicioGPSTrackerMTR900";
import { ServicioGPSTrackerQX7A } from "@/integrations/gpsTracker/ServicioGPSTrackerQX7A";
import { ServicioGPSTrackerXTR4500L } from "@/integrations/gpsTracker/ServicioGPSTrackerXTR4500L";
import { TransporteHTTPGPS } from "@/integrations/gpsTracker/TransporteHTTPGPS";
import { GestorConsultarUbicacionesDeBolsinConSeleccion } from "@/services/GestorConsultarUbicacionesDeBolsinConSeleccion";
import {
  obtenerSeguimientoBolsines,
  seleccionarBolsinSeguimiento,
  notificarUbicacionGerente,
} from "@/services/seguimiento/seguimiento-cliente";

const origen = new ComisionMedica(
  "CM-CBA-01",
  "Centro",
  "cm@example.test",
  "Córdoba",
  "",
);
const destino = new ComisionMedica(
  "CM-ROS-02",
  "Centro",
  "cm@example.test",
  "Rosario",
  "",
);
const usuario = new Usuario("demo", "");
const encargado = new Empleado(
  "Ana",
  "Pérez",
  "eb@example.test",
  usuario,
  new Rol("Encargado de Bolsines", ""),
  origen,
);
const gerente = new Empleado(
  "Juan",
  "Pérez",
  "gcm@example.test",
  usuario,
  new Rol("Gerente de Comisión Médica", ""),
  destino,
);
const fecha = "2026-11-18T12:00:00";

function contexto() {
  const registros = [
    [101, origen, "Enviado"],
    [110, origen, "Enviado"],
    [102, destino, "Enviado"],
    [103, origen, "Cerrado"],
  ].map(([numero, comision, estado]) => ({
    id: Number(numero),
    bolsin: new Bolsin(
      new Date(fecha),
      Number(numero),
      300,
      600,
      comision as ComisionMedica,
      destino,
      [
        new CambioEstadoBolsin(
          new Date(fecha),
          null,
          new Estado(String(estado), "", "BOLSIN"),
          encargado,
        ),
      ],
    ),
  }));
  const buscar = vi.fn().mockResolvedValue(registros);
  const consultarGps = vi.fn<typeof fetch>(async (input) => {
    const url = new URL(String(input));
    const numeroBolsin = Number(url.searchParams.get("numeroBolsin"));
    if (url.pathname.includes("/xtr-4500l/")) {
      return Response.json({
        items: [
          {
            numeroBolsin,
            latitud: -31.4,
            longitud: -64.2,
            fechaHoraUltimaActualizacion: fecha,
          },
        ],
      });
    }
    if (url.pathname.includes("/navtrack-qx-7a/")) {
      return new Response([numeroBolsin, -31.4, -64.2, fecha].join(","));
    }
    return Response.json([[numeroBolsin, -31.4, -64.2, fecha]]);
  });
  const transporte = new TransporteHTTPGPS("http://gps.test", consultarGps);
  const notificar = vi.fn().mockResolvedValue(undefined);
  const gestor = new GestorConsultarUbicacionesDeBolsinConSeleccion(
    {
      buscarEmpleadoLogueado: vi
        .fn()
        .mockResolvedValue({ empleado: encargado, comisionMedicaId: 1 }),
    },
    {
      listarEnviados: buscar,
      buscarParaSeguimiento: vi.fn().mockResolvedValue(registros[0]),
    },
    { listarDeComision: vi.fn().mockResolvedValue([gerente]) },
    new InterfazGoogleMaps(
      new ServidorGoogleMaps({ buscarParaMapa: vi.fn().mockResolvedValue([]) }),
    ),
    { notificarUbicacionDeBolsin: notificar },
    () =>
      new InterfazGPSTracker(
        {
          xtr: new ServicioGPSTrackerXTR4500L(transporte),
          qx: new ServicioGPSTrackerQX7A(transporte),
          mtr: new ServicioGPSTrackerMTR900(transporte),
        },
        ["xtr", "qx", "mtr"],
      ),
  );
  return {
    pantalla: new PantallaConsultarUbicacionDeBolsinesConSeleccion(gestor),
    gestor,
    consultarGps,
    buscar,
    notificar,
  };
}

afterEach(() => vi.restoreAllMocks());

describe("Variante del CU 36 con selección de GPS", () => {
  it("identifica los envíos antes de pedir el modelo, sin consultar GPS", async () => {
    const { pantalla, gestor, buscar, consultarGps } = contexto();
    expect(await (await pantalla.solicitarTipoTracker(1)).json()).toMatchObject(
      {
        cmOrigen: { codigo: "CM-CBA-01" },
        cantidadBolsines: 2,
      },
    );
    expect(buscar).toHaveBeenCalledWith(1);
    expect((await pantalla.tomarTipoTracker(1, "otro")).status).toBe(400);
    await expect(
      gestor.opcConsultarUbicacionDeBolsines(1),
    ).rejects.toMatchObject({ estado: 400 });
    expect(consultarGps).not.toHaveBeenCalled();
  });

  it.each([
    ["XTR-4500L", "/api/xtr-4500l/getBolsinLocation", "CM-CBA-01", null],
    ["QX-7A", "/api/navtrack-qx-7a/retrieveTrackingData", null, "CM-ROS-02"],
    ["MTR-900", "/api/geopulse-mtr-900/fetchCargoPositions", null, null],
  ])(
    "el modelo %s conserva los filtros y normaliza la ubicación",
    async (modelo, endpoint, codigoOrigen, codigoDestino) => {
      const { pantalla, consultarGps } = contexto();
      const respuesta = await pantalla.tomarTipoTracker(1, modelo);
      expect(respuesta.status).toBe(200);
      const datos = await respuesta.json();
      expect(datos.sinUbicacion).toBe(0);
      expect(datos.mapa.puntos).toMatchObject(
        [101, 110].map((numero) => ({
          numero,
          latitud: -31.4,
          longitud: -64.2,
          actualizado: "2026-11-18T15:00:00.000Z",
        })),
      );
      expect(consultarGps).toHaveBeenCalledTimes(2);
      for (const [input] of consultarGps.mock.calls) {
        const url = new URL(String(input));
        expect(url.pathname).toBe(endpoint);
        expect(url.searchParams.get("codigoComisionMedicaOrigen")).toBe(
          codigoOrigen,
        );
        expect(url.searchParams.get("codigoComisionMedicaDestino")).toBe(
          codigoDestino,
        );
      }
    },
  );

  it("recupera ubicaciones parciales y comunica una falla del proveedor", async () => {
    const { pantalla, consultarGps } = contexto();
    const responder = consultarGps.getMockImplementation()!;
    consultarGps.mockImplementation(async (...args) =>
      new URL(String(args[0])).searchParams.get("numeroBolsin") === "110"
        ? new Response(null, { status: 404 })
        : responder(...args),
    );
    const resultado = await pantalla.tomarTipoTracker(1, "QX-7A");
    expect(await resultado.json()).toMatchObject({
      sinUbicacion: 1,
      mapa: { puntos: [{ numero: 101 }] },
    });
    consultarGps.mockResolvedValue(new Response(null, { status: 503 }));
    expect((await pantalla.tomarTipoTracker(1, "QX-7A")).status).toBe(503);
  });

  it("valida la selección e invoca CU 31 con el GPS elegido", async () => {
    const { pantalla, consultarGps, notificar } = contexto();
    const post = (datos: object) =>
      new Request("http://localhost", {
        method: "POST",
        body: JSON.stringify(datos),
      });
    expect(
      await (
        await pantalla.tomarSeleccionDeBolsin(1, post({ bolsinId: 101 }))
      ).json(),
    ).toEqual({
      seleccionado: 101,
      confirmarNotificacion: true,
    });
    expect(
      (
        await pantalla.tomarConfirmacionOpcEnviarCorreoGCM(
          1,
          post({ bolsinId: 101 }),
        )
      ).status,
    ).toBe(400);
    expect(notificar).not.toHaveBeenCalled();
    expect(
      (
        await pantalla.tomarConfirmacionOpcEnviarCorreoGCM(
          1,
          post({ bolsinId: 101, modeloGps: "MTR-900" }),
        )
      ).status,
    ).toBe(200);
    expect(String(consultarGps.mock.calls[0]?.[0])).toContain(
      "/geopulse-mtr-900/",
    );
    expect(notificar).toHaveBeenCalledWith(
      expect.objectContaining({
        nroBolsin: 101,
        emailDestino: "gcm@example.test",
      }),
    );
  });

  it("redirige las consultas, cambios de modelo, selección y confirmación al endpoint nuevo", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch");
    const url = "/api/auth/cu36/seguimiento/con-opcion-a-elegir";
    const cmOrigen = {
      codigo: "CM-CBA-01",
      nombre: "Córdoba",
      direccion: "Centro",
    };
    for (const modelo of ["XTR-4500L", "QX-7A", "MTR-900"] as const) {
      fetchMock.mockResolvedValueOnce(
        Response.json({ cmOrigen, modeloGps: modelo, bolsines: [] }),
      );
      await obtenerSeguimientoBolsines(modelo, undefined, true);
      expect(fetchMock).toHaveBeenLastCalledWith(
        url + "?modeloGps=" + modelo,
        expect.anything(),
      );
    }
    fetchMock.mockResolvedValueOnce(
      Response.json({ seleccionado: 101, confirmarNotificacion: true }),
    );
    await seleccionarBolsinSeguimiento(101, undefined, true);
    expect(fetchMock).toHaveBeenLastCalledWith(
      url + "/seleccion",
      expect.objectContaining({ body: '{"bolsinId":101}' }),
    );
    fetchMock.mockResolvedValueOnce(
      Response.json({ aceptada: true, destinatarioEmail: "gcm@example.test" }),
    );
    await notificarUbicacionGerente(
      { bolsinId: 101, nroBolsin: 101, modeloGps: "MTR-900" },
      undefined,
      true,
    );
    expect(fetchMock).toHaveBeenLastCalledWith(
      url,
      expect.objectContaining({
        body: '{"bolsinId":101,"modeloGps":"MTR-900"}',
      }),
    );
  });
});
