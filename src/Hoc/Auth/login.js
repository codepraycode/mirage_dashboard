import React, { Component } from 'react'
import AuthWrapper from './auth_wrapper';
import {AccountLogin} from '../../utils';
class Login extends Component {
    state = {
        formData:{
            email:{
                config:{
                    type:"email",
                    name:"email",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },
            password:{
                config:{
                    type:"password",
                    name:"password",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },
            access_token:'',
            refresh_token:''
        },
        loading:false,
        authStatus:{
            attempted:false,
            error:false,
            data:{},
        }

    }


    handleInputChange = (e, blur)=>{
        let id = e.target.name;
        let state_clone = this.state;
        state_clone.formData[id]['config']['value'] = e.target.value;
        if (blur){
            let validated = this.validate(state_clone.formData[id]);
            state_clone.formData[id] = validated
        }

        this.setState({
            ...this.state,
            ...state_clone
        });
    }

    handleRequest = (auth_data)=>{
        // console.log(auth_data);
        let clone_state = this.state;
        clone_state.authStatus = {
            attempted:true,
            ...auth_data
        };
        clone_state.loading = false;

        this.setState({
            ...this.state,
            ...clone_state
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        let state_clone = this.state;
        
        let data = {
            email:this.state.formData.email.config.value,
            password:this.state.formData.password.config.value
        }

        AccountLogin(data, this.handleRequest);
        state_clone.loading = true;
        // console.log(data);
        
        // console.log(response);
        // console.log(process.env.DEV);
        
        
        this.setState({
            ...this.state,
            ...state_clone
        });
    }


    validate= (elem)=>{
        //  Run Validations
        // let elem_config = elem.config;
        if(!elem.config.required) return elem;

        
        // Validate Not empty
        if (elem.config.value.length === 0){
            // element value is empty
            elem.validations.valid = false;
            elem.validations.msg = `${elem.config.name} is required`;
        }else{
            elem.validations.valid = true;
            elem.validations.msg = '';
        }


        return elem;

    }


    render() {
        return (
            <AuthWrapper signup={false} extraClass={"login"} authData={this.state.authStatus.attempted && !this.state.authStatus.error ? this.state.authStatus.data: null}>
                <div className="card">
                    {
                        this.state.loading ? 
                        <p className="spinner text-right text-primary">
                            <i className="fad fa-spinner-third"></i>
                        </p>
                        :
                        null
                    }
                    
                    <form onSubmit={this.handleSubmit}>
                        <span className="msg text-danger">
                            {!this.state.loading && this.state.authStatus.error ? this.state.authStatus.data.detail:null}
                        </span>
                        
                        <div>
                            <p className="required">Email</p>
                            <input 
                                placeholder="Enter Email" 
                                {...this.state.formData.email.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                            <span className="msg text-danger">{this.state.formData.email.validations.msg}</span>
                        </div>

                        <div>
                            <p className="required">Password</p>
                            <input 
                                placeholder="Password" 
                                {...this.state.formData.password.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />

                            <span className="msg text-danger">{this.state.formData.password.validations.msg}</span>
                        </div>

                        <br/>
                        
                        <div className="text-center mv-1">
                        <button type="submit" className="spin btn btn-primary">
                            Login
                            {/* <i className="fas fa-spinner    "></i> */}
                        </button>
                        </div>  
                    </form>


                    
                </div>
            </AuthWrapper>
        )
    }
}


export default Login;