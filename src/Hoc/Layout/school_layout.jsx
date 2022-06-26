import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';

// Widgets
import BreadCrumb from '../../widget/breadcrumb';


// Variables
import SchoolContext from '../../context/school_context';
import { CircleLoader } from '../../widget/Preloaders';
import { NoSchool } from '../../Components/Errors';


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

const SchoolLayout = () => {

    // Display error page for no school
    // if school information could not be fetched
    // const noSchool = false;

    // const schoolContext = useContext(SchoolContext);

    // console.log(schoolContext);

    const {id} = useParams();


    const [loading, setLoading] = useState(true);

    const {currentSchool,loadSchool,errorMessage} = useContext(SchoolContext);


    const fetchSchool = async()=>{
        await loadSchool(id);

    // let school_response = {
    //   school:[],
    //   errorMessage:"Testing Page"
    // }

    // console.log(school);
    // setSchool(()=>{ 
    //     return {...school_response.school}
    //   }
    // );

    // setErrorMessage(()=>school_response.errorMessage);
    setLoading(()=>false);

  }

  useEffect(()=>{
        fetchSchool()
        // runFetchSchool()
        
    // eslint-disable-next-line
    },[])


    const renderComponent = ()=>{
        console.log(currentSchool);
        if (loading){
            return <CircleLoader/>
        }

        if (errorMessage !== null || errorMessage?.length > 0){
            return <NoSchool message={errorMessage}/>
        }


        
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