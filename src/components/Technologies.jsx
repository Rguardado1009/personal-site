import React from "react";
import rubyLogo from "../assets/SVG/ruby.svg";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRubyonrails } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { Container, LogoCont, Wrap } from "./TechStyles";
function Technologies() {
  return (
    <Container className="tech section__padding" id="Technology">
      <div className="tech_heading">
        <h1 className="gradient__text">Technologies</h1>
      </div>
      <LogoCont className="tech__div-container">
        <Wrap>
          <FaReact size="6rem" color="61dbfb" />
          <h3 className="gradient__text">React.js</h3>
        </Wrap>
        <Wrap>
          <SiJavascript size="6rem" color="f0db4f" />
          <h3 className="gradient__text">JavaScript</h3>
        </Wrap>
        <Wrap>
          <DiRuby size="6rem" color="red" />
          <h3 className="gradient__text">Ruby</h3>
        </Wrap>
        <Wrap>
          <SiRubyonrails size="6rem" color="red" />
          <h3 className="gradient__text">Ruby on Rails</h3>
        </Wrap>
      </LogoCont>
    </Container>
  );
}

export default Technologies;
