import React from 'react';
import EditableInput from '../../widget/Form/input_editable';

const SchoolInfo = () => {
    return (
        <section className="panel">
            <div className="panel_header">
                <p>School Information</p>
            </div>

            <div className="panel_content">
                <div className="panel_content--item">
                    <p className='lead'>School Name</p>

                    <div>
                        <EditableInput type="text" value={"A Sample School"} onUpdate={()=>{}}/>
                    </div>
                </div>


                <div className="panel_content--item">
                    <p className='lead'>About School</p>

                    <div>
                        <EditableInput type="text" value={"A Sample School"} onUpdate={()=>{}}/>
                    </div>
                </div>


                <div className="panel_content--item">
                    
                    <p className='lead'>School Contacts</p>
                    

                    <div>
                        <EditableInput type="text" value={"+234 80180918922"} onUpdate={()=>{}}/>
                    </div>
                </div>

                <div className="panel_content--item text-muted">

                    <p className='lead'>Status</p>
                    

                    <p>Approved</p>

                    
                </div>


                <div className="panel_content--item text-muted">

                    <p className='lead'>Created</p>
                
                    <p>YYYY-MM-DD</p>
                </div>

            </div>
        </section>


    );
};

export default SchoolInfo;