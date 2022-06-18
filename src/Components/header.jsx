import React from 'react'
// Variables
import { avatar_placeholder } from '../constants/filepaths';

function Header() {

    return (
        <header>
            <nav className="navbar sticky">
            <div className="nav_item">
                <a href="/" className="brand">
                    {/* <span className="brand-logo" style={{background:`url('/asset/logo.svg') center center no-repeat`}}></span> */}
                    Mirage
                </a>
                
            </div>

            <div className="nav_item">
                
                <div className="icons">
                    <div className="icon-nav-toggle icon"></div>
                </div>

                


                <span className="avatar__container">
                    <span>codepraycode</span>
                    <div className="user__avatar" style={{backgroundImage:`url('${avatar_placeholder}')`}}>
                        {/* <img src="/asset/img/avatar.svg" alt="avatar"/> */}
                    </div>

                </span>

            </div>

        </nav>
        </header>
    )
}

export default Header
