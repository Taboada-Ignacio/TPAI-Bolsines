import type { SolicitudNotificacionUbicacion } from "@/dtos/notificacion-ubicacion.dto";
import type { RemitoResumen } from "@/dtos/seguimiento-bolsines.dto";

export type DatosExtraNotificacionUbicacion = {
  nroPrecinto?: number | string | null;
  cmOrigen?: string | null;
  cmDestino?: string | null;
  remito?: RemitoResumen | null;
};

type DatosUbicacion = Omit<SolicitudNotificacionUbicacion, "emailDestino"> &
  DatosExtraNotificacionUbicacion;

function escaparHtml(valor: string) {
  return valor
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function formatearCorreoUbicacion({
  nroBolsin,
  latitud,
  longitud,
  fechaHoraActualizacion,
  nroPrecinto,
  cmOrigen,
  cmDestino,
  remito,
}: DatosUbicacion) {
  const mapa = `https://www.google.com/maps?q=${encodeURIComponent(latitud)},${encodeURIComponent(longitud)}`;
  const saludo = "Estimado/a Gerente de Comisión Médica:";
  const mensaje = "Se informa la última ubicación registrada del bolsín.";
  const detalles: Array<[string, string]> = [];
  if (nroPrecinto !== undefined && nroPrecinto !== null && String(nroPrecinto).trim()) {
    detalles.push(["Número de precinto", String(nroPrecinto)]);
  }
  if (cmOrigen?.trim()) {
    detalles.push(["Comisión Médica origen", cmOrigen.trim()]);
  }
  if (cmDestino?.trim()) {
    detalles.push(["Comisión Médica destino", cmDestino.trim()]);
  }
  if (remito) {
    detalles.push([
      "Remito",
      `${remito.numero} — ${remito.asunto} (${remito.tipoDocumento})`,
    ]);
  }
  detalles.push(
    ["Latitud", latitud],
    ["Longitud", longitud],
    ["Fecha y hora de última actualización", fechaHoraActualizacion],
  );
  const texto = [
    saludo,
    "",
    mensaje,
    "",
    `Número de bolsín: ${nroBolsin}`,
    ...detalles.map(([etiqueta, valor]) => `${etiqueta}: ${valor}`),
    "",
    "Ubicación en Google Maps:",
    mapa,
    "",
    "Sistema de Gestión de Bolsines.",
  ].join("\n");

  // Los clientes de correo necesitan estilos propios. La paleta y el contraste
  // del tablero se trasladan a tablas e inline CSS.
  const filas = detalles
    .map(
      ([etiqueta, valor]) => `
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #c7d1dd;">
              <p style="margin:0 0 4px;color:#475569;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">${etiqueta}</p>
              <p style="margin:0;font-family:Consolas,'Courier New',monospace;font-size:15px;line-height:1.5;overflow-wrap:anywhere;word-break:break-word;">${escaparHtml(valor)}</p>
            </td>
          </tr>`,
    )
    .join("");

  const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ubicación de bolsín</title>
</head>
<body style="margin:0;padding:0;background-color:#c7d1dd;color:#0b1220;font-family:Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#c7d1dd;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#eef2f6;border:1px solid #aebdce;border-radius:18px;">
          <tr>
            <td style="padding:16px 20px;border-bottom:1px solid #c7d1dd;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td aria-hidden="true" width="36" height="36" align="center" valign="middle" style="background-color:#0251b0;border-bottom:3px solid #01397d;border-radius:9px;color:#eef2f6;font-size:17px;font-weight:700;">B</td>
                  <td style="padding-left:10px;font-size:16px;font-weight:700;">Sistema de Bolsines</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 20px 24px;">
              <p style="margin:0 0 7px;color:#0251b0;font-family:Consolas,'Courier New',monospace;font-size:11px;font-weight:700;letter-spacing:1.4px;">SEGUIMIENTO GPS</p>
              <h1 style="margin:0 0 14px;font-size:28px;line-height:1.12;letter-spacing:-0.7px;">Ubicación de bolsín</h1>
              <p style="margin:0 0 4px;font-size:15px;line-height:1.5;">${saludo}</p>
              <p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.5;">${mensaje}</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:14px 16px;background-color:#0a0f1a;border-radius:12px;font-family:Consolas,'Courier New',monospace;">
                    <p style="margin:0 0 4px;color:#eef2f6;font-size:11px;font-weight:700;letter-spacing:1.2px;">NÚMERO DE BOLSÍN</p>
                    <p style="margin:0;color:#d1ff42;font-size:27px;font-weight:700;">${escaparHtml(String(nroBolsin))}</p>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:5px;">${filas}
              </table>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:18px;">
                <tr>
                  <td style="background-color:#d1ff42;border:1px solid #0b1220;border-bottom:4px solid #9ec91e;border-radius:10px;">
                    <a href="${escaparHtml(mapa)}" style="display:inline-block;padding:11px 15px;color:#0b1220;font-size:15px;line-height:1.4;font-weight:700;text-decoration:none;">Ver ubicación en Google Maps</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { texto, html };
}
