import { createContext, useState, useEffect } from "react";
import { useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();


export default AuthContext;

// Provider
export const AuthProvider = ({children})=>{
    
    // fetch tokens from cookie
    const [authCookie, setAuthCookie, removeCookie] = useCookies();
    
    const [user,setUser] = useState(()=>{
        let tokens = authCookie['authTokens'];

        if (!tokens){
            return null
        }


        return jwtDecode(tokens.access)

    });
    
    const [authTokens,setAuthTokens] = useState(()=>{
        return authCookie['authTokens'] || null
    });

    const navigate = useNavigate();

    // console.log(authCookie['authTokens']);
    // console.log(authTokens);
    // console.log(user);
    
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

    const logoutUser = ()=>{
        setAuthTokens(null)
        setUser(null)
        removeCookie('authTokens');
        navigate('/signin');
    }

    let contextData = {
        user:user,
        loginUser,
        logoutUser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}