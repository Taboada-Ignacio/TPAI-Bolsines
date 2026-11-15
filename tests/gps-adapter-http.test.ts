import { describe, expect, it } from "vitest";
import { InterfazGPSTracker } from "@/adapters/InterfazGPSTracker";
import { ServicioGPSTrackerMTR900 } from "@/infrastructure/ServicioGPSTrackerMTR900";
import { ServicioGPSTrackerQX7A } from "@/infrastructure/ServicioGPSTrackerQX7A";
import { ServicioGPSTrackerXTR4500L } from "@/infrastructure/ServicioGPSTrackerXTR4500L";
import { TransporteHTTPGPS } from "@/infrastructure/TransporteHTTPGPS";

const url = process.env.GPS_ADAPTER_TEST_BASE_URL ?? "";
const solicitudes: Parameters<
  InterfazGPSTracker["obtenerLocalizacionDeBolsines"]
>[] = [
  ["XTR-4500L", [42], ["CM-CBA"], []],
  ["QX-7A", [43], [], ["CM-SF"]],
  ["MTR-900", [44], [], []],
];

function crearFrontera(transporte: TransporteHTTPGPS) {
  return new InterfazGPSTracker({
    xtr: new ServicioGPSTrackerXTR4500L(transporte),
    qx: new ServicioGPSTrackerQX7A(transporte),
    mtr: new ServicioGPSTrackerMTR900(transporte),
  });
}

describe.skipIf(!url)(
  "Integración HTTP contra el backend GPS en desarrollo",
  () => {
    it.each(solicitudes)(
      "normaliza las posiciones del simulador %s",
      async (modelo, nrosBolsines, origen, destino) => {
        const frontera = crearFrontera(new TransporteHTTPGPS(url));
        const filas = await frontera.obtenerLocalizacionDeBolsines(
          modelo,
          nrosBolsines,
          origen,
          destino,
        );
        expect(filas).toEqual([
          [
            String(nrosBolsines[0]),
            expect.any(String),
            expect.any(String),
            expect.stringMatching(/Z$/),
          ],
        ]);
      },
    );

    it("propaga el 503 simulado por el backend", async () => {
      const fetchConFallo: typeof fetch = (input, init) => {
        const endpoint = new URL(String(input));
        endpoint.searchParams.set("simularFallo", "1");
        return fetch(endpoint, init);
      };
      const frontera = crearFrontera(new TransporteHTTPGPS(url, fetchConFallo));
      await expect(
        frontera.obtenerLocalizacionDeBolsines(...solicitudes[2]),
      ).rejects.toMatchObject({ tipo: "HTTP", estadoHttp: 503 });
    });
  },
);
