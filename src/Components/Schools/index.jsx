import React,{useState} from 'react';

// Widgets
import {Loading} from '../../widget/Preloaders';

const Schools = ()=>{
    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(false);


    let template;

    if(loading){
        template = <Loading/>
    }else if(schools.length === 0){
        template = (
            <div className="text-center text-muted">
                <p>No school Record</p>
            </div>
        )
    }
    else{
        template = (
            <p>Coming soon</p>
        )
    }



    return (
        <div className="listings__container">
            {template}
        </div>
    )
}


export default Schools;