import React from 'react';


const SchoolSignUp = ()=>{
    return(
        <div className="card">
            <div className="label-group required">
                <label htmlFor="name">School Name</label>
                <input type="text" />
            </div>


            <div className="label-group">
                <label htmlFor="name">about</label>
                <textarea type="text"></textarea>
            </div>

            <div className="flex">
                <div className="label-group mr-4">
                    <label htmlFor="name">Motto</label>
                    <input type="text" />
                </div>
                <div className="label-group">
                    <label htmlFor="name">Website</label>
                    <input type="text" />
                </div>
            </div>

            <div className="label-group">
                <label htmlFor="name">Address</label>
                <textarea type="text"></textarea>
            </div>

            <div className="flex">
                <div className="label-group mr-4">
                    <label htmlFor="name">City</label>
                    <input type="text" />
                </div>
                <div className="label-group">
                    <label htmlFor="name">State</label>
                    <input type="text" />
                </div>
            </div>

            <div className="flex">
                <div className="label-group mr-4">
                    <label htmlFor="name">Zip Code</label>
                    <input type="text" />
                </div>
                <div className="label-group">
                    <label htmlFor="name">Country</label>
                    <input type="text" />
                </div>
            </div>


            <div className="flex">
                <div className="label-group mr-3">
                    <label htmlFor="name">Contact 1</label>
                    <input type="text" />
                </div>
                <div className="label-group">
                    <label htmlFor="name">Contact 2</label>
                    <input type="text" />
                </div>
            </div>
            
            <hr />
            
            <div className="label-group">
                <label htmlFor="name">Email Address</label>
                <input type="text" />
            </div>
            
            <div className="label-group">
                <label htmlFor="name">Username</label>
                <input type="text" />
            </div>

            <div className="flex">
                <div className="label-group mr-3">
                    <label htmlFor="name">Password</label>
                    <input type="text" />
                </div>
                <div className="label-group">
                    <label htmlFor="name">Confirm Password</label>
                    <input type="text" />
                </div>
            </div>

        </div>                            
    )
}


export default SchoolSignUp;