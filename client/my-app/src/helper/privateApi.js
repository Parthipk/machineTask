import axios from "axios";

const privateApi = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

privateApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default privateApi;