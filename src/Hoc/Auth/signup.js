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
                            {/* I've Gotten the Code */}


                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp;