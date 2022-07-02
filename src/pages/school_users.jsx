import React from 'react'

// Main Page for School Users

const NoUser = ()=>{
  return(
      <div className="text-center text-muted">
          <p>No School User</p>
      </div>
  )
}


const SchoolUserItem = () =>{
  return(
      <div className="text-center text-muted">
          <p>View your software users here</p>
      </div>
  )
}

const SchoolUsers = () => {
  const users = [1]

  const renderComponent = ()=>{
    
    if (users.length === 0){
      return <NoUser/>
    }


    return <SchoolUserItem/>
  }

  return (
    <>
      {renderComponent()}
    </>
  )
}

export default SchoolUsers;