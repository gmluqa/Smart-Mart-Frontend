import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const SearchPage = () => {
  const [criteria, setCriteria] = useState("");
  const [results, setResults] = useState({});

  const onChange = e => {
    setCriteria(e.target.value);
  };
  console.log(criteria);

  return (
    <Container>
      <Col>
        <Row>
          <input type="text" onChange={onChange} />
        </Row>
      </Col>
    </Container>
  );
};

export default SearchPage;
