import React from 'react';

// Components
import Activities from '../Components/activities';
import Credentials from '../Components/credentials';
import SchoolInformation from '../Components/school_information';

// Main Page for School (with school id)
const SchoolOverView = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          
          <div className="col">
            <div className="mb-3">

              <Credentials/>

            </div>

            <div className="mb-3">

                <SchoolInformation/>

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