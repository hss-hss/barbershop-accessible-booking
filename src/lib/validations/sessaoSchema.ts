import  * as z  from "zod"; 

 const Time = z.iso.time();

export const sessaoSchema = z.object({

    idUsuario: z.string().min(1),
    nomeUsuarioFilho: z.string().min(1),
    dataSessao: z.coerce.date(),
    horarioSessao: z.iso.time(),
    sessaoCombo: z.boolean(),
    status: z.boolean()
    
})