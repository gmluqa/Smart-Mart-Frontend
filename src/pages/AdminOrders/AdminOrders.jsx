import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gettAllOrdersInApp from "../../services/apiCalls/getAllOrdersInApp";

const AdminOrders = () => {
  const [allUserOrdersInApp, setAllUserOrdersInApp] = useState([]);

  useEffect(() => {
    let jwtFromLS = localStorage.getItem("SmartMartJwt");
    async function fetchData() {
      let userOrders = await gettAllOrdersInApp(jwtFromLS);
      setAllUserOrdersInApp(userOrders);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        {allUserOrdersInApp.map((element, index) => (
          <Col className="orderBox" key={index}>
            <Row>Order ID</Row>
            <Row>{element.order_no}</Row>
            <Row>Product ID</Row>
            <Row>{element.product_id}</Row>
            <Row>Product price</Row>
            <Row>{element.product_price_at_time}</Row>
            <Row>User ID</Row>
            <Row>{element.user_id}</Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminOrders;
