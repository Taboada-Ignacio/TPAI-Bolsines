import { BolsinRepositoryPrisma } from "@/persistence/BolsinRepositoryPrisma";
import { ComisionMedicaRepositoryPrisma } from "@/persistence/ComisionMedicaRepositoryPrisma";
import { EstadoRepositoryPrisma } from "@/persistence/EstadoRepositoryPrisma";
import { BolsinService } from "@/services/BolsinService";

export const bolsinService = new BolsinService(
  new BolsinRepositoryPrisma(),
  new ComisionMedicaRepositoryPrisma(),
  new EstadoRepositoryPrisma(),
);
