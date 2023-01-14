import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let orderMessage = { message: "", success: false };

export async function createNewOrder(items, jwtIfLoggedIn) {
  try {
    await axios
      .post(
        `${apiRoute}/order`,
        { items: items },
        {
          headers: {
            Authorization: `Bearer ${jwtIfLoggedIn}`,
          },
        }
      )
      .then(response => {
        orderMessage.message = response.data.message;
        orderMessage.success = true;
      });
    return orderMessage;
  } catch (error) {
    console.log(error);
    return { message: "well this sucks", success: false };
  }
}
