import React from 'react'
import {useLocation, Link} from 'react-router-dom';
import { Login, Register } from '../Components/Auth';



const Auth = () => {

  const location = useLocation();

  let {pathname} = location;

  const isSignup = pathname === '/signup';


  let template = isSignup ? <Register/> : <Login/>;

  return (
    <div className="auth-page">
        <div className="wrapper">

          <div className="header flex">
            <div className="logo">
                <p>Mirage</p>
            </div>

            <div className="cta">
                {
                    isSignup ?
                    <>   
                        <span className="mr-2">Already have an account?</span>

                        <Link to="/signin" className="btn btn-primary">
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
                isSignup ?
                <>Sign Up</>
                :
                <>Login</>
            }  
          </p>


          <div className={`auth_content`}>
            {template}

          </div>
      </div>



    </div>
  )
}

export default Auth
