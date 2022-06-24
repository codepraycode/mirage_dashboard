import React,{useState, useContext, useEffect} from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';

// Components
import NoSchool from './Errors/no_school';

// Widgets
import {Loading} from '../widget/Preloaders';


// Variables
import { img_placeholder } from '../constants/filepaths';
import AuthContext from '../context/auth_context';

// utils
import { getSchoolsRequest } from '../constants/requests';


// Display Schools (at main dashboard)

const SchoolItem = (props) => {
    const navigate = useNavigate();


    let {id,logo,name,date_created,website,approved} = props

    return (
        <div className="listings mb-5">
            <ul 
                className="listings__items" 
                onClick={()=>navigate(`/school/${id}`)}
            >

                <div className="listings__items--item">

                    <div 
                        className="logo" 
                        style={
                            {
                                background:`url('${logo || img_placeholder}') center center no-repeat`
                            }
                        }
                    >
                        {/* <img src={school.logo} alt={"img"}/> */}
                    </div>

                    <div>

                        <h3>{name}</h3>

                        <div className="text-muted meta">
                            <span>

                                <i>
                                    created: <Moment format={"YYYY-MM-DD"} fromNow>{date_created}</Moment>
                                </i>

                            </span>

                            {/* ,
                            <span className="">
                                <i>last synced: -----</i>
                            </span> */}

                        </div>

                    </div>

                </div>

                <div className="listings__items--item status_n_link span-dots">

                    <span className="item link text-grey">

                        <b>
                            <span 
                                href={website || '/'}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                {website}
                            </span>
                        </b>

                        <i className="fas fa-star"></i>

                    </span>

                    <span className={`item text-${approved?"success":"danger"}`}>
                            
                        <b>
                            {approved ? "Approved": "Not Approved"}
                        </b>

                        <i className="fas fa-star"></i>
                    </span>
                </div>

            </ul>
        </div>
    )
}

const Schools = ()=>{
    
    const [schools, setSchools] = useState([]);
    
    const [loading, setLoading] = useState(true);

    const [errorMessage, setErrorMessage] = useState('');


    const {token,logoutUser} = useContext(AuthContext);

    const fetchSchools = async ()=>{
        

        let response = await getSchoolsRequest(token);

        if (response.error){
            setErrorMessage(()=>response.error_message)
            return
        }

        let {status,data} = response;

        if (status === 200){
            console.log(data);
            
            if (data.length === 0){
                setErrorMessage(()=>"You haven't created any school")
                
            }

            setSchools(()=>[...data]);
            setLoading(false)

        }else if(response.statusText === "Unauthorized"){
            logoutUser();
        }
        
    }

    const renderTemplate = () => {
        let template;

        if(loading){
            template = <Loading/>;

        }else if(schools.length === 0){
            
            template = (
                <NoSchool message={errorMessage}/>
            )
        }
        else{
            template = (
                <>
                {
                    schools.map((school,i)=>{
                        return <SchoolItem {...school}/>
                    })
                }
                    
                </>
            )
        }

        return template;
    }


    useEffect(()=>{
        fetchSchools()
    // eslint-disable-next-line
    },[])



    return (
        <div className="listings__container">
            {renderTemplate()}
        </div>
    )
}


export default Schools;