import { createAsyncThunk } from "@reduxjs/toolkit";
import publicApi from "../../helper/publicApi";
 

// ================= SIGNUP =================

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkAPI) => {
    try {
      const response = await publicApi.post("/signUp", userData);

      // backend response
      const data = response.data.data || response.data;

      // save tokens
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup Failed"
      );
    }
  }
);

// ================= LOGIN =================

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await publicApi.post("/login", userData);

      const data = response.data.data;

      // save tokens
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login Failed"
      );
    }
  }
);