import Pagination from "react-bootstrap/Pagination";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProductsByTag } from "../../services/apiCalls/getAllProductsByTag";
import { Container } from "react-bootstrap";

const TagProducts = () => {
  const { tagName } = useParams();
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAllProductsByTag(tagName);
      setArticles(res);
    };
    fetchPosts();
    // set number of pages, divide by postsPerPage, if less than 1, its 1, if float value, round up
  }, []);

  return (
    <Container>
      <Pagination>
        <Pagination.Item>a</Pagination.Item>
        <Pagination.Item>b</Pagination.Item>
        <Pagination.Item>c</Pagination.Item>
      </Pagination>
    </Container>
  );
};

export default TagProducts;
