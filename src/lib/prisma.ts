import { PrismaClient } from "@prisma/client/extension";
import { PrismaPg } from "@prisma/adapter-pg";

export const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

declare global {
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}