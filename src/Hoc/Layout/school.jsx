import React from 'react'
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';

// Widgets
import BreadCrumb from '../../widget/breadcrumb';
/* 
    Role of this layout includes
    > Fetch the school information and pass it to children
    > determine the error for invaid school(e.g not found, etc)
*/

function TabNav() {
    let {id} = useParams();
    const location = useLocation();
    // console.log(key);

    let {pathname} = location;

    // console.log(hash,hash === "overview")

    return (
        <div className="tabnav">
            <ul className="">
                <li>
                    <NavLink to={`/school/${id}/overview`} className={`${pathname === `/school/${id}` ? 'active':''}`}>
                        Overview
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`/school/${id}/users`}>
                        Users
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`/school/${id}/settings`}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

const SchoolLayout = () => {

  return (
    <>
        
        <div className='school_page'>
            <BreadCrumb>
                <div className="left_crumb">
                    <span className='school_name'> A School Name</span>
                </div>

                <div className="right_crumb school_status active">
                    <span>
                        Approved
                    </span>
                    <i className="fas fa-star"></i>
                    
                </div>
            </BreadCrumb>


            <TabNav/>

            <Outlet/>
        </div>
        
    </>
  )
}

export default SchoolLayout;