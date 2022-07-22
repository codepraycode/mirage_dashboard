import React from 'react';

const BoxLoader = ({state,text}) => {

    // Supported states are loading, success, danger, warning
    // default state is loading
    let icon;

    switch (state){
        case 'success':
            icon = <i className="fas fa-check-circle" aria-hidden="true"></i>;
            break;
        case 'danger':
            icon = <i className="fas fa-exclamation-triangle"></i>
            break;
        case 'warning':
            icon = <i className="fas fa-engine-warning"></i>
            break;
        default:
            icon = null;
    }
    
    

    return (
        <div className="preloader_box_container ">
            <div className={`mld ${state || 'loader'}`}>
                {icon}
            </div>

            <span>
                {text || "Loading..."}
            </span>

        </div>
    );
};

export default BoxLoader;