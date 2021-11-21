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

                        {/* <div className="left">
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
                        </div> */}


                        <div className="right card">
                            <div className="regForm">
                            <form action="#" method="post">
                                <p className="text-primary">First name</p>
                                <input type="text" name="firstname" placeholder="First name"  minLength="1" maxLength="255"/>
                                <p>Last name</p>
                                <input type="text" name="lastname" placeholder="Last name" minLength="1" maxLength="255"/>
                                <p>Email address</p>
                                <input type="text" name="email" placeholder="Email address" minLength="1" maxLength="255"/>
                                <p>Username</p>
                                <input type="text" name="username" placeholder="Username" minLength="1" maxLength="255"/>
                                <p>Password</p>
                                <input type="password" name="password" placeholder="Password" minLength="6" maxLength="68"/>
                            </form>
                            </div>


                            <a href="" className="but">Submit</a>
                            <span>Forgot Password</span>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp;