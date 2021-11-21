import React, { Component } from 'react'
import AuthWrapper from './auth_wrapper';
class Login extends Component {
    render() {
        return (
            <AuthWrapper signup={false} extraClass={"login"}>
                
                        <div className="card">
                        <form action="#" method="post">
                                    <p className="required">Username:</p>
                                    <input type="text" name="username" placeholder="Username" minLength="1" maxLength="255"/>
                                    <p className="required">Password:</p>
                                    <input type="password" name="password" placeholder="Password" minLength="6" maxLength="68"/><br/>
                           <div className="text-center mv-1">       
                            <button type="submit" className="btn btn-primary text-center">LOGIN</button>
                           </div>  
                        </form>


                            
                        </div>
                
            </AuthWrapper>
        )
    }
}


export default Login;