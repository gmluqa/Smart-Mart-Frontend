import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let productNameAndImgPath = { product_name: "", img_path: "" };

export async function getProductNameAndImgByDefiner(id, definer) {
  try {
    await axios.get(`${apiRoute}/product/id/${id}`).then(response => {
      productNameAndImgPath.product_name = response.data.product_name;
    });
    await axios
      .get(`${apiRoute}/product/id/${id}/img/${definer}`)
      .then(response => {
        productNameAndImgPath.img_path = response.data.img_path;
      });
    return productNameAndImgPath;
  } catch (error) {
    return { product_name: "Error", img_path: "Error" };
  }
}
