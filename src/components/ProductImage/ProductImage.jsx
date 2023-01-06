import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./ProductImage.scss";

const ProductImage = props => {
  return (
    <Col className="text-center">
      <div className="productImageBorder">
        <a className="productLink" href={"./products/" + props.name}>
          <div className="text-border-name">{props.name}</div>
        </a>
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
