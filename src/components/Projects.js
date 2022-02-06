import React from "react";
import { Portfolio } from ".";
function Projects() {
  return (
    <div className="projects section__padding">
      <div className="projects-heading">
        <h1 className="gradient__text"></h1>
      </div>
      <div className="projects-container">
        <div className="projects-container-projects">
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default Projects;
