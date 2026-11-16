import { createTransport } from "nodemailer";
import { z } from "zod";
import {
  ErrorEnvioCorreo,
  type ServicioCorreo,
} from "@/services/ServicioCorreo";

export class ServicioCorreoSMTP implements ServicioCorreo {
  async enviarCorreo(
    destinatario: string,
    asunto: string,
    contenido: string,
    html?: string,
  ): Promise<void> {
    const host = process.env.SMTP_HOST ?? "mailpit";
    const port = Number(process.env.SMTP_PORT ?? "1025");
    const from = process.env.SMTP_FROM ?? "notificaciones@bolsines.test";
    if (
      !["mailpit", "localhost", "127.0.0.1", "::1"].includes(host) ||
      !Number.isInteger(port) ||
      port < 1 ||
      port > 65535 ||
      !z.email().safeParse(from).success
    ) {
      throw new ErrorEnvioCorreo(
        "La configuración del correo local es inválida.",
      );
    }

    try {
      const transporte = createTransport({
        host,
        port,
        secure: false,
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
      });
      const resultado = await transporte.sendMail({
        from,
        to: destinatario,
        subject: asunto,
        text: contenido,
        ...(html !== undefined ? { html } : {}),
      });
      if (resultado.accepted.length !== 1 || resultado.rejected.length !== 0) {
        throw new ErrorEnvioCorreo(
          "El servidor SMTP no aceptó el destinatario.",
        );
      }
    } catch (error) {
      if (error instanceof ErrorEnvioCorreo) throw error;
      throw new ErrorEnvioCorreo("No se pudo enviar la notificación por SMTP.");
    }
  }
}
