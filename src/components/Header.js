import React from "react";
import data from "../data.json";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Header = ({ isActive, setIsActive }) => {
  const links = data.map((link) => (
    <li
      onClick={() => setIsActive(false)}
      className="navbar_button"
      key={link.section}
    >
      <Link className="button_link" to={link.link}>
        {link.section}
      </Link>
    </li>
  ));

  return (
    <header className="header">
      <div className="header_logo">
        <img src="/img/logo.png" alt="logo" />
      </div>
      <div className="header_underline"></div>
      <button
        onClick={() => setIsActive(!isActive)}
        className={isActive ? "hamburger hamburger_active" : "hamburger"}
      >
        <span className="hamburger_box">
          <span className="hamburger_inner"></span>
        </span>
      </button>
      <div
        className={isActive ? "navbar_container active" : "navbar_container"}
      >
        <ul className="navbar">{links}</ul>
      </div>

      <Link to="/cart" className="header_cartIcon">
        <ShoppingCartIcon fontSize="large" />
      </Link>
    </header>
  );
};

export default Header;
