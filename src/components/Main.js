import React from "react";
import { Icon } from "@iconify/react";
import phoneHandsetSolid from "@iconify/icons-clarity/phone-handset-solid";
import Map from "./Map";

function Main() {
  return (
    <div className="main">
      <div className="main_slidebar">
        <img src="/img/banner.png" alt="banner" />
      </div>
      <div className="main_midContent">
        <h2>DARMOWA DOSTAWA</h2>
        <p>NA TERENIE POLSKI | 31.08 - 24.12</p>
        <div className="main_midPhoto--top">
          <img src="/img/mid_contentTop.png" alt="new collection" />
        </div>

        <div className="main_midPhoto--bottom">
          <img src="/img/mid_contentBottom.png" alt="find your style" />
        </div>
      </div>
      <div className="main_bottomSection">
        <h4>NOWE KOLEKCJE CO TYDZIEŃ</h4>
        <p>- u nas zawsze znajdziesz mnóstwo nowości -</p>
        <p className="main_phoneNumber">
          <Icon
            icon={phoneHandsetSolid}
            style={{ color: "#fff", fontSize: "30px" }}
          />{" "}
          +48 123 456 789
        </p>
        <Map />
      </div>
    </div>
  );
}

export default Main;
