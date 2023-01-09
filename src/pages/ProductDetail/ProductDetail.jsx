import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import getProductByName from "../../services/apiCalls/getProductByName";
import "./ProductDetail.scss";
import AddToCart from "../../components/AddToCart/AddToCart";

const ProductDetails = () => {
  const { productName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductByName(productName).then(data => setProduct(data));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <img
              className="productDetailImg"
              src={product?.[2]?.[0]?.img_path}
              alt={`${product?.[0]?.product_name} img`}
            />
          </Row>
          <Row></Row>
        </Col>
        <Col>
          <Row>{product?.[0]?.product_name}</Row>
          <Row>{product?.[0]?.product_description}</Row>
          <Row> {product?.[0]?.product_price}</Row>
          <Row xs={4}>
            <AddToCart name={productName} />
          </Row>
          <Row>
            <Col>
              {console.log(product)}
              <iframe src={product?.[0]?.youtube_url} allowFullScreen></iframe>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
