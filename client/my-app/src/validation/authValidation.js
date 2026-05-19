import * as Yup from "yup";

export const signupValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),

  number: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .min(10, "Must be 10 digits")
    .required("Phone number is required"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});