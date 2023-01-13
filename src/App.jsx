import Header from "./layouts/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import IndexPage from "./pages/IndexPage/IndexPage";
import Footer from "./layouts/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import {
  placeJwt,
  placeUserType,
  validateLogin,
} from "./store/slices/loginSlice";
import UserArea from "./pages/UserArea/UserArea";

function App() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);

  const [jwtFromLS, setJwtFromLS] = useState("");

  // Use effect handles authorization and auto-logout after exp date

  useEffect(() => {
    setJwtFromLS(localStorage.getItem("SmartMartJwt"));
  }, []);

  useEffect(() => {
    console.log("I can't read");
    console.log(jwtFromLS);
  }, [jwtFromLS]);
  // useEffect(() => {
  //   console.log(jwtFromLS);
  // }, []);

  // const { decodedToken, isExpired } = useJwt(jwtFromLS);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/User Area" element={<UserArea />} />
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
