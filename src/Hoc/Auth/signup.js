import React, { Component } from 'react'
import AuthWrapper from './auth_wrapper';
class SignUp extends Component {
    render() {
        return (
            <AuthWrapper signup={true}>
                <div className="auth-card no-hype">

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
                        <form action="#" method="post">
                                    <p className="required">First name:</p>
                                    <input type="text" name="firstname" placeholder="First name" minLength="1" maxLength="255"/>
                                    <p className="required">Last name:</p>
                                    <input type="text" name="lastname" placeholder="Last name" minLength="1" maxLength="255"/>
                                    <p className="required">Email:</p>
                                    <input type="text" name="email" placeholder="Email" minLength="1" maxLength="255"/>
                                    <p className="required">Username:</p>
                                    <input type="text" name="username" placeholder="Username" minLength="1" maxLength="255"/>
                                    <p className="required">Password:</p>
                                    <input type="password" name="password" placeholder="Password" minLength="6" maxLength="68" />
                           <div className="text-center mv-1">       
                            <button type="submit" className="btn btn-primary text-center">SUBMIT</button>
                           </div>  
                        </form>

                        </div>
                    </div>
            </AuthWrapper>
        )
    }
}


export default SignUp;