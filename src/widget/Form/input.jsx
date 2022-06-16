import React,{useState} from 'react';

const Input = ({label, name,type,required, placeholder, disable,updateForm,getIssue,clearIssue:resolveIssue}) => {
    
    const [value, setValue] = useState('');
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


    return (
        <div className={`label-group ${anyIssue ? 'error':''}`}>
            <label className="required">{label || name}</label>
            <input
                type={type}
                placeholder={placeholder||label}
                onChange = {handleInputChange}
                required={required}
                value = {value}
                readOnly = {disable}
                // onBlur={(e)=>this.handleInputChange(e,true)}
                // onChange={(e)=>this.handleInputChange(e,false)}
            />

            {renderError()}
        </div>
    )
}

export default Input
