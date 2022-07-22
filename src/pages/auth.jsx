import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import { Login, Register } from '../Components/Auth';




const Auth = () => {
  


  
  const {pathname} = useLocation();

  // let {pathname} = location;

  const isSignup = pathname === '/signup';


  let template = isSignup ? <Register/> : <Login/>;


  useEffect(()=>{
    // Change the background color of body
    let test = document.getElementsByTagName("body");
    test[0].classList.add("bg-primary");
    return ()=>{
      // revert the change of body background color
      test[0].classList.remove("bg-primary");
    }
  })

  return (
    <div className="auth_page">
        <div className="auth_page__wrapper">

          <div className="brand">
                <p>Mirage Dashboard</p>
          </div>


          <div className={`auth_page__wrapper--content ${isSignup ? '':'login'}`}>
            {template}

          </div>
      </div>



    </div>
  )
}

export default Auth
