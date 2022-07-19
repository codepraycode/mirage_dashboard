// App Store
import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
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


    // Authentication
    const updateToken = async () => {

        let response = await refreshTokenRequest(authTokens?.refresh);

        if (!response.error) {
            let { status, data } = response;

            if (status === 200) {
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

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        removeCookie('authTokens');
        navigate('/signin');
    }

    const getAccessToken = ()=>{
        const access_token = authTokens?.access

        if (!access_token) { console.log("should redirect!") }

        return access_token
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
                    error_message = "You don't any school";
                } else {
                    all_schools = data;
                    error_message = null;
                }

            } else if (res.statusText === "Unauthorized") {
                error_message = "Could not load schools";
                console.log("should redirect!")
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

        let school_exists = false;

        

        // check school exits
        if (schools && schools.length > 0) {
            for (let each of schools) {
                if (each.id === parseInt(schoolid)) {
                    // school = {...each}
                    school_exists = true
                    // error_message = null
                    break
                }
            }
        }


        if (!school_exists) {
            error_message = "School Not Found"
        }
        else {

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

                } else {
                    error_message = "Could not load school";
                }

            }
            else {
                error_message = res.error_message;
                school = null;
            }
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

            } else {
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