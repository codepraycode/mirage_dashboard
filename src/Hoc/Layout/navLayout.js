import React, { useState,useEffect } from 'react';
import { Link,} from 'react-router-dom';
import BreadCrumb from '../../widget/BreadCrumb/breadcrumb';
import TabNav from '../../widget/Tab/navTab';
import { useParams} from 'react-router-dom';
import {SchoolsUrl} from '../../utils';
import axios from 'axios';
import Loading from '../../widget/preloader/loading';
// import { Outlet} from "react-router-dom";

const NavLayout = (props) =>{
    let [school,setSchool] = useState({
        gotten:false,
        loading:true,
    })
    const {key} = useParams();

    // console.log(props)

   const GetSchoolDetails = ()=>{
        if (!school.gotten){
        let options ={
                headers: {
                    'Authorization':`Bearer ${props.tokens.access_token}`
                }
        }

        // console.log('Checking')


        axios.get(`${SchoolsUrl}/${key}`,options)
        .then((res)=>{
            // console.log(res);
            let data = res.data;
            setSchool({...school,data,gotten:true,loading:false});
                
            // return
        })
        .catch((err)=>{
            // console.log(err)
            props.handleReAuth()
        })

        // console.log("Need to return to resolve")
        

        
            
       
    }
    }


    const renderContent = ()=>{
        let template = (
                 <>
                    <BreadCrumb>
                        <div className="left_crumb">
                            <span>
                                <Link to="/">Dashboard</Link>
                            </span>
                            <i className="fad fa-chevron-right mx-1"></i>
                            {school.data.name}
                        </div>
                        <div className="right_crumb">
                            {
                                school.data.active ? 
                                <button className="btn btn-success btn-success-outline btn-success-hover">
                                    Approved
                                </button>
                                :
                                <button className="btn btn-danger btn-danger-outline btn-danger-hover">
                                    Not Approved
                                </button>
                            }
                            
                        </div>
                    </BreadCrumb>

                    <TabNav/>
                        {/* {props.children}         */}
                    {React.cloneElement(props.children, {school:school.data})}
                </>
            )
        
        return template;
                
    }

    useEffect(GetSchoolDetails)
    


    // console.log(school)
    return (
       <>
       {
           school.loading ? 
           <Loading/>
           :
           renderContent()
       }
       </>
    )
}

export default NavLayout;
