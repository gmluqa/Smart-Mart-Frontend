import { Col, Container, Row } from "react-bootstrap";

const IndexPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="text-center pt-3">Automate. Optimize. Economize.</Col>
        <Row className="pt-3">
          <Col xs={2} className="ps-5">
            <Col>Solutions by Category</Col>
            <Col>Tech</Col>
            <Col>Supplementation</Col>
            <Col>Lifestyle</Col>
            <Col>Kitchen</Col>
          </Col>
          <Col>
            <Col>Img 1</Col>
            <Row>
              <Col>Img 2</Col>
              <Col>Img 3</Col>
            </Row>
            <Row>
              <Col>Img 4</Col>
              <Col>Img 5</Col>
            </Row>
          </Col>
          <Col>New Arrivals</Col>
        </Row>
        <Col className="text-center pt-3">
          <Col>Watch our products in action</Col>
          <Row className="pt-3">
            <Col>Youtube Video 1</Col>
            <Col>Youtube Video 2</Col>
            <Col>Youtube Video 3</Col>
          </Row>
          <Row>
            <Col>Youtube Video 4</Col>
            <Col>Youtube Video 5</Col>
            <Col>Youtube Video 6</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;
