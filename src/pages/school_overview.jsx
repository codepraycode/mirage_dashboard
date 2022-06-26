import React,{useContext} from 'react';

// Components
import Activities from '../Components/activities';
import Credentials from '../Components/credentials';
import SchoolInformation from '../Components/school_information';

// Variables
import SchoolContext from '../context/school_context';
import { Loading } from '../widget/Preloaders';


// Main Page for School (with school id)
const SchoolOverView = () => {


  const {currentSchool:school} = useContext(SchoolContext);


  const renderComponent = ()=>{
    if(!school || Object.keys(school) ===0){
      return <Loading/>
    }



    return(
      <div className="row">
          
          <div className="col">
            <div className="mb-3">

              <Credentials school_key={school?.key}/>

            </div>

            <div className="mb-3">

                <SchoolInformation school_info={school}/>

            </div>

          </div>

          <div className="col pl-30">
            <Activities/>
          </div>
      </div>
    )


  }



  return renderComponent();
}

export default SchoolOverView;