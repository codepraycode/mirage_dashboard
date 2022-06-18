import React from 'react';


const NoActivity = ()=>{
    return(
        <div className="no-activity text-center text-muted">
            <i className="fad fa-clipboard-list"></i>
            <p>
            No Activity Records
            </p>
        </div>
    )
}



const Activities =()=> {

    return (
            <div className="activities">
                <NoActivity/>
            </div>
        );
}

export default Activities;