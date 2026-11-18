import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/auth/cu31/notificar-ubicacion/route";
import { firmarSesion, servicio } from "@/app/api/auth/sesion";
import { ServicioCorreoSMTP } from "@/integrations/mail/ServicioCorreoSMTP";
import { GestorNotificarUbicacionBolsin } from "@/services/GestorNotificarUbicacionBolsin";
import {
  ErrorEnvioCorreo,
  type ServicioCorreo,
} from "@/services/ServicioCorreo";

const { createTransport, sendMail, getPrisma } = vi.hoisted(() => ({
  createTransport: vi.fn(),
  sendMail: vi.fn(),
  getPrisma: vi.fn(),
}));
vi.mock("nodemailer", () => ({ createTransport }));
vi.mock("@/persistence/prisma", () => ({ getPrisma }));

const datos = {
  emailDestino: "gcm.cm-cba@example.test",
  nroBolsin: 36001,
  latitud: "-31.4201",
  longitud: "-64.1888",
  fechaHoraActualizacion: "2026-11-15T17:35:00.000Z",
};

beforeEach(() => {
  vi.clearAllMocks();
  createTransport.mockReturnValue({ sendMail });
  sendMail.mockResolvedValue({ accepted: [datos.emailDestino], rejected: [] });
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
});

describe("GestorNotificarUbicacionBolsin", () => {
  it("envía en HTML y texto la ubicación y la fecha originales", async () => {
    const enviarCorreo = vi.fn<ServicioCorreo["enviarCorreo"]>(async () => {});
    await new GestorNotificarUbicacionBolsin({
      enviarCorreo,
    }).notificarUbicacionDeBolsin(datos);
    expect(enviarCorreo).toHaveBeenCalledExactlyOnceWith(
      datos.emailDestino,
      "Notificación de ubicación del bolsín N.º 36001",
      expect.stringContaining(
        "https://www.google.com/maps?q=-31.4201,-64.1888",
      ),
      expect.stringContaining(
        'href="https://www.google.com/maps?q=-31.4201,-64.1888"',
      ),
    );
    const [, , texto, html] = enviarCorreo.mock.calls[0];
    expect(texto).toContain(datos.fechaHoraActualizacion);
    expect(html).toContain(datos.fechaHoraActualizacion);
    expect(html).toContain(String(datos.nroBolsin));
    expect(html).toContain("Ver ubicación en Google Maps");
    expect(getPrisma).not.toHaveBeenCalled();
    expect(createTransport).not.toHaveBeenCalled();
  });

  it.each([
    { emailDestino: "correo inválido" },
    { nroBolsin: 0 },
    { nroBolsin: 2.5 },
    { latitud: "91" },
    { latitud: "" },
    { longitud: "-181" },
    { longitud: "0x12" },
    { fechaHoraActualizacion: "2026-02-30T17:35:00Z" },
    { fechaHoraActualizacion: "2026-11-15" },
  ])("rechaza datos inválidos antes del envío (%o)", async (cambio) => {
    const enviarCorreo = vi.fn(async () => {});
    await expect(
      new GestorNotificarUbicacionBolsin({
        enviarCorreo,
      }).notificarUbicacionDeBolsin({ ...datos, ...cambio }),
    ).rejects.toThrow("inválidos");
    expect(enviarCorreo).not.toHaveBeenCalled();
  });

  it("propaga el fallo de correo sin reintentos", async () => {
    const error = new ErrorEnvioCorreo();
    const enviarCorreo = vi.fn().mockRejectedValue(error);
    await expect(
      new GestorNotificarUbicacionBolsin({
        enviarCorreo,
      }).notificarUbicacionDeBolsin(datos),
    ).rejects.toBe(error);
    expect(enviarCorreo).toHaveBeenCalledTimes(1);
  });

  it("conserva el signo positivo de las coordenadas en el enlace", async () => {
    const enviarCorreo = vi.fn<ServicioCorreo["enviarCorreo"]>(async () => {});
    await new GestorNotificarUbicacionBolsin({
      enviarCorreo,
    }).notificarUbicacionDeBolsin({ ...datos, latitud: "+31.4201" });
    const [, , texto, html] = enviarCorreo.mock.calls[0];
    expect(texto).toContain("maps?q=%2B31.4201,-64.1888");
    expect(html).toContain("maps?q=%2B31.4201,-64.1888");
  });
});

