import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/ModalTab.scss";
import illustrationThree from "../assets/illustration-features-tab-3.svg";

function ModalTab({ closeModal }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // using portal so it is positioned independently
  return ReactDOM.createPortal(
    <>
      <div className="modal-background"></div>
      <div className="modal-container">
        <div className="modal-close" onClick={closeModal}>
          X
        </div>
        <div className="left-column-modal">
          <img id="modal-img" src={illustrationThree} alt="Option 3" />
        </div>
        <div className="right-column-modal">
          <h1>Share your bookmarks</h1>
          <p>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <button className="button-primary">More Info</button>
        </div>
      </div>
    </>,
    document.querySelector(".modal-portal")
  );
}

export default ModalTab;
