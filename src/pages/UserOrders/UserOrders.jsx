import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getAllUserOrders from "../../services/apiCalls/getAllOrdersUser";
import "./UserOrders.scss";
const UserOrders = () => {
  const [usersOrders, setUsersOrders] = useState([]);

  useEffect(() => {
    let jwtFromLS = localStorage.getItem("SmartMartJwt");
    async function fetchData() {
      let userOrders = await getAllUserOrders(jwtFromLS);
      setUsersOrders(userOrders);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        {usersOrders.map((element, index) => (
          <>
            <Col className="orderBox" key={index}>
              <Row>Order ID</Row>
              <Row>{element.order_no}</Row>
              <Row>Product ID</Row>
              <Row>{element.product_id}</Row>
              <Row>Product price</Row>
              <Row>{element.product_price_at_time}</Row>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
};

export default UserOrders;
