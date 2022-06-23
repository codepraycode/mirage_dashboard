import React from 'react'
import { useState } from 'react'

// Component to display information
// could be collapsable or not

// supported types:- warning, success, danger
// default warning

const Info = ({text, type, action, actionText, closable}) => {


    const [show,setShow] = useState(text.length > 0);

    return (
        <>
            <div className={`quick_info ${!show ? 'hide':''} ${type || ''}`}>
            

                <p>
                        {text}
                    </p>
                    
                    {
                        action ?
                        
                        <a href="/" onClick={(e)=>{e.preventDefault(); action()}}>
                            {actionText}
                        </a>
                        :
                        null
                    }
                


                {
                    closable && 
                
                    <span className="close" onClick={()=>setShow(()=>false)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                }
            </div>
        </>
        
    )
}

export default Info