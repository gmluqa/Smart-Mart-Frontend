import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductImage.scss";
import getProductByName from "../../services/apiCalls/getProductByName";

const ProductImage = props => {
  const [apiCall, setApiCall] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getProductByName(props.name).then(value => setApiCall(value));
  }, []);

  return (
    <Col
      onClick={() => navigate(`/products/${props.name}`)}
      className="text-center"
      style={{ cursor: "pointer" }}
    >
      <div className="productImageBorder">
        <div className="productLink" href={"./products/" + props.name}>
          <div className="text-border-name">{props.name}</div>
        </div>
        <img
          className="productImageImage"
          src={apiCall?.[2]?.[0]?.img_path}
          alt={props.name + " img"}
        />
      </div>
    </Col>
  );
};

export default ProductImage;
