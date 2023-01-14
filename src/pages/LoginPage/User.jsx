import { Col, Row, Button } from "react-bootstrap";
import { useEffect } from "react";
import Logout from "../../components/Logout/Logout";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Col className="p-5">
          <Button onClick={() => navigate("./orders")}>Order history</Button>
        </Col>
        <Col className="p-5">
          <Logout />
        </Col>
      </Row>
    </>
  );
};

export default User;
