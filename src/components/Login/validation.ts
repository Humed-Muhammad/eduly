import * as yup from "yup";

import { LoginTypes } from "./types";

export const loginValidation: yup.Schema<LoginTypes> = yup.object().shape({
  username: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required")
    .typeError("email should be a string"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
