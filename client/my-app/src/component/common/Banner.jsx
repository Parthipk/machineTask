import React from "react";

export default function Banner() {
  return (
    <section
      className="w-full py-24 px-6 text-center"
      style={{
        background:
          "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
        color: "var(--white-color)",
      }}
    >
      <h1 className="text-5xl font-bold mb-6">
        Welcome to MERN Auth System
      </h1>

      <p className="max-w-2xl mx-auto text-lg leading-8">
        Build secure authentication systems using React, Redux Toolkit,
        Formik, Yup, Node.js, Express.js, and MongoDB with modern UI
        architecture.
      </p>

      <button
        className="mt-8 px-8 py-3 rounded-xl font-semibold"
        style={{
          backgroundColor: "var(--white-color)",
          color: "var(--primary-color)",
        }}
      >
        Get Started
      </button>
    </section>
  );
}