import { createContext, useState } from "react";
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


    // const [loading, setLoading] = useState(true);


    const tokens = authCookie['authTokens'];



    const loadSchools = async ()=>{
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
    }

    // const fetchAllSchools = async()=>{
        
    //     let data = await loadSchools();

    //     return data;
    // }
    
    const loadSchool = async(id)=>{
        console.log("Fetching school with id:", id)
        

        let school = null;

        let error_message = errorMessage;
        
        // let response = {
        //     school:null,
        //     errorMessage,
        // }

        let found = false;


        if (schools && schools.length > 0){
            for (let each of schools){

                if(each.id === parseInt(id)){
                    school = {...each}
                    error_message = null
                    found = true;
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
        // loading,
        schools,
        currentSchool,

        loadSchools,
        loadSchool,
        
    }


    return(
        <SchoolContext.Provider value={contextData}>
            {children}
        </SchoolContext.Provider>
    )
}