import React,{useState} from 'react';

const EditableInput = ({type,value:initialValue, onUpdate, disable}) => {
    
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(true);
    // const [edited, setIsEdited] = useState(false);

    const handleInputChange = (e)=>{
        e.preventDefault();
        if(!validate(e.target.value)) return;

        // updateForm(name, value);
        if(!validate(e.target.value)){
            
            return;
        }


        setValue(()=>{
            let val = e.target.value;
            return val;
        })

        
    }


    const validate = (val)=>{
        let res = true;


        if(val.length === 0){
            res = false;
        }


        setIsValid(()=>res);
        return res;
    }


    const renderError = ()=>{
        let msg = null;

        if (!isValid){
            msg = "This input cannot be empty";
        }



        return (
            <span className="msg text-danger">
                {msg}
            </span>
        )
    }



    let isEdited = !Object.is(value, initialValue);


    return (
        <div className={`label-group editable_content ${!isValid ? 'error':''}`}>
            <input
                type={type}
                onChange = {handleInputChange}
                value = {value}
                readOnly = {disable}

            />

            {renderError()}

            {
                !isEdited ?
                null
                :
                <div className="cta">
                    <button className="btn btn-primary mr-1">Save</button>
                    
                    <button 
                        className="btn btn-primary-outline"
                        onClick={()=>setValue(()=>initialValue)}
                    >
                        Cancle
                    </button>
                </div>
            }
            
            
            
        </div>
    )
}

export default EditableInput
