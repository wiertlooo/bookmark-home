import React, { useState } from "react";
import "../styles/Faq.scss";
import { accordionData } from "../data/accordionFaqData";
import openIcon from "../assets/icon-arrow.svg";
//Arrow close file is invalid so I'm using react-icons
import { SlArrowUp } from "react-icons/sl";

function Faq() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const accordion = accordionData.map((item, index) => {
    //returns true if index of item === expandedIndex state and false otherwise
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id} className="faq-accordion-item">
        {/* if isExpanded === true setExpeandedIndex to -1 else setExpandedIndex to index */}
        <div
          className="faq-accordion-header"
          onClick={
            isExpanded
              ? () => setExpandedIndex(-1)
              : () => setExpandedIndex(index)
          }
        >
          <h4 id="faq-h">{item.label}</h4>
          {isExpanded ? (
            <SlArrowUp className="arrow-icon-close" />
          ) : (
            <img className="arrow-icon" src={openIcon} alt="arrow" />
          )}
        </div>
        {isExpanded && <p id="faq-p">{item.content}</p>}
      </div>
    );
  });

  return (
    <div>
      <div className="faq-header">
        <h1 id="faq-h">Frequentyly Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other Questions you'd like
          answered please fell free to email us.
        </p>
      </div>
      <div className="faq-accordion">{accordion}</div>
      <div className="button-faq-container">
        <button className="button-primary">More Info</button>
      </div>
    </div>
  );
}

export default Faq;
