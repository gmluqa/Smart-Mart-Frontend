import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let productDetail = {};

const getProductByName = async productName => {
  try {
    await axios
      .get(`${apiRoute}/product/name/${productName}`)
      .then(response => {
        productDetail = response.data;
      });
    return productDetail;
  } catch (error) {
    return { product_name: "Error", img_path: "Error" };
  }
};

export default getProductByName;
