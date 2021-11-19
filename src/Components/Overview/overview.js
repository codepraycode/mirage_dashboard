import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../widget/BreadCrumb/breadcrumb';
import TabNav from '../../widget/Tab/navTab';
import Activities from './activities';
import StaffList from '../Staffs/staff_list';
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
                        <div className="mb-3">
                            <p className="mb-1">Credentials</p>
                            {/* <div style={{width:'300px', height:'300px'}}></div> */}

                            <div className="box box-important bg-default">
                                <div className="p-10 w-40 bg-white flex align-center">
                                    <div className="icon-box bg-primary p-10 mr-1 text-center">
                                    <i className="fas fa-key"></i>
                                    </div>
                                    <span> School Key</span>
                                </div>

                                <p className="w-60 text-right">
                                        <span>fsdln2lkn21lkn23</span>
                                        <i className="fas fa-copy mx-2 copy-icon"></i>
                                </p>
                            </div>
                        </div>


                        <div className="mb-3">
                            
                            {/* <div style={{width:'300px', height:'300px'}}></div> */}

                            <div className="card">
                                <div className="card-header">
                                    <h4>Infomation</h4>
                                </div>
                                <div className="card-body">

                                    <div className="listings">
                                        <div className="listing__items">
                                            <div className="left">
                                                
                                                <div className="list__item--property">
                                                    <span className="item-lead">Name</span>
                                                </div>
                                            </div>

                                            <div className="right">
                                                <p>Homat School</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="listings">
                                        <div className="listing__items">
                                            <div className="left">
                                                
                                                <div className="list__item--property">
                                                    <span className="item-lead">About</span>
                                                </div>
                                            </div>

                                            <div className="right">
                                                <p>A Very good School</p>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="listings">
                                        <div className="listing__items">
                                            <div className="left">
                                                
                                                <div className="list__item--property">
                                                    <span className="item-lead">Contacts</span>
                                                </div>
                                            </div>

                                            <div className="right">
                                                <p>Not Provided</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="listings">
                                        <div className="listing__items">
                                            <div className="left">
                                                
                                                <div className="list__item--property">
                                                    <span className="item-lead">Created</span>
                                                </div>
                                            </div>

                                            <div className="right">
                                                <p>Not Provided</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="listings">
                                        <div className="listing__items">
                                            <div className="left">
                                                
                                                <div className="list__item--property">
                                                    <span className="item-lead">Status</span>
                                                </div>
                                            </div>

                                            <div className="right">
                                                <p>Not Approved</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="mb-3">
                            <StaffList see={true} add={false}/>
                        </div>


                    </div>

                    <div className="col pl-30">
                        <p className="mb-2"><i>Activity</i></p>
                        <Activities/>
                    </div>
                </div>
                
            </div>


            </>
        );
    }
}

export default Overview;