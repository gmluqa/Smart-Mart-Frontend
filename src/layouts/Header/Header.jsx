import React from "react";

import "../../App.scss";
import "./Header.scss";
import logo from "../../assets/img/header/SmartMartLogo.png";

const Header = () => {
  return (
    <div className="d-flex justify-content-between p-5 ">
      <img src={logo}></img>
      <div>Search </div>
      <div>Login</div>
      <div>Cart</div>
    </div>
  );
};

export default Header;
