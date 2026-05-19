import axios from "axios";

const publicApi = axios.create({
  baseURL: "http://localhost:3000/api/v1/user",
});

export default publicApi;