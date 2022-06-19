import React from 'react'
import { useState } from 'react'

// Component to display information
// could be collapsable or not
const Info = ({text}) => {


    const [show,setShow] = useState(text.length > 0);

    return (
        <>
        {
            show && (
            
            <div className='quick_info'>
            

                <p>
                        You are yet to verify your email            
                    </p>
                    
                    <a href="/">click here to verify</a>
                



                <span className="close" onClick={()=>setShow(()=>false)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </span>
            </div>
            )
        }
        </>
        
    )
}

export default Info
