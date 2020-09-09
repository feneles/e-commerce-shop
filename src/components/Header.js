import React from "react";
import data from "../data.json";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Header = ({ isActive, setIsActive, cart }) => {
  const links = data.map((link) => (
    <li
      onClick={() => setIsActive(false)}
      className="nav_bar_button"
      key={link.section}
    >
      <Link className="button_link" to={link.link}>
        {link.section}
      </Link>
    </li>
  ));

  const HowManyItemsInCart = cart.reduce((a, c) => a + c.count, 0);

  return (
    <header className="row">
      <div className="col-md-12">
        <Link to="/">
          <img
            className="img-fluid rounded mx-auto mt-5 d-block"
            src="/img/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="w-100"></div>
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
        className={isActive ? "nav_bar_container active" : "nav_bar_container"}
      >
        <ul className="nav_bar">{links}</ul>
      </div>

      <Link to="/cart" className="header_cartIcon">
        ({cart.length > 0 ? HowManyItemsInCart : 0})
        <ShoppingCartIcon fontSize="large" />
      </Link>
    </header>
  );
};

export default Header;
