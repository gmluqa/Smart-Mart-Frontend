import { Form, Button, Container, Row, Col } from "react-bootstrap";
import EventMessage from "../../components/EventMessage/EventMessage";
import loginUser from "../../services/apiCalls/loginUser.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [authMessage, setAuthMessage] = useState();
  const navigate = useNavigate();

  const loginSubmit = async () => {
    let jwt = await loginUser(
      formBasicEmailLogin.value,
      formBasicPasswordLogin.value
    );
    authMessageHandler(jwt.message);
    localStorage.setItem("SmartMartJwt", jwt.jwt);
    if (jwt.success) {
      navigate("../User Area");
    }
  };

  const registerSubmit = async () => {};

  const authMessageHandler = authMessage => {
    setAuthMessage(authMessage);
    setTimeout(() => {
      setAuthMessage();
    }, 1000);
  };

  return (
    <Container>
      <Row className="pt-4">
        <Row className="pb-4">
          <div>Log in to your SmartMart account</div>
        </Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmailLogin">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordLogin">
              <Form.Label>Password</Form.Label>

              <Form.Control type="password" placeholder="Password" />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </Form.Group>

            <Button
              onClick={loginSubmit}
              className="mb-4"
              variant="primary"
              type="button"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {authMessage ? (
          <EventMessage message={authMessage}></EventMessage>
        ) : null}
        <div>Don't have an account? Create one today!</div>
        <Col className="pt-3">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmailRegister">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordRegister">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="mb-4" variant="primary" type="button">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
