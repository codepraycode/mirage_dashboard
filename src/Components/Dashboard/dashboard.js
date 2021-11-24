import React, { Component } from 'react';
import BreadCrumb from '../../widget/BreadCrumb/breadcrumb';
import Schools from './schools';
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    state = {
        
        
        showMenu:false
    }
    
    handleMenu = ()=>{
        this.setState({
            ...this.state,
            showMenu:!this.state.showMenu
        })
    }

    
    

    handleMenu=()=>{
        this.setState({
            ...this.state,
            showMenu:!this.state.showMenu
        })
    }
    
    render() {
        
        
        return (
            <>
            <BreadCrumb>
                <div className="left_crumb">
                    <span>Dashboard</span>
                </div>
                <div className="right_crumb">
                    <button className="btn btn-primary btn-primary-outline">
                        New
                    </button>


                    <button 
                        className="btn btn-primary btn-primary-outline ml-2 "
                        onClick={()=>this.handleMenu()}>
                        Menu
                    </button>
                    
                    <div className={`dropdown ${this.state.showMenu ? 'show':''}`}>
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <i className="fad fa-sign-out"></i>
                                <Link to="/login">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </BreadCrumb>

            <div className="container">
                <div className="search-panel">
                    <div className="search-input">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="search" name="search-school" placeholder="Search School"/>
                    </div>
                </div>
            </div>

            <div className="container no-padding">
                <Schools {...this.props}/>
            </div>



            </>
        );
    }
}

export default Dashboard;