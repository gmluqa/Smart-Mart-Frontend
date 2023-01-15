import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let SearchedProducts;

export async function searchProduct(search) {
  try {
    await axios.get(`${apiRoute}/product/search/${search}`).then(response => {
      SearchedProducts = response.data;
    });
    return SearchedProducts;
  } catch (error) {
    return { error: "An error has occurred" };
  }
}
