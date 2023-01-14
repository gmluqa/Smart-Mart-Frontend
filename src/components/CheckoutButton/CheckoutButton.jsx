import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import "./CheckoutButton.scss";
import { useSelector } from "react-redux";
import { createNewOrder } from "../../services/apiCalls/createNewOrder";
import validateEmail from "../../utils/validateEmail.utils";

const CheckoutButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // order handler, takes in no params, all is locally accessed from component
  const handleOrder = () => {
    let orderMessage = "";
    if (email == null) {
      // we do the default dance, return at the end
      console.log("default dance");
    }
    // else we proceed with an order that comes from a non logged user:
    // check for valid email in front
    console.log(email);

    if (validateEmail(email) == false) {
      orderMessage = "Please enter a valid email!";
      console.log(orderMessage);
      return orderMessage;
    }
    orderMessage = "Ordered! Details sent to your email";
    // do order
    console.log(orderMessage);

    // navigate to /order
  };

  const login = useSelector(state => state.login);

  const [isLogged, setIsLogged] = useState(false);

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
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CheckoutButton;
