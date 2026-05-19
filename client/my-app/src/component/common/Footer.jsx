import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full py-6 text-center mt-10"
      style={{
        backgroundColor: "var(--primary-color)",
        color: "var(--white-color)",
      }}
    >
      <h2 className="text-xl font-semibold">MERN Authentication App</h2>

      <p className="mt-2 text-sm">
        © 2026 All Rights Reserved
      </p>
    </footer>
  );
}