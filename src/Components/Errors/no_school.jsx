import React from 'react';
import ErrorWrapper from './error_wrapper';

const NoSchool = ({message}) => {
    return (
        <ErrorWrapper> 
            <h2>{message || "Could Not Load School Infomation"}</h2>
        </ErrorWrapper>
        
    )
}

export default NoSchool
