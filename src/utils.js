const axios = require('axios');
// require('dotenv').config();


const Baseurl = process.env.REACT_APP_DEV ? 'http://127.0.0.1:8000' : 'http://mirageapi.herokuapp.com/';

const LoginUrl = `${Baseurl}/account/login`;

const CreateAccountUrl = `${Baseurl}/account/create`;

const SchoolsUrl = `${Baseurl}/school`;

const TokenRefreshUrl = `${Baseurl}/account/token/refresh`;

const SetCookie = (data) => {
    Object.keys(data).forEach((item) => {
        localStorage.setItem(item, data[item])
    });
}


// Login
const AccountLogin = (data, callback) => {
    // console.log(data);
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data)
    }


    let authStatus = {
        error: false,
        data: {},
    }


    axios.post(LoginUrl, data, requestOptions)
        .then((response) => {
            // request_status = response.status_code;
            // console.log(response);
            authStatus.error = false;
            authStatus.data = response.data;
            callback(authStatus)
        })
        .catch((err) => {
            console.error("error", err);

            authStatus.error = true;
            authStatus.data = {
                message: "Network Error, check your internet connection",
            }

            callback(authStatus);
        })

}

// Create Account
const CreateAccount = (form_data, callback) => {
    const config = {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    }


    let authStatus = {
        ok: true,
        data: {},
    }

    axios.post(`${CreateAccountUrl}`, form_data, config)
        .then((res) => {

            // console.log(res.data);
            // window.location.href = "/"
            callback(authStatus)

        })
        .catch((err) => {

            console.log(err);
            authStatus.ok = false;
            authStatus.data = {
                message: "Network Error, check your internet connection"
            };

            callback(authStatus);

        });

}




module.exports = {
    LoginUrl,
    CreateAccountUrl,
    SchoolsUrl,
    TokenRefreshUrl,
    SetCookie,
    CreateAccount,
    AccountLogin
}