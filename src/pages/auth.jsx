import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import { Login, Register } from '../Components/Auth';



const Auth = () => {

  const location = useLocation();

  let {pathname} = location;

  const isSignup = pathname === '/signup';


  let template = isSignup ? <Register/> : <Login/>;


  useEffect(()=>{
    let test = document.getElementsByTagName("body");
    test[0].classList.add("bg-primary");
    // console.log(test, test[0].classList);
    return ()=>{
      test[0].classList.remove("bg-primary");
    }
  })

  return (
    <div className="auth_page">
        <div className="auth_page__wrapper">

          <div className="brand">
                <p>Mirage</p>
          </div>


          <div className={`auth_page__wrapper--content ${isSignup ? '':'login'}`}>
            {template}

          </div>
      </div>



    </div>
  )
}

export default Auth
