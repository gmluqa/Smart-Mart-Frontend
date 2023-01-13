import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let resp = {
  message: "",
  jwt: "",
  success: "",
};

const loginUser = async (email, password) => {
  try {
    await axios
      .post(`${apiRoute}/user/login`, { email: email, password: password })
      .then(response => {
        resp.message = "Success, re-directing...";
        resp.jwt = response.data.token;
        resp.success = true;
      });
    return resp;
  } catch (error) {
    resp.message = "Invalid email or password, please try again.";
    resp.success = false;
    return resp;
  }
};

export default loginUser;
