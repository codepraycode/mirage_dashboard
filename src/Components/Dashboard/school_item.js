import React from 'react';
import { useNavigate } from 'react-router-dom';

const SchoolItem = (props) => {
    
    console.log(props);
    let school = props.school;
    let navigate = useNavigate();
    const handleNav = (slug) =>{
        navigate(`/${slug}`)
    }
    return (
        <div className="listings">
            <ul className="listing__items" onClick={()=>handleNav(school.slug)}>
                <div className="left">
                    <div className="list__item--logo" style={{background:`url('${school.logo}') center center no-repeat`}}>
                        {/* <img src={school.logo} alt={"img"}/> */}
                    </div>
                    <div className="list__item--property">
                        <h3 className="item-lead">{school.name}</h3>
                        <div className="item-meta d-xs-none text-muted">
                            <span><i>created:{school.date_created},</i></span>
                            <span><i>last synced:{school.last_sync}</i></span>
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