import React from 'react'
import {NavLink, useParams} from 'react-router-dom';

function TabNav() {
    let params = useParams();
    return (
        <div className="nav-panel">
            <ul className="">
                <li>
                    <NavLink end to={`/${params.slug}`}>
                        Overview
                    </NavLink>
                </li>

                <li>
                    <NavLink end to={`/${params.slug}/access`}>
                        Access
                    </NavLink>
                </li>

                <li>
                    <NavLink end to={`/${params.slug}/settings`}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default TabNav
