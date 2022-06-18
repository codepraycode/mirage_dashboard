import React from 'react';

// Components
import Activities from '../Components/activities';

// Main Page for School (with school id)
const SchoolOverView = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          
          <div className="col">
            <div className="mb-3">
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
                    dslfjkdaflsdkfjl
                  </span>

                  <span className="mx-2 safe copy-icon" onClick={()=>{}}>
                    <i className="fas fa-copy"></i>
                  </span>
                  
              
                </p>

              </div>

            </div>
          </div>

          <div className="col pl-30">
            <Activities/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SchoolOverView;