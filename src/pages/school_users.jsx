import React, { useState } from 'react';


// Widgets
import Card from '../widget/card';

// Assets
import {avatar_placeholder} from '../constants/filepaths'

// Main Page for School Users

const NoUser = ()=>{
  return(
      <div className="text-center text-muted">
          <p>No School User</p>
      </div>
  )
}



const SchoolUserItem = ({approved, suspended,updateSuspended}) =>{

  const renderActions = ()=>{

    const ctas = (
          <div className="cta">
              <span
                className={`toggle_select ${!suspended && 'active'} cta--item`}
                onClick={updateSuspended}
              >
              </span>


              <button className='icon cta--item btn btn-danger'>
                <i className="fas fa-trash"></i>
              </button>
          </div>
    )


    if (!approved){
      return (
        <button className='btn btn-primary'>
          Approve User
        </button>
      )
    }

    if (suspended){
      return (
        <>
            <div className='text-muted text center'>
              <span>Suspended</span>
            </div>
            
            {ctas}
        </>
      )
    }


    return (
        <>
            <div className='text-muted text center'>
              <span>Approved</span>
            </div>
            
            {ctas}
        </>
    )

  }


  return(
      <Card className={`user ${suspended && "text-muted"}`}>
          {/* Display */}
          <div className={"user_info"}>
            {/* Info */}
            <div>
              <div className="user_info--item">
                <p className="lead">Full name</p>
                <p className="lead_val">Lorem Ipsum</p>
              </div>

              <div className="user_info--item">
                <p className="lead">Email</p>
                <p className="lead_val">lorem.ipsum@mail.com</p>
              </div>


              <div className="user_info--item">
                <p className="lead">Username</p>
                <p className="lead_val">loremipsum12</p>
              </div>

            </div>

            {/* Avatar */}
            <div className='user_avatar'>
              
              <img src={avatar_placeholder} alt="Lorem Ipsum"/>
            </div>

          </div>

          <hr/>

          {/* Actions */}
          <div className='actions'>
            {renderActions()}
          </div>
      </Card>
  )
}

const SchoolUsers = () => {
  const users = [1,2,3,4,5,6]

  const [suspended, setSuspended] =  useState(false);

  const renderComponent = ()=>{
    
    if (users.length === 0){
      return <NoUser/>
    }

    let template = users.map((user,i)=>{
      return <SchoolUserItem key={i} approved={true} suspended={suspended} updateSuspended={()=>{
        setSuspended((prev)=>{
          return !prev
        })
      }}/>
    })

    return (
      <div className='users'>
        {template}
      </div>
    )
  }

  return (
    <>
      {renderComponent()}
    </>
  )
}

export default SchoolUsers;