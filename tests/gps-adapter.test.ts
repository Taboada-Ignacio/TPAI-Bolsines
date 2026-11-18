import { describe, expect, it, vi } from "vitest";
import { AdaptadorMTR900 } from "@/externalInterfaces/gpsTracker/AdaptadorMTR900";
import { AdaptadorQX7A } from "@/externalInterfaces/gpsTracker/AdaptadorQX7A";
import { AdaptadorXTR4500L } from "@/externalInterfaces/gpsTracker/AdaptadorXTR4500L";
import type { IAdaptadorLocalizacionBolsines } from "@/externalInterfaces/gpsTracker/IAdaptadorLocalizacionBolsines";
import { InterfazGPSTracker } from "@/externalInterfaces/gpsTracker/InterfazGPSTracker";
import { ServicioGPSTrackerMTR900 } from "@/integrations/gpsTracker/ServicioGPSTrackerMTR900";
import { ServicioGPSTrackerQX7A } from "@/integrations/gpsTracker/ServicioGPSTrackerQX7A";
import { ServicioGPSTrackerXTR4500L } from "@/integrations/gpsTracker/ServicioGPSTrackerXTR4500L";
import { TransporteHTTPGPS } from "@/integrations/gpsTracker/TransporteHTTPGPS";

const clave = "clave-de-prueba";
const fecha = "2026-11-18T12:00:00";
const fila = (numero: number) => [
  String(numero),
  "-31.4",
  "-64.2",
  "2026-11-18T15:00:00.000Z",
];

function crearServicios() {
  const solicitar = vi.fn<typeof fetch>(async (input) => {
    const url = new URL(String(input));
    const numeroBolsin = Number(url.searchParams.get("numeroBolsin"));
    if (url.pathname.startsWith("/api/xtr-4500l/")) {
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
    if (url.pathname.startsWith("/api/navtrack-qx-7a/")) {
      return new Response([numeroBolsin, -31.4, -64.2, fecha].join(","));
    }
    return Response.json([[numeroBolsin, -31.4, -64.2, fecha]]);
  });
  const transporte = new TransporteHTTPGPS("http://gps.test", solicitar);
  return {
    solicitar,
    xtr: new ServicioGPSTrackerXTR4500L(transporte),
    qx: new ServicioGPSTrackerQX7A(transporte),
    mtr: new ServicioGPSTrackerMTR900(transporte),
  };
}

describe("Adapter GPS", () => {
  it("normaliza los tres formatos y mantiene la correspondencia por proveedor", async () => {
    const { solicitar, xtr, qx, mtr } = crearServicios();
    const adaptadores: IAdaptadorLocalizacionBolsines[] = [
      new AdaptadorXTR4500L(["A", "B"], xtr),
      new AdaptadorQX7A(["C", "D"], qx),
      new AdaptadorMTR900(mtr),
    ];
    for (const adaptador of adaptadores) {
      expect(
        await adaptador.recibirLocalizacionBolsines(clave, [102, 101]),
      ).toEqual([fila(102), fila(101)]);
    }
    const urls = solicitar.mock.calls.map(([url]) => new URL(String(url)));
    expect(urls.map((url) => url.pathname)).toEqual([
      "/api/xtr-4500l/getBolsinLocation",
      "/api/xtr-4500l/getBolsinLocation",
      "/api/navtrack-qx-7a/retrieveTrackingData",
      "/api/navtrack-qx-7a/retrieveTrackingData",
      "/api/geopulse-mtr-900/fetchCargoPositions",
      "/api/geopulse-mtr-900/fetchCargoPositions",
    ]);
    expect(
      urls.map((url) => url.searchParams.get("codigoComisionMedicaOrigen")),
    ).toEqual(["A", "B", null, null, null, null]);
    expect(
      urls.map((url) => url.searchParams.get("codigoComisionMedicaDestino")),
    ).toEqual([null, null, "C", "D", null, null]);
    for (const [url, init] of solicitar.mock.calls) {
      expect(String(url)).not.toContain(clave);
      expect(new Headers(init?.headers).get("X-API-Key")).toBe(clave);
    }
  });

  it("selecciona el adaptador y la clave segun el modelo explicito", async () => {
    const servicios = crearServicios();
    const frontera = new InterfazGPSTracker(servicios, [clave, "qx", "mtr"]);
    expect(
      await frontera.obtenerLocalizacionDeBolsines("XTR-4500L", [101], ["A"]),
    ).toEqual([fila(101)]);
    expect(
      await frontera.obtenerLocalizacionDeBolsines("QX-7A", [102], ["B"]),
    ).toEqual([fila(102)]);
    expect(
      await frontera.obtenerLocalizacionDeBolsines("MTR-900", [103]),
    ).toEqual([fila(103)]);
    await expect(
      frontera.obtenerLocalizacionDeBolsines("XTR-4500L", [101], []),
    ).rejects.toMatchObject({ tipo: "CONFIGURACION" });
    await expect(
      frontera.obtenerLocalizacionDeBolsines("QX-7A", [102], []),
    ).rejects.toMatchObject({ tipo: "CONFIGURACION" });
    expect(await frontera.obtenerLocalizacionDeBolsines("MTR-900", [])).toEqual(
      [],
    );
    expect(
      servicios.solicitar.mock.calls.map(([url, init]) => [
        new URL(String(url)).pathname.split("/")[2],
        new Headers(init?.headers).get("X-API-Key"),
      ]),
    ).toEqual([
      ["xtr-4500l", clave],
      ["navtrack-qx-7a", "qx"],
      ["geopulse-mtr-900", "mtr"],
    ]);
  });

  it("propaga errores HTTP sin exponer credenciales y permite reintentar", async () => {
    const { solicitar, mtr } = crearServicios();
    const adaptador = new AdaptadorMTR900(mtr);
    for (const estadoHttp of [404, 503]) {
      solicitar.mockResolvedValueOnce(
        new Response(clave, { status: estadoHttp }),
      );
      await expect(
        adaptador.recibirLocalizacionBolsines(clave, [101]),
      ).rejects.toMatchObject({
        tipo: "HTTP",
        estadoHttp,
        message: expect.not.stringContaining(clave),
      });
    }
    expect(await adaptador.recibirLocalizacionBolsines(clave, [101])).toEqual([
      fila(101),
    ]);
  });

  it("rechaza respuestas con formato invalido o pertenecientes a otro bolsin", async () => {
    const { solicitar, xtr, qx, mtr } = crearServicios();
    solicitar.mockResolvedValueOnce(new Response("json roto"));
    await expect(
      new AdaptadorXTR4500L(["A"], xtr).recibirLocalizacionBolsines(
        clave,
        [101],
      ),
    ).rejects.toMatchObject({ tipo: "RESPUESTA_INVALIDA" });
    solicitar.mockResolvedValueOnce(new Response("102,-31.4,-64.2," + fecha));
    await expect(
      new AdaptadorQX7A(["B"], qx).recibirLocalizacionBolsines(clave, [101]),
    ).rejects.toMatchObject({ tipo: "RESPUESTA_INVALIDA" });
    solicitar.mockResolvedValueOnce(Response.json([]));
    await expect(
      new AdaptadorMTR900(mtr).recibirLocalizacionBolsines(clave, [101]),
    ).rejects.toMatchObject({ tipo: "RESPUESTA_INVALIDA" });
  });
});
