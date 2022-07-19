import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// Variables
import { avatar_placeholder } from '../constants/filepaths';
// Context
import StoreContext from '../context';


function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const {logoutUser, user} = useContext(StoreContext);

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

                


                <span 
                    className="avatar__container" 
                    onClick={()=>{setShowMenu((prev)=>!prev)}}
                >
                    <span>{user?.username}</span>
                    <div className="user__avatar" style={{backgroundImage:`url('${avatar_placeholder}')`}}>
                        {/* <img src="/asset/img/avatar.svg" alt="avatar"/> */}
                    </div>
                    <span 
                        className={`dropdown_icon ${showMenu ? 'open':''}`}
                        
                    >
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        
                    </span>

                    <div className={`dropdown_menu ${showMenu ? 'show':''}`}>
                        <div className="dropdown_menu--item">
                            <i className="fad fa-sign-out"></i>
                            <Link to="/signin" onClick={(e)=>{e.preventDefault(); logoutUser()}}>Logout</Link>
                        </div>
                    </div>

                </span>

            </div>

        </nav>
        </header>
    )
}

export default Header
