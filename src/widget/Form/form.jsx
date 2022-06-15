import React from 'react'

const Form = ({children, onSubmit, err}) => {
    return (
        <form onSubmit={onSubmit}>
            <span className="msg text-danger">
                {err}
            </span>


            {children}
        </form>
    )
}

export default Form
