import { hash } from "bcryptjs";
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
    console.log(process.env.DIRECT_URL)
    const email = process.env.ADMIN_EMAIL;
    const senha = process.env.ADMIN_SENHA;

    if (!email) throw new Error("ADMIN_EMAIL is not set");
    if (!senha) throw new Error("ADMIN_SENHA is not set");

    const senhaHash = await hash(senha,12)

    const admin = await prisma.administrador.create({
        data:{
            email,
            senha:senhaHash 
        },
    });
    
    console.log("Admin criado com sucesso", admin)
    
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

