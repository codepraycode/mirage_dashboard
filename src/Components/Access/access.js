import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../widget/BreadCrumb/breadcrumb';
import TabNav from '../../widget/Tab/navTab';
class Access extends Component {
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
                        
                            <i>Access panel</i>
                        
                    </div>

                    <div className="col">
                        <i>Activity</i>
                    </div>
                </div>
                
            </div>

            <div className="container no-padding">
            </div>



            </>
        );
    }
}

export default Access;