import Header from "./layouts/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import IndexPage from "./pages/IndexPage/IndexPage";
import Footer from "./layouts/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products/:productName"
          element={<ProductDetail />}
        ></Route>

        {/* Reserved spot for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
