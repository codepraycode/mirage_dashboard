import React,{useState, useEffect} from 'react'
import {Outlet} from 'react-router-dom';

// COMPONENTS
import Header from '../../Components/header';
import Footer from '../../Components/footer';

// cookie
// import { useCookies } from "react-cookie";

/* 
    Wrapped around component, doing the following
    > provding component tokens,
    > verfying if tokens are still valid
    > redirecting back to authentication
*/
const Layout = () => {
    // eslint-disable-next-line
    const [tokens,setTokens] = useState({
        access:'',
        refresh:''
    });

    // eslint-disable-next-line
    const refreshAccessToken = (refresh_token) => {
        // fetch access tokens
        console.log(refresh_token);
    };

    const verifyCookie = ()=>{
        // Checks if access token is available, or valid
        // if access token is not valid, use refresh token to renew access token
        // if either access and refresh token isn't valid or available
        //      redirect back to authentication sign in

        // if(this.state.tokens.refresh_token === null){
        //     //  No Token in Cookie
        //     window.location.href="/login";
        // }

        return
    }



    useEffect(()=>{
        verifyCookie();
    })


    

    return (
        <div>
            <Header/>
            <Outlet test="testing props"/>
            <Footer/>
        </div>
    )
}

export default Layout;
