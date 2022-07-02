import React from 'react';


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


const SchoolUserItem = () =>{
  return(
      <Card className={"user"}>
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
          <div></div>
      </Card>
  )
}

const SchoolUsers = () => {
  const users = [1,2,3,4,5]

  const renderComponent = ()=>{
    
    if (users.length === 0){
      return <NoUser/>
    }

    let template = users.map((user,i)=>{
      return <SchoolUserItem key={i}/>
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