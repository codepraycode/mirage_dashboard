import React,{Component} from 'react';
import {SchoolsUrl} from '../../utils';
import axios from 'axios';
import {placeholderLogo} from '../../utils';
class NewSchool extends Component{
    state={
        formData:{
            logo:{
                config:{
                    type:"file",
                    name:"logo",
                    url:placeholderLogo,
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

            name:{
                config:{
                    type:"text",
                    name:"name",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            description:{
                config:{
                    type:"text",
                    name:"description",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            motto:{
                config:{
                    type:"text",
                    name:"motto",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            address:{
                config:{
                    type:"text",
                    name:"address",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            state:{
                config:{
                    type:"text",
                    name:"state",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            city:{
                config:{
                    type:"text",
                    name:"city",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            zipcode:{
                config:{
                    type:"text",
                    name:"zipcode",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            country:{
                config:{
                    type:"text",
                    name:"country",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },

            contacts:{
                config:{
                    type:"text",
                    name:"contacts",
                    value:'',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            },
            website:{
                config:{
                    type:"text",
                    name:"website",
                    value:'',
                    required:false,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            }
        },
        tryAgain:false,
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

            clone_state.formData.logo.config.value = file;//fileUrl;
            clone_state.formData.logo.config.url = fileUrl;
            clone_state.formData.logo.config.ImageName = file.name.replaceAll(' ', '-')
            this.setState({
                ...this.state,
                ...clone_state
            })
        
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

    handleRequest = (form_data,config)=>{
        
        axios.post(`${SchoolsUrl}/`,form_data,config)
        .then((res)=>{

            // console.log(res.data);
            window.location.href = "/"
            
        })
        .catch((err)=>{
            this.props.handleReAuth();
            this.setState({
                ...this.state,
                tryAgain:true,
            })
            // setTimeout(this.handleRequest(form_data,config),3000)
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        let state_clone = this.state;

        let formdata = state_clone.formData;
        // console.log(this.state);
        let form_data = new FormData();
        let myHeaders = new Headers();
        // let data = {}
        myHeaders.append("Content-Type", 'multipart/form-data');
        myHeaders.append("Authorization", `Bearer ${this.props.tokens.access_token}`);
        Object.keys(formdata).forEach((item)=>{
            form_data.append(item, formdata[item].config.value);
            }
        );
        let config = {
            headers:{
                "Content-Type": 'multipart/form-data',
                "Authorization":`Bearer ${this.props.tokens.access_token}`
            }
        }

        state_clone.loading=true;

        this.handleRequest(form_data,config);

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

    render(){
        // console.log(this.props.tokens)
        if(this.state.tryAgain){
            this.handleSubmit();
        }
        return (
            <div className="container">
                <div className="content">
                    <h2 className="lead">Create School Account</h2>
               <form className="card shadow-primary" onSubmit={this.handleSubmit}>
                   {
                        this.state.loading ? 
                        <p className="spinner text-right text-primary">
                            <i className="fad fa-spinner-third"></i>
                        </p>
                        :
                        null
                    }
                   <div className="card-header">
                       
                   </div>
                   <div className="img-group">
                            <div className="img-preview" style={{background:`url('${this.state.formData.logo.config.url}') center center no-repeat`}}></div>
                            <input type="file" accept='image/*' onChange={this.handlePreview}/>
                    </div>
                    
                    <div className="label-group">
                            <label htmlFor="name" className="required">School Name</label>
                            <input
                                {...this.state.formData.name.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                        </div>


                    <div className="label-group">
                        <label htmlFor="name">about</label>
                        <textarea 
                            {...this.state.formData.description.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                        />
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <div className="label-group">
                            <label htmlFor="name">Motto</label>
                            <input 
                                {...this.state.formData.motto.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                        </div>
                        <div className="label-group">
                            <label htmlFor="name">Website</label>
                            <input 
                                {...this.state.formData.website.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                        </div>
                    </div>

                    <div className="label-group">
                        <label htmlFor="name">Address</label>
                        <textarea 
                            {...this.state.formData.address.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                        />
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <div className="label-group">
                            <label htmlFor="name">City</label>
                            <input
                                {...this.state.formData.city.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                        </div>
                        <div className="label-group">
                            <label htmlFor="name">State</label>
                            <input
                                {...this.state.formData.state.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <div className="label-group">
                            <label htmlFor="name">Zip Code</label>
                            <input 
                                {...this.state.formData.zipcode.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                        </div>
                        <div className="label-group">
                            <label htmlFor="name">Country</label>
                            <input 
                                {...this.state.formData.country.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                        </div>
                    </div>

                    <div className="label-group">
                        <label htmlFor="name">Contact</label>
                        <input
                            {...this.state.formData.contacts.config}
                            onBlur={(e)=>this.handleInputChange(e,true)}
                            onChange={(e)=>this.handleInputChange(e,false)}
                        />
                    </div>
{/* 
                    <div className="flex flex-wrap justify-between">
                        <div className="label-group">
                            <label htmlFor="name">Contact 1</label>
                            <input
                                {...this.state.formData.contact.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                        </div>
                        <div className="label-group">
                            <label htmlFor="name">Contact 2</label>
                            <input
                                {...this.state.formData.contact1.config}
                                onBlur={(e)=>this.handleInputChange(e,true)}
                                onChange={(e)=>this.handleInputChange(e,false)}
                            />
                        </div>
                    </div> */}


                    <button className="btn btn-primary">
                        Submit
                    </button>
                </form>
                </div>
            </div>
        )
    }
}


export default NewSchool;