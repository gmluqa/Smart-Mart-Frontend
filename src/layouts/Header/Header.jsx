import "../../App.scss";
import "./Header.scss";
import logo from "../../assets/img/header/SmartMartLogo.png";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const login = useSelector(state => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("rerender plz");
  }, [login]);

  const navigationHandler = () => {
    let path = login.loginValid ? "/User Area" : "/Login";
    return navigate(path);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={navigationHandler}>
              {login.loginValid ? "User Area" : "Login"}
            </Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
