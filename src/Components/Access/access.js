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
                <div className="groupings">
                    <div className="group-lead">
                        <p className="mb-1">Staffs</p>
                    </div>

                    <div className="group__items">
                        
                        <div className="left">
                            <div className="list__item--logo" style={{background:`url('/asset/img/logo') center center no-repeat`}}>
                                {/* <img src={school.logo} alt={"img"}/> */}
                            </div>
                            <div className="list__item--property">
                                <h3 className="item-lead">Mr Sanidu</h3>
                                <div className="item-meta d-xs-none text-muted">
                                    <span><i>info@gmail.com</i></span>
                                </div>
                            </div>
                        </div>
                                
                        <div className="item">
                            <span className="item text-grey d-xs-none">
                                Role
                            </span>
                        </div>
                        
                        <div className="right">
                            <span className="item text-success">
                                    <i className="fas fa-star"></i>
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>

           



            </>
        );
    }
}

export default Access;