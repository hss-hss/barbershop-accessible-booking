"use client"

import {  useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usuarioSchema} from "../lib/validations/usuarioSchema";
import { registerUser } from "../lib/services/axiosClient";

export async function useRegisterUser(){
    const [ apiError, setApiError ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);


    const formRegisterUser = useForm({
        resolver:  zodResolver(usuarioSchema),
        defaultValues:{
            nome: "",
            sobrenome: "",
            nomeUsuarioFilho:"",
            email:"",
            senha:"",
            telefone:"",
            endereco:"",
            dataNascimento:""
        }
    })

    const onSubmit = formRegisterUser.handleSubmit(async(values) =>{
        try{
            await registerUser(values);
            console.log("Usuario registrado com sucesso!");
            formRegisterUser.reset();
        }
        catch(error){
            setApiError("Erro ao criar usuario");
        }
        finally{
            setIsLoading(false);
        }
    });

    return {...formRegisterUser,onSubmit,apiError, isLoading};
}

