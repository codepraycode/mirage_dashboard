import React,{useEffect, useContext} from 'react'
import {Outlet, useNavigate} from 'react-router-dom';

// COMPONENTS
import Header from '../Components/header';
import Footer from '../Components/footer';


// Widgets
import Info from '../widget/info';
// import SchoolContextWrapper from '../wrappers/school_context_wrapper';
import StoreContext from '../context';


/* 
    Wrapped around component, doing the following
    > provding component tokens,
    > verfying if tokens are still valid
    > redirecting back to authentication
*/
const Layout = () => {
    
    const navigate = useNavigate();

    // eslint-disable-next-line
    const { user, updateInfo } = useContext(StoreContext);
    


    useEffect(()=>{
        if(!user){
            navigate('/signin');
        }
        if (!user?.verified){
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
