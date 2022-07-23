import {useState} from 'react';


export const useAppForm = (formConfig)=>{
    

    const [formData, setFormData] = useState({});
    
    const updateFormData = (key, value) => {

        setFormData((prev) => {
            prev[key] = value;

            return prev;
        })
    }


    return [
        formData,
        updateFormData,
        // elementIssue:issues.formIssues,

    ]
}

export const useFormIssue = (formStructure)=>{
    const initialIssueState = {
        message: null,// general message,
        formIssues: {

        } // input name:error message
    }

    const [issues, setIssues] = useState(initialIssueState);

    const checkIssue = (name) => {
        let issue = null;
        try {
            issue = issues.formIssues[name]
        } catch (err) { }

        return issue;

    }



    const serializeFormIssue = (responseData) => {
        
        const issue = {}

        const msg = responseData.message || null;

        for (let each of Object.keys(responseData)) {
            let field_issue;
            
            try {
                if (!formStructure[each]) { 
                    continue    
                }
                
            }
            catch{
                continue
            }

            field_issue = responseData[each]

            if (Array.isArray(field_issue)) {
                field_issue = field_issue[0]
            }

            if (field_issue) {
                issue[each] = field_issue;
            }
        }

        return {
            message: msg,
            formIssues: issue
        }
    }


    const updateIssue = (data = null, isResponse=false) => {

        setIssues((prev) => {
            if (data) {

                if (!isResponse){
                    delete prev.formIssues[data]
                    return prev
                }

                let iss;

                if (typeof data === 'string'){
                    iss = {message:data}
                }else{                    
                    iss = serializeFormIssue(data);
                }

                return {...prev,...iss}

            }


            return initialIssueState


        })
    }



    return [
        issues.message,
        updateIssue,
        checkIssue,
    ]
}