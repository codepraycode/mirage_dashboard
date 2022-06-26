import React,{useState,useEffect, useContext} from 'react'
import {Outlet, useNavigate} from 'react-router-dom';

// COMPONENTS
import Header from '../../Components/header';
import Footer from '../../Components/footer';


// Widgets
import Info from '../../widget/info';
import AuthContext from '../../context/auth_context';
import SchoolContextWrapper from '../wrappers/school_context_wrapper';

/* 
    Wrapped around component, doing the following
    > provding component tokens,
    > verfying if tokens are still valid
    > redirecting back to authentication
*/
const Layout = () => {
    // eslint-disable-next-line
    const [info, setInfo] = useState({
        type:"warning", //default
        text:"A Sample warning info",
        actionText: "call to action",
        action:()=>{console.log("Performaing something...")},
        closable:true
    });
    // Info Stucture
    /* 
        - type: string
        - text: string
        - actionText: string
        - action : ()=>{}
        - closeable:boolean
    */

    const navigate = useNavigate();

    // eslint-disable-next-line
    const {user} = useContext(AuthContext);
    // console.log(user);


    useEffect(()=>{
        if(!user){
            navigate('/signin');
        }
    })

    return (
        <>
            <Header/>
            
            <Info {...info}/>

            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default SchoolContextWrapper(Layout);
