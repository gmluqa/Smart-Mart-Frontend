import { Col } from "react-bootstrap";
import "./ProductImage.scss";

const ProductImage = props => {
  return (
    <Col className="text-center ">
      <div className="productImageBorder">
        <div className="text-border-name">{props.name}</div>
        <img
          className="productImageImage"
          src={props.url}
          alt={props.name + " img"}
        />
      </div>
    </Col>
  );
};

export default ProductImage;
