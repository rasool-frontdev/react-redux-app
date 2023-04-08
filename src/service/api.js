import axios from "axios";
import { getItem } from "../helpers/helpersStorage";

axios.defaults.baseURL = "http://localhost:3000/api";

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const auth = token ? `Token ${token}` : "";
  config.headers.Authorization = auth;
  return config;
});

export default axios;
