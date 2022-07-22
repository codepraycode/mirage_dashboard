import React,{useEffect, useContext} from 'react'
import {Outlet} from 'react-router-dom';

// COMPONENTS
import Header from '../Components/header';
import Footer from '../Components/footer';


// Widgets
import Info from '../widget/info';
// import SchoolContextWrapper from '../wrappers/school_context_wrapper';
import StoreContext from '../context';
import { VerifyUserRequest } from '../constants/requests';


/* 
    Wrapped around component, doing the following
    > provding component tokens,
    > verfying if tokens are still valid
    > redirecting back to authentication
*/
const Layout = () => {

    // eslint-disable-next-line
    const { user, updateInfo, logoutUser } = useContext(StoreContext);
    
    const processingInfo = {
        text: "Sending link...",
        actionText: null,
        action: null,
        closeable: false
    }

    const errorInfo = {
        type:'danger',
        text: "Could not send verification link",
        actionText: "Click to try again",
        action: () => {
            handleVerifiyUser()
        },
        closeable: false
    }

    const successInfo = {
        type:'success',
        text: 'Verification link sent!',
        actionText: null,
        action: null,
        closeable: true
    }

    const handleVerifiyUser = ()=>{
        // console.log("Verifying account...", user.id)

        VerifyUserRequest(user.id)
        .then(res=>{

            let {ok,data} = res;

            if (!ok){
                updateInfo(errorInfo);
                return
            }

            let { message } = data;

            if (message){
                successInfo.text = message;
            }

            updateInfo(successInfo);
            return
        })
        .catch(err=>{
            updateInfo(errorInfo)
            return
        })

        updateInfo(processingInfo);

        return
    }


    useEffect(()=>{
        if(!user){
            // navigate('/signin');
            logoutUser()
        }
        if (!user?.verified){
            updateInfo(
                {
                    type:"warning", //default
                    text:"You are yet to verify your account",
                    actionText: "Click here to verify",
                    action:()=>{
                        handleVerifiyUser()
                    },
                    closeable:false
                }
            )
        }

        const webtitle = "Mirage Education";
        // console.log(webtitle)
        document.title = `Dashboard | ${webtitle}`

        return ()=>{
            document.title = webtitle
        }
    // eslint-disable-next-line
    },[])

    return (
        <>
            <Header/>
            
            <Info/>

            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;
