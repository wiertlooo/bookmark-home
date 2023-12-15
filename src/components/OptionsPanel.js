import React, { useState } from "react";
import "../styles/OptionsPanel.scss";
import OptionsContent from "./OptionsContent";

function OptionsPanel() {
  const [selected, setSelected] = useState(1);

  return (
    <div>
      <div className="panel-container">
        <div
          className={`option ${selected === 1 ? "selected" : ""}`}
          onClick={() => setSelected(1)}
        >
          Simple Bookmarking
        </div>
        <div
          className={`option ${selected === 2 ? "selected" : ""}`}
          onClick={() => setSelected(2)}
        >
          Speedy Searching
        </div>
        <div
          className={`option ${selected === 3 ? "selected" : ""}`}
          onClick={() => setSelected(3)}
        >
          Easy Sharing
        </div>
      </div>
      <OptionsContent selected={selected} />
    </div>
  );
}

export default OptionsPanel;
