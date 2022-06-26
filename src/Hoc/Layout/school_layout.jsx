import React, { useContext } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';

// Components
import { NoSchool } from '../../Components/Errors';

// Higher Order Components
import SchoolContextWrapper from '../wrappers/school_context_wrapper';

// Widgets
import BreadCrumb from '../../widget/breadcrumb';
import SchoolContext from '../../context/school_context';


/* 
    Role of this layout includes
    > Fetch the school information and pass it to children
    > determine the error for invaid school(e.g not found, etc)
*/

function TabNav() {
    let { id } = useParams();
    const location = useLocation();
    // console.log(key);

    let { pathname } = location;

    // console.log(hash,hash === "overview")

    return ( <
            div className = "tabnav" >
            <
            ul >
            <
            li >
            <
            NavLink to = { `/school/${id}/overview` }
            className = { `${pathname === `/school/${id}` ? 'active':''}`}
                    >
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

const SchoolLayoutContent = () => {

    // Display error page for no school
    // if school information could not be fetched
    // const noSchool = false;

    const schoolContext = useContext(SchoolContext);

    console.log(schoolContext);

  return (
    
    
    
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

            <div className="container">
                <Outlet/>
            </div>
        
        </div>
        
            
            // noSchool ?
            // <NoSchool/>
            // :
            // <div className='school_page'>
            //     <BreadCrumb>
            //         <div className="left_crumb">
            //             <span className='school_name'> A School Name</span>
            //         </div>

            //         <div className="right_crumb school_status active">
            //             <span>
            //                 Approved
            //             </span>
            //             <i className="fas fa-star"></i>
                        
            //         </div>
            //     </BreadCrumb>


            //     <TabNav/>

            //     <div className="container">
            //         <Outlet/>
            //     </div>
            
            // </div>
        
        
        
    // </SchoolContextWrapper>

    
  )
}



const SchoolLayout = ()=>{
    return (
        <SchoolContextWrapper>
            <SchoolLayoutContent/>
        </SchoolContextWrapper>
    )
}



export default SchoolLayout;