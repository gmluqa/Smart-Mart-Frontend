import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let productsByTag = [];

export async function getAllProductsByTag(tag) {
  try {
    await axios.get(`${apiRoute}/tag/${tag}`).then(response => {
      console.log(response);
      productsByTag = response;
    });
    return productsByTag;
  } catch (error) {
    return console.log(error);
  }
}

// http://localhost:3000/tag/Tech
