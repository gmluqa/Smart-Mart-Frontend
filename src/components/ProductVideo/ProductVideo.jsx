import { Col } from "react-bootstrap";

const ProductVideo = props => {
  return (
    <Col className="text-center">
      <div className="text-border-name">{props.name}</div>
      <iframe src={props.url} title="youtube video" allowFullScreen></iframe>
    </Col>
  );
};

export default ProductVideo;
