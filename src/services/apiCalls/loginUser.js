import { apiRoute } from "./apiConfig.js";
import axios from "axios";

const loginUser = async (email, password) => {
  try {
    await axios
      .post(`${apiRoute}/user/login`, { email: email, password: password })
      .then(response => {
        console.log(response);
      });
    return { message: "Logged in!" };
  } catch (error) {
    return { message: "Not logged in..." };
  }
};

export default loginUser;
