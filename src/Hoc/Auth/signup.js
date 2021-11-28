import React, { Component } from 'react'
import AuthWrapper from './auth_wrapper';
import {placeholderDP,CreateAccount} from '../../utils';

class SignUp extends Component {
    state = {
        formData:{
            avatar:{
                config:{
                    type:"file",
                    name:"avatar",
                    url:placeholderDP,
                    ImageName:'',
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            firstname:{
                config:{
                    type:"text",
                    name:"firstname",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            lastname:{
                config:{
                    type:"text",
                    name:"lastname",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

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

            username:{
                config:{
                    type:"text",
                    name:"username",
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

            confirmPassword:{
                config:{
                    type:"password",
                    name:"confirmPassword",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            }
        },
        formError:{
            password:{
                error:false,
                msg:'Password Does not Match'
            },
            auth:{
                error:false,
                msg:''
            }
        },
        loading:false
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

    handlePreview = (e)=>{
        let file = e.target.files[0];
        
        let clone_state = this.state;
            let fileUrl = window.URL.createObjectURL(file);

            // console.log(fileUrl);

            clone_state.formData.avatar.config.value = file;//fileUrl;
            clone_state.formData.avatar.config.url = fileUrl;
            clone_state.formData.avatar.config.ImageName = file.name.replaceAll(' ', '-')
            this.setState({
                ...this.state,
                ...clone_state
            })
        
    }

    // handleInputChange = (e, blur)=>{
    //     let id = e.target.name;
    //     let state_clone = this.state;
    //     state_clone.formData[id]['config']['value'] = e.target.value;
    //     if (blur){
    //         let validated = this.validate(state_clone.formData[id]);
    //         state_clone.formData[id] = validated
    //     }

    //     this.setState({
    //         ...this.state,
    //         ...state_clone
    //     });
    // }

    harnessRequest = (response)=>{
        console.log(response)
        if (response.ok){
            window.location.href = "/login"
        }else{
            let clone_state = this.state;

            let auth = {
                error:true,
                msg:response.data //.detail
            }
            clone_state.formError.auth = auth
            clone_state.loading = false

            this.setState({
                ...this.state,
                ...clone_state
            });

        }
        
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        let state_clone = this.state;

        let formdata = state_clone.formData;
        console.log(formdata);
        if(!(formdata.password.config.value === formdata.confirmPassword.config.value)){
            state_clone.formError.password.error = true;
            console.log(formdata);
            
        }else{
            state_clone.formError.password.error = false;
            let form_data = new FormData();
            // let myHeaders = new Headers();
            
            // myHeaders.append("Content-Type", 'multipart/form-data');
            // myHeaders.append("Authorization", `Bearer ${this.props.tokens.access_token}`);
            Object.keys(formdata).forEach((item)=>{
                form_data.append(item, formdata[item].config.value);
                }
            );
            // let config = {
            //     headers:{
            //         "Content-Type": 'multipart/form-data'
            //     }
            // }

            state_clone.loading=true;

            // this.handleRequest(form_data,config);
            CreateAccount(form_data,this.harnessRequest)

            this.setState({
                ...this.state,
                ...state_clone
            });
            
        }

        this.setState(
                {
                    ...this.state,
                    ...state_clone
                }
        )
        
        
        
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
            <AuthWrapper signup={true}>
                <div className="auth-card no-hype">

                        <div className="left">
                            <div className="fet">
                                <h4>
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                Free Account
                                </h4>

                                <p>
                                    Create apps, connect your application and take administrative control over your School application.
                                </p>
                            </div>

                            <div className="fet">
                                <h4>
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                Free Account
                                </h4>

                                <p>
                                    Create apps, connect your application and take administrative control over your School applications.
                                </p>
                            </div>



                            <div className="fet">
                                <h4>
                                <i className="fas fa-school"></i>
                                School Platform
                                </h4>

                                <p>
                                    A platform to ease school operations(Admission, Report and more)
                                </p>
                            </div>


                            <div className="fet">
                                <h4>
                                <i className="fas fa-upload    "></i>
                                Control
                                </h4>

                                <p>
                                    Control,Monitor and manage school affairs.
                                </p>
                            </div>
                        </div>

                        <div className="right card">
                            <span className="msg text-danger text-center mb-2">
                                    {!this.state.loading && this.state.formError.auth.error ? this.state.formError.auth.msg:null}
                                </span>
                            <form onSubmit={this.handleSubmit}>
                                {/* <span className="msg text-danger">{this.state.formError.auth.error ? this.state.formError.auth.msg:null}</span> */}

                                <div className="img-group">
                                    <div className="img-preview" style={{background:`url('${this.state.formData.avatar.config.url}') center center no-repeat`}}></div>
                                    <input type="file" accept='image/*' onChange={this.handlePreview}/>
                                </div>

                                <div className="label-group">
                                    <label className="required">First name</label>
                                    <input
                                        {...this.state.formData.firstname.config}
                                        onBlur={(e)=>this.handleInputChange(e,true)}
                                        onChange={(e)=>this.handleInputChange(e,false)}
                                    />
                                </div>
                                

                                <div className="label-group">
                                    <label className="required">Last name</label>
                                    <input
                                        {...this.state.formData.lastname.config}
                                        onBlur={(e)=>this.handleInputChange(e,true)}
                                        onChange={(e)=>this.handleInputChange(e,false)}
                                    />
                                </div>

                                <div className="label-group">
                                    <label className="required">Email</label>
                                    <input
                                        {...this.state.formData.email.config}
                                        onBlur={(e)=>this.handleInputChange(e,true)}
                                        onChange={(e)=>this.handleInputChange(e,false)}
                                    />
                                </div>

                                <hr/>
                                <span className="msg text-danger">{this.state.formError.password.error ? this.state.formError.password.msg:null}</span>
                                <div className="label-group">
                                    
                                    <label className="required">Username</label>
                                    <input 
                                        {...this.state.formData.username.config}
                                        onBlur={(e)=>this.handleInputChange(e,true)}
                                        onChange={(e)=>this.handleInputChange(e,false)}
                                    />
                                </div>


                                <div className="label-group">
                                    <label className="required">Password</label>
                                    <input
                                        {...this.state.formData.password.config}
                                        minLength={6}
                                        onBlur={(e)=>this.handleInputChange(e,true)}
                                        onChange={(e)=>this.handleInputChange(e,false)}
                                    />
                                </div>


                                <div className="label-group">
                                    <label className="required">Confirm Password</label>
                                    <input
                                        {...this.state.formData.confirmPassword.config}
                                        onBlur={(e)=>this.handleInputChange(e,true)}
                                        onChange={(e)=>this.handleInputChange(e,false)}
                                    />
                                </div>

                                <div className="text-center mv-1">

                                {
                                    this.state.loading ? 
                                    
                                    <button type="submit" className="btn btn-primary text-center disabled" disabled={true}>
                                        Loading...
                                    </button>
                                    
                                    :
                                    
                                    <button type="submit" className="btn btn-primary text-center">
                                        SUBMIT
                                    </button>
                                    
                                }
                                </div>

                                

                            </form>

                        </div>
                    </div>
            </AuthWrapper>
        )
    }
}


export default SignUp;