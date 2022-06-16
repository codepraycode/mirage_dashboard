import React from 'react'

const Form = ({children, onSubmit, err, className}) => {
    return (
        <form onSubmit={onSubmit} className={`${className||''}`}>
            <span className="msg text-center text-danger">
                {err}
            </span>


            {children}
        </form>
    )
}

export default Form
