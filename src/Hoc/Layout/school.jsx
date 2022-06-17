import React from 'react'
import { NavLink, useParams } from 'react-router-dom';

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
    // console.log(key);

    return (
        <div className="nav-panel">
            <ul className="">
                <li>
                    <NavLink end to={`/school/${id}/#overview`}>
                        Overview
                    </NavLink>
                </li>

                <li>
                    <NavLink end to={`/school/${id}/users`}>
                        Users
                    </NavLink>
                </li>

                <li>
                    <NavLink end to={`/school/${id}/settings`}>
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
        <Header/>
            <main>
                <BreadCrumb>
                    <div className="left_crumb">
                        <span> A School Name</span>
                    </div>

                    <div className="right_crumb">
                        <span className="text-success">
                            Approved
                        </span>
                        
                    </div>
                </BreadCrumb>


                <TabNav/>

                <div>School</div>
            </main>
        <Footer/>
    </>
  )
}

export default SchoolLayout;