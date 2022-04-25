import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/btg",
  headers: {
    "Content-type": "application/json"
  }
});