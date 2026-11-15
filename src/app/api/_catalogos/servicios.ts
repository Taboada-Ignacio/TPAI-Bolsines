import { ComisionMedicaRepositoryPrisma } from "@/infrastructure/ComisionMedicaRepositoryPrisma";
import { EstadoRepositoryPrisma } from "@/infrastructure/EstadoRepositoryPrisma";
import { RolRepositoryPrisma } from "@/infrastructure/RolRepositoryPrisma";
import { ComisionMedicaService } from "@/services/ComisionMedicaService";
import { EstadoService } from "@/services/EstadoService";
import { RolService } from "@/services/RolService";

export const rolService = new RolService(new RolRepositoryPrisma());
export const comisionMedicaService = new ComisionMedicaService(
  new ComisionMedicaRepositoryPrisma(),
);
export const estadoService = new EstadoService(new EstadoRepositoryPrisma());
