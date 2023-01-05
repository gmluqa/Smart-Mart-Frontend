import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import getProductByName from "../../services/apiCalls/getProductByName";
import "./ProductDetail.scss";

const ProductDetails = () => {
  const { productName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductByName(productName).then(
      data => setProduct(data),
      console.log(product)
    );
  }, []);

  return (
    <Container>
      {/* <Col>
        <Col>
          <Col>
            
          </Col>
          <Col></Col>
        </Col>
        <Col>
          <Row xs={6}> </Row>
          <Row></Row>
          <Row>{product?.[0]?.product_price}</Row>
          <Col>
            <button></button>
          </Col>
          <Col>{product?.[0]?.product_name}</Col>
        </Col>
      </Col>
      <div></div>

      {console.log(product)} */}

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
            <button></button>
          </Row>
          <Row>5</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
