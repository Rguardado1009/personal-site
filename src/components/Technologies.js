import React from "react";
import reactLogo from "../assets/SVG/react.svg";
import jsLogo from "../assets/SVG/js.svg";
import rubyLogo from "../assets/SVG/ruby.svg";
import railsLogo from "../assets/SVG/rails.svg";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRubyonrails } from "react-icons/si";

import "./Technologies.css";
function Technologies() {
  return (
    <div className="tech section__padding" id="Technology">
      <div className="tech_heading">
        <h1 className="gradient__text">Technologies</h1>
      </div>
      <div className="tech__div-container">
        <div>
          <FaReact size="6rem" color="61dbfb" />
          <h3 className="gradient__text">React.js</h3>
        </div>
        <div>
          <SiJavascript size="6rem" color="f0db4f" />
          <h3 className="gradient__text">JavaScript</h3>
        </div>
        <div>
          <img src={rubyLogo} />
          <h3 className="gradient__text">Ruby</h3>
        </div>
        <div>
          <SiRubyonrails size="6rem" color="red" />

          <h3 className="gradient__text">Ruby on Rails</h3>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
