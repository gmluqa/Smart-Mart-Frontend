import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let productMessage = { message: "", success: false };

export async function createNewProduct(body, jwtIfLoggedIn) {
  try {
    await axios
      .post(
        `${apiRoute}/product/create-product`,
        {
          product_name: body.product_name,
          product_alt_text: body.product_alt_text,
          product_price: body.product_price,
          product_description: body.product_description,
          youtube_url: body.youtube_url,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtIfLoggedIn}`,
          },
        }
      )
      .then(response => {
        productMessage.message = response.data.message;
        productMessage.success = true;
      });
    return productMessage;
  } catch (error) {
    return { message: error.message, success: false };
  }
}
