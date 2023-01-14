import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import "./CheckoutButton.scss";
import { useSelector } from "react-redux";
import { createNewOrder } from "../../services/apiCalls/createNewOrder";
import validateEmail from "../../utils/validateEmail.utils";
import EventMessage from "../EventMessage/EventMessage";
import { useNavigate } from "react-router-dom";

const CheckoutButton = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [authMessage, setAuthMessage] = useState();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const authMessageHandler = authMessage => {
    setAuthMessage(authMessage);
    setTimeout(() => {
      setAuthMessage();
    }, 2000);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // order handler, takes in no params, all is locally accessed from component
  const handleOrder = async () => {
    let orderMessage = "";
    let items = JSON.parse(localStorage.getItem("SmartMartCart"));

    // Case for empty cart
    if (items.length == 0) {
      orderMessage = "You have 0 items in your cart 😭";
      authMessageHandler(orderMessage);
      return;
    }

    let email = "";
    isLogged ? (email = "") : (email = formBasicEmail.value);

    if (isLogged) {
      let jwtFromLs = localStorage.getItem("SmartMartJwt");
      let newOrder = await createNewOrder(items, jwtFromLs);
      orderMessage = newOrder.message;
      authMessageHandler(orderMessage);
      setTimeout(() => {
        localStorage.setItem("SmartMartCart", "[]");
        navigate("../");
      }, 1000);

      return;
      // else we proceed with an order that comes from a non logged user:
      // check for valid email in front
    } else if (!isLogged) {
      if (validateEmail(email) == false) {
        orderMessage = "Please enter a valid email!";
        authMessageHandler(orderMessage);
        return;
      }
    }

    orderMessage = `Order success! Details sent to ${email}`;
    authMessageHandler(orderMessage);
    setTimeout(() => {
      localStorage.setItem("SmartMartCart", "[]");
      navigate("../");
    }, 1000);
  };

  const login = useSelector(state => state.login);

  useEffect(() => {
    setIsLogged(login.loginValid);
    console.log(isLogged);
  }, [login]);

  return (
    <>
      <Button onClick={handleShow}>Checkout</Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        backdrop="static"
        className="offcanvasPayments"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            {!isLogged ? (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </>
            ) : (
              void 0
            )}
            <Form.Group className="mb-3" controlId="formBasicCardDetailsDummy">
              <Form.Label>Card details</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter card details (don't actually do this)"
              />
              <Form.Text className="text-muted">
                We'll never share your card information (don't actually input,
                it will be shared)
              </Form.Text>
            </Form.Group>
            <Button
              onClick={() => handleOrder()}
              variant="primary"
              type="button"
            >
              Submit
            </Button>
            <div>
              {authMessage ? (
                <EventMessage message={authMessage}></EventMessage>
              ) : null}
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CheckoutButton;
