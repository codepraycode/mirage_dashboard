import React from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';

const SchoolItem = () => {
    const navigate = useNavigate();


    return (
        <div className="listings">
            <ul className="listings__items" onClick={()=>navigate('/school/123')}>
                <div className="listings__items--item">
                    <div className="logo" style={{background:`url('/asset/img/logos/placeholder.svg') center center no-repeat`}}>
                        {/* <img src={school.logo} alt={"img"}/> */}
                    </div>
                    <div>
                        <h3>A School name</h3>
                        <div className="text-muted meta">
                            <span>
                                <i>
                                    created: <Moment format={"YYYY-MM-DD"} fromNow>{"2002-12-01T23:00:00.000Z"}</Moment>
                                </i>
                            </span>
                            {/* ,
                            <span className="">
                                <i>last synced: -----</i>
                            </span> */}
                        </div>
                    </div>
                </div>

                <div className="listings__items--item status_n_link span-dots">
                    <span className="item link text-grey">
                        <b>
                            <a href="/" target="_blank" rel="noreferrer">www.sample.com</a>
                        </b>
                        <i className="fas fa-star"></i>
                    </span>

                    <span className="item text-success">
                            <b>
                                Approved
                            </b>
                            <i className="fas fa-star"></i>
                    </span>
                </div>

            </ul>
        </div>
    )
}

export default SchoolItem
