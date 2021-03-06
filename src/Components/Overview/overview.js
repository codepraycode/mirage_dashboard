import React,{useState} from 'react';
import Activities from './activities';
import StaffList from '../Staffs/staff_list';
import copy from 'copy-to-clipboard';




const Overview =(props)=> {

    let [copier,setCopier] = useState(false)

    const copyKey = ()=>{
        copy(props.school.key)
        setCopier(true)
    }
    // console.log(props)

    function Elipsy(text, maxText=60){
        if(text.length === 0){
            return '----'
        }
        if(text.length > maxText){
            return text.slice(0,maxText) + '...'
        }
        return text;
    }

    return (
        <>
        

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <p className="mb-1">Credentials</p>
                        {/* <div style={{width:'300px', height:'300px'}}></div> */}

                        <div className="box box-important bg-default">
                            <div className="p-10 w-40 bg-white flex align-center">
                                <div className="icon-box bg-primary p-10 mr-1 text-center">
                                <i className="fas fa-key"></i>
                                </div>
                                <span> School Key</span>
                            </div>

                            <p 
                                className="w-60 text-right" 
                                onClick={
                                    ()=>{
                                        // console.log(props.school)
                                        if(!props.school.active) return
                                        copyKey();
                                    }
                                }
                                style={{cursor:`${props.school.active ? 'pointer':'not-allowed'}`}}
                            >
                                <span>{
                                    props.school.active ? 
                                        props.school.key
                                        :
                                        "".padStart(props.school.key.length,'*')
                                    }
                                </span>
                                <i 
                                    className={
                                        props.school.active ? 
                                        `fas fa-copy mx-2 copy-icon 
                                        ${copier ? 'text-success':'text-primary'}`
                                        :
                                        `fas fa-copy mx-2 copy-icon text-muted`
                                    }
                                ></i>


                                
                            </p>
                        </div>
                    </div>


                    <div className="mb-3">
                        
                        {/* <div style={{width:'300px', height:'300px'}}></div> */}

                        <div className="card">
                            <div className="card-header">
                                <h4>Infomation</h4>
                            </div>
                            <div className="card-body">

                                <div className="listings">
                                    <div className="listing__items">
                                        <div className="left">
                                            
                                            <div className="list__item--property">
                                                <span className="item-lead">Name</span>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <p>{props.school.name}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="listings">
                                    <div className="listing__items">
                                        <div className="left">
                                            
                                            <div className="list__item--property">
                                                <span className="item-lead">About</span>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <p className="text-right">{Elipsy(props.school.description)}</p>
                                        </div>

                                    </div>
                                </div>


                                <div className="listings">
                                    <div className="listing__items">
                                        <div className="left">
                                            
                                            <div className="list__item--property">
                                                <span className="item-lead">Contacts</span>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <p>{props.school.contacts}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="listings">
                                    <div className="listing__items">
                                        <div className="left">
                                            
                                            <div className="list__item--property">
                                                <span className="item-lead">Created</span>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <p>{new Date(props.school.date_created).toLocaleDateString()}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="listings">
                                    <div className="listing__items">
                                        <div className="left">
                                            
                                            <div className="list__item--property">
                                                <span className="item-lead">Status</span>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <p>{props.school.active ? 'Approved':'Not Approved'}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="mb-3">
                        <StaffList see={true} add={false}/>
                    </div>


                </div>

                <div className="col pl-30">
                    <p className="mb-2"><i>Activity</i></p>
                    <Activities/>
                </div>
            </div>
            
        </div>


        </>
    );
    
}

export default Overview;