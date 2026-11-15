import { describe, expect, it, vi } from "vitest";
import { ComisionMedica } from "@/domain/ComisionMedica";
import { Estado } from "@/domain/Estado";
import { ErrorCatalogo, type RepositorioCrud } from "@/domain/RepositorioCrud";
import { Rol } from "@/domain/Rol";
import { ComisionMedicaService } from "@/services/ComisionMedicaService";
import { CrudService } from "@/services/CrudService";
import { EstadoService } from "@/services/EstadoService";
import { RolService } from "@/services/RolService";

function probarServicio<T, Datos>(
  nombre: string,
  crearServicio: (repositorio: RepositorioCrud<T>) => CrudService<T, Datos>,
  datos: Datos,
  entidad: T,
) {
  describe(nombre, () => {
    function preparar() {
      const registro = { id: 8, entidad };
      const repositorio = {
        crear: vi.fn<RepositorioCrud<T>["crear"]>().mockResolvedValue(registro),
        listar: vi
          .fn<RepositorioCrud<T>["listar"]>()
          .mockResolvedValue([registro]),
        buscarPorId: vi
          .fn<RepositorioCrud<T>["buscarPorId"]>()
          .mockResolvedValue(registro),
        actualizar: vi
          .fn<RepositorioCrud<T>["actualizar"]>()
          .mockResolvedValue(registro),
        eliminar: vi
          .fn<RepositorioCrud<T>["eliminar"]>()
          .mockResolvedValue(undefined),
      };

      return { registro, repositorio, service: crearServicio(repositorio) };
    }

    it("construye la entidad al crear y conserva el ID generado", async () => {
      const { registro, repositorio, service } = preparar();

      await expect(service.crear(datos)).resolves.toBe(registro);
      expect(repositorio.crear).toHaveBeenCalledExactlyOnceWith(entidad);
    });

    it("delegar el listado conserva las entidades y sus IDs", async () => {
      const { registro, repositorio, service } = preparar();

      await expect(service.listar()).resolves.toEqual([registro]);
      expect(repositorio.listar).toHaveBeenCalledExactlyOnceWith();
    });

    it("consulta por ID y conserva el registro encontrado", async () => {
      const { registro, repositorio, service } = preparar();

      await expect(service.buscarPorId(8)).resolves.toBe(registro);
      expect(repositorio.buscarPorId).toHaveBeenCalledExactlyOnceWith(8);
    });

    it("emite un error de aplicación si el ID no existe", async () => {
      const { repositorio, service } = preparar();
      repositorio.buscarPorId.mockResolvedValueOnce(null);

      await expect(service.buscarPorId(8)).rejects.toMatchObject({
        codigo: "NO_ENCONTRADO",
      });
    });

    it("construye la entidad al actualizar y conserva el ID recibido", async () => {
      const { registro, repositorio, service } = preparar();

      await expect(service.actualizar(8, datos)).resolves.toBe(registro);
      expect(repositorio.actualizar).toHaveBeenCalledExactlyOnceWith(
        8,
        entidad,
      );
    });

    it("delega la eliminación del ID recibido", async () => {
      const { repositorio, service } = preparar();

      await expect(service.eliminar(8)).resolves.toBeUndefined();
      expect(repositorio.eliminar).toHaveBeenCalledExactlyOnceWith(8);
    });

    it("propaga conflictos del repositorio", async () => {
      const { repositorio, service } = preparar();
      const duplicado = new ErrorCatalogo(
        "DUPLICADO",
        "El registro ya existe.",
      );
      const enUso = new ErrorCatalogo("EN_USO", "El registro está en uso.");
      repositorio.crear.mockRejectedValueOnce(duplicado);
      repositorio.eliminar.mockRejectedValueOnce(enUso);

      await expect(service.crear(datos)).rejects.toBe(duplicado);
      await expect(service.eliminar(8)).rejects.toBe(enUso);
    });
  });
}

probarServicio(
  "RolService",
  (repositorio) => new RolService(repositorio),
  { nombre: "Operador", descripcion: "Rol operativo" },
  new Rol("Operador", "Rol operativo"),
);

probarServicio(
  "ComisionMedicaService",
  (repositorio) => new ComisionMedicaService(repositorio),
  {
    codigo: "CM001",
    nombre: "Comisión Córdoba",
    direccion: "Calle 123",
    email: "cordoba@example.com",
    telefono: "3511234567",
  },
  new ComisionMedica(
    "CM001",
    "Calle 123",
    "cordoba@example.com",
    "Comisión Córdoba",
    "3511234567",
  ),
);

probarServicio(
  "EstadoService",
  (repositorio) => new EstadoService(repositorio),
  { nombre: "En tránsito", descripcion: "En traslado", ambito: "BOLSIN" },
  new Estado("En tránsito", "En traslado", "BOLSIN"),
);
