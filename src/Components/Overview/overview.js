import React, { Component } from 'react';
import BreadCrumb from '../../widget/BreadCrumb/breadcrumb';


class Overview extends Component {
    render() {
        return (
            <>
            <BreadCrumb>
            <div className="left_crumb">
                <span>Dashboard</span>
            </div>
            <div className="right_crumb">
                <button className="btn btn-primary btn-primary-outline">
                    New
                </button>
            </div>
            </BreadCrumb>
                
            </>
        );
    }
}

export default Overview;