import React from 'react'

const Input = ({label, name,err}) => {
    return (
        <div className="label-group">
            <label className="required">{label || name}</label>
            <input
                
                placeholder={label}
                // {...this.state.formData.password.config}
                // onBlur={(e)=>this.handleInputChange(e,true)}
                // onChange={(e)=>this.handleInputChange(e,false)}
            />

            <span className="msg text-danger">
                {err}
            </span>
        </div>
    )
}

export default Input
