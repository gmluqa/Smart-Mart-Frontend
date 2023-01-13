import Header from "./layouts/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import IndexPage from "./pages/IndexPage/IndexPage";
import Footer from "./layouts/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import { useEffect } from "react";
import { useJwt } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import {
  placeJwt,
  placeUserType,
  validateLogin,
} from "./store/slices/loginSlice";

function App() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);

  let jwtFromLocalStorage = localStorage.getItem("SmartMartJwt");
  const { decodedToken, isExpired } = useJwt(jwtFromLocalStorage);

  // Use effect handles authorization and auto-logout after exp date

  useEffect(() => {
    isExpired || decodedToken == null
      ? dispatch(placeJwt("")) &&
        dispatch(validateLogin(true)) &&
        dispatch(placeUserType(""))
      : dispatch(placeJwt(jwtFromLocalStorage)) &&
        dispatch(validateLogin(!isExpired)) &&
        dispatch(placeUserType(decodedToken?.userType));
  }, []);

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
