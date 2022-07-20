import React,{useContext, useEffect, useState} from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';

// Components
import NoSchool from './Errors/no_school';

// Widgets
import {Loading} from '../widget/Preloaders';

// Variables
import { school_logo_placeholder } from '../constants/filepaths';
// Context
import StoreContext from '../context';

// Site Url
import {school} from '../constants/site_urls';

// Display Schools (at main dashboard)

const SchoolItem = (props) => {
    const navigate = useNavigate();    

    let {id,logo,name,date_created,website,approved} = props

    return (
        <div className="listings mb-5">
            <ul 
                className="listings__items" 
                onClick={() => navigate(`${school }/${id}`)}
            >

                <div className="listings__items--item">

                    <div 
                        className="logo" 
                        style={
                            {
                                backgroundImage:`url('${logo || school_logo_placeholder}')`
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

                <div className="listings__items--item status_n_link span-dots dots-sm-none">

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

    const { schools, errorMessage, loadSchools } = useContext(StoreContext);
    
    const [loading, setLoading] = useState(true);

    const renderTemplate = () => {

        if(loading){
            return <Loading/>;

        }

        
        if(errorMessage !== null){
            
            return (
                <NoSchool message={errorMessage}/>
            )
        }


        
        
        return (
            <>
            {
                schools.map((school,i)=>{
                    return <SchoolItem {...school} key={i}/>
                })
            }
                
            </>
        )
        

        
    }

    const fetchSchools = async()=>{
        await loadSchools()

        setLoading(()=>false)
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