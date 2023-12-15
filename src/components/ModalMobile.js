import React from "react";
import ReactDOM from "react-dom";
import "../styles/ModalMobile.scss";
import logoWhite from "../assets/logo-bookmark-white.svg";
import logoFacebook from "../assets/icon-facebook.svg";
import logoTwitter from "../assets/icon-twitter.svg";

function ModalMobile({ closeModal }) {
  return ReactDOM.createPortal(
    <>
      <div className="modal-mobile-background"></div>
      <div className="modal-mobile-container">
        <div className="modal-mobile-nav">
          <img src={logoWhite} alt="logo white" />
          <div
            className="cross-leave"
            onClick={() => {
              closeModal();
            }}
          >
            X
          </div>
        </div>
        <div className="modal-mobile-list">
          <h2 className="modal-mobile-list-item">FEATURES</h2>
          <h2 className="modal-mobile-list-item">PRICING</h2>
          <h2 className="modal-mobile-list-item">CONTACT</h2>
          <button className="modal-button-mobile">LOGIN</button>
        </div>
        <div className="icons-mobile-container">
          <div className="icon-mobile">
            <img src={logoFacebook} alt="facebook" />
          </div>
          <div className="icon-mobile">
            <img src={logoTwitter} alt="twitter" />
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".modal-portal-mobile")
  );
}

export default ModalMobile;
