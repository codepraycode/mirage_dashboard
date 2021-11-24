import React, { PureComponent } from 'react';
import SchoolItem from './school_item';
import { GetSchoolsUrl } from "../../utils";

class Schools extends PureComponent {
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

    // componentDidMount(){
    //     this.fetchSchools()
    // }

    fetchSchools = ()=>{
        if(this.state.tried || this.state.fetched){ return}

        this.MakeREquest();
    }




    MakeREquest = ()=>{
        console.log('Fetching school')
        

         // let clone_state = this.state;
            let options ={
                method: 'GET',
                headers: {
                    'Authorization':`Bearer ${this.props.tokens.access_token}`
                }
            }
            fetch(GetSchoolsUrl, options)
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
                    this.setState({
                    ...this.state,
                    loading:false,
                    fetched:false,
                    tried:true
                    })

                    return
                }

                // return response.json()
                
                
            })
            .then((res)=>{
                
                //  Adding harcoded logos
                let schools = Object.keys(res).map((item)=>{
                    res[item]['logo'] = '/asset/img/logos/millwall.svg';
                    res[item]['slug'] = `${ res[item].name.replaceAll(' ','-')}`;
                    return res[item]
                })
                
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
                console.log("Bad Error Occured",err);
                this.setState({
                    ...this.state,
                    loading:false,
                    tried:true
                })
            })


            // this.setState({
            //         ...this.state,
            //         loading:true,
            // })
    }


    

    renderPage = ()=>{
        let template = null;
        if (this.state.tried && !this.state.fetched){
           template = <div className="text-center text-muted">
               <div className="no-record">
                   <p> <i className="fas fa-exclamation-circle f-20 "></i> Something Not Right Occured</p>
                   <button className="btn btn-primary" onClick={()=>window.location.href="/login"}>
                       Login Again
                   </button>
               </div>
                
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
        this.fetchSchools();
        // console.log(this.state);
        // console.log(this.props);
        // this.MakeREquest();
        return (
            <div className="listings__container">
            {this.renderPage()}
            </div>
        );
    }
}

export default Schools;