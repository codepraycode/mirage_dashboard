import { createContext, useState, useEffect } from "react";
import { useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { refreshTokenRequest,loginRequest } from "../constants/requests";

import { CircleLoader } from "../widget/Preloaders";

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

    const [loading, setLoading] = useState(true);

    


    const navigate = useNavigate();

    // console.log(authTokens.refresh);

    const updateToken = async ()=>{

        let response = await refreshTokenRequest(authTokens?.refresh);

        if(!response.error){
            let {status,data} = response;

            if(status === 200){
                setAuthTokens(data);
                setUser(jwtDecode(data.access))
                setAuthCookie('authTokens', data);
            }else{
                logoutUser()
            }
        }
        
        if(loading){
            setLoading(false);
        }

    }
    
    const loginUser = async(form_data, cb)=>{

        let response = await loginRequest(form_data)
        
        if(response.error){
            cb({
                message:response.error_message
            });
            return
        }


        let {data} = response;

        if(response.status === 200){

            setAuthTokens(data);
            setUser(jwtDecode(data.access))

            setAuthCookie('authTokens', data);
            cb(null);// no issue

            return

        }else if(response.statusText === "Unauthorized"){
            
            cb({
                message:"Invalid Username or Password"
            });
            return
            // console.log(response)
        }
        else{
            // console.log(response);
            cb({
                message:"Unable to Login, Try again",
                data,
            });
            return
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
        token:authTokens?.access,

        loginUser,
        logoutUser,

    }



    useEffect(()=>{

        // on fresh render
        if(loading){
            updateToken();
        }

        // consecutive renders
        let fourMinutes = 1000 * 60 * 4;
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)


        return ()=> clearInterval(interval);
    // eslint-disable-next-line
    },[authTokens,loading])

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <CircleLoader/> : children}
        </AuthContext.Provider>
    )
}