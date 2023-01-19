import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let productsByTag = [];

export async function getAllProductsByTag(tag) {
  try {
    await axios.get(`${apiRoute}/tag/${tag}`).then(response => {
      productsByTag = response;
    });
    return productsByTag;
  } catch (error) {
    return ["Error"];
  }
}
