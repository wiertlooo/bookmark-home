import React, { useEffect, useState } from "react";
import "../styles/FooterPanel.scss";

function FooterPanel() {
  const [joinedNumber, setJoinedNumber] = useState("35,000+");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("email-input");

  useEffect(() => {
    setTimeout(() => {
      setJoinedNumber("0");
    }, 20000);
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (email.includes("@")) {
      setError("email-input");
      setEmail("");
    } else {
      setError("error");
    }
  };

  return (
    <div className="footer-panel-container">
      <h3 id="joined">{joinedNumber} ALREADY JOINED</h3>
      <h2 id="up-to-date">Stay up-to-date with what we're doing</h2>
      <div className="email-container">
        <form onSubmit={handleEmailSubmit}>
          <input
            id={error}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
          />
          {error === "error" && (
            <div id="error-email">Whoops, make sure it's an email</div>
          )}
          <button id="button-contact" className="button-warning">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}

export default FooterPanel;
