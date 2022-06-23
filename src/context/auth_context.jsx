import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();


export default AuthContext;

// Provider
export const AuthProvider = ({children})=>{
    
    
    const [authCookie, setAuthCookie] = useCookies();
    const [user,setUser] = useState(null);
    const [authTokens,setAuthTokens] = useState(null);

    console.log(authCookie);
    const loginUser = async(form_data, cb)=>{

        let response = await fetch('http://127.0.0.1:8000/api/token/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(form_data)
        });

        let data = await response.json();

        if(response.status === 200){
            setAuthTokens(data);
            setUser(jwtDecode(data.access))

            setAuthCookie('authTokens', data);
            // console.log(data)
            cb(null);
        }else{
            // alert("Something went wrong!");
            cb("err");
            // console.log(response)
        }

        
        

    }

    let contextData = {
        user:user,
        loginUser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}