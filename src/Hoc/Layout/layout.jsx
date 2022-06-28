import React,{useEffect, useContext} from 'react'
import {Outlet, useNavigate} from 'react-router-dom';

// COMPONENTS
import Header from '../../Components/header';
import Footer from '../../Components/footer';


// Widgets
import Info from '../../widget/info';
import AuthContext from '../../context/auth_context';
import SchoolContextWrapper from '../wrappers/school_context_wrapper';
import SchoolContext from '../../context/school_context';


/* 
    Wrapped around component, doing the following
    > provding component tokens,
    > verfying if tokens are still valid
    > redirecting back to authentication
*/
const Layout = () => {
    

    const {updateInfo} = useContext(SchoolContext);

    const navigate = useNavigate();

    // eslint-disable-next-line
    const {user} = useContext(AuthContext);
    


    useEffect(()=>{
        if(!user){
            navigate('/signin');
        }
        if (!user.verified){
            updateInfo(
                {
                    type:"warning", //default
                    text:"You are yet to verify your account",
                    actionText: "Click here to verify",
                    action:()=>{
                        console.log("Verifying account...")
                        // clearInfo()
                    },
                    closeable:false
                }
            )
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

export default SchoolContextWrapper(Layout);
