import React, { useContext } from 'react';
// Widgets
import { Input, FileUpload } from '../../widget/Form';

// Configs
import { SchoolRegistrationFormConfig } from '../../constants/forms';
import { img_placeholder } from '../../constants/filepaths';

// Context
import StoreContext from '../../context';

const SchoolInfo = () => {
    
    const updateFormData = ()=>{}
    const checkIssue = ()=>{}
    const clearIssue = ()=>{}


    const {currentSchool:school} = useContext(StoreContext);

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
                            value={school.name}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>


                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.description}
                            value={school.description}
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
                            value={school.motto}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />

                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.email}
                            value={school.email}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.contacts}
                            value={school.contacts}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.website}
                            value={school.website}
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
                            value={school.address}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.town}
                            value={school.town}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>

                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.city}
                            value={school.city}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>
                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.country}
                            value={school.country}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>
                    <div className="panel_content--item">
                        <Input
                            {...SchoolRegistrationFormConfig.zipcode}
                            value={school.zipcode}
                            updateForm={updateFormData}
                            getIssue={checkIssue}
                            clearIssue={clearIssue}
                            disable={loading}
                        />
                    </div>
                    <div className="panel_content--item text-muted">

                        <div className="flex mb-1">
                            <p className='lead mr-3 '>Status: </p>
                            <p>
                                {
                                    school.approved ?
                                    "Approved"
                                    :
                                    "Not Approved"
                                }
                            </p>
                        </div>


                        <div className="flex">
                            <p className='lead mr-3'>Created: </p>
                            <p>{school.date_created}</p>
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