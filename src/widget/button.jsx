import React from 'react'

const Button = ({type, text, className}) => {
  return (
    <button type={type || "button"} className={`${className || ''} btn btn-primary`}>
        {text || "button"}
    </button>
  )
}

export default Button;