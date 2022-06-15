import React from 'react'

const Button = ({type, text}) => {
  return (
    <button type={type || "button"} className="btn btn-primary">
        {text || "button"}
    </button>
  )
}

export default Button;