import React,{useState} from 'react';

// Components
import SchoolItem from './school_item';

// Widgets
import {Loading} from '../../widget/Preloaders';

const Schools = ()=>{
    // eslint-disable-next-line
    const [schools, setSchools] = useState([1]);
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);


    let template;

    if(loading){
        template = <Loading/>;
    }else if(schools.length === 0){
        template = (
            <div className="text-center text-muted">
                <p>No school Record</p>
            </div>
        )
    }
    else{
        template = (
            <>
                <SchoolItem/>
                
            </>
        )
    }



    return (
        <div className="listings__container">
            {template}
        </div>
    )
}


export default Schools;