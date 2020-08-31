import React from "react";
import { Icon } from "@iconify/react";
import phoneHandsetLine from "@iconify/icons-clarity/phone-handset-line";
import emailLine from "@iconify/icons-clarity/email-line";

function Header() {
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
      <nav className="navbar">
        <button className="navbar_button">strona główna</button>
        <button className="navbar_button">sukienki</button>
        <button className="navbar_button">spudnice</button>
        <button className="navbar_button">bluzki</button>
        <button className="navbar_button">torebki</button>
        <button className="navbar_button">spodnie</button>
      </nav>
    </header>
  );
}

export default Header;
