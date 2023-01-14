import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let resp = {
  message: "",
  success: "",
};

const registerUser = async (email, password) => {
  try {
    await axios
      .post(`${apiRoute}/user/register`, { email: email, password: password })
      .then(response => {
        console.log(response);
        resp.message = response.data.message;
        resp.success = true;
      });
    return resp;
  } catch (error) {
    console.log(error);
    resp.message = error.response.data.message;
    resp.success = false;
    return resp;
  }
};

export default registerUser;
