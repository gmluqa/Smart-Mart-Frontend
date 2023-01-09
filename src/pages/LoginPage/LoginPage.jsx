import { Form, Button, Container, Row, Col } from "react-bootstrap";
import loginUser from "../../services/apiCalls/loginUser.js";

const LoginPage = () => {
  return (
    <Container>
      <Row className="pt-4">
        <Col>
          <Form onSubmit={() => loginUser(email)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>

              <Form.Control type="password" placeholder="Password" />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </Form.Group>

            <Button className="mb-4" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <div>Don't have an account? Create one today!</div>
        <Col className="pt-3">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="mb-4" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
