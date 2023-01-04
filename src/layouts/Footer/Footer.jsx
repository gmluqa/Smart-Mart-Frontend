import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-light">
      <Row className="pt-4 text-center justify-content-center">
        <Col>
          About Us
          <Col>
            <a href="">Our Story</a>
          </Col>
          <Col>
            <a href="">Contact</a>
          </Col>
        </Col>
        <Col>
          Menu
          <Col>
            <Col>
              <a href="">Home</a>
            </Col>
            <Col>
              <a href="">About</a>
            </Col>
          </Col>
          <a href="">Add more links here...</a>
        </Col>
        <Col className="text-center justify-content-center">
          Feeling lucky? <a href="">Show me a random product!</a>
        </Col>
        <Row className="text-center bg-dark">
          <Col>Copyright © 2023</Col>
          <Col>
            <a href="">Privacy Policy</a>
          </Col>
          <Col>
            <a href="">User Agreement</a>
          </Col>
        </Row>
        <Row className="text-center">
          <div>
            Prices, specifications, images, and videos are subject to change
            without notice. SmartMart is not responsible for typographical or
            illustrative errors.
          </div>
          <div className="pt-2">
            Orders ship same day when placed by 2PM GMT Mon-Fri excluding
            holidays.
          </div>
          <div className="pt-2">
            Disclaimer: This is a project for my bootcamp, none of the products
            on this site can actually be ordered.
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
