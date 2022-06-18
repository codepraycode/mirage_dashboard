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
        label: "Enter your school's motto",
    },

    website: {
        required: false,
        type: "text",
        name: "website",
        label: "school's website",
    },

    email: {
        required: false,
        type: "email",
        name: "email",
        label: "school's official email",
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
        label: "Enter school's town",
    },

    city: {
        required: true,
        type: "text",
        name: "city",
        label: "Enter school's city",
    },


    country: {
        required: true,
        type: "text",
        name: "country",
        label: "Enter school's country",
    },


    zipcode: {
        required: false,
        type: "text",
        name: "zipcode",
        label: "school's zipcode",
    },


    contact: {
        required: true,
        type: "tel",
        name: "contacts",
        label: "school's contact",
    },



};


export {
    UserLoginFormConfig,
    UserRegisterFormConfig,
    SchoolRegistrationFormConfig
}