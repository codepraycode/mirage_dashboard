import React, { Component } from 'react';
import BreadCrumb from '../../widget/BreadCrumb/breadcrumb';
import Schools from './schools';

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

            <div className="container">
                <div className="search-panel">
                    <div className="search-input">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="search" name="search-school" placeholder="Search School"/>
                    </div>
                </div>
            </div>

            <div className="container no-padding">
                <Schools/>
            </div>



            </>
        );
    }
}

export default Overview;