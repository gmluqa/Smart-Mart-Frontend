import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { searchProduct } from "../../services/apiCalls/searchProduct";
import "./SearchPage.scss";

const SearchPage = () => {
  const [criteria, setCriteria] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const renderAllResults = () => {
    return results.map((result, index) => {
      return (
        <Col
          className="searchedItem"
          key={index}
          onClick={() => navigate(`../products/${result.product_name}`)}
        >
          {result.product_name}
        </Col>
      );
    });
  };

  const onChange = e => {
    setCriteria(e.target.value);
  };

  useEffect(() => {
    if (criteria !== "") {
      const bring = setTimeout(() => {
        searchProduct(criteria)
          .then(res => {
            setResults(res);
            return res;
          })
          .catch(error => error);
      }, 350);

      return () => clearTimeout(bring);
    } else {
      setResults({});
    }
  }, [criteria]);

  return (
    <Container>
      <Col>
        <Row>
          <input type="text" onChange={onChange} />
        </Row>
        {results?.[0] ? renderAllResults() : null}
      </Col>
    </Container>
  );
};

export default SearchPage;
