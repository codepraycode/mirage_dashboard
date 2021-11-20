import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div className="auth-page">
                <div className="wrapper">
                    <div className="header flex">
                        <div className="logo">
                            <p>Mirage</p>
                        </div>
                        <div className="cta">
                            <span>Already have an account?</span>
                            <button className="btn btn-primary">Sign in</button>
                        </div>
                    </div>


                    <p className="text-center lead">Sign Up</p>


                    <div className="auth-card">

                        <div className="left">
                            <div className="fet">
                                <h4>
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                Free Account
                                </h4>

                                <p>
                                    Create apps, connect your application and take administrative control over your School application.
                                </p>
                            </div>

                            <div className="fet">
                                <h4>
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                Free Account
                                </h4>

                                <p>
                                    Create apps, connect your application and take administrative control over your School applications.
                                </p>
                            </div>



                            <div className="fet">
                                <h4>
                                <i className="fas fa-school"></i>
                                School Platform
                                </h4>

                                <p>
                                    A platform to ease school operations(Admission, Report and more)
                                </p>
                            </div>


                            <div className="fet">
                                <h4>
                                <i className="fas fa-upload    "></i>
                                Control
                                </h4>

                                <p>
                                    Control,Monitor and manage school affairs.
                                </p>
                            </div>
                        </div>


                        <div className="right card">
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


                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp;