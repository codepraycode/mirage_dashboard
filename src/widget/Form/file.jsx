import React, { useRef, useState } from 'react';

// Widgets
import Image from '../image';

const ImageUpload = (props)=>{
    const { name, 
        placeholder,
        notCenter,
        className,
        updateForm,
        getIssue,
        clearIssue: resolveIssue,
        value: originalValue,
        disable } = props
    
    const inputRef = useRef();

    const [value,setValue] = useState(originalValue || null);
    // const [validation, setValidation] = useState({
    //     valid: !required,
    //     msg: '',
    //     touched: false
    // })

    let anyIssue;


    if (getIssue) {
        anyIssue = getIssue(name);
    }

    const clearIssue = (name) => {
        if (!resolveIssue) {
            return
        }

        resolveIssue(name);
    }

    const handleInputChange = (e) => {
        // e.preventDefault();
        // if (!validate(e.target.value)) return;

        // updateForm(name, value);
        setValue(() => {
            let val = e.target.files[0];
            updateForm(name, val);
            clearIssue(name)
            return val;
        })


    }

    return (
        <div className={`image-group ${disable ? 'disable' : ''} ${notCenter ? '' : 'center'} ${className ? className:''}`}>

            <input type="file" accept='image/*' name={name} ref={inputRef} onChange={handleInputChange}/>

            <div className="preview">
                <div className='image'>
                    {/* <img src={placeholder} alt="Upload" /> */}
                    <Image src={value} alt="School Logo"/>
                </div>
                <span onClick={()=>{
                    // if (disable) return

                    inputRef.current.click()
                }}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </span>
            </div>
            
            

        </div>
    )
}


const File = ()=>{
    return (
        <div className="file-group">
            {/* <div className="img-preview" style={{background:`url('${this.state.formData.avatar.config.url}') center center no-repeat`}}></div> */}
            <input type="file" accept='image/*'/>
        </div>
    )
}

const FileUpload = ({type, ...rest}) => {
    let template;

    if(type === 'image'){
        template = <ImageUpload {...rest}/>;
    }
    else{
        template = <File/>
    }
    return (
        <>
            {template}
        </>
    )
}

export default FileUpload
