import React,{useEffect} from 'react';
import {Outlet,useLocation} from 'react-router-dom';


const AuthWrapper = () => {
    const location = useLocation();

  let {pathname} = location;

  const isSignup = pathname === '/signup';

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
                <p>Mirage</p>
          </div>


          <div className={`auth_page__wrapper--content ${isSignup ? '':'login'}`}>
            <Outlet/>

          </div>
      </div>



    </div>
  )
}

export default AuthWrapper;