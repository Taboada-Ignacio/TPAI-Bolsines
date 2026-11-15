import { ComisionMedicaRepositoryPrisma } from "@/infrastructure/ComisionMedicaRepositoryPrisma";
import { EmpleadoRepositoryPrisma } from "@/infrastructure/EmpleadoRepositoryPrisma";
import { RolRepositoryPrisma } from "@/infrastructure/RolRepositoryPrisma";
import { EmpleadoService } from "@/services/EmpleadoService";

export const empleadoService = new EmpleadoService(
  new EmpleadoRepositoryPrisma(),
  new RolRepositoryPrisma(),
  new ComisionMedicaRepositoryPrisma(),
);
