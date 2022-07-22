// Utility and resuable functions

// Backend Urls
const BaseUrl = "http://127.0.0.1:8000/api";
const refreshTokenUrl = `${BaseUrl}/token/refresh/`;
const loginUrl = `${BaseUrl}/token/`;

const accountUrl = `${BaseUrl}/account`;

const schoolsUrl = `${BaseUrl}/schools/`;
const schoolUrl = `${BaseUrl}/schools`;


const slotsUrl = 'http://127.0.0.1:8000/software/slots';


const refreshTokenRequest = async(refresh_token) => {

    let response = {
        error: false,
        error_message: "",
        ok:false,
        data: null,
        status: '',
        statusText: ''
    };

    let request_response;


    try {
        request_response = await fetch(refreshTokenUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "refresh": refresh_token })
        });

        let data = await request_response.json();

        response = {
            ...response,
            data,
            ok:request_response.ok,
            status: request_response.status,
            statusText: request_response.statusText,

        }
    } catch (err) {
        // console.log(err.message)

        response.error = true;
        response.error_message = err.message;


    }


    return response;

}

const loginRequest = async(login_data) => {


    let response = {
        error: false,
        error_message: "",
        data: null,
        status: '',
        statusText: ''
    };

    let request_response;


    try {
        request_response = await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login_data)
        });

        let data = await request_response.json();


        response = {
            ...response,
            data,
            status: request_response.status,
            statusText: request_response.statusText,

        }
    } catch (err) {
        console.error(err.message)

        response.error = true;
        response.error_message = "Unable to Connect, please make sure you are connected to the internet";


    }


    return response;

}

const getSchoolsRequest = async(token) => {


    let response = {
        error: false,
        error_message: null,
        ok:false,
        data: null,
        status: '',
        statusText: ''
    };

    let request_response;


    try {
        request_response = await fetch(schoolsUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${String(token)}`
            }
        });

        let data = await request_response.json();

        response = {
            ...response,
            data,
            ok: request_response.ok,
            status: request_response.status,
            statusText: request_response.statusText,

        }
    } catch (err) {
        response.error = true;
        response.error_message = "please make sure you are connected to the internet";
    }


    return response;

}


const getSchoolRequest = async(schoolid, token) => {


    let response = {
        error: false,
        error_message: null,
        ok: false,
        data: null,
        status: '',
        statusText: ''
    };

    let request_response;


    try {
        request_response = await fetch(`${schoolUrl}/${schoolid}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${String(token)}`
            }
        });

        let data = await request_response.json();

        response = {
            ...response,
            data,
            ok: request_response.ok,
            status: request_response.status,
            statusText: request_response.statusText,

        }
    } catch (err) {

        response.error = true;
        response.error_message = "please make sure you are connected to the internet";


    }


    return response;

}


const fecthSchoolUsers = async(school_id, token) => {
    const endpoint = `${schoolUrl}/${school_id}/users/`;


    let response = {
        error: false,
        error_message: "",
        data: null,
        status: '',
        statusText: ''
    };

    let request_response;


    try {
        request_response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${String(token)}`
            }
        });

        let data = await request_response.json();

        response = {
            ...response,
            data,
            status: request_response.status,
            statusText: request_response.statusText,

        }
    } catch (err) {

        response.error = true;
        response.error_message = "Could not load school users, please make sure you are connected to the internet";


    }


    return response;


}


const modifySchoolUser = async(school_id, { user_id, action }, token) => {
    const endpoint = `${schoolUrl}/${school_id}/users/modify/`;


    let response = {
        error: false,
        error_message: "",
        data: null,
        ok: false,
        status: '',
        statusText: ''
    };

    let request_response;


    try {
        request_response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${String(token)}`
            },
            body: JSON.stringify({ "user_id": user_id, "action": action })
        });

        let data = await request_response.json();

        response = {
            ...response,
            ok: request_response.ok,
            data,
            status: request_response.status,
            statusText: request_response.statusText,

        }
    } catch (err) {

        response.error = true;
        response.error_message = "please make sure you are connected to the internet";


    }


    return response;


}

const fecthSchoolSlotsRequest = async (school_id, token) => {
    const endpoint = `${slotsUrl}/${school_id}/`;


    let response = {
        error: false,
        error_message: "",
        data: null,
        ok:true,
        status: '',
        statusText: ''
    };

    let request_response;


    try {
        request_response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${String(token)}`
            }
        });

        let data = await request_response.json();

        response = {
            ...response,
            data,
            ok: request_response.ok,
            status: request_response.status,
            statusText: request_response.statusText,

        }
    } catch (err) {

        response.error = true;
        response.error_message = "Please make sure you are connected to the internet";


    }


    return response;


}

// Verifying user request


const VerifyUserRequest = async (user_id) => {


    let response = {
        error: false,
        error_message: null,
        ok: false,
        data: null,
        status: '',
        statusText: ''
    };

    let request_response;


    try {
        request_response = await fetch(`${accountUrl}/resend-verify-link/?uid=${user_id}`, {
            method: "GET",
            // headers: {
            //     "Content-Type": "application/json",
            //     // "Authorization": `Bearer ${String(token)}`
            // }
        });

        let data = await request_response.json();

        response = {
            ...response,
            data,
            ok: request_response.ok,
            status: request_response.status,
            statusText: request_response.statusText,

        }
    } catch (err) {

        response.error = true;
        response.error_message = "please make sure you are connected to the internet";


    }


    return response;

}


export { 
    refreshTokenRequest, 
    loginRequest, 
    getSchoolsRequest, 
    getSchoolRequest, 
    fecthSchoolUsers, 
    modifySchoolUser, 
    fecthSchoolSlotsRequest,
    VerifyUserRequest,
}