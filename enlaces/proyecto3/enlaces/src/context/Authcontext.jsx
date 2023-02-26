import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useService } from "../services/userService";

const Authcontext = createContext(null);

export const AuthProvider = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem('token'));
    const [user,setUser] = useState();
    

    useEffect(()=>{
        const fetchData = async ()=>{
            const user = await useService(token)
            if (user) setUser(user);

        }
        if (token) fetchData();
    },[token])

    const setTokenInLocal = (newToken,) => {
        if (newToken) {
            localStorage.setItem('token',newToken);
            

        }else {
            localStorage.removeItem('token');
            setUser(null);
        }
        setToken(newToken);
    };
    return <Authcontext.Provider value={{token,setTokenInLocal, user,setUser}}>
        {children}
        </Authcontext.Provider>

}

export const useToken = () =>{
    return useContext(Authcontext);
}