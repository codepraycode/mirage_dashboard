import React from 'react'

function Header() {
    return (
        <header>
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
                        <img 
                            src="/asset/img/avatar.svg" 
                            // src={parseFileUrl(item.passport)}//{profile.logo}
                            // onError={
                            //     ({ currentTarget }) => {
                            //         currentTarget.onerror = null; // prevents looping
                            //         currentTarget.src="./assets/images/fake_passport.png";
                            //     }
                            // }
                            alt="avatar"
                        />
                    </div>

                </span>

            </div>

        </nav>
        </header>
    )
}

export default Header
