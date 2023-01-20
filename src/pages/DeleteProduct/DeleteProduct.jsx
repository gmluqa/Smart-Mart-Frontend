import { useState } from "react";
import { Container, Col, Row, Button, InputGroup, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { deleteProductById } from "../../services/apiCalls/deleteProductById.js";
import EventMessage from "../../components/EventMessage/EventMessage";

const DeleteProduct = () => {
  const [authMessage, setAuthMessage] = useState();

  const authMessageHandler = authMessage => {
    setAuthMessage(authMessage);
    setTimeout(() => {
      setAuthMessage();
    }, 1000);
  };

  const [productBodyJson, setProductBodyJson] = useState({
    id: "",
  });
  const login = useSelector(state => state.login);

  let jwtFromLs = localStorage.getItem("SmartMartJwt");

  const deleteProductHandler = async () => {
    let resp = await deleteProductById(productBodyJson, jwtFromLs);
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
            <div>Enter the product by ID you wish to delete 😭</div>
            id{" "}
            <input
              type="text"
              name="id"
              value={productBodyJson.id}
              onChange={onChange}
            />
          </Col>

          <Button onClick={deleteProductHandler}>Delete Product</Button>
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
export default DeleteProduct;
