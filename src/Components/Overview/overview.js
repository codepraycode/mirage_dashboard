import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import BreadCrumb from '../../widget/BreadCrumb/breadcrumb';
import TabNav from '../../widget/Tab/navTab';
import Activities from './activities';
import StaffList from '../Staffs/staff_list';
import {GetSchoolsUrl} from '../../utils';
import copy from 'copy-to-clipboard';
const Overview =(props)=> {

    let [school,setSchool] = useState({
        gotten:false,
        copiedKey:false

    })
    const {key} = useParams();

    // console.log(props)

    const GetSchoolDetails=()=>{
        if (!school.gotten){
        let options ={
                method: 'GET',
                headers: {
                    'Authorization':`Bearer ${props.tokens.access_token}`
                }
        }
            
        fetch(`${GetSchoolsUrl}/${key}`, options)
        .then((response)=>{
            console.log(response)
            if (response.ok){
                // this.props.handleReAuth(false);
                return response.json()
            }
            else if(response.status === 401){
                console.log("Response 401!!")
                // this.props.handleReAuth(true);
                // window.location.href = "/login";
                // this.setState({
                // ...this.state,
                // loading:false,
                // fetched:false,
                // tried:true
                // })

                return
            }

            // return response.json()
            
            
        })
        .then((data)=>{
            
            //  Adding harcoded logos
            // let schools = Object.keys(data).map((each)=>{
            //     let theschool = data[each];
            //     console.log(theschool)
            //     // school['logo'] = '/asset/img/logos/millwall.svg';
            //     // school['slug'] = `${ school.name.replaceAll(' ','-')}`;
            //     return school;
            //     }
            // )
            // console.log(data)
            data['logo'] = '/asset/img/logos/millwall.svg';
            // console.log(data)
            setSchool({...data,gotten:true});
            
        })
        .catch((err)=>{
            // console.error("Error",err);
            console.log("Bad Error Occured",err);
            // this.setState({
            //     ...this.state,
            //     loading:false,
            //     tried:true
            // })
        })
    }
    }


    const copyKey = ()=>{
        copy(school.key)
        setSchool({
            ...school,
            copiedKey:true
        })
    }

    useEffect(GetSchoolDetails)
    // console.log(typeof(setSchool))

    return (
        <>
        <BreadCrumb>
            <div className="left_crumb">
                <span>
                    <Link to="/">Dashboard</Link>
                </span>
                <i className="fad fa-chevron-right mx-1"></i>
                {school.name}
            </div>
            <div className="right_crumb">
                <button className="btn btn-success btn-success-outline">
                    Approved
                </button>
            </div>
        </BreadCrumb>

        <TabNav/>

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

                            <p className="w-60 text-right">
                                    <span>{school.key}</span>
                                    <i className={`fas fa-copy mx-2 copy-icon ${school.copiedKey ? 'text-success':'text-primary'}`} onClick={()=>copyKey()}></i>
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
                                            <p>{school.name}</p>
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
                                            <p>{school.about}</p>
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
                                            <p>{school.contacts}</p>
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
                                            <p>{school.date_created}</p>
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
                                            <p>{school.active ? 'Approved':'Not Approved'}</p>
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