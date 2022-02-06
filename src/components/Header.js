import React from "react";
import side from "../assets/SVG/side.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header section__padding" id="Home">
      <div className="header-content">
        <h1 className="gradient__text">Welcome!</h1>
        <h1 className="gradient__text">I'm Ronald.</h1>
        <p>
          I am a Full-Stack Software Developer, and recent graduate from
          Flatiron School
        </p>
      </div>
      <div className="header-image">
        <img src={side} alt="side" />
      </div>
    </div>
  );
}

export default Header;
