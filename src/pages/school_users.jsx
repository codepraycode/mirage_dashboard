import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// Widgets
import Card from '../widget/card';
import {Loading} from '../widget/Preloaders';

// Assets
import {avatar_placeholder} from '../constants/filepaths';

// Utils
import { fecthSchoolUsers, modifySchoolUser } from '../constants/requests';


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



const SchoolUserItem = ({school_id,token,userData}) =>{

    const [userInfo, setUserInfo] = useState({...userData});
    
    const [loading, setLoading] = useState(false);



    const renderActions = ()=>{

      const ctas = (
            <div className="cta">
                <span
                  className={`toggle_select ${!userInfo.suspended && 'active'} cta--item`}
                  onClick={()=>{
                    ChangeStatus(userInfo.suspended ? "unsuspend":"suspend")
                  }}
                >
                </span>


                <button 
                  className='icon cta--item btn btn-danger'
                  onClick={()=>{
                    ChangeStatus("delete")
                  }}
                >
                  <i className="fas fa-trash"></i>
                </button>

            </div>
      )


      if (!userInfo.approved){
        return (
          <button 
            className='btn btn-primary'
            onClick={()=>{
              ChangeStatus("approve")
            }}
          >
            Approve User
          </button>
        )
      }

      if (userInfo.suspended){
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
      return `${userInfo.prefix ||''} ${userInfo.firstname} ${userInfo.lastname}`.trim()
    }



    const ChangeStatus = async (action)=>{
      if (loading) return

      modifySchoolUser(school_id,{user_id:userInfo.id,action}, token)
      .then((response)=>{
        // console.log(response);

        if (!response.error){
          if (response.ok){
            let {user} = response.data;

            setUserInfo(()=>{
              if (!user) return null
              return {...user}
            })

          }else{
            // pass
          }

        }
        else{
          // pass
        }

        setLoading(()=>false)
        return
      })
      .catch((err)=>{
        console.error(err);
        setLoading(()=>false)
        return
      })


      setLoading(()=>true)



    }


  return(
    <>
      {
        !userInfo ? 
        null
        :
        <Card className={`user ${userInfo.suspended && "text-muted"}`} loading={loading}>
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
                  <p className="lead_val">{userInfo.email}</p>
                </div>


                <div className="user_info--item">
                  <p className="lead">Username</p>
                  <p className="lead_val">{userInfo.username}</p>
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
      }
    </>
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
                school_id={id}
                token={tokens?.access}
                userData={user}
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