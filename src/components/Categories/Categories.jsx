import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-box">
      <div className="category-header">Categories</div>
      <Col className="category-label" onClick={() => navigate("./tags/Tech")}>
        Tech
      </Col>
      <Col
        className="category-label"
        onClick={() => navigate("./tags/Lifestyle")}
      >
        Lifestyle
      </Col>
      <Col
        className="category-label"
        onClick={() => navigate("./tags/Kitchen")}
      >
        Kitchen
      </Col>
      <Col
        className="category-label"
        onClick={() => navigate("./tags/Bathroom")}
      >
        Bathroom
      </Col>
      <Col
        className="category-label"
        onClick={() => navigate("./tags/Supplements")}
      >
        Supplements
      </Col>
    </div>
  );
};

export default Categories;
