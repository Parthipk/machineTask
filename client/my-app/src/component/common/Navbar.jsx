import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="w-full px-8 py-4 flex items-center justify-between shadow-md"
      style={{
        backgroundColor: "var(--white-color)",
      }}
    >
      {/* Logo */}
      <h1
        className="text-2xl font-bold"
        style={{ color: "var(--primary-color)" }}
      >
        MERN APP
      </h1>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="font-medium hover:opacity-80"
          style={{ color: "var(--text-primary)" }}
        >
          Home
        </Link>

        <Link
          to="/login"
          className="font-medium hover:opacity-80"
          style={{ color: "var(--text-primary)" }}
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-5 py-2 rounded-xl text-white font-medium"
          style={{
            backgroundColor: "var(--primary-color)",
          }}
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}