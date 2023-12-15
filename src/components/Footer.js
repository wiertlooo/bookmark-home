import React, { useState } from "react";
import logoBookmark from "../assets/logo-bookmark-white.svg";
import "../styles/Footer.scss";
import facebookIcon from "../assets/icon-facebook.svg";
import facebookIconRed from "../assets/icon-facebook-red.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import twitterIconRed from "../assets/icon-twitter-red.svg";

function Footer() {
  const [twitterIsHovered, setTwitterIsHovered] = useState(false);
  const [facebookIsHovered, setFacebookIsHovered] = useState(false);

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo-bottom">
          <img src={logoBookmark} alt="logo bookmark" />
        </div>
        <div className="footer-text-cotainer">
          <div className="footer-text">FEATURES</div>
          <div className="footer-text">PRICING</div>
          <div className="footer-text">CONTACT</div>
        </div>
        <div className="footer-icons-container">
          <div
            className="footer-icon"
            onMouseEnter={() => setFacebookIsHovered(true)}
            onMouseLeave={() => setFacebookIsHovered(false)}
          >
            {facebookIsHovered ? (
              <img src={facebookIconRed} alt="facebook red" />
            ) : (
              <img src={facebookIcon} alt="facebook" />
            )}
          </div>
          <div
            className="footer-icon"
            onMouseEnter={() => setTwitterIsHovered(true)}
            onMouseLeave={() => setTwitterIsHovered(false)}
          >
            {twitterIsHovered ? (
              <img src={twitterIconRed} alt="twitter red" />
            ) : (
              <img src={twitterIcon} alt="twitter" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
