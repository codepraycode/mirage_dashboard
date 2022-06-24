// Utility and resuable functions


const refreshTokenRequest = async (refresh_token)=>{
    
    let response = {
        error:false,
        error_message:"",
        data:null,
        status:'',
        statusText:''
    };

    let request_response;


    try{
        request_response = await fetch('http://127.0.0.1:8000/api/token/refresh/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({"refresh":refresh_token})
        });

        let data = await request_response.json();

        response = {
            ...response,
            data,
            status:request_response.status,
            statusText:request_response.statusText,
            
        }
    }
    catch (err){
        // console.log(err.message)

        response.error = true;
        response.error_message = err.message;

        
    }


    return response;

}


const loginRequest = async (login_data)=>{
    
    
    let response = {
        error:false,
        error_message:"",
        data:null,
        status:'',
        statusText:''
    };

    let request_response;


    try{
        request_response = await fetch('http://127.0.0.1:8000/api/token/',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(login_data)
            });

        let data = await request_response.json();

        
        response = {
            ...response,
            data,
            status:request_response.status,
            statusText:request_response.statusText,
            
        }
    }
    catch (err){
        console.error(err.message)

        response.error = true;
        response.error_message = "Unable to Connect, please make sure you are connected to the internet";

        
    }


    return response;

}

const getSchoolRequest = async (token)=>{
    
    
    let response = {
        error:false,
        error_message:"",
        data:null,
        status:'',
        statusText:''
    };

    let request_response;


    try{
        request_response = await fetch('http://127.0.0.1:8000/api/schools/',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${String(token)}`
                }
            });

        let data = await request_response.json();        
        
        response = {
            ...response,
            data,
            status:request_response.status,
            statusText:request_response.statusText,
            
        }
    }
    catch (err){

        response.error = true;
        response.error_message = "Could not load schools, please make sure you are connected to the internet";

        
    }


    return response;

}

export {refreshTokenRequest,loginRequest,getSchoolRequest}