describe("ServicioCorreoSMTP", () => {
  it("transmite los datos con el host, puerto y remitente configurados", async () => {
    vi.stubEnv("SMTP_HOST", "127.0.0.1");
    vi.stubEnv("SMTP_PORT", "2025");
    vi.stubEnv("SMTP_FROM", "local@example.test");
    await new ServicioCorreoSMTP().enviarCorreo(
      datos.emailDestino,
      "Asunto",
      "Cuerpo",
    );
    expect(createTransport).toHaveBeenCalledWith(
      expect.objectContaining({
        host: "127.0.0.1",
        port: 2025,
        connectionTimeout: 5000,
      }),
    );
    expect(sendMail).toHaveBeenCalledExactlyOnceWith({
      from: "local@example.test",
      to: datos.emailDestino,
      subject: "Asunto",
      text: "Cuerpo",
    });
  });

  it.each(["conexion", "rechazo"])(
    "controla el fallo de %s SMTP",
    async (tipo) => {
      vi.stubEnv("SMTP_HOST", "mailpit");
      if (tipo === "conexion")
        sendMail.mockRejectedValueOnce(new Error("ECONNREFUSED"));
      else
        sendMail.mockResolvedValueOnce({
          accepted: [],
          rejected: [datos.emailDestino],
        });
      await expect(
        new ServicioCorreoSMTP().enviarCorreo(
          datos.emailDestino,
          "Asunto",
          "Cuerpo",
        ),
      ).rejects.toBeInstanceOf(ErrorEnvioCorreo);
      expect(sendMail).toHaveBeenCalledTimes(1);
    },
  );

  it("rechaza un servidor externo antes de abrir el transporte", async () => {
    vi.stubEnv("SMTP_HOST", "smtp.example.test");
    await expect(
      new ServicioCorreoSMTP().enviarCorreo(
        datos.emailDestino,
        "Asunto",
        "Cuerpo",
      ),
    ).rejects.toBeInstanceOf(ErrorEnvioCorreo);
    expect(createTransport).not.toHaveBeenCalled();
  });
});

describe("POST /api/auth/cu31/notificar-ubicacion", () => {
  const clave = "clave-ficticia-solo-para-pruebas-cu31";
  function solicitud(body: string, cookie?: string) {
    return new NextRequest(
      "http://localhost/api/auth/cu31/notificar-ubicacion",
      {
        method: "POST",
        body,
        headers: cookie ? { cookie } : undefined,
      },
    );
  }

  it("exige una sesión y no envía ante un pedido anónimo", async () => {
    expect((await POST(solicitud(JSON.stringify(datos)))).status).toBe(401);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("valida la sesión firmada y discrimina 200, 400 y 503", async () => {
    vi.stubEnv("SESSION_SIGNING_KEY", clave);
    vi.stubEnv("SMTP_HOST", "mailpit");
    const consultar = vi
      .spyOn(servicio, "consultar")
      .mockImplementation(async () => {
        return {} as Awaited<ReturnType<typeof servicio.consultar>>;
      });
    const cookie = "bolsines_sesion=" + firmarSesion(1, clave);
    const exitosa = await POST(solicitud(JSON.stringify(datos), cookie));
    expect(exitosa.status).toBe(200);
    await expect(exitosa.json()).resolves.toEqual({ aceptada: true });
    expect(sendMail).toHaveBeenCalledExactlyOnceWith(
      expect.objectContaining({
        text: expect.stringContaining(datos.fechaHoraActualizacion),
        html: expect.stringContaining("Ver ubicación en Google Maps"),
      }),
    );
    expect((await POST(solicitud("{", cookie))).status).toBe(400);
    expect((await POST(solicitud("{}", cookie))).status).toBe(400);
    expect(sendMail).toHaveBeenCalledTimes(1);
    sendMail.mockRejectedValueOnce(new Error("SMTP caído"));
    expect((await POST(solicitud(JSON.stringify(datos), cookie))).status).toBe(
      503,
    );
    expect(consultar).toHaveBeenLastCalledWith(1);
  });
});
