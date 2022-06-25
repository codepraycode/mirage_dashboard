import React from 'react'

const Credentials = ({school_key}) => {

  return (
    <>
        <p className="mb-1">Credentials</p>

              <div className="box bg-default">
                
                <div className="p-10 w-40 bg-white flex align-center">
                  
                  <div className="text-primary p-10 mr-1 text-center">
                    <i className="fas fa-key"></i>
                  </div>

                  <span> School Key</span>
                </div>

                <p className="w-60 text-right">
              
                  <span >
                    {school_key || '******************'}
                  </span>

                  <span className="mx-2 safe copy-icon" onClick={()=>{}}>
                    <i className="fas fa-copy"></i>
                  </span>
                  
              
                </p>

              </div>
    </>
  )
}

export default Credentials