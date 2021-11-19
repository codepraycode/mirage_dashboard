import React from 'react';
import {Link } from 'react-router-dom';

const StaffList = (props) => {
    return (
       <div className="groupings">
            <div className="group-lead flex align-center justify-between">
                <p className="mb-1">Staffs</p>
                {
                    props.see ? 
                    <Link to="access">
                    see all
                </Link>
                :
null
                }
                

                {
                    props.add ? 
                    <button className="btn btn-primary">
                    Add Staff
                </button>
                :
                null
                }

            </div>

            <div className="group__items">
                
                <div className="left">
                    <div className="list__item--logo" style={{background:`url('/asset/img/logos/millwall.svg') center center no-repeat`}}>
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
    );
};

export default StaffList;