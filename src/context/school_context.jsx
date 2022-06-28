import { createContext, useState,useEffect } from "react";
import { useCookies} from "react-cookie";
// import { useNavigate } from "react-router-dom";

import { getSchoolsRequest } from "../constants/requests";
// import { refreshTokenRequest,loginRequest,getSchoolsRequest } from "../constants/requests";

// import { CircleLoader } from "../widget/Preloaders";

const SchoolContext = createContext();


export default SchoolContext;

// Provider
export const SchoolProvider = ({children})=>{
    
    // fetch tokens from cookie
    const [authCookie] = useCookies();

    // For Schools
    const [schools, setSchools] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const [currentSchool, setCurrentSchool] = useState(null);
    
    const [loading, setLoading] = useState(true);

    const [info, setInfo] = useState(null);

    // const [loading, setLoading] = useState(true);


    const tokens = authCookie['authTokens'];

    /*  
        info sample => {
        type:"warning", //default
        text:"A Sample warning info",
        actionText: "call to action",
        action:()=>{console.log("Performaing something...")},
        closable:true
        });
    */
    const updateInfo = ({type,text,actionText,action,closeable}) =>{
        setInfo(()=>{
            return {
                type,
                text,
                actionText,
                action,
                closeable
            }
        })
    }


    const clearInfo = ()=>{
        if (!info) return

        setInfo(()=>null)
    }

    const loadSchools = async ()=>{
        // console.log("Loading Schools...");
        let error_message = "";
        let all_schools = [];


        let response = await getSchoolsRequest(tokens?.access);

        if (!response.error){

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
                // logoutUser();
                error_message = "Could not load your schools";
            }
        }


        else{
            error_message = response.error_message;
        }

        setSchools(()=>[...all_schools])
        setErrorMessage(()=>error_message)

        if(loading){
            setLoading(()=>false)
        }
    }


    
    const loadSchool = async(id)=>{
        console.log("Fetching school with id:", id)
        

        let school = null;

        let error_message = errorMessage;


        if (schools && schools.length > 0){
            for (let each of schools){

                if(each.id === parseInt(id)){
                    school = {...each}
                    error_message = null
                    break
                }
            }
        }


        if(!school){
            error_message = "Could not find this school"
        }

        // return response;

        setCurrentSchool(()=>{return {...school}})
        setErrorMessage(()=>error_message)
    }


    let contextData = {
        loading,
        schools,
        currentSchool,
        errorMessage,
        info,
        loadSchools,
        loadSchool,
        updateInfo,
        clearInfo
    }



    
    useEffect(()=>{

        // on fresh render
        if(loading){
            loadSchools();
        }

        
    // eslint-disable-next-line
    },[loading])


    return(
        <SchoolContext.Provider value={contextData}>
            {children}
        </SchoolContext.Provider>
    )
}