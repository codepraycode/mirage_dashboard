import React,{useState} from 'react';

const Input = ({ label, value: originalValue, name, type, required, placeholder, disable, updateForm, getIssue, clearIssue: resolveIssue, multiple }) => {
    
    const [value, setValue] = useState(originalValue||'');
    const [validation, setValidation] = useState({
        valid:!required,
        msg:'',
        touched:false
    })


    let anyIssue;
    

    if (getIssue){
        anyIssue = getIssue(name);
    }

    const clearIssue = (name)=>{
        if(!resolveIssue){
            return
        }

        resolveIssue(name);
    }


    const handleInputChange = (e)=>{
        e.preventDefault();
        if(!validate(e.target.value)) return;

        // updateForm(name, value);
        setValue(()=>{
            let val = e.target.value;
            updateForm(name, val);
            clearIssue(name)
            return val;
        })

        
    }


    const validate = ()=>{
        setValidation((prev)=>{
            prev.valid = true;
            return prev;
        });

        return true;
    }


    
    


    const renderError = ()=>{
        let msg = null;

        if (anyIssue){
            msg = anyIssue;
        }else{
            msg = validation.msg
        }



        return (
            <span className="msg text-danger">
                {msg}
            </span>
        )
    }


    const renderComponent = ()=>{
        const template_props = {
            type: type,
            placeholder: placeholder|| label,
            onChange:handleInputChange,
            required: required,
            value,
            readOnly: disable 
        }

        let template;

        if (multiple || type === 'long-text'){
            template = <textarea {...template_props} rows={6}/>
        }else{
            template = <input {...template_props} />
        }


        return <div className={`label-group ${anyIssue ? 'error' : ''}`}>
            <label className={required ? 'required' : ''}>{label || name}</label>
            {template}

            {renderError()}
        </div>
    }


    return renderComponent()
}

export default Input
