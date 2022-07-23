import React,{useContext, useState} from 'react';

// CONSTANTS AND UTILS
import {SchoolRegistrationFormConfig} from '../constants/forms';
// import { serializeRequestFormResponse } from '../constants/utils';

// COMPONENTS
import {Form,Input, FileUpload} from '../widget/Form';
import Button from '../widget/button';
import Card from '../widget/card';
import StoreContext from '../context';

// Hooks
import { useAppForm, useFormIssue } from '../Hooks/forms';


const NewSchool = () => {

    // Context
    const { createSchool } = useContext(StoreContext);
    
    const [formData, updateFormData  ] = useAppForm(SchoolRegistrationFormConfig);

    const [formIssue, updateIssue, checkIssue] = useFormIssue(SchoolRegistrationFormConfig);

    // console.log(formIssue)
    const formConfig = SchoolRegistrationFormConfig;

    // STATES
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newSchoolData = Object.entries(formData).reduce((fformData,[field,value])=>{
            fformData.append(field,value)
            return fformData
        }, new FormData());

        createSchool(newSchoolData)
        .then((res)=>{
            // Res is an error message
            if(!res) return

            updateIssue(res,true)
            setLoading(()=>false);
            return
        })

        setLoading(()=>true);
        updateIssue(null); // clear all issues
    }

    return (
        <div className="new_school">
            <Card loading={loading} variant="primary">

                <p className="text-center lead-lg">
                    Create new school
                </p>
                    
                <Form onSubmit={handleSubmit} err={formIssue}>
                    <FileUpload 
                        {...formConfig.logo}
                        updateForm = {updateFormData}
                        getIssue = {checkIssue}
                        clearIssue = {(element_name)=>updateIssue(element_name)}
                        disable={loading}
                    />
                    <div className="row">
                        <div className="col">
                            

                            <Input 
                                {...formConfig.name}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />

                            <Input
                                {...formConfig.description}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />

                            <Input
                                {...formConfig.motto}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />


                            <Input
                                {...formConfig.website}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />

                            <Input
                                {...formConfig.email}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />

                            
                        </div>



                        <div className="col">
                            <Input
                                {...formConfig.contacts}
                                updateForm={updateFormData}
                                getIssue={checkIssue}
                                clearIssue={(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />
                            
                            <Input
                                {...formConfig.address}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />

                            <Input
                                {...formConfig.city}
                                updateForm={updateFormData}
                                getIssue={checkIssue}
                                clearIssue={(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />
                            
                            <Input 
                                {...formConfig.state}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />

                            <Input
                                {...formConfig.country}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />

                            <Input
                                {...formConfig.zipcode}
                                updateForm = {updateFormData}
                                getIssue = {checkIssue}
                                clearIssue = {(element_name)=>updateIssue(element_name)}
                                disable={loading}
                            />


                            
                        </div>
                    </div>


                    <div className="form_footer">
                        <span>I Agree with Mirage Education Terms &amp; Conditions</span>
                    </div>

                    
                    
                    <div className="text-center cta mv-1">
                        <span className="msg mv-2 text-danger">
                            {formIssue}
                        </span>
                        <Button text={`${loading ? "Registring..." :"Register"}`} type="submit" className={`${loading ? 'disabled':''}`}/>
                    </div>
                </Form>
    
            </Card>
        </div>
    )
}

export default NewSchool;
