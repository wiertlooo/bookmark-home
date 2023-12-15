import React from "react";
import illustrationHero from "../assets/illustration-hero.svg";
import "../styles/Hero.scss";

function Hero() {
  return (
    <div className="hero-container">
      <div className="left-column-hero">
        <h1 id="h1-hero">A Simple Bookmark Manager</h1>
        <div>
          <p id="bookmark-p">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className="button-hero-container">
          <button id="button-hero-left" className="button-primary">
            Get it on Chrome
          </button>
          <button id="button-hero-right" className="button-secondary">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="right-column-hero">
        <img src={illustrationHero} alt="hero" />
        <svg
          className="svg-right"
          viewBox="0 0 719 300"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="rotate(180, 450, 150)">
            <rect width="500" height="550" rx="20" ry="50" fill="#5368DF" />
            <ellipse cx="250" cy="150" rx="450" ry="300" fill="#5368DF" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
