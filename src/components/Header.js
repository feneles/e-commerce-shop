import React from "react";
import data from "../data.json";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  const links = data.map((link) => (
    <li className="navbar_button" key={link.section}>
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

      <ul className="navbar">{links}</ul>
      <Link to="/cart" className="header_cartIcon">
        <ShoppingCartIcon fontSize="large" />
      </Link>
    </header>
  );
};

export default Header;
