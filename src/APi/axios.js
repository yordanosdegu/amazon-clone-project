import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-1f5ab/us-central1/api",
  baseURL: "https://us-central1-clone-1f5ab.cloudfunctions.net/api",
});

export {axiosInstance};