import React from "react";
import "./Footer.css";
import FooterSec1 from "../footer/FooterSec1"
import FooterSec2 from "../footer/FooterSec2"
import FooterSec3 from "../footer/FooterSec3"

function Footer() {
  return (
  <footer className="footer">
    <FooterSec1 />
    <FooterSec2 />
    <FooterSec3 />
  </footer>
  )
}

export default Footer;
