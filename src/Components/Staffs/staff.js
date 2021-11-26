import React from 'react';

import StaffList from './staff_list';


const Staff =(props)=> {
    
    return (
        

        <div className="container">
            <StaffList see={false} add={true}/>
        </div>

        



    );
    
}

export default Staff;