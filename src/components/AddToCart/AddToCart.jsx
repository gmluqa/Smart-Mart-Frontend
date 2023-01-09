import { useEffect } from "react";
import Button from "react-bootstrap/Button";

const AddToCart = props => {
  // identify SmartMartCart from localStorage if exists

  useEffect(() => {
    if (localStorage.getItem("SmartMartCart") === null) {
      // if it doesn't exist, let's initialize it!
      localStorage.setItem("SmartMartCart", "[]");
    }
  }, []);

  const addItemToCart = () => {
    // recover the localstorage cart arr in current state, have it jsonified
    let cart = localStorage.getItem("SmartMartCart");
    cart = JSON.parse(cart);
    // push the props.name to the just recieved array
    cart.push(props.name);
    // stringify the cart
    cart = JSON.stringify(cart);
    // set the newly made array in localstorage
    localStorage.setItem("SmartMartCart", cart);
  };

  return (
    <>
      <Button onClick={addItemToCart}>Add to cart</Button>
    </>
  );
};

export default AddToCart;
