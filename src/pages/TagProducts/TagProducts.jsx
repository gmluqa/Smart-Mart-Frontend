import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProductsByTag } from "../../services/apiCalls/getAllProductsByTag";
import { Container, Col, Row } from "react-bootstrap";
import ProductImage from "../../components/ProductImage/ProductImage";

const TagProducts = () => {
  const { tagName } = useParams();
  const [articles, setArticles] = useState([]);

  const ARTICLES_PER_PAGE = 3;
  let rowCount = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAllProductsByTag(tagName);
      setArticles(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <Container>
      <Row>
        <Row className="mt-5"></Row>

        {articles.map(element => {
          return (
            <ProductImage
              name={element.Product.product_name}
              key={element.id}
            />
          );
        })}
        <Row className="mt-5"></Row>
      </Row>
    </Container>
  );
};

export default TagProducts;
