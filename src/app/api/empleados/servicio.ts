import { ComisionMedicaRepositoryPrisma } from "@/persistence/ComisionMedicaRepositoryPrisma";
import { EmpleadoRepositoryPrisma } from "@/persistence/EmpleadoRepositoryPrisma";
import { RolRepositoryPrisma } from "@/persistence/RolRepositoryPrisma";
import { EmpleadoService } from "@/services/EmpleadoService";

export const empleadoService = new EmpleadoService(
  new EmpleadoRepositoryPrisma(),
  new RolRepositoryPrisma(),
  new ComisionMedicaRepositoryPrisma(),
);
