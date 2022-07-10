import { createContext, useState,useEffect } from "react";
import { useCookies} from "react-cookie";
// import { useNavigate } from "react-router-dom";

import { getSchoolsRequest,getSchoolRequest, fecthSchoolSlotsRequest} from "../constants/requests";
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

    // General Info Widgets
    const [info, setInfo] = useState(null);

    const [slots, setSlots] = useState(null);

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
        // console.log("Fetching school with id:", id)

        let school = null;

        let error_message = errorMessage;

        let school_exists = false;

        // check school exits
        if (schools && schools.length > 0){
            for (let each of schools){

                if(each.id === parseInt(id)){
                    // school = {...each}
                    school_exists = true
                    error_message = null
                    break
                }
            }
        }


        if(!school_exists){
            error_message = "School Not Found"
        }
        else{

            let response = await getSchoolRequest(id, tokens?.access);

            if (!response.error){

                let {status,data} = response;

                if (status === 200){
                    
                    if (data.length === 0){
                        error_message = "Could not find school"
                        
                    }else{
                        // setErrorMessage(()=>"")
                        error_message = null;
                    }

                    // console.log(data);
                    
                    // setSchools(()=> [...data]);
                    school = {...data};

                    // setLoading(false)

                }else{
                    error_message = "Could not load school";
                }

            }


            else{
                error_message = response.error_message;
                school = null;
            }
        }

        setCurrentSchool(()=>{
            if (!school) return null

            // temporary feature
            // remove school key if school not approved
            if (!school.approved){
                delete school.school_key
            }
            
            return {...school}
        })

        setErrorMessage(()=>error_message)


    }


    const loadSlots = async (school_id) => {
        let slots = null;

        let error_message = errorMessage;


        let response = await fecthSchoolSlotsRequest(school_id, tokens?.access);

        if (!response.error) {

            let { ok, data } = response;

            if (ok) {

                // setSchools(()=> [...data]);
                slots = data;

                // setLoading(false)

            } else {
                error_message = "Could not load slots";
            }

        }


        else {
            error_message = response.error_message;
            slots = null;
        }


        // console.log(slots, error_message);


        setSlots(() => {
            if (!slots) return null

            return [...slots]
        })

        setErrorMessage(() => error_message)


    }


    let contextData = {
        loading,
        schools,
        currentSchool,
        errorMessage,
        info,
        slots,
        loadSlots,
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