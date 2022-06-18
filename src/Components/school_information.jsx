import React from 'react';

import Card from '../widget/card';

const SchoolInformation = () => {
    const state = {
        name:"A Sample School",
        about:"A Sample school for test while...",
        contacts: "+234 800000",
        created:"YYYY-MM-DD"
    }
    return (
        <>
                        
            {/* <div style={{width:'300px', height:'300px'}}></div> */}

            <Card>
                <div className="card-header">
                    <h4>Infomation</h4>
                </div>

                <div className="card-body listings__container">
                    {
                        Object.entries(state).map(([key,value],i)=>{
                            return(
                                <div className="listings" key={i}>
                                    <div className="listings__items listings__items--sm">

                                        <p className='lead'>
                                            {key}
                                        </p>

                                        <p>{value}</p>

                                    </div>
                                </div>
                            )
                        })
                    }
                    

                </div>
            </Card>

        </>
    )
}

export default SchoolInformation
