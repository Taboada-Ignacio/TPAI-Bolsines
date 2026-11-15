import type { ZodType } from "zod";
import { ErrorCatalogo } from "@/domain/RepositorioCrud";
import { idCatalogoSchema } from "@/dtos/catalogo.dto";

class ErrorSolicitud extends Error {}

export async function leerEntrada<T>(
  request: Request,
  esquema: ZodType<T>,
): Promise<T> {
  let cuerpo: unknown;
  try {
    cuerpo = await request.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new ErrorSolicitud("El cuerpo debe contener JSON válido.");
    }
    throw error;
  }

  const resultado = esquema.safeParse(cuerpo);
  if (!resultado.success) {
    const campos = [
      ...new Set(
        resultado.error.issues
          .map(({ path }) => path.join("."))
          .filter(Boolean),
      ),
    ];
    const detalle = campos.length ? ` Campos: ${campos.join(", ")}.` : "";
    throw new ErrorSolicitud(`Los datos enviados son inválidos.${detalle}`);
  }
  return resultado.data;
}

export async function leerId(params: Promise<{ id: string }>): Promise<number> {
  const resultado = idCatalogoSchema.safeParse((await params).id);
  if (!resultado.success) {
    throw new ErrorSolicitud("El ID debe ser un entero entre 1 y 2147483647.");
  }
  return resultado.data;
}

export async function responder(
  operacion: () => Promise<Response>,
): Promise<Response> {
  try {
    return await operacion();
  } catch (error) {
    if (error instanceof ErrorSolicitud) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    if (error instanceof ErrorCatalogo) {
      const status = error.codigo === "NO_ENCONTRADO" ? 404 : 409;
      return Response.json({ error: error.message }, { status });
    }
    return Response.json(
      { error: "Ocurrió un error interno." },
      { status: 500 },
    );
  }
}
