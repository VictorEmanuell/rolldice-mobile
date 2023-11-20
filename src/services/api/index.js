import axios from "axios";

const baseURL = "http://192.168.0.10:8000/";

export const api = axios.create({
  baseURL,
});
