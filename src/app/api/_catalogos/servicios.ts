import { ComisionMedicaRepositoryPrisma } from "@/persistence/ComisionMedicaRepositoryPrisma";
import { EstadoRepositoryPrisma } from "@/persistence/EstadoRepositoryPrisma";
import { RolRepositoryPrisma } from "@/persistence/RolRepositoryPrisma";
import { ComisionMedicaService } from "@/services/ComisionMedicaService";
import { EstadoService } from "@/services/EstadoService";
import { RolService } from "@/services/RolService";

export const rolService = new RolService(new RolRepositoryPrisma());
export const comisionMedicaService = new ComisionMedicaService(
  new ComisionMedicaRepositoryPrisma(),
);
export const estadoService = new EstadoService(new EstadoRepositoryPrisma());
