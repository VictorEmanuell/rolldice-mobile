import axios from "axios";

const baseURL = "http://192.168.0.10:3000/";

export const api = axios.create({
  baseURL,
});
