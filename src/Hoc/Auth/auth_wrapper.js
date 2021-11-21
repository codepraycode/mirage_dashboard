import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AuthWrapper extends Component {
    render() {
        return (
            <div className="auth-page">
                <div className="wrapper">
                    <div className="header flex">
                        <div className="logo">
                            <p>Mirage</p>
                        </div>
                        <div className="cta">
                            {
                            this.props.signup === true ?
                            <>   
                                <span className="mr-2">Already have an account?</span>

                                <Link to="/signin" className="btn btn-primary">Sign Up</Link>
                            </>
                            :
                            <>
                               <span>Dont have an account?</span>


                                <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                            </>
                        }
                         
                        </div>
                    </div>


                    <p className="text-center lead">
                        {
                            this.props.signup === true ?
                            <>Sign Up</>
                            :
                            <>Login</>
                        }
                        
                    </p>


                    <div className={`auth-card ${this.props.extraClass}`}>
                        {this.props.children}

                    </div>

                </div>
            </div>
        )
    }
}


export default AuthWrapper;