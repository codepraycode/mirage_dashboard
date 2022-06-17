import React from 'react'

const SchoolItem = () => {
    return (
        <div className="listings">
            <ul className="listings__items" onClick={()=>{}}>
                <div className="listings__items--item">
                    <div className="logo" style={{background:`url('/asset/img/avatar.svg') center center no-repeat`}}>
                        {/* <img src={school.logo} alt={"img"}/> */}
                    </div>
                    <div>
                        <h3>A School name</h3>
                        <div className="text-muted meta">
                            <span>
                                <i>
                                    created: YYYY-MM-DD
                                </i>
                            </span>,
                            <span className="">
                                <i>last synced: -----</i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="listings__items--item span-dots">
                    <span className="item text-grey">
                        <a href="/" target="_blank" rel="noreferrer">www.sample.com</a>
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
