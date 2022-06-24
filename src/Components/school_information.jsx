import React,{useState, useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';

// Components
import NoSchool from './Errors/no_school';

// Widgets
import Card from '../widget/card';
import {Loading} from '../widget/Preloaders';

// utils
import { getSchoolRequest } from '../constants/requests';
import { capitalizeText } from '../constants/utils';

// Variables
import AuthContext from '../context/auth_context';


const SchoolInformation = () => {
    const fields_to_render = ['name','motto','description','contacts','email','website']

    const {id} = useParams();

    const [school, setSchool] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');


    const {token,logoutUser} = useContext(AuthContext);


    
    const fetchSchool = async ()=>{
        

        let response = await getSchoolRequest(id,token);

        if (response.error){
            setErrorMessage(()=>response.error_message)
            return
        }

        let {status,data} = response;

        if (status === 200){
            // console.log(data);
            
            if (data.length === 0){
                setErrorMessage(()=>"You haven't created any school")
                
            }

            setSchool(()=> data);

            setLoading(false)

        }else if(response.statusText === "Unauthorized"){
            logoutUser();
        }
        
    }


    const renderTemplate = () => {
        let template;

        if(loading){
            template = <Loading/>;

        }else if(!school){
            
            template = (
                <NoSchool message={errorMessage}/>
            )
        }
        else{
            

            template = (
                <Card>
                    <div className="card-header">
                        <h4>Infomation</h4>
                    </div>

                    <div className="card-body listings__container">
                        {
                            fields_to_render.map((field,i)=>{
                                let value = school[field]
                                
                                
                                if (!value) return null


                                return(
                                    <div className="listings" key={i}>
                                        <div className="listings__items listings__items--sm">

                                            <p className='lead'>
                                                {capitalizeText(field)}
                                            </p>

                                            <p className="descrip">{value}</p>

                                        </div>
                                    </div>
                                )
                            })
                        }
                        

                    </div>
                </Card>
            )
        }

        return template;
    }


    useEffect(()=>{
        fetchSchool()
    // eslint-disable-next-line
    },[])

    return (
        <>
            {renderTemplate()}
        </>
    )
}

export default SchoolInformation
