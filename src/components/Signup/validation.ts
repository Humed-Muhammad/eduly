import * as yup from "yup";

import { SignupTypes } from "./types";

export const signupValidation: yup.Schema<SignupTypes> = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required")
    .typeError("email should be a string"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
  username: yup
    .string()
    .min(5, ({ min }) => `Username must be at least ${min} characters long`)
    .matches(
      /^[A-Za-z][A-Za-z0-9_]{4,29}$/,
      "Username must not have spaces or special characters"
    )
    .required("Full Name is Required")
    .typeError("Full Name Must be String"),
});
