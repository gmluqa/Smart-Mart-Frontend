import getProductByName from "../../services/apiCalls/getProductByName.js";

let call = await getProductByName("Zubits");

console.log(call);
