import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Admin from "../LoginPage/Admin";
import User from "../LoginPage/User";

const UserArea = () => {
  const login = useSelector(state => state.login);

  // Case not logged in (re-direct to index, get rekt)
  // Case User (render User component)
  // Case Admin (render Admin component)

  return (
    <Container>
      <Row>
        <Col>
          {login.userType == "Admin" ? (
            <Admin />
          ) : login.userType == "User" ? (
            <User />
          ) : (
            "You are not logged in, please log in."
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserArea;
