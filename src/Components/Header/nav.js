import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar sticky">
            <div className="nav__property">
                <a href="/" className="logo">
                    {/* <span className="brand-logo" style={{background:`url('/asset/logo.svg') center center no-repeat`}}></span> */}
                    Mirage
                </a>
                
            </div>

            <div className="nav__user">
                <Link to="/signup" className="menu-bar">
                    <div className="icon-nav-toggle"></div>
                </Link>


                <Link to="/signup" className="avatar__container">
                    <div className="user__avatar">
                        <img src="/asset/img/avatar.svg" alt="avatar"/>
                    </div>
                    <div className="notification"></div>
                </Link>
            </div>

        </nav>
    )
}

export default NavBar;
