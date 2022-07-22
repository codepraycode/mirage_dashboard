// App Store
import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { refreshTokenRequest, loginRequest, getSchoolsRequest, getSchoolRequest, fecthSchoolSlotsRequest } from "../constants/requests";
import { CircleLoader } from "../widget/Preloaders";

const StoreContext = createContext();

export default StoreContext;

export const StoreProvider = ({children})=>{
    // Authentication States
    const [authCookie, setAuthCookie, removeCookie] = useCookies();
    const [user, setUser] = useState(() => {
        let tokens = authCookie['authTokens'];

        if (!tokens) {
            return null
        }


        return jwtDecode(tokens.access)

    });
    const [authTokens, setAuthTokens] = useState(() => {
        return authCookie['authTokens'] || null
    });

    // Loading State
    const [loading, setLoading] = useState(true);
    // Error State
    const [errorMessage, setErrorMessage] = useState(null);

    // School States
    const [schools, setSchools] = useState(null);
    const [currentSchool, setCurrentSchool] = useState(null);

    // Info State
    const [info, setInfo] = useState(null);

    // Slots State
    const [slots, setSlots] = useState(null);


    const navigate = useNavigate();
    const location = useLocation();

    // Authentication
    const updateToken = async () => {

        let response = await refreshTokenRequest(authTokens?.refresh);

        if (!response.error) {
            let { ok, data } = response;

            if (ok) {
                setAuthTokens(data);
                setUser(jwtDecode(data.access))
                setAuthCookie('authTokens', data);
            } else {
                logoutUser()
            }
        }

        if (loading) {
            setLoading(false);
        }

    }

    const loginUser = async (form_data, cb) => {

        let response = await loginRequest(form_data)

        if (response.error) {
            cb({
                message: response.error_message
            });
            return
        }


        let { data } = response;

        if (response.status === 200) {

            setAuthTokens(data);
            setUser(jwtDecode(data.access))

            setAuthCookie('authTokens', data);
            redirect()
            cb(null);// no issue

            return

        } else if (response.statusText === "Unauthorized") {

            cb({
                message: "Invalid Username or Password"
            });
            return
            // console.log(response)
        }
        else {
            // console.log(response);
            cb({
                message: "Unable to Login, Try again",
                data,
            });
            return
        }




    }

    const blacklisted_redirects = ['/signin', '/']
    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        removeCookie('authTokens');

        const { pathname } = location;
        
        let link = '/signin';

        
        if (!blacklisted_redirects.includes(pathname)) {
            link = `/signin?rdr=${pathname}`;
        }    
        navigate(link);
    }

    

    const getAccessToken = ()=>{
        const access_token = authTokens?.access
        

        if (!access_token) { 
            // console.log("should redirect!") 
            logoutUser()
        }

        return access_token
    }

    
    const redirect = () => {
        const { search } = location;

        const pathname = search.replace('?rdr=','')

        navigate(pathname)

        return
    }
    // ===================


    // Info
    const updateInfo = ({ type, text, actionText, action, closeable }) => {
        /*
            info sample => {
            type:"warning", //default
            text:"A Sample warning info",
            actionText: "call to action",
            action:()=>{console.log("Performaing something...")},
            closable:true
            });
        */
        setInfo(() => {
            return {
                type,
                text,
                actionText,
                action,
                closeable
            }
        })
    }

    const clearInfo = () => {
        if (!info) return

        setInfo(() => null)
    }

    // ===================

    // School
    const loadSchools = async () => {
        // console.log("Loading Schools...");
        let error_message = null;
        let all_schools = [];

        const access_token = getAccessToken()

        let res = await getSchoolsRequest(access_token);

        if (!res.error) {

            let { ok, data } = res;

            if (ok) {

                if (data.length === 0) {
                    error_message = "No school created";
                } else {
                    all_schools = data;
                    error_message = null;
                }

            } else if (res.statusText === "Unauthorized") {
                // error_message = "Could not load schools";
                // console.log("should redirect!")
                // logoutUser()
                return false
            }else{
                console.log("Res: ",res)
                error_message = "Could not load schools";
            }
        }
        else {
            error_message = res.error_message;
        }

        setSchools(() => [...all_schools])

        if(error_message){
            setErrorMessage(() => error_message)
        }

        if (loading) {
            setLoading(() => false)
        }
    }

    const loadSchool = async (schoolid) => {
        // console.log("Fetching school with id:", id)

        let school = null;

        let error_message = null;


            const access_token = getAccessToken()

            let res = await getSchoolRequest(schoolid, access_token);

            if (!res.error) {

                let { ok, data } = res;

                if (ok) {

                    if (data.length === 0) {
                        error_message = "Could not find school"

                    } else {
                        school = data;
                        error_message = null;
                    }

                } 
                else if (res.statusText === "Unauthorized") {
                    logoutUser();
                    return;
                }
                else {
                    error_message = "Could not load school";
                }

            }
            else {
                error_message = res.error_message;
                school = null;
            }
        

        setCurrentSchool(() => {
            if (!school) return null

            // temporary feature
            // remove school key if school not approved
            if (!school.approved) {
                delete school.school_key
            }

            return { ...school }
        })

        setErrorMessage(() => error_message)
    }
    // ===================

    // Slot
    const loadSlots = async (school_id) => {
        let school_slots = null;

        let error_message = null;


        const access_token = getAccessToken()

        let res = await fecthSchoolSlotsRequest(school_id, access_token);

        if (!res.error) {

            let { ok, data } = res;

            if (ok) {

                school_slots = data;

            } 
            else if (res.statusText === "Unauthorized") {
                // error_message = "Could not load schools";
                // console.log("should redirect!")
                logoutUser()
            }
            else {
                error_message = "Could not load slots";
            }

        }


        else {
            error_message = res.error_message;
            school_slots = null;
        }


        setSlots(() => {
            if (!school_slots) return null

            return [...school_slots]
        })

        setErrorMessage(() => error_message)

    }
    // ===================


    const contextData = {
        user: user,
        token: authTokens?.access,//may deprecate
        schools,
        currentSchool,
        errorMessage,
        info,
        slots,

        // Methods
        loadSlots,
        loadSchools,
        loadSchool,
        updateInfo,
        clearInfo,
        loginUser,
        logoutUser,

    }


    useEffect(() => {

        // on fresh render
        if (loading) {
            updateToken();
        }

        // consecutive renders
        let fourMinutes = 1000 * 60 * 4;
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)


        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [authTokens, loading])


    return (
        <StoreContext.Provider value={contextData}>
            <StoreContext.Consumer>

                
                {
                    (storecontext) => {

                        return (
                            <>
                                {
                                    storecontext.loading ? 
                                    <CircleLoader /> 
                                    : 
                                    children
                                }

                            </>
                        )
                    }

                }
            </StoreContext.Consumer>
        </StoreContext.Provider>
    )

}