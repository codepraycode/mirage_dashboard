import { createContext, useState, useEffect } from "react";
import { useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { refreshTokenRequest,loginRequest,getSchoolsRequest } from "../constants/requests";

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



    // For Schools
    const [schools, setSchools] = useState(null);
    // const [loadingSchools, setLoadingSchools] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const loadSchools = async ()=>{
        let error_message = "";
        let all_schools = [];

        let response = await getSchoolsRequest(authTokens?.access);

        if (!response.error){
            // error_message = response.error_message;

            // setErrorMessage(()=>response.error_message)
            // return

            let {status,data} = response;

            if (status === 200){
                // console.log(data);
                
                if (data.length === 0){
                    // setErrorMessage(()=>"You haven't created any school")
                    error_message = "You haven't created any school";
                    
                }else{
                    // setErrorMessage(()=>"")
                    error_message = "";
                }

                // console.log(data);
                
                // setSchools(()=> [...data]);
                all_schools = [...data];

                // setLoading(false)

            }else if(response.statusText === "Unauthorized"){
                logoutUser();
            }
        }


        else{
            error_message = response.error_message;
            
        }


        setSchools(()=>[...all_schools])
        setErrorMessage(()=>response.error_message)


        return {
            schools:all_schools,
            errorMessage:error_message
        }

        
        
    }

    const fetchAllSchools = async()=>{
        
        let data = await loadSchools();

        return data;
        


        // if (schools && schools.length > 0){
        //     for (let each of schools){

        //         if(each.id === parseInt(id)){
        //             response.school = {...each}
        //             response.errorMessage = ""
        //             found = true;
        //             break
        //         }
        //     }
        // }


        // if(!response.schools || response.schools.length === 0 ){
        //     response.schools = []
        //     response.errorMessage = "School Not Found"
        // }

        // return response;
    }
    
    const fetchSchool = async(id)=>{
        console.log("Fetching school with id:", id)
        
        
        let response = {
            school:null,
            errorMessage,
        }

        let found = false;


        if (schools && schools.length > 0){
            for (let each of schools){

                if(each.id === parseInt(id)){
                    response.school = {...each}
                    response.errorMessage = ""
                    found = true;
                    break
                }
            }
        }


        if(!response.school || !found ){
            response.school = {}
            response.errorMessage = "Could not find this school"
        }

        return response;
    }


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

            // loadSchools(data.access)
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
        fetchSchool,
        fetchAllSchools
        
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
            {loading ? null : children}
        </AuthContext.Provider>
    )
}