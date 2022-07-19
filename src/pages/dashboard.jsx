import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

// Components
import Schools from '../Components/schools';

// Widgets
import BreadCrumb from '../widget/breadcrumb';
import Search from '../widget/search';

// Site Urls
import { newSchool } from '../constants/site_urls';

// Context
import StoreContext from '../context';

const Dashboard = ()=>{

    const { user } = useContext(StoreContext);

    return (
        <>
            <BreadCrumb>
                <div className="left_crumb">
                    <span>Dashboard</span>
                </div>
                
                <div className="right_crumb">
                    <Link 
                        to={newSchool} 
                        className={`btn btn-primary btn-primary-outline ${!user.approved ? "disabled":''}`}
                        onClick={(e)=>{
                            if (!user.approved){
                                e.preventDefault();
                            }
                        } }
                    >
                        New School
                    </Link>
                </div>
            </BreadCrumb>

            <div className="container">
                <Search/>

                <Schools/>
            </div>


        </>
    )
};


export default Dashboard;