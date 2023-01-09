import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartProduct from "../../components/CartProduct/CartProduct";

const IndexPage = () => {
  const [cartItemsArray, setCartItemsArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("SmartMartCart") === null) {
      // if it doesn't exist, let's initialize it!
      localStorage.setItem("SmartMartCart", "[]");
    }
    setCartItemsArray(JSON.parse(localStorage.getItem("SmartMartCart")));
  }, []);

  console.log(cartItemsArray);
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col className="p-3">
          {cartItemsArray.map(item => (
            <CartProduct name={item}></CartProduct>
          ))}
          <Row className="p-3"></Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default IndexPage;
