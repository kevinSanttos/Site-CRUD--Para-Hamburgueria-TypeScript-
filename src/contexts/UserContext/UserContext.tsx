import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast} from "react-toastify";
import { iProviderProps, iUser, iUserRegister, iUserContext, iUserLogin } from "../@types";

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({children}: iProviderProps) => {

    const [user, setUser] = useState <iUser | null>(null)

    const navigate = useNavigate()

    useEffect(()=>{
         function autoLogin(){
            const token = localStorage.getItem("@TOKEN")
            if(token){
                getUserLogado()
            }
             else{
                localStorage.removeItem("@TOKEN")
                navigate("/")
            }
        }
        autoLogin()

    }, [])

     function getUserLogado(){
        navigate("/shop")
    }

    async function registerUser(data: iUserRegister){
        const newdata: iUserRegister = {
            email: data.email,
            password: data.password,
            name: data.name
        }
        try {
            const response = await api.post("/users", newdata)
            console.log(response)
            navigate('/')
            toast.success("Cadastro efetuado com sucesso!")
        } catch (error) {
            console.log(error)
            toast.error("Erro no cadastro!")
        }
    }

    async function loginUser(data: iUserLogin){
       const newdata: iUserLogin ={
        email: data.email,
        password: data.password
        }
       
        try {
            const response = await api.post("/login", newdata)
            console.log(response)
           setUser(response.data.user)
            toast.success("Login efetuado com sucesso!")
            navigate("/shop")
           localStorage.setItem("@TOKEN", response.data.accessToken)
        } catch (error) {
            console.log(error)
            toast.error("Erro no Login!")
        }
    }
    function logoutUser(){
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
    }

    return(
        <UserContext.Provider value={{registerUser, loginUser, logoutUser, user}}>
            {children}
        </UserContext.Provider>
    )
}