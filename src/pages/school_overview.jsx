import React,{useState, useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';

// Components
import Activities from '../Components/activities';
import Credentials from '../Components/credentials';
import SchoolInformation from '../Components/school_information';
import NoSchool from '../Components/Errors/no_school';


// Widgets
// import {Loading} from '../widget/Preloaders';

// utils
// import { getSchoolRequest } from '../constants/requests';
// import { capitalizeText } from '../constants/utils';

// Variables
import AuthContext from '../context/auth_context';


// Main Page for School (with school id)
const SchoolOverView = () => {

  const {id} = useParams();

  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const {fetchSchool:getSchool} = useContext(AuthContext);



  const fetchSchool = async()=>{
    let school_response = await getSchool(id);

    // let school_response = {
    //   school:[],
    //   errorMessage:"Testing Page"
    // }

    // console.log(school);
    setSchool(()=>{ 
        return {...school_response.school}
      }
    );

    setErrorMessage(()=>school_response.errorMessage);
    setLoading(()=>false);

  }

  useEffect(()=>{
        fetchSchool()
        // runFetchSchool()
        
    // eslint-disable-next-line
    },[])

  return (
    <>
      {
        errorMessage === null || errorMessage !== '' ?

        <NoSchool message={errorMessage}/>
        :
        <div className="row">
          
          <div className="col">
            <div className="mb-3">

              <Credentials school_key={school?.key}/>

            </div>

            <div className="mb-3">

                <SchoolInformation school_info={school} loading={loading}/>

            </div>

          </div>

          <div className="col pl-30">
            <Activities/>
          </div>
        </div>
      }
      
        
      
    </>
  )
}

export default SchoolOverView;