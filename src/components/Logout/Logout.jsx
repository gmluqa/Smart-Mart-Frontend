import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  placeJwt,
  placeUserType,
  validateLogin,
} from "../../store/slices/loginSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandlerLogoutDispatch = () => {
    console.log("dam i been clikd");
    localStorage.setItem("SmartMartJwt", "");
    dispatch(placeJwt(""));
    dispatch(validateLogin(false));
    dispatch(placeUserType(""));
    navigate("../");
    window.location.reload();
  };

  return <Button onClick={clickHandlerLogoutDispatch}>Logout</Button>;
};

export default Logout;
