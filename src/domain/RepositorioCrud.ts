export interface Registro<T> {
  id: number;
  entidad: T;
}

export interface RepositorioCrud<T> {
  crear(entidad: T): Promise<Registro<T>>;
  listar(): Promise<Registro<T>[]>;
  buscarPorId(id: number): Promise<Registro<T> | null>;
  actualizar(id: number, entidad: T): Promise<Registro<T>>;
  eliminar(id: number): Promise<void>;
}

export class ErrorCatalogo extends Error {
  constructor(
    public readonly codigo: "NO_ENCONTRADO" | "DUPLICADO" | "EN_USO",
    mensaje: string,
  ) {
    super(mensaje);
  }
}

export function catalogoNoEncontrado(): ErrorCatalogo {
  return new ErrorCatalogo(
    "NO_ENCONTRADO",
    "El registro solicitado no existe.",
  );
}
