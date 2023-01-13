import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import User from "./User";
import { useNavigate } from "react-router-dom";

const UserArea = () => {
  const navigate = useNavigate();
  const login = useSelector(state => state.login);

  // Case not logged in (re-direct to index, get rekt)
  // Case User (render User component)
  // Case Admin (render Admin component)

  return (
    <Container>
      {login.loginValid == false || login.jwtFromLocalStorage == null
        ? navigate("../")
        : "do something else"}
    </Container>
  );
};

export default UserArea;
