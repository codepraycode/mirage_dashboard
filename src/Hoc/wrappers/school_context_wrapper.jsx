import React from 'react';

// Contexts
import SchoolContext, { SchoolProvider } from '../../context/school_context';


/* 
    Wraps the school context around child component
*/


const SchoolContextWrapper = (MyComponet) => {

    // Display error page for no school
    // if school information could not be fetched
    // const noSchool = false;

  return function(){
    return (
        <SchoolProvider>
        
            <SchoolContext.Consumer>
                {
                    (schoolContext)=>{
                        
                        // console.log(schoolContext)

                        return (
                            <>
                                {/* {children} */}
                                <MyComponet/>
                            
                            </>
                        )
                    }
                    
                }
                
                
            </SchoolContext.Consumer>

        </SchoolProvider>
  )
  }
}

export default SchoolContextWrapper;