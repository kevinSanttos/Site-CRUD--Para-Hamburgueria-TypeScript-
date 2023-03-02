import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";


export function ProtectRoute(){
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    useEffect(()=> {
        if(!user){
            navigate("/")
        }
    }, [])
    return(
        <>
            {
                user ? <Outlet/> : null
            }
        </>
    )
}