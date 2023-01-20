import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let productMessage = { message: "", success: false };

export async function deleteProductById(body, jwtIfLoggedIn) {
  try {
    await axios
      .delete(`${apiRoute}/product/id/${body.id}`, {
        headers: {
          Authorization: `Bearer ${jwtIfLoggedIn}`,
        },
      })
      .then(response => {
        productMessage.message = response.data.message;
        productMessage.success = true;
      });
    return productMessage;
  } catch (error) {
    return { message: error.message, success: false };
  }
}
