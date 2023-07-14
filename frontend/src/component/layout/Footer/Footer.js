import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ARF MART BRAND</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Team ARF</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="/"><BsInstagram /></a>
        <a href="/"><BsYoutube /></a>
        <a href="/"><BsFacebook /></a>
      </div>
    </footer>
  );
};

export default Footer;
