import React from 'react'

const Card = ({children}) => {
  return (
    <div className="card">
        {/*  {
                        this.state.loading ? 
                        <p className="spinner text-right text-primary">
                            <i className="fad fa-spinner-third"></i>
                        </p>
                        :
                        null
                    }
         */}
        {children}
    </div>
  )
}

export default Card