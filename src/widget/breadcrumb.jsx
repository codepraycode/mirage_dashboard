import React,{useContext, useEffect} from 'react';
import SchoolContext from '../context/school_context';




const BreadCrumb = (props)=>{
    
    const schoolContext = useContext(SchoolContext);

    console.log(schoolContext);
    
    return (
        <div className="breadcrumb">
            {props.children}
        </div>
    );
}


export default BreadCrumb;