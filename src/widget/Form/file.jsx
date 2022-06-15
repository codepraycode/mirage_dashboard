import React from 'react'

const FileUpload = () => {
    return (
        <div className="img-group">
            {/* <div className="img-preview" style={{background:`url('${this.state.formData.avatar.config.url}') center center no-repeat`}}></div> */}
            <input type="file" accept='image/*'/>
        </div>
    )
}

export default FileUpload
