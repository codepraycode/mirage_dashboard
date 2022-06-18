import React from 'react'
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';

// COMPONENTS
import Header from '../../Components/header';
import Footer from '../../Components/footer';

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

    // console.log(location);
    let {hash} = location;

    // console.log(hash,hash === "overview")

    return (
        <div className="tabnav">
            <ul className="">
                <li>
                    <Link to={`/school/${id}/#overview`} className={`${hash === "#overview" || hash === '' ? "active":''}`}>
                        Overview
                    </Link>
                </li>

                <li>
                    <Link to={`/school/${id}/#users`} className={`${hash === "#users" ? "active":''}`}>
                        Users
                    </Link>
                </li>

                <li>
                    <Link to={`/school/${id}/#settings`} className={`${hash === "#settings" ? "active":''}`}>
                        Settings
                    </Link>
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