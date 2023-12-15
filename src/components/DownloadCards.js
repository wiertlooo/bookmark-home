import React from "react";
import "../styles/DownloadCards.scss";
import chromeLogo from "../assets/logo-chrome.svg";
import firefoxLogo from "../assets/logo-firefox.svg";
import operaLogo from "../assets/logo-opera.svg";
import Card from "./Card";

function DownloadCards() {
  return (
    <>
      <div className="cards-container-header">
        <h1>Download the extension</h1>
        <p>
          We've got more browsers in the pipeline. Plese do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="cards-container-cards">
        <div className="card-1">
          <Card logo={chromeLogo} name={"Chrome"} version={62} />
        </div>
        <div className="card-2">
          <Card logo={firefoxLogo} name={"Firefox"} version={55} />
        </div>
        <div className="card-3">
          <Card logo={operaLogo} name={"Opera"} version={46} />
        </div>
      </div>
    </>
  );
}

export default DownloadCards;
