import React,{useState, useContext, useEffect} from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';

// Widgets
import {Loading} from '../widget/Preloaders';


// Variables
import { img_placeholder } from '../constants/filepaths';
import AuthContext from '../context/auth_context';


// Display Schools (at main dashboard)

const SchoolItem = () => {
    const navigate = useNavigate();


    return (
        <div className="listings mb-5">
            <ul className="listings__items" onClick={()=>navigate('/school/123')}>
                <div className="listings__items--item">
                    <div className="logo" style={{background:`url('${img_placeholder}') center center no-repeat`}}>
                        {/* <img src={school.logo} alt={"img"}/> */}
                    </div>
                    <div>
                        <h3>A School name</h3>
                        <div className="text-muted meta">
                            <span>
                                <i>
                                    created: <Moment format={"YYYY-MM-DD"} fromNow>{"2002-12-01T23:00:00.000Z"}</Moment>
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
                            <a href="/" target="_blank" rel="noreferrer">www.sample.com</a>
                        </b>
                        <i className="fas fa-star"></i>
                    </span>

                    <span className="item text-success">
                            <b>
                                Approved
                            </b>
                            <i className="fas fa-star"></i>
                    </span>
                </div>

            </ul>
        </div>
    )
}

const Schools = ()=>{
    // eslint-disable-next-line
    const [schools, setSchools] = useState([1]);
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);


    const {token,logoutUser} = useContext(AuthContext);

    const fetchSchools = async ()=>{
        
        let response = await fetch('http://127.0.0.1:8000/api/schools/',{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${String(token)}`
            }
        })

        let data = await response.json();

        if (response.status === 200){
            console.log(data);
        }else if(response.statusText === "Unauthorized"){
            logoutUser();
        }
        
    }

    let template;

    if(loading){
        template = <Loading/>;
    }else if(schools.length === 0){
        template = (
            <div className="text-center text-muted">
                <p>No school Record</p>
            </div>
        )
    }
    else{
        template = (
            <>
                <SchoolItem/>
                
            </>
        )
    }


    useEffect(()=>{
        fetchSchools()
    // eslint-disable-next-line
    },[])



    return (
        <div className="listings__container">
            {template}
        </div>
    )
}


export default Schools;