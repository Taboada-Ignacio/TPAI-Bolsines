import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/client";
import { crearPrismaEnMemoria } from "./pg-mem-prisma";

const globalForPrisma = globalThis as typeof globalThis & {
  bolsinesPrisma?: PrismaClient;
};

let prisma = globalForPrisma.bolsinesPrisma;

export function getPrisma(): PrismaClient {
  const existing = prisma ?? globalForPrisma.bolsinesPrisma;
  if (existing) {
    prisma = existing;
    return existing;
  }

  if (process.env.USE_PG_MEM === "true") {
    prisma = crearPrismaEnMemoria();
  } else {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("Se requiere DATABASE_URL para usar Prisma.");
    }

    prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
  }

  if (
    process.env.NODE_ENV !== "production" ||
    process.env.USE_PG_MEM === "true"
  ) {
    globalForPrisma.bolsinesPrisma = prisma;
  }

  return prisma;
}
