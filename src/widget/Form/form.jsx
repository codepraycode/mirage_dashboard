import React from 'react'

const Form = ({children, onSubmit, err, className, ...rest}) => {
    return (
        <form onSubmit={onSubmit} className={`${className||''}`} {...rest}>
            <span className="msg text-center text-danger">
                {err}
            </span>


            {children}
        </form>
    )
}

export default Form
