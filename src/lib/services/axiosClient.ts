import axios from "axios";

export const apiClient = axios.create({
   baseURL: "/api",
   headers:{
    "Content-Type": "application/json",
   },
});

export interface User { 
   nome: string, 
   sobrenome: string,
   nomeUsuarioFilho: string,
   email: string, 
   senha: string, 
   telefone: string, 
   endereco: string,
   dataNascimento: Date
}

export async function registerUser(user: User){
      try {
         const { data } = await apiClient.post<User>("/register", user)
         return data
      } 
      catch(error){
         throw error;
   }  
}

export async function loginUser({email,senha}:{email:string;senha:string}){
   try{
      const { data} = await apiClient.post<User>("/login",{email,senha})
      return data
   } 
   catch(error){
      throw error;
   }
   
}