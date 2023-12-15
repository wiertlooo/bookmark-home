import React, { useEffect, useState } from "react";
import logoBookmark from "../assets/logo-bookmark.svg";
import "../styles/Navigation.scss";
import ModalTab from "./ModalTab";
import hamburger from "../assets/icon-hamburger.svg";
import ModalMobile from "./ModalMobile";

function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [showModalMobile, setShowModalMobile] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalMobileClose = () => setShowModalMobile(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 30000);
  }, []);

  return (
    <>
      <div
        className="navigation-container"
        onMouseEnter={() => {
          setShowModal(true);
        }}
      >
        <div className="logo">
          <img src={logoBookmark} alt="logo" />
        </div>
        <div className="hamburger" onClick={() => setShowModalMobile(true)}>
          <img src={hamburger} alt="hamburger" />
        </div>
        <div className="nav-item">FEATURES</div>
        <div className="nav-item">PRICING</div>
        <div className="nav-item">CONTACT</div>
        <div className="nav-item">
          <button className="button-warning">LOGIN</button>
        </div>
      </div>
      {showModal && <ModalTab closeModal={handleModalClose} />}
      {showModalMobile && <ModalMobile closeModal={handleModalMobileClose} />}
    </>
  );
}

export default Navigation;
