import Logo from "./img/logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  //onHandler로 각 페이지에 들어가 있는 것을 확인 할 수 있게
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <div className="nav-bar__main">
          <Link to="/">
            <img className="nav-bar__logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-bar__links">
          <Link to="/story">STORY</Link>
          <Link to="/contents">CONTENTS</Link>
          <Link to="/product">PRODUCT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
