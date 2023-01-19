import Header from "./layouts/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import IndexPage from "./pages/IndexPage/IndexPage";
import Footer from "./layouts/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import UserOrders from "./pages/UserOrders/UserOrders";
import AdminOrders from "./pages/AdminOrders/AdminOrders";
import TagProducts from "./pages/TagProducts/TagProducts";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import {
  placeJwt,
  placeUserType,
  validateLogin,
} from "./store/slices/loginSlice";
import UserArea from "./pages/UserArea/UserArea";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);
  const [jwtFromLS, setJwtFromLS] = useState("");

  // Use effect handles authorization and auto-logout after exp date, step by step useEffect reliance

  const { decodedToken, isExpired, reEvaluateToken } = useJwt(jwtFromLS);

  useEffect(() => {
    setJwtFromLS(localStorage.getItem("SmartMartJwt"));
  }, []);

  useEffect(() => {
    reEvaluateToken(jwtFromLS);
  }, [jwtFromLS]);

  useEffect(() => {
    dispatch(placeJwt(jwtFromLS));
    dispatch(validateLogin(!isExpired));
    dispatch(placeUserType(decodedToken?.userType));
  }, [reEvaluateToken]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/User Area" element={<UserArea />} />
        <Route path="/User Area/Orders" element={<UserOrders />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products/:productName"
          element={<ProductDetail />}
        ></Route>
        <Route path="/User Area/Admin Orders" element={<AdminOrders />}></Route>
        <Route path="/tags/:tagName" element={<TagProducts />}></Route>
        {/* Reserved spot for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
