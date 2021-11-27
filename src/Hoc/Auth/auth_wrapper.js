import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {SetCookie} from '../../utils';
import { useCookies } from "react-cookie";

const AuthWrapper = (props)=>{
    let navigate = useNavigate();

    let [accessCookie,setAccessCookie,removeAccessCookie] = useCookies(['access']);
    let [refreshCookie,setRefreshCookie,removeRefreshCookie] = useCookies(['refresh']);


    const handleSetCookie = (raw_tokens)=>{
        // console.log(props)
        // if (tokens && tokens !== null){
        //     // Set the tokens to cookie
        
        // }

        let tokens = ParseToJsonString(raw_tokens)
        tokens = JSON.parse(tokens);
        

        // SetCookie(tokens);
        // console.log(tokens)
        handleCookie(tokens)
        // console.log(tokens)

        navigate(`/`)
        
    }

    const handleCookie = (data) => {

    // Object.keys(data).forEach((item) => {
    //     localStorage.setItem(item, data[item])
    setRefreshCookie("refresh", data.refresh, {
        path: "/"
    });

    setAccessCookie("access", data.access, {
        path: "/"
    });


    console.log(accessCookie,refreshCookie);
        
    // });
    }

    const clearCookie = ()=>{
        if (props.authData && props.authData !== null){
            // console.log(props.authData)
            handleSetCookie(props.authData.tokens)
        }
        else{
            removeRefreshCookie("refresh", {
            path: "/"
        });

        removeAccessCookie("access",  {
            path: "/"
        });
        }
        
    }

    

    function ParseToJsonString(wrongString){
        if(typeof(wrongString) ==='string') return wrongString.replaceAll(`'`,`"`)
    }

    useEffect(clearCookie);
    // console.log(props)
    // console.log(process.env.REACT_APP_DEV);
        return (
            <div className="auth-page">
                <div className="wrapper">
                    <div className="header flex">
                        <div className="logo">
                            <p>Mirage</p>
                        </div>
                        <div className="cta">
                            {
                            props.signup ?
                            <>   
                                <span className="mr-2">Already have an account?</span>

                                <Link to="/login" className="btn btn-primary">
                                    Login
                                </Link>
                            </>
                            :
                            <>
                               <span>Dont have an account?</span>


                                <Link to="/signup" className="btn btn-primary">
                                    Sign Up
                                </Link>
                            </>
                        }
                         
                        </div>
                    </div>


                    <p className="text-center lead">
                        {
                            props.signup ?
                            <>Sign Up</>
                            :
                            <>Login</>
                        }
                        
                    </p>


                    <div className={`auth-card ${props.extraClass}`}>
                        {props.children}

                    </div>

                </div>
            </div>
        )
    
}


export default AuthWrapper;