import React from 'react'


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
                <span className="menu-bar">
                    <div className="icon-nav-toggle"></div>
                    
                </span>

                


                <span className="avatar__container">
                    <div className="user__avatar">
                        <img src="/asset/img/avatar.svg" alt="avatar"/>
                    </div>

                </span>

            </div>

        </nav>
    )
}

export default NavBar;
