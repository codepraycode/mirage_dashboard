import React,{useState} from 'react';
import {Link} from 'react-router-dom';

// COMPONENTS
import {Form,Input, FileUpload} from '../../widget/Form';
import Button from '../../widget/button';
import Card from '../../widget/card';

// Constants and utils
import { UserRegisterFormConfig } from '../../constants/forms';
import {CreateAccount} from '../../utils';


const SignUp = ()=> {

    const initialIssueState = {
        message:null,// general message,
        formIssues:{
            
        } // input name:error message
    }

    // States
    // eslint-disable-next-line
    const [formConfig, setFormConfig] = useState(UserRegisterFormConfig);
    const [formData, setFormData] = useState({});
    
    const [loading, setLoading] = useState(false);
    const [issues, setIssues] = useState(initialIssueState);


    const updateFormData = (key, value)=>{

        setFormData((prev)=>{
            prev[key] = value;

            return prev;
        })
    }

    const checkIssue = (name)=>{
        return issues.formIssues[name]
    }


    const clearIssue = (name)=>{
        setIssues((prev)=>{
            delete prev.formIssues[name]

            return prev
        })
    }

    const handleRequest = (auth_data)=>{
        // expecting ok and data object

        setIssues((prev)=>{
            let formIssues = {}
            let msg = null
            
            if (!auth_data.ok){
                msg = auth_data.data.message || "An Error Occured";
                for (let each of Object.keys(formData)){
                    if (auth_data.data[each]){
                        formIssues[each] = "Issue With Your Input Here";
                    }
                }
            }

            prev.message = msg;
            prev.formIssues = formIssues

            console.log(prev);

            return {...prev};
        })

        setLoading(()=>false);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        // console.log(formData);

        // Clear Error Display
        setIssues(()=>{
            return initialIssueState
        })

        CreateAccount(formData, handleRequest);

        setLoading(()=>false);
    }
    
    return (
        
        <Card loading={loading}>  

            <p className="text-center lead">
                Sign up for a new account
            </p>
                
            <Form onSubmit={handleSubmit} err={issues.message}>

                <div className="row">

                    <div className="col">
                        <FileUpload 
                            {...formConfig.avatar}
                            updateForm = {updateFormData}
                            getIssue = {checkIssue}
                            clearIssue = {clearIssue}
                            disable={loading}
                        />

                        <Input 
                            {...formConfig.firstname}
                            updateForm = {updateFormData}
                            getIssue = {checkIssue}
                            clearIssue = {clearIssue}
                            disable={loading}
                        />

                        <Input
                            {...formConfig.lastname}
                            updateForm = {updateFormData}
                            getIssue = {checkIssue}
                            clearIssue = {clearIssue}
                            disable={loading}
                        />

                        <Input
                            {...formConfig.email}
                            updateForm = {updateFormData}
                            getIssue = {checkIssue}
                            clearIssue = {clearIssue}
                            disable={loading}
                        />    
                    </div>



                    <div className="col">
                        <Input
                            {...formConfig.username}
                            updateForm = {updateFormData}
                            getIssue = {checkIssue}
                            clearIssue = {clearIssue}
                            disable={loading}
                        />
                        
                        <Input 
                            {...formConfig.password}
                            updateForm = {updateFormData}
                            getIssue = {checkIssue}
                            clearIssue = {clearIssue}
                            disable={loading}
                        />
                        
                        <Input
                            {...formConfig.confirmPassword}
                            updateForm = {updateFormData}
                            getIssue = {checkIssue}
                            clearIssue = {clearIssue}
                            disable={loading}
                        />
                    </div>
                </div>

                
                
                <div className="text-center mv-1">
                    <Button text={`${loading ? "Registring..." :"Register"}`} type="submit" className={`${loading ? 'disabled':''}`}/>
                </div>
            </Form>


            <div className="cta">
                <span>Already have an account?</span>


                <Link to="/signin">
                    Sign In
                </Link>

            </div>
  
        </Card>

    )
    
}


export default SignUp;