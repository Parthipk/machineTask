import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { loginUser } from "../../redux/auth/authThunk";

import { loginInitialValues } from "../../types/authTypes";

import { loginValidationSchema } from "../../validation/authValidation";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
      }}
    >
      <div
        className="w-full max-w-md rounded-3xl shadow-2xl p-8"
        style={{ backgroundColor: "var(--white-color)" }}
      >
        <h1
          className="text-3xl font-bold text-center mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Welcome Back
        </h1>

        <p
          className="text-center mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          Login to continue
        </p>

        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            {/* Email */}
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border outline-none"
                style={{
                  borderColor: "var(--border-color)",
                }}
              />

              <ErrorMessage
                name="email"
                component="p"
                className="text-sm mt-1"
                style={{ color: "var(--error-color)" }}
              />
            </div>

            {/* Password */}
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border outline-none"
                style={{
                  borderColor: "var(--border-color)",
                }}
              />

              <ErrorMessage
                name="password"
                component="p"
                className="text-sm mt-1"
                style={{ color: "var(--error-color)" }}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold shadow-lg text-white transition-all duration-300"
              style={{
                backgroundColor: "var(--primary-color)",
              }}
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}