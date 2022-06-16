// Form configurations

const UserLoginFormConfig = {
    email: {
        required: true,
        type: "email",
        name: "email",
        label: "Enter email",
    },
    password: {
        required: true,
        type: "password",
        name: "password",
        label: "Enter password",

    },
};


const UserRegisterFormConfig = {
    avatar: {
        type: "image",
        name: "avatar",
    },
    firstname: {
        required: true,
        type: "text",
        name: "firstname",
        label: "First name",
        placeholder: "Enter first name",

    },

    lastname: {
        required: true,
        type: "text",
        name: "lastname",
        label: "Last name",
        placeholder: "Enter last name",

    },

    email: {
        required: true,
        type: "email",
        name: "email",
        label: "Enter email",
    },

    username: {
        required: true,
        type: "text",
        name: "username",
        label: "Username",
        placeholder: "Enter username name",
    },

    password: {
        required: true,
        type: "password",
        name: "password",
        label: "Enter password",
        errorMessage: '',
        error: false
    },

    confirmPassword: {
        required: true,
        type: "password",
        name: "confirm_password",
        label: "Confirm your password",
        placeholder: "Retype your password"
    },
};


export {
    UserLoginFormConfig,
    UserRegisterFormConfig
}