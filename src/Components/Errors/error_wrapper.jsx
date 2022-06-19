import React from 'react'
import { Link } from 'react-router-dom'

const ErrorWrapper = ({children}) => {
  return (
    <div className='error_splash'>
        <div className="content">
            {children}

            <span><Link to="/">Go to Dashboard</Link></span>
        </div>
    </div>
  )
}

export default ErrorWrapper