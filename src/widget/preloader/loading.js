import React from 'react';

const Loading = (props) => {
    return (
        <div className="text-center text-muted">
            <p className="spinner">
                Loading {props.text}
                <i className="ml-1 fad fa-spinner-third"></i>
            </p>
        </div>
    );
};

export default Loading;