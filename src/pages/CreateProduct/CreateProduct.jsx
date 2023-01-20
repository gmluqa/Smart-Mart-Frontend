import { useState } from "react";
import { Container, Col, Row, Button, InputGroup, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createNewProduct } from "../../services/apiCalls/createNewProduct";
import EventMessage from "../../components/EventMessage/EventMessage";

const CreateProduct = () => {
  const [authMessage, setAuthMessage] = useState();

  const authMessageHandler = authMessage => {
    setAuthMessage(authMessage);
    setTimeout(() => {
      setAuthMessage();
    }, 1000);
  };

  const [productBodyJson, setProductBodyJson] = useState({
    product_name: "",
    product_alt_text: "",
    product_price: "",
    product_description: "",
    youtube_url: "",
  });
  const login = useSelector(state => state.login);

  let jwtFromLs = localStorage.getItem("SmartMartJwt");

  const createProductHandler = async () => {
    let resp = await createNewProduct(productBodyJson, jwtFromLs);
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
          <Button onClick={createProductHandler}>Create Product</Button>
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
export default CreateProduct;
