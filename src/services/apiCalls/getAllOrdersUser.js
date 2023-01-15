import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let userOrders = [];

const getAllUserOrders = async jwtIfLoggedIn => {
  try {
    await axios
      .get(`${apiRoute}/order`, {
        headers: {
          Authorization: `Bearer ${jwtIfLoggedIn}`,
        },
      })
      .then(response => {
        userOrders = response.data;
      });
    return userOrders;
  } catch (error) {
    return ["No orders to be found 😶‍🌫️"];
  }
};

export default getAllUserOrders;
