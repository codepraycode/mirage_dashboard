import React from 'react'

import {Form,Input, FileUpload} from '../../widget/Form';
import Button from '../../widget/button';
import Card from '../../widget/card';

import {Link} from 'react-router-dom';

const SignUp = ()=> {

    
    return (
        
        <Card>  

            <p className="text-center lead">
                Sign up for a new account
            </p>
                
            <Form onSubmit={()=>{}}>

                <div className="row">

                    <div className="col">
                        <FileUpload type="image"/>

                        <Input label="First Name"/>

                        <Input label="Last Name"/>

                        <Input label="Email"/>    
                    </div>



                    <div className="col">
                        <Input label="Username"/>
                        
                        <Input label="Password"/>
                        
                        <Input label="Confirm Password"/>
                    </div>
                </div>

                
                
                <div className="text-center mv-1">
                    <Button text="Register"/>
                </div>
            </Form>


            <div className="cta">
                <span>Already have an account?</span>


                <Link to="/signin">
                    Sign In
                </Link>

            </div>
  
        </Card>

    )
    
}


export default SignUp;