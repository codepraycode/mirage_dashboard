import React from 'react';

// Widgets
import Card from '../widget/card';
import {Loading} from '../widget/Preloaders';

// // utils

import { capitalizeText } from '../constants/utils';



const SchoolInformation = ({school_info, loading}) => {
    const fields_to_render = ['name','motto','description','contacts','email','website']

    return (
        <>
        { loading ? 
            <Loading/>
            :
            <Card>
                <div className="card-header">
                    <h4>Infomation</h4>
                </div>

                <div className="card-body listings__container">
                    {
                        fields_to_render.map((field,i)=>{
                            let value = school_info[field]
                            
                            
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
        }
        </>
    )
}

export default SchoolInformation
