import { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import "./CartProduct.scss";

const CartProduct = props => {
  const [item, setItem] = useState(true);

  const removeItem = () => {
    setItem(false);
    let cart = localStorage.getItem("SmartMartCart");
    cart = JSON.parse(cart);
    // index == -1 if element isnt found
    let index = cart.indexOf(props.name);
    if (index > -1) {
      cart.splice(index, 1);
    }
    cart = JSON.stringify(cart);
    localStorage.setItem("SmartMartCart", cart);
  };

  if (item) {
    return (
      <>
        <Card>
          <Row>
            <Col>{props.name}</Col>
            <Col>
              <Button className="trashButton" onClick={removeItem}>
                🗑️
              </Button>
            </Col>
          </Row>
        </Card>
      </>
    );
  }
};

export default CartProduct;
