import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AuthWrapper = (props)=>{
    let navigate = useNavigate();

    const proceed = ()=>{
        console.log(props)
        if (props.authData && props.authData !== null){
            // Set the tokens to cookie
            let tokens = ParseToJsonString(props.authData.tokens)
            tokens = JSON.parse(tokens);
            

            SetCookie(tokens);

            navigate(`/`)
        }
        
    }


    const SetCookie = (data)=>{
        Object.keys(data).forEach((item)=>{
            localStorage.setItem(item,data[item])
        });
    }

    function ParseToJsonString(wrongString){
        if(typeof(wrongString) ==='string') return wrongString.replaceAll(`'`,`"`)
    }
    useEffect(proceed);

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