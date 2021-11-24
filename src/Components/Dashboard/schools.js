import React, { Component } from 'react';
import SchoolItem from './school_item';
import { GetSchoolsUrl } from "../../utils";

class Schools extends Component {
    /* 
    schools:[
            {
                id:1,
                key:'Ajfdjskoekmlldkke',
                name:'Homat School',
                slug:'homat-school',
                logo:'/asset/img/logos/millwall.svg',
                website:'www.something.com',
                date_created:'20/25/3029',
                last_sync:'20/25/3029',
                active:false,
            }
        ]
     */
    state = {
        schools:[],
        loading:true,
        fetched:false,
        tried:false
    }

    componentDidMount(){
        this.fetchSchools();
    }


    fetchSchools = ()=>{
        console.log('Fetching school')
        // console.log(this.props);
        // console.log(`Bearer ${this.props.access_token}`)
    

         // let clone_state = this.state;
            let options ={
                method: 'GET',
                headers: {
                    'Authorization':`Bearer ${this.props.access_token}`
                }
            }
            // console.log(options)
            fetch(GetSchoolsUrl, options)
            .then((response)=>{
                console.log(response)
                if (response.status === 200){
                    this.props.authCallback(false);
                    return response.json()

                }
                else{
                    console.log("Error Ugly")
                    this.props.authCallback(true);
                    this.setState({
                    ...this.state,
                    tried:true
                })
                }
                // return response.json()
                
                
            })
            .then((res)=>{
                // console.log(res);
                // let schools = {
                //     ...res,
                //     logo:'/asset/img/logos/millwall.svg'
                // }
                //  Adding harcoded logos
                let schools = Object.keys(res).map((item)=>{
                    res[item]['logo'] = '/asset/img/logos/millwall.svg';
                    return res[item]
                })
                // console.log(schools)
                this.setState({
                    ...this.state,
                    loading:false,
                    fetched:true,
                    tried:true,
                    schools
                })
            })
            .catch((err)=>{
                // console.error("Error",err);
                console.log("Error Occured");
                this.setState({
                    ...this.state,
                    tried:true
                })
            })
    }


    

    renderPage = ()=>{
        let template = null;
        if (!this.state.fetched && this.state.tried){
            console.log("tried!")
           template = <div className="text-center text-muted">
               <p className="no-record">
                   <i className="fas fa-exclamation-circle f-20 "></i>
                   <button className="btn btn-primary" onClick={()=>this.fetchSchools()}>
                       Try Again
                   </button>
               </p>
                
            </div>
            
        }
        
        
        else if (this.state.loading){
            template = (
                    <div className="text-center text-muted">
                        <p className="spinner">
                            Loading Schools
                            <i className="ml-1 fad fa-spinner-third"></i>
                        </p>
                    </div>
            )
        }
        else if (this.state.schools.length === 0){
            template = (
                <div className="text-center text-muted">
                    <p>No school Record</p>
                </div>
            )
        }else{
            template = this.state.schools.map((item,i)=>{
                return (
                    <SchoolItem school={item} key={i}/>
                )
            });
        }

        return template;
    }

    render() {
        // this.fetchSchools();
        console.log(this.state);
        return (
            <div className="listings__container">
            {this.renderPage()}
            </div>
        );
    }
}

export default Schools;