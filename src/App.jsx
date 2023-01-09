import Header from "./layouts/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import IndexPage from "./pages/IndexPage/IndexPage";
import Footer from "./layouts/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/products/:productName"
          element={<ProductDetail />}
        ></Route>

        {/* Reserved spot for 404 */}
        <Route
          path="*"
          element={<div>Uh oh, I still need to write a 404 page...</div>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
