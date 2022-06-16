import React from 'react'

const Card = ({children, loading}) => {

  return (
    <div className="card">
      {
        loading ? 
        
        <span className="spinner loading_indicator text-right text-primary">
          <i className="fad fa-spinner-third"></i>
        </span>
        :
        null
      }
        
      {children}
    </div>
  )
}

export default Card