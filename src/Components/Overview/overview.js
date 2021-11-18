import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../widget/BreadCrumb/breadcrumb';
import TabNav from '../../widget/Tab/navTab';
import Activities from './activities';
class Overview extends Component {
    school = {
        name:'Homat'
    }
    render() {
        return (
            <>
            <BreadCrumb>
                <div className="left_crumb">
                    <span>
                        <Link to="/">Dashboard</Link>
                    </span>
                    <i className="fad fa-chevron-right mx-1"></i>
                    {this.school.name}
                </div>
                <div className="right_crumb">
                    <button className="btn btn-success btn-success-outline">
                        Approved
                    </button>
                </div>
            </BreadCrumb>

            <TabNav/>

            <div className="container">
                <div className="row">
                    <div className="col">
                        
                            <p className="mb-2"><i>Panel</i></p>
                            <div style={{width:'300px', height:'300px'}}></div>
                        
                    </div>

                    <div className="col">
                        <p className="mb-2"><i>Activity</i></p>
                        <Activities/>
                    </div>
                </div>
                
            </div>

            <div className="container no-padding">
            </div>



            </>
        );
    }
}

export default Overview;