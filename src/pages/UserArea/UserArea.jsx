import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserArea = () => {
  const login = useSelector(state => state.login);

  return (
    <Container>
      <Col>
        <Row>{login.userType}</Row>
      </Col>
    </Container>
  );
};

export default UserArea;
