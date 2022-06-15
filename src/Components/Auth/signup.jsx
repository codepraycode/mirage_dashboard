import React from 'react'

import {Form,Input, FileUpload} from '../../widget/Form';
import Button from '../../widget/button';
import Card from '../../widget/card';

import {Link} from 'react-router-dom';

const SignUp = ()=> {

    
    return (
        
        <Card>  

            <p className="text-center lead">
                Sign In
            </p>
                
            <Form onSubmit={()=>{}}>
                <FileUpload/>

                <Input label="First Name"/>

                <Input label="Last Name"/>

                <Input label="Email"/>

                <hr/>

                <Input label="Username"/>
                <Input label="Password"/>
                <Input label="Confirm Password"/>
                
                <div className="text-center mv-1">
                    <Button text="ReGISTER"/>
                </div>
            </Form>


            <div className="cta">
                <span>Already have an account?</span>


                <Link to="/signin" className="btn btn-primary">
                    Sign In
                </Link>

            </div>
  
        </Card>

    )
    
}


export default SignUp;