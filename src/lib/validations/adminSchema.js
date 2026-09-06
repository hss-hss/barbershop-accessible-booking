import { z } from "zod";

export const adminSchema = z.object({
    email: z.email({ message: "Endereço de email inválido" }),
    senha: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
})