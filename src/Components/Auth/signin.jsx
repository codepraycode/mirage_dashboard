import React from 'react'
import {Form,Input} from '../../widget/Form';
import Button from '../../widget/button';
import Card from '../../widget/card';

const Login = () => {

    return (
        <Card>
                
                
            <Form onSubmit={()=>{}}>
                
                <Input label="Email"/>

                <Input label="Password"/>

                <br/>
                
                <div className="text-center mv-1">
                    <Button text="Login"/>
                </div>
            </Form>


                
        </Card>
    )
}


export default Login;