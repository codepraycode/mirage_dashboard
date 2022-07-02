import React, { useState } from 'react';


// Widgets
import Card from '../widget/card';
import {Loading} from '../widget/Preloaders';

// Assets
import {avatar_placeholder} from '../constants/filepaths';

// Utils
import { fecthSchoolUsers } from '../constants/requests';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// Main Page for School Users

const UserError = ({empty,error_message})=>{

  return(
    <>
      {
        empty ?
        <div className="text-center text-muted">
          <p>No School User</p>
        </div>
        :
        <div className="text-center text-muted">
            <p>{error_message}</p>
        </div>
      }
    </>
      
  )
}



const SchoolUserItem = ({
            prefix,
            firstname,
            lastname,

            username,
            email,
            
            approved,
            suspended}) =>{

  const renderActions = ()=>{

    const ctas = (
          <div className="cta">
              <span
                className={`toggle_select ${!suspended && 'active'} cta--item`}
                onClick={()=>{}}
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


  const getFullname = ()=>{
    return `${prefix ||''} ${firstname} ${lastname}`.trim()
  }


  return(
      <Card className={`user ${suspended && "text-muted"}`}>
          {/* Display */}
          <div className={"user_info"}>
            {/* Info */}
            <div>
              <div className="user_info--item">
                <p className="lead">Full name</p>
                <p className="lead_val">{getFullname()}</p>
              </div>

              <div className="user_info--item">
                <p className="lead">Email</p>
                <p className="lead_val">{email}</p>
              </div>


              <div className="user_info--item">
                <p className="lead">Username</p>
                <p className="lead_val">{username}</p>
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

  const {id} = useParams();

  const [authCookie] = useCookies();

  const tokens = authCookie['authTokens'];


  const [schoolusers, setSchoolUsers] =  useState(null);
  const [loading, setLoading] =  useState(true);
  const [errorMessage, setErrorMessage] =  useState(null);


  const loadSchoolUsers = async()=>{
    console.log("Loading School Users!", id);

    let users = null;
    let error_message = null;

    let response = await fecthSchoolUsers(id,tokens?.access)

    if (!response.error){

        let {status,data} = response;

        if (status === 200){
            // console.log(data);
            
            if (data.length === 0){
                error_message = "Your school has no users";
                
            }else{
                error_message = null;
            }

            users = data;

        }else if(response.statusText === "Unauthorized"){
            // logoutUser();
            error_message = "Could not load school users";
        }
    }


    else{
        error_message = response.error_message;
    }


    setSchoolUsers(()=>{
      if (!users) return null

      return [...users]
    });

    setErrorMessage(()=>error_message)

    setLoading(()=>false)


  }


  useEffect(()=>{
    if (loading){
      loadSchoolUsers()
    }
    
  // eslint-disable-next-line
  },[loading])


  const renderComponent = ()=>{

    if (loading){
      return <Loading/>
    }
    
    if (schoolusers?.length === 0 || errorMessage != null){
      return <UserError empty={schoolusers?.length > 0 }  error_message={errorMessage}/>
    }

    let template = schoolusers.map((user,i)=>{
      return (<SchoolUserItem 
                key={i} 
                approved={true} 
                {...user}
              />)
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