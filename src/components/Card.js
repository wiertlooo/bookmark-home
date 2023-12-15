import React from "react";
import dots from "../assets/bg-dots.svg";
import "../styles/Card.scss";

function Card({ logo, name, version }) {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={logo}
          alt="logo"
          className="browser-logo"
          width="100"
          height="100"
        />
        <h3>Add to {name}</h3>
      </div>
      <p>Minimum version {version}</p>
      <div className="divider">
        <img src={dots} alt="divider" />
      </div>
      <button id="card-button" className="button-primary">
        Add & Install Extension
      </button>
    </div>
  );
}

export default Card;
