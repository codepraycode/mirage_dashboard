import React,{useState} from 'react';

// CONSTANTS
import {img_placeholder} from '../constants/filepaths';
import {SchoolRegistrationFormConfig} from '../constants/forms';


// COMPONENTS
import {Form,Input, FileUpload} from '../widget/Form';
import Button from '../widget/button';
import Card from '../widget/card';

const CreateSchool = () => {

    const formConfig = SchoolRegistrationFormConfig;
    const initialIssueState = {
        message:null,// general message,
        formIssues:{
            
        } // input name:error message
    }

    // STATES
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


    const handleSubmit = (e) =>{
        e.preventDefault();

        // console.log(formData);

        // Clear Error Display
        setIssues(()=>{
            return initialIssueState
        })

        // CreateAccount(formData, handleRequest);
        console.log(formData);
        console.log("Creating School...");

        const fformData = new FormData()

        // const file_types = ['image','file']

        Object.entries(formData).forEach(([field,value])=>{
            // const config = formConfig[field]
            
            fformData.append(field,value)
        })

        console.log("FormData: ", fformData);

        setLoading(()=>true);
    }

    return (
        <div className="new_school">
            <Card loading={loading} variant="primary">

                <p className="text-center lead-lg">
                    Create new school
                </p>
                    
                <Form onSubmit={handleSubmit} err={issues.message}>
                    <FileUpload 
                                {...formConfig.logo}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                                placeholder={img_placeholder}
                            />
                    <div className="row">
                        <div className="col">
                            

                            <Input 
                                {...formConfig.name}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                            />

                            <Input
                                {...formConfig.description}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                            />

                            <Input
                                {...formConfig.motto}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                            />


                            <Input
                                {...formConfig.website}
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

                            <Input
                                {...formConfig.contacts}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                            />
                        </div>



                        <div className="col">
                            <Input
                                {...formConfig.address}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                            />
                            
                            <Input 
                                {...formConfig.town}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                            />
                            
                            <Input
                                {...formConfig.city}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                            />


                            <Input
                                {...formConfig.country}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                            />

                            <Input
                                {...formConfig.zipcode}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {clearIssue}
                                disable={loading}
                            />


                            
                        </div>
                    </div>


                    <div className="form_footer">
                        <span>I Agree with Mirage Education Terms&Conditions</span>
                    </div>

                    
                    
                    <div className="text-center cta mv-1">
                        <Button text={`${loading ? "Registring..." :"Register"}`} type="submit" className={`${loading ? 'disabled':''}`}/>
                    </div>
                </Form>
    
            </Card>
        </div>
    )
}

export default CreateSchool
