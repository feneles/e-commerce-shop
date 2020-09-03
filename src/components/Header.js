import React from "react";
import data from "../data.json";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  const links = data.map((link) => (
    <li className="navbar_button" key={link.section}>
      <a className="button_link" href={link.link}>
        {link.sectionPL}
      </a>
    </li>
  ));

  return (
    <header className="header">
      <div className="header_logo">
        <img src="/img/logo.png" alt="logo" />
      </div>

      <ul className="navbar">{links}</ul>
      <a href="/cart" className="header_cartIcon">
        <ShoppingCartIcon fontSize="large" />
      </a>
    </header>
  );
};

export default Header;
