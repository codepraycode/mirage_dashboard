import React from 'react';
import {Link} from 'react-router-dom';

// Widgets
import BreadCrumb from '../widget/breadcrumb';

const Dashboard = ()=>{
    

    return (
        <>
            <BreadCrumb>
                <div className="left_crumb">
                    <span>Dashboard</span>
                </div>
                
                <div className="right_crumb">
                    <Link to='#' className="btn btn-primary btn-primary-outline">
                        New School
                    </Link>


                    {/* <button 
                        className="btn btn-primary btn-primary-outline ml-2 "
                    >
                        Menu
                    </button> */}
                    
                    {/* <div className={`dropdown ${this.state.showMenu ? 'show':''}`}>
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <i className="fad fa-sign-out"></i>
                                <Link to="/login">Logout</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </BreadCrumb>


        </>
    )
};


export default Dashboard;