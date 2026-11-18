import { catalogoNoEncontrado, ErrorCatalogo } from "@/domain/RepositorioCrud";
import { Prisma } from "../../prisma/generated/client";

export async function escrituraCatalogo<T>(
  operacion: () => Promise<T>,
  mensajeDuplicado: string,
): Promise<T> {
  try {
    return await operacion();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          throw new ErrorCatalogo("DUPLICADO", mensajeDuplicado);
        case "P2003":
          throw new ErrorCatalogo(
            "EN_USO",
            "El registro está en uso y no se puede eliminar.",
          );
        case "P2025":
          throw catalogoNoEncontrado();
      }
    }
    throw error;
  }
}
