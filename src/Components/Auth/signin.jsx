import React,{useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom';

// Contexts
import AuthContext from '../../context/auth_context';


// Widgets
import {Form,Input} from '../../widget/Form';
import Button from '../../widget/button';
import Card from '../../widget/card';


// Constants and utils
import { UserLoginFormConfig } from '../../constants/forms';

const Login = () => {

    const {loginUser}=useContext(AuthContext);

    const navigate = useNavigate();
    

    const initialIssueState = {
        message:null,// general message,
        formIssues:{
            
        } // input name:error message
    }

    // States
    // eslint-disable-next-line
    const [formConfig, setFormConfig] = useState(UserLoginFormConfig);
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

    // const handleRequest = (auth_data)=>{
    //     // expecting error and data object

    //     setIssues((prev)=>{
    //         let formIssues = {}
    //         let msg = null
    //         if (auth_data.error){
    //             msg = auth_data.data.message || "An Error Occured";
    //             for (let each of Object.keys(formData)){
    //                 if (auth_data.data[each]){
    //                     formIssues[each] = "Issue With Your Input Here";
    //                 }
    //             }
    //         }

    //         prev.message = msg;
    //         prev.formIssues = formIssues

    //         console.log(prev);

    //         return {...prev};
    //     })

    //     setLoading(()=>false);
    // }

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
                navigate('/')
                return
            }

            else{
               setLoading(()=>false);
               setIssues((prev)=>{
                prev.message = "Could Not Login, Try again";
                return {...prev};
               });
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