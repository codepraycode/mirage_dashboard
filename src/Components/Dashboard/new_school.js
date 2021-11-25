import React,{Component} from 'react';


class NewSchool extends Component{
    state={
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
            image:{
                config:{
                    type:"file",
                    name:"logo",
                    value:'/asset/img/logos/millwall.svg',
                    required:true,
                },
                validations:{
                    valid:false,
                    msg:''
                },
                touched:false
            }
        },
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
        if (file){
            let clone_state = this.state;
            let fileUrl = window.URL.createObjectURL(file);

            console.log(fileUrl);

            clone_state.formData.image.config.value = fileUrl;
            this.setState({
                ...this.state,
                ...clone_state
            })
        }
        
    }

    render(){
        return (
            <div className="container">
                <div className="content">
                    <h2 className="lead">Create School Account</h2>
               <form className="card shadow-primary">
                   <div className="card-header">
                       
                   </div>
                   <div className="img-group">
                            {/* <img src="/asset/img/logos/millwall.svg" alt="Preview" srcset="" /> */}
                            <div className="img-preview" style={{background:`url('${this.state.formData.image.config.value}') center center no-repeat`}}></div>
                            <input type="file" onChange={this.handlePreview}/>
                    </div>
                    
                    <div className="label-group">
                            <label htmlFor="name" className="required">School Name</label>
                            <input type="text" />
                        </div>


                    <div className="label-group">
                        <label htmlFor="name">about</label>
                        <textarea type="text"></textarea>
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <div className="label-group">
                            <label htmlFor="name">Motto</label>
                            <input type="text" />
                        </div>
                        <div className="label-group">
                            <label htmlFor="name">Website</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="label-group">
                        <label htmlFor="name">Address</label>
                        <textarea type="text"></textarea>
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <div className="label-group">
                            <label htmlFor="name">City</label>
                            <input type="text" />
                        </div>
                        <div className="label-group">
                            <label htmlFor="name">State</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <div className="label-group">
                            <label htmlFor="name">Zip Code</label>
                            <input type="text" />
                        </div>
                        <div className="label-group">
                            <label htmlFor="name">Country</label>
                            <input type="text" />
                        </div>
                    </div>


                    <div className="flex flex-wrap justify-between">
                        <div className="label-group">
                            <label htmlFor="name">Contact 1</label>
                            <input type="text" />
                        </div>
                        <div className="label-group">
                            <label htmlFor="name">Contact 2</label>
                            <input type="text" />
                        </div>
                    </div>


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