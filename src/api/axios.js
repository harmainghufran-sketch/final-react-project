import axios from "axios";

// Replace with your backend URL
const BASE_URL = "http://localhost:5000";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
