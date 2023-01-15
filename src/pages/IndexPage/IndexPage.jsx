import { Col, Container, Row } from "react-bootstrap";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductVideo from "../../components/ProductVideo/ProductVideo";
import "./IndexPage.scss";

let productsToFetchArray = [
  "Zubits",
  "Orange Pi 5 4GB",
  "Ecoco, Automatic Toothpaste Dispenser",
  "Life Straw",
  "Sushi Roller",
];

const IndexPage = () => {
  return (
    <Container fluid>
      <Row className="p-0">
        <Row className="text-center tag-line">
          <div>Automize. Optimize. Economize.</div>
        </Row>
        <Row className="pt-3 index-row">
          <Col lg={4} className="ps-5">
            <Col>Categories</Col>
            <Col>Tech</Col>
            <Col>Lifestyle</Col>
            <Col>Kitchen</Col>
            <Col>Bathroom</Col>
            <Col>Supplements</Col>
          </Col>
          <Col>
            <ProductImage name={productsToFetchArray[0]}></ProductImage>
            <Row>
              <ProductImage name={productsToFetchArray[1]}></ProductImage>
              <ProductImage name={productsToFetchArray[2]}></ProductImage>
            </Row>
            <Row>
              <ProductImage name={productsToFetchArray[3]}></ProductImage>
              <ProductImage name={productsToFetchArray[4]}></ProductImage>
            </Row>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Col className="text-center pt-3">
          <Col>Watch our products in action</Col>
          <Row className="pt-3">
            <ProductVideo
              name="Zubits"
              url="https://www.youtube.com/embed/ZViGPOpF2mU"
            ></ProductVideo>
            <ProductVideo
              name="Orange Pi 5"
              url="https://www.youtube.com/embed/79lquFD3oT4"
            ></ProductVideo>
            <ProductVideo
              name="Ecoco Toothpaste Dispenser"
              url="https://www.youtube.com/embed/9yv_qUgCBQE"
            ></ProductVideo>
          </Row>
          <Row>
            <ProductVideo
              name="Life Straw"
              url="https://www.youtube.com/embed/VuJpgN1oCxQ"
            ></ProductVideo>
            <ProductVideo
              name="Sushi Roller"
              url="https://www.youtube.com/embed/_VuywLIRmhg"
            ></ProductVideo>
            <ProductVideo
              name="Cable Management Hub"
              url="https://www.youtube.com/embed/lekiev91dEU"
            ></ProductVideo>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;
