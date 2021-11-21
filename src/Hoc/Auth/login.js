import React, { Component } from 'react'
import AuthWrapper from './auth_wrapper';
class Login extends Component {
    render() {
        return (
            <AuthWrapper signup={false} extraClass={"login"}>
                
                        <div className="card">
                            {/* 
                                Replace 
                                
                                <p className="text-muted text-center">Login</p> 

                                with your code
                                
                             */}
                            <p className="text-muted text-center">Login</p>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                
            </AuthWrapper>
        )
    }
}


export default Login;