import React from 'react'
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

const Layout = (props) =>{
    return (
        <div className="main-wrapper main-wrapper-1">
        <Header/>
            {props.children}
        <Footer/>
        </div>
    )
}

export default Layout
