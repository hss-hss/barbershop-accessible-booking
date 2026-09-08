import { z } from "zod"

export const usuarioSchema= z.object({

    nome: z.string().min(1),
    sobrenome: z.string().min(1),
    nomeUsuarioFilho: z.string().min(1),
    email: z.email({message: "Endereço de email invalido"}),
    senha: z.string().min(6),
    telefone: z.string().min(11),
    endereco: z.string().min(1),
    dataNascimento: z.coerce.date()
})