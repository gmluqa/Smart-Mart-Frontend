import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productName } = useParams();

  return <div>{productName}</div>;
};

export default ProductDetails;
