import { Col, Container, Row } from "react-bootstrap";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductVideo from "../../components/ProductVideo/ProductVideo";

const IndexPage = () => {
  return (
    <Container fluid>
      <Row>
        <Row className="text-center pt-3">
          <div>Automate. Optimize. Economize.</div>
        </Row>
        <Row className="pt-3">
          <Col className="ps-5">
            <Col>Categories</Col>
            <Col>Tech</Col>
            <Col>Lifestyle</Col>
            <Col>Kitchen</Col>
            <Col>Bathroom</Col>
            <Col>Supplements</Col>
          </Col>
          <Col className="p-0">
            <ProductImage
              name="Zubits"
              url="https://images.squarespace-cdn.com/content/v1/556ca79fe4b00d9b2abccd3b/1455036002197-H8ODMDQWGSTDRJN1GUTO/Zubits-Magnetic-Shoe-Closures-Never-Tie-Laces-Again-0-600x600.jpg"
            ></ProductImage>
            <Row>
              <ProductImage
                name="Orange Pi"
                url="https://ae01.alicdn.com/kf/S2aca3a7ffa0b43459b3cb43784f78b13T/Orange-Pi-5-4GB-RK3588S-m-dulo-PCIE-externo-WiFi-BT-SSD-Gigabit-Ethernet-Ordenador-de.jpg_Q90.jpg"
              ></ProductImage>
              <ProductImage
                name="Ecoco Toothpaste Dispenser"
                url="https://ae01.alicdn.com/kf/H3a35b4ac1aa84e208f7aca4f9819dcffj/ECOCO-dispensador-autom-tico-de-pasta-de-dientes-soporte-de-pared-accesorios-de-ba-o.jpg_Q90.jpg"
              ></ProductImage>
            </Row>
            <Row>
              <ProductImage
                name="Ecoco Toothpaste Dispenser"
                url="https://ae01.alicdn.com/kf/H3a35b4ac1aa84e208f7aca4f9819dcffj/ECOCO-dispensador-autom-tico-de-pasta-de-dientes-soporte-de-pared-accesorios-de-ba-o.jpg_Q90.jpg"
              ></ProductImage>
              <ProductImage
                name="Ecoco Toothpaste Dispenser"
                url="https://ae01.alicdn.com/kf/H3a35b4ac1aa84e208f7aca4f9819dcffj/ECOCO-dispensador-autom-tico-de-pasta-de-dientes-soporte-de-pared-accesorios-de-ba-o.jpg_Q90.jpg"
              ></ProductImage>
            </Row>
          </Col>
          <Col>New</Col>
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
              name="Ecoco Toothpaste Dispenser"
              url="https://www.youtube.com/embed/9yv_qUgCBQE"
            ></ProductVideo>
            <ProductVideo
              name="Ecoco Toothpaste Dispenser"
              url="https://www.youtube.com/embed/9yv_qUgCBQE"
            ></ProductVideo>
            <ProductVideo
              name="Ecoco Toothpaste Dispenser"
              url="https://www.youtube.com/embed/9yv_qUgCBQE"
            ></ProductVideo>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;
