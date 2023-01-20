import { useState } from "react";
import { Container, Col, Row, Button, InputGroup, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { updateProductById } from "../../services/apiCalls/updateProductById";
import EventMessage from "../../components/EventMessage/EventMessage";

const UpdateProduct = () => {
  const [authMessage, setAuthMessage] = useState();

  const authMessageHandler = authMessage => {
    setAuthMessage(authMessage);
    setTimeout(() => {
      setAuthMessage();
    }, 1000);
  };

  const [productBodyJson, setProductBodyJson] = useState({
    id: "",
    product_name: "",
    product_alt_text: "",
    product_price: "",
    product_description: "",
    youtube_url: "",
  });
  const login = useSelector(state => state.login);

  let jwtFromLs = localStorage.getItem("SmartMartJwt");

  const updateProductHandler = async () => {
    let resp = await updateProductById(productBodyJson, jwtFromLs);
    authMessageHandler(resp.message);
  };

  const onChange = e => {
    const value = e.target.value;
    setProductBodyJson({
      ...productBodyJson,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      {login.userType == "Admin" ? (
        <Col className="text-center">
          <Col className="p-4">
            <div>Enter the product by ID you wish to change</div>
            id{" "}
            <input
              type="text"
              name="id"
              value={productBodyJson.id}
              onChange={onChange}
            />
          </Col>
          <Col>
            product_name{" "}
            <input
              type="text"
              name="product_name"
              value={productBodyJson.product_name}
              onChange={onChange}
            />
          </Col>
          <Col>
            product_alt_text{" "}
            <input
              type="text"
              name="product_alt_text"
              value={productBodyJson.product_alt_text}
              onChange={onChange}
            />
          </Col>
          <Col>
            product_price{" "}
            <input
              type="text"
              name="product_price"
              value={productBodyJson.product_price}
              onChange={onChange}
            />
          </Col>
          <Col>
            product_description{" "}
            <input
              type="text"
              name="product_description"
              value={productBodyJson.product_description}
              onChange={onChange}
            />
          </Col>
          <Col>
            youtube_url{" "}
            <input
              type="text"
              name="youtube_url"
              value={productBodyJson.youtube_url}
              onChange={onChange}
            />
          </Col>
          <Button onClick={updateProductHandler}>Update Product</Button>
          {authMessage ? (
            <EventMessage message={authMessage}></EventMessage>
          ) : null}
        </Col>
      ) : (
        "You are... Not the admin"
      )}
    </Container>
  );
};
export default UpdateProduct;
