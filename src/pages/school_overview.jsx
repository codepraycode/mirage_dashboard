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
            <p>Details</p>
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