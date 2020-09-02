import React from "react";
import { Icon } from "@iconify/react";
import phoneHandsetLine from "@iconify/icons-clarity/phone-handset-line";
import emailLine from "@iconify/icons-clarity/email-line";
// import { Link } from "react-router-dom";
import data from "../data.json";

const Header = () => {
  // const sections = [
  //   { product: "sukienki", id: "dresses" },
  //   { product: "spudnice", id: "skirts" },
  //   { product: "bluzki", id: "shirts" },
  //   { product: "pants", id: "spodnie" },
  //   { product: "handbags", id: "torebki" },

  // ];

  // const products = sections.map(section => (
  //   <Link
  //   to={`/shop/${section.id}`}
  //   key={section.id}
  //   className={`${section.id}`}
  //   >
  //   </Link>
  // ))

  const links = data.map((link) => (
    <li className="navbar_button" key={link.section}>
      <a className="button_link" href={link.link}>
        {link.sectionPL}
      </a>
    </li>
  ));

  return (
    <header className="header">
      <div className="header_contact">
        <p>
          <Icon
            className="header_phoneIcon"
            icon={phoneHandsetLine}
            style={{ color: "#fff", fontSize: "20px" }}
          />{" "}
          INFOLINIA: PON-PT 8:00-16:00 +48 123 456 789
        </p>
        <p>
          <Icon
            className="header_emailIcon"
            icon={emailLine}
            style={{ color: "#fff", fontSize: "20px" }}
          />{" "}
          sklep@hannasfashion.pl
        </p>
      </div>
      <div className="header_logo">
        <img src="/img/logo.png" alt="logo" />
      </div>

      <ul className="navbar">{links}</ul>
    </header>
  );
}

export default Header;
