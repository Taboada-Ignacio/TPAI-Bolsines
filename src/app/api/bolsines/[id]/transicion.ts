import { TransicionEstadoInvalida } from "@/domain/RepositorioBolsin";
import { transicionBolsinSchema } from "@/dtos/bolsin.dto";
import { leerId, responder } from "../../_catalogos/http";

async function leerResponsableOpcional(
  request: Request,
): Promise<number | undefined> {
  const texto = await request.text();
  if (!texto.trim()) return undefined;
  let cuerpo: unknown;
  try {
    cuerpo = JSON.parse(texto);
  } catch {
    throw new ErrorJsonInvalido("El cuerpo debe contener JSON válido.");
  }
  const parsed = transicionBolsinSchema.safeParse(cuerpo);
  if (!parsed.success) {
    throw new ErrorJsonInvalido("Los datos enviados son inválidos.");
  }
  return parsed.data.responsableCEId;
}

class ErrorJsonInvalido extends Error {}

export function responderTransicion(
  params: Promise<{ id: string }>,
  operacion: (id: number) => Promise<unknown>,
): Promise<Response> {
  return responder(async () => {
    const id = await leerId(params);
    try {
      return Response.json(await operacion(id));
    } catch (error) {
      if (error instanceof TransicionEstadoInvalida) {
        return Response.json({ error: error.message }, { status: 409 });
      }
      if (error instanceof ErrorJsonInvalido) {
        return Response.json({ error: error.message }, { status: 400 });
      }
      throw error;
    }
  });
}

export { leerResponsableOpcional };
