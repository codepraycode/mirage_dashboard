import React from 'react'

import {Form,Input, FileUpload} from '../../widget/Form';
import Button from '../../widget/button';
import Card from '../../widget/card';

const SignUp = ()=> {

    
    return (
        
        <Card>  
                
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
  
        </Card>

    )
    
}


export default SignUp;