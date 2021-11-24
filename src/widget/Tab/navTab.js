import React from 'react'
import {NavLink, useParams} from 'react-router-dom';

function TabNav() {
    let {key} = useParams();
    console.log(key);

    return (
        <div className="nav-panel">
            <ul className="">
                <li>
                    <NavLink end to={`/school/${key}`}>
                        Overview
                    </NavLink>
                </li>

                <li>
                    <NavLink end to={`/school/${key}/staffs`}>
                        Staffs
                    </NavLink>
                </li>

                <li>
                    <NavLink end to={`/school/${key}/settings`}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default TabNav
