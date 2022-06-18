import React from 'react'

// COMPONENTS
import { SchoolInfo,SoftwareSettings } from '../Components/settings';

// Main Page for School (with school id)
const SchoolSettings = () => {
  return (
    <>

    <SchoolInfo/>
    <hr/>
    <div className="mb-10">
       <SoftwareSettings/>
       </div>

    </>
  )
}

export default SchoolSettings;