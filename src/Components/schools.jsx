import React,{useState, useContext, useEffect} from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';

// Components
import NoSchool from './Errors/no_school';

// Widgets
import {Loading} from '../widget/Preloaders';

// Hight Order component
import SchoolContextWrapper from '../Hoc/wrappers/school_context_wrapper';

// Variables
import { img_placeholder } from '../constants/filepaths';
import SchoolContext from '../context/school_context';


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
    
    const [loading, setLoading] = useState(true);

    const {schools,errorMessage,loadSchools} = useContext(SchoolContext);

    const fetchSchools = async ()=>{
        

        await loadSchools();

        setLoading(false)
        
    }

    const renderTemplate = () => {

        if(loading){
            return <Loading/>;

        }

        
        if(errorMessage === null || errorMessage.length > 0){
            
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

    useEffect(()=>{
        fetchSchools();
    // eslint-disable-next-line
    },[])



    return (
        <div className="listings__container">
            {renderTemplate()}
        </div>
    )
}


export default SchoolContextWrapper(Schools);