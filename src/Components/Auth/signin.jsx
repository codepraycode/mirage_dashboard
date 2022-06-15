import React from 'react'
import {Form,Input} from '../../widget/Form';
import Button from '../../widget/button';
import Card from '../../widget/card';
import {Link} from 'react-router-dom';
const Login = () => {

    return (
        <Card>
            <p className="text-center lead">
                Sign In
            </p>
                
            <Form onSubmit={()=>{}}>
                
                <Input label="Email"/>

                <Input label="Password"/>

                <br/>
                
                <div className="text-center mv-1">
                    <Button text="Login"/>
                </div>
            </Form>


            <div className="cta">
                <span>Dont have an account?</span>


                <Link to="/signup" className="btn btn-primary">
                    Sign Up
                </Link>

            </div>
          


                
        </Card>
    )
}


export default Login;