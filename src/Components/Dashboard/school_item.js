import React from 'react';
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';

const SchoolItem = (props) => {
    
    console.log(props);
    let school = props.school;
    let navigate = useNavigate();
    const handleNav = (key) =>{
        navigate(`/school/${key}`)
    }
    return (
        <div className="listings">
            <ul className="listing__items" onClick={()=>handleNav(school.key)}>
                <div className="left">
                    <div className="list__item--logo" style={{background:`url('${school.logo}') center center no-repeat`}}>
                        {/* <img src={school.logo} alt={"img"}/> */}
                    </div>
                    <div className="list__item--property">
                        <h3 className="item-lead">{school.name}</h3>
                        <div className="item-meta d-xs-none text-muted">
                            <span>
                                <i>
                                    created:<Moment format={"YYYY-MM-DDTHH:mm:ss.SSSZ"} fromNow>{school.date_created}</Moment>,
                                </i>
                            </span>
                            <span className="ml-2">
                                <i>last synced:{school.last_sync}</i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="right span-dots">
                    <span className="item text-grey d-xs-none">
                        <a href={school.website} target="_blank" rel="noreferrer">{school.website}</a>
                    </span>
                    {school.active ? 
                    <span className="item text-success">
                            <b>
                                Approved
                            </b>
                            <i className="fas fa-star"></i>
                    </span>
                    :
                    <span className="item text-danger">
                        
                            <b>
                                Not Approved
                            </b>
                            <i className="fas fa-star"></i>
                        
                    </span>
                    }
                </div>

            </ul>
        </div>
    );
};

export default SchoolItem;