import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Layout from "./component/common/Layout";
 
 
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}