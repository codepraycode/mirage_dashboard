import React,{useState, useContext} from 'react'
import {Link} from 'react-router-dom';

// Contexts
import StoreContext from '../../context';


// Widgets
import {Form,Input} from '../../widget/Form';
import Button from '../../widget/button';
import Card from '../../widget/card';


// Constants and utils
import { UserLoginFormConfig } from '../../constants/forms';
import { filterFormIssues } from '../../constants/utils';



const Login = () => {

    const { loginUser }=useContext(StoreContext);
    

    const initialIssueState = {
        message:null,// general message,
        formIssues:{
            
        } // input name:error message
    }

    // States
    const [formConfig] = useState(UserLoginFormConfig);
    const [formData, setFormData] = useState({});
    
    const [loading, setLoading] = useState(false);
    const [issues, setIssues] = useState(initialIssueState);


    const updateFormData = (key, value)=>{

        setFormData((prev)=>{
            prev[key] = value;

            return prev;
        })
    }

    const checkIssue = (name)=>{
        return issues.formIssues[name]
    }

    const clearIssue = (name)=>{
        setIssues((prev)=>{
            delete prev.formIssues[name]

            return prev
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        // console.log(formData);

        // Clear Error Display
        setIssues(()=>{
            return initialIssueState
        })

        // AccountLogin(formData, handleRequest);
        loginUser(formData,(err=null)=>{
            // console.log(res);
            if(!err){
                // navigate('/')
                // redirect()
                return
            }

            else{
               
               let {message,data} = err;
               
               let formIssues = filterFormIssues(Object.keys(UserLoginFormConfig), data)
               
               setIssues((prev)=>{
                prev.message = message;
                prev.formIssues = formIssues
                return {...prev};
               });

               setLoading(()=>false);
            }
            // setLoading(()=>false);
        });

        setLoading(()=>true);
    }


    return (
        <Card loading={loading}>
            <p className="text-center lead">
                Sign In                
            </p>
                
            <Form onSubmit={handleSubmit} err={issues.message}>
                
                <Input 
                    {...formConfig.username}
                    updateForm = {updateFormData}
                    getIssue = {checkIssue}
                    clearIssue = {clearIssue}
                    disable={loading}
                />

                <Input 
                    {...formConfig.password}
                    updateForm = {updateFormData}
                    getIssue = {checkIssue}
                    clearIssue = {clearIssue}
                    disable={loading}

                />

                <br/>
                
                <div className="text-center mv-1">
                    <Button text={`${loading ? "Loging in..." :"Login"}`} type="submit" className={`${loading ? 'disabled':''}`}/>
                </div>
            </Form>


            <div className="cta">
                <span>Dont have an account?</span>


                <Link to="/signup">
                    Sign Up
                </Link>

            </div>
          


                
        </Card>
    )
}


export default Login;