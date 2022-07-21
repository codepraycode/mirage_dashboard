import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const ErrorWrapper = ({children}) => {
  const {pathname} = useLocation();

  return (
    <div className='error_splash'>
        <div className="content">
            {children}

            <span>
              {
                pathname === '/'?
                null
                :
                <Link to="/">Go to Dashboard</Link>
              }
              
            </span>
        </div>
    </div>
  )
}

export default ErrorWrapper