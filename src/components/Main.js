import React from "react";
import { Icon } from "@iconify/react";
import phoneHandsetSolid from "@iconify/icons-clarity/phone-handset-solid";
import Scroll from "./Scroll";
import Map from "./Map";
import emailLine from "@iconify/icons-clarity/email-line";

function Main() {
  return (
    <div className="main row">
      <div className="col-md-10 mx-auto">
        <img className="img-fluid w-100" src="/img/banner.png" alt="banner" />
      </div>
      <div className="col-md-10 offset-md-1">
        <div className="col-md-12 my-5 text-center">
          <h2 className="mb-3">FREE DELIVERY</h2>
          <h5>ALL OVER UNITED KINGDOM | 31.08 - 24.12</h5>
        </div>

        <div className="col-md-12 mb-md-5 mb-3">
          <img
            className="img-fluid col-md-10 offset-md-1"
            src="/img/mid_contentTop.png"
            alt="new collection"
          />
        </div>

        <div className="col-md-12 mb-5">
          <img
            className="img-fluid col-md-10 offset-md-1"
            src="/img/mid_contentBottom.png"
            alt="find your style"
          />
        </div>
      </div>
      <div className="main_bottomSection col-12">
        <h4>NEW COLLECTION EVERY WEEK</h4>
        <p>- you will always find a lot of news with us -</p>
        <p className="main_phoneNumber">
          <Icon
            icon={phoneHandsetSolid}
            style={{ color: "#fff", fontSize: "30px" }}
          />{" "}
          +48 123 456 789
        </p>
        <p className="main_email">
          <Icon
            className="main_emailIcon mb-3"
            icon={emailLine}
            style={{ color: "#fff", fontSize: "25px" }}
          />{" "}
          shop@hannasfashion.co.uk
        </p>
        <Map />
        <Scroll />
      </div>
    </div>
  );
}

export default Main;
