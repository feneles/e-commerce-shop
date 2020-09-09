import React from "react";
import { Icon } from "@iconify/react";
import facebookRect from "@iconify/icons-websymbol/facebook-rect";
import instagramIcon from "@iconify/icons-brandico/instagram";

function Footer() {
  return (
    <footer className="row footer">
      <h2>Hanna's Fashion</h2>
      <p className="footer_address">10 Wardour St, London W1D 6BZ</p>
      <div className="footer_icons">
        <Icon
          className="footer_fbIcon"
          icon={facebookRect}
          style={{ color: "#fff", fontSize: "30px" }}
        />

        <Icon
          className="footer_instaIcon"
          icon={instagramIcon}
          style={{ color: "#fff", fontSize: "30px" }}
        />
      </div>
      <p className="footer_copyrights">
        © 2020 Design & Developed by Marek Rogala . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
