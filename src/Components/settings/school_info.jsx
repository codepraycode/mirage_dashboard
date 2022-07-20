import React from 'react';
// Widgets
import { Input, FileUpload } from '../../widget/Form';

// Configs
import { SchoolRegistrationFormConfig } from '../../constants/forms';
import { img_placeholder } from '../../constants/filepaths';

const SchoolInfo = () => {
    
    const updateFormData = ()=>{}
    const checkIssue = ()=>{}
    const clearIssue = ()=>{}

    const loading = false

    return (
        <section className="panel">
            <div className="panel_header">
                <p>School Information</p>
            </div>

            <div className="panel_content">
                <div>
                    <FileUpload
                        {...SchoolRegistrationFormConfig.logo}
                        placeholder={img_placeholder}
                        updateForm={updateFormData}
                        getIssue={checkIssue}
                        clearIssue={clearIssue}
                        disable={loading}
                        className={"sm-show"}
                    // notCenter={true}
                    />

                    <div className="panel_content--item">
                        <Input 
                            {...SchoolRegistrationFormConfig.name}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>


                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.description}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                            multiple={true}
                        />
                        
                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.motto}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />

                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.email}
                            value={"Sample Email"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.contact}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.website}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>

                </div>


                <div>
                    <FileUpload
                        {...SchoolRegistrationFormConfig.logo}
                        placeholder={img_placeholder}
                        updateForm={updateFormData}
                        getIssue={checkIssue}
                        clearIssue={clearIssue}
                        disable={loading}
                        // notCenter={true}
                    />


                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.address}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.town}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.city}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>
                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.country}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>
                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.zipcode}
                            value={"Sample Data"}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>
                    <div className="panel_content--item text-muted">

                        <div className="flex mb-1">
                            <p className='lead mr-3 '>Status: </p>
                            <p>Approved</p>
                        </div>


                        <div className="flex">
                            <p className='lead mr-3'>Created: </p>
                            <p>YYYY-MM-DD</p>
                        </div>


                    </div>


                    <div className="panel_content--item cta text-muted">

                        <button className="btn btn-primary mr-1">Update</button>
                    </div>
                </div>

            </div>
        </section>


    );
};

export default SchoolInfo;