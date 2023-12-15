import React from "react";
import illustrationOne from "../assets/illustration-features-tab-1.svg";
import illustrationTwo from "../assets/illustration-features-tab-2.svg";
import illustrationThree from "../assets/illustration-features-tab-3.svg";
import "../styles/OptionsContent.scss";

function OptionsContent({ selected }) {
  let content;

  if (selected === 1) {
    content = (
      <div className="content-container">
        <div className="left-column-options">
          <img src={illustrationOne} alt="Option 1" />
          <svg
            className="svg-left"
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="400"
            viewBox="0 0 900 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect width="500" height="550" rx="20" ry="50" fill="#5368DF" />
            <ellipse cx="250" cy="150" rx="450" ry="300" fill="#5368DF" />
          </svg>
        </div>
        <div className="right-column-options">
          <h1>Bookmark in one click</h1>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <button id="button-options" className="button-primary">
            More Info
          </button>
        </div>
      </div>
    );
  }
  if (selected === 2) {
    content = (
      <div className="content-container">
        <div className="left-column-options">
          <img src={illustrationTwo} alt="Option 2" />
          <svg
            className="svg-left"
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="400"
            viewBox="0 0 900 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect width="500" height="550" rx="20" ry="50" fill="#5368DF" />
            <ellipse cx="250" cy="150" rx="450" ry="300" fill="#5368DF" />
          </svg>
        </div>
        <div className="right-column-options">
          <h1>Intelligent search</h1>
          <p>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <button id="button-options" className="button-primary">
            More Info
          </button>
        </div>
      </div>
    );
  }
  if (selected === 3) {
    content = (
      <div className="content-container">
        <div className="left-column-options">
          <img src={illustrationThree} alt="Option 3" />
          <svg
            className="svg-left"
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="400"
            viewBox="0 0 900 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect width="500" height="550" rx="20" ry="50" fill="#5368DF" />
            <ellipse cx="250" cy="150" rx="450" ry="300" fill="#5368DF" />
          </svg>
        </div>
        <div className="right-column-options">
          <h1>Share your bookmarks</h1>
          <p>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <button id="button-options" className="button-primary">
            More Info
          </button>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default OptionsContent;
