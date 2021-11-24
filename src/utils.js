const Baseurl = 'http://127.0.0.1:8000';

const LoginUrl = `${Baseurl}/account/login`;

const CreateAccountUrl = `${Baseurl}/account/create`;

const GetSchoolsUrl = `${Baseurl}/school`;



// Login
const AccountLogin = (data, callback) => {
    // console.log(data);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }


    let authStatus = {
        error: false,
        data: {},
    }


    fetch(LoginUrl, requestOptions)
        .then((response) => {
            // request_status = response.status_code;
            // console.log(response);
            authStatus.error = !response.ok;
            return response.json()
        })
        .then(
            (res) => {
                // console.log(res, request_status);

                authStatus.data = res;

                callback(authStatus)
            }
        )
        .catch((err) => {
            console.error("error", err, err.data);
        })

}

// Create Account
const CreateAccount = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }

    fetch(CreateAccountUrl, requestOptions)
        .then((response) => {

            return response.json()
        })
        .then(
            (res) => {
                // request_data = res.data;

                console.log(res);
            }

        )
        .catch((err) => {
            console.error(err, err.data);
        })

}




module.exports = {
    LoginUrl,
    CreateAccountUrl,
    GetSchoolsUrl,
    CreateAccount,
    AccountLogin
}