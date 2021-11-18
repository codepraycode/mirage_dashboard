import React, { Component } from 'react';
import SchoolItem from './school_item';

class Schools extends Component {
    state = {
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
            },
            {
                id:2,
                key:'Ajfdjskoekmlld23kke',
                name:'Living School',
                slug:'living-school',
                logo:'/asset/img/logos/millwall.svg',
                website:'www.lsomething.com',
                date_created:'23/25/3029',
                last_sync:'25/25/3029',
                active:true,
            }
        ]
    }


    

    renderPage = ()=>{
        let template = this.state.schools.map((item,i)=>{
            return (
                <SchoolItem school={item} key={i}/>
            )
        });

        return template;
    }

    render() {
        return (
            <div className="listings__container">
            {this.renderPage()}
            </div>
        );
    }
}

export default Schools;