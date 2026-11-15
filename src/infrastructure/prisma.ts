import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/client";

const globalForPrisma = globalThis as typeof globalThis & {
  bolsinesPrisma?: PrismaClient;
};

let prisma = globalForPrisma.bolsinesPrisma;

export function getPrisma(): PrismaClient {
  if (prisma) {
    return prisma;
  }

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("Se requiere DATABASE_URL para usar Prisma.");
  }

  prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.bolsinesPrisma = prisma;
  }

  return prisma;
}
