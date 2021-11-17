import React from 'react';


const BreadCrumb = (props)=>{
    return (
        <div className="breadcrumb">
            {props.children}
        </div>
    );
}


export default BreadCrumb;