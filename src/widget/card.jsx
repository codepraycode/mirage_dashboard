import React from 'react'

const Card = ({children, loading, variant}) => {
  let cardT = variant || '';
  
  return (
    <div className={`card ${cardT}`}>
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