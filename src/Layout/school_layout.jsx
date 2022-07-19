import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';

// Widgets
import BreadCrumb from '../widget/breadcrumb';


// Variables
import { CircleLoader } from '../widget/Preloaders';
import { NoSchool } from '../Components/Errors';
import StoreContext from '../context';


/* 
    Role of this layout includes
    > Fetch the school information and pass it to children
    > determine the error for invaid school(e.g not found, etc)
*/

function TabNav() {
    let { id } = useParams();
    const location = useLocation();

    let { pathname } = location;

    return ( 
        <div className="tabnav">
            <ul>
                <li>
                    <NavLink 
                        to = { `/school/${id}/overview` }
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

const SchoolLayout = () => {
    const {id:schoolid} = useParams();


    const [loading, setLoading] = useState(true);

    const { currentSchool, loadSchool, errorMessage } = useContext(StoreContext);


    const fetchSchool = async()=>{
        await loadSchool(schoolid);

        setLoading(()=>false);
    }

    useEffect(()=>{
        fetchSchool()
        
    // eslint-disable-next-line
    },[])


    const renderComponent = ()=>{
        // console.log(currentSchool);
        if (loading){
            return <CircleLoader/>
        }

        if (errorMessage !== null){
            return <NoSchool message={errorMessage}/>
        }


        // console.log(currentSchool)
        
        return (
            <div className='school_page'>
                <BreadCrumb>
                    <div className="left_crumb">
                        <span className='school_name'> {currentSchool.name}</span>
                    </div>

                    <div className={`right_crumb school_status ${currentSchool.approved ? "active":"not-active"}`}>
                        <span>
                            {currentSchool.approved ? "Approved":"Not Approved"}
                        </span>
                        <i className="fas fa-star"></i>
                        
                    </div>
                </BreadCrumb>


                <TabNav/>

                <div className="container">
                    <Outlet/>
                </div>
            
            </div>
        )
    }

  return renderComponent()
}





export default SchoolLayout;