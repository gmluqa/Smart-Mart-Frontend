import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/Logout/Logout";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Row>
        <Col className="p-5">
          <Button onClick={() => navigate("./Admin Orders")}>
            See All Orders
          </Button>
        </Col>
        <Col className="p-5">
          <Button onClick={() => navigate("./Create Product")}>
            Create Product
          </Button>
        </Col>
        <Col className="p-5">
          <Button onClick={() => navigate("./Update Product")}>
            Update Product
          </Button>
        </Col>
        <Col className="p-5">
          <Button onClick={() => navigate("./Delete Product")}>
            Delete Product
          </Button>
        </Col>
        <Col className="p-5">
          <Logout />
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
