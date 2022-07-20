import React from 'react'

const ImageUpload = ({ placeholder, center, className })=>{
    return (
        <div className={`image-group ${center ? 'center' : ''} ${className ? className:''}`}>
            <div className="preview">
                <div className='image'>
                    <img src={placeholder} alt="Upload"/>
                </div>
                <span>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </span>
            </div>
            
            <input type="file" accept='image/*'/>
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

const FileUpload = ({type, placeholder,notCenter, className}) => {
    let template;

    if(type === 'image'){
        template = <ImageUpload placeholder={placeholder} className={className} center={!notCenter}/>;
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
