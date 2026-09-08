import {  useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usuarioSchema} from "../lib/validations/usuarioSchema";
import { loginUser } from "../lib/services/axiosClient";

export async function useLoginUser() {
    const [apiError, setApiError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const formLoginUser = useForm({
        resolver: zodResolver(usuarioSchema),
                defaultValues: {
                email: "",
                senha:""
                }
            }
        )
    
    const onSubmit = formLoginUser.handleSubmit(async(values) =>{
            try{
                await loginUser(values);
                console.log("Usuario logado com sucesso");
                formLoginUser.reset();
            }catch(error){
                return setApiError("erro ao logar usuario");
            }finally{
                setIsLoading(false);
            }
        }
    )
}