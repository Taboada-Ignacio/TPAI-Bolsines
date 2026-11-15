import { BolsinRepositoryPrisma } from "@/infrastructure/BolsinRepositoryPrisma";
import { ComisionMedicaRepositoryPrisma } from "@/infrastructure/ComisionMedicaRepositoryPrisma";
import { EstadoRepositoryPrisma } from "@/infrastructure/EstadoRepositoryPrisma";
import { BolsinService } from "@/services/BolsinService";

export const bolsinService = new BolsinService(
  new BolsinRepositoryPrisma(),
  new ComisionMedicaRepositoryPrisma(),
  new EstadoRepositoryPrisma(),
);
