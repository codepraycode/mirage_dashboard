import React, { PureComponent } from 'react';
import SchoolItem from './school_item';
import { SchoolsUrl } from "../../utils";
import axios from 'axios';
import {placeholderLogo} from '../../utils';
import Loading from '../../widget/preloader/loading';
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
        // console.log('Fetching school')
        

         // let clone_state = this.state;
            let config ={
                headers: {
                    'Authorization':`Bearer ${this.props.tokens.access_token}`
                }
            }
            // console.log(SchoolsUrl)
            axios.get(SchoolsUrl,config)
            .then((res)=>{
                // console.log(res.data)
                let data = res.data;

                let schools = data.map((item)=>{
                    if (!item.logo){
                        item.logo = placeholderLogo;
                    }
                    item.slug = `${item.name.replaceAll(' ','-')}`;
                    return item
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
                // console.log(err)
                this.props.handleReAuth();
            })
            
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
                    <Loading/>
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