import React from 'react'
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
// import { Outlet} from "react-router-dom";

const NavLayout = (props) =>{
    return (
        <div>
        <Header/>
            {/* <Outlet /> */}
            {props.children}
        <Footer/>
        </div>
    )
}

export default NavLayout;
