import React, { useContext } from 'react';

// Store
import StoreContext from '../context';

// Component to display information
// could be collapsable or not

// supported types:- warning, success, danger
// default warning

const Info = () => {


    // Info Stucture
    /* 
        - type: string
        - text: string
        - actionText: string
        - action : ()=>{}
        - closeable:boolean
    */

    const {info,clearInfo} = useContext(StoreContext);

    //     updateInfo(
    //         {
    //             type:"warning", //default
    //             text:"Testing the Info Feature",
    //             actionText: "Click Here to clear It",
    //             action:()=>{
    //                 console.log("Performaing something...")
    //                 // clearInfo()
    //             },
    //             closeable:true
    //         }
    //     )



    // const [show,setShow] = useState(info !== null && info.text.length > 0);
    const show = info !== null;

    const type = !info ? "" : info.type;

    const text = !info ? "" : info.text;

    const action = ()=>{
        // console.log("Perfoming something on the feature widget");
        if (!info) return
        
        info.action();

    }

    const actionText = !info ? "" : info.actionText;

    const closeable = !info ? true : info.closeable;
    


    return (
        <>
            
            <div 
                className={`quick_info ${!show ? 'hide':''} ${type || ''}`}
            >
            

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
                    closeable && 
                
                    <span 
                        className="close" 
                        onClick={clearInfo}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                }
            </div>
        </>
        
    )
}

export default Info
