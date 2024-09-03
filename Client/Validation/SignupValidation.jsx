import * as yup from "yup";

const Passwordrules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signupValidate = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password:yup.string().min(5).matches(Passwordrules, {message: "Please create a strong password"}).required("Required"),
    Repassword:yup.string().oneOf([yup.ref("password"), null], "Password must match").required("Required"),
})

export const loginValidate = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5).required("Required"),
})
