import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let allOrdersInApp;

const gettAllOrdersInApp = async jwtIfLoggedIn => {
  try {
    await axios
      .get(`${apiRoute}/order/all`, {
        headers: {
          Authorization: `Bearer ${jwtIfLoggedIn}`,
        },
      })
      .then(response => {
        allOrdersInApp = response.data;
      });
    return allOrdersInApp;
  } catch (error) {
    return ["No orders to be found πΆβπ«οΈ"];
  }
};

export default gettAllOrdersInApp;
