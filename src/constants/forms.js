// Form configurations

const UserLoginFormConfig = {
    email: {
        required: true,
        type: "email",
        name: "email",
        label: "Enter email",
        errorMessage: '',
        error: false
    },
    password: {
        required: true,
        type: "password",
        name: "password",
        label: "Enter password",
        errorMessage: '',
        error: false
    },
};


const UserRegisterFormConfig = {

};


export {
    UserLoginFormConfig,
    UserRegisterFormConfig
}