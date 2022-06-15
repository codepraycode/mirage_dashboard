import React from 'react'

const ImageUpload = ()=>{
    return (
        <div className="image-group">
            <div className="preview">
                <img src="/asset/img/avatar.svg" alt="Upload"/>
            </div>
            <span>
                <i className="fa fa-pencil" aria-hidden="true"></i>
            </span>
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

const FileUpload = ({type}) => {
    let template;

    if(type === 'image'){
        template = <ImageUpload/>;
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
