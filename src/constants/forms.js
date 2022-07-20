// Form configurations

const UserLoginFormConfig = {
    username: {
        required: true,
        type: "text",
        name: "username",
        label: "Username",
    },
    password: {
        required: true,
        type: "password",
        name: "password",
        label: "Password",

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

    contact: {
        required: true,
        type: "tel",
        name: "contacts",
        label: "Phone number",
        placeholder: "Enter reachable contact"
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


const SchoolRegistrationFormConfig = {
    logo: {
        type: "image",
        name: "logo",
        required: true,
    },
    name: {
        required: true,
        type: "text",
        name: "name",
        label: "School Name",
        placeholder: "Enter school name",
    },

    description: {
        required: true,
        type: "long-text",
        name: "description",
        label: "About School",
        placeholder: "Enter a short description about your school",

    },

    motto: {
        required: true,
        type: "text",
        name: "motto",
        label: "School motto",
        placeholder: "Enter your school's motto",
    },

    email: {
        required: true,
        type: "email",
        name: "email",
        label: "School email",
        placeholder: "Enter school's official email",
    },

    contacts: {
        required: true,
        type: "tel",
        name: "contacts",
        label: "School contact",
        placeholder: "Enter school's reachable contact"
    },


    website: {
        required: false,
        type: "text",
        name: "website",
        label: "School website",
        placeholder: "Enter school's official website",
    },



    address: {
        required: true,
        type: "long-text",
        name: "address",
        label: "School Address",
        placeholder: "Enter school address",
    },


    town: {
        required: true,
        type: "text",
        name: "town",
        label: "School town",
        placeholder: "Enter school's town",
    },

    city: {
        required: true,
        type: "text",
        name: "city",
        label: "School city",
        placeholder: "Enter school's city",
    },


    country: {
        required: true,
        type: "text",
        name: "country",
        label: "School country",
        placeholder: "Enter school's country",
    },


    zipcode: {
        required: false,
        type: "text",
        name: "zipcode",
        label: "School zipcode",
        placeholder: "Enter school's zipcode",
    },




};


export {
    UserLoginFormConfig,
    UserRegisterFormConfig,
    SchoolRegistrationFormConfig
}