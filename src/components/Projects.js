import React from "react";
import Portfolio from "../components/Portfolio";
import proj1 from "../assets/Book-Now.png";
import proj2 from "../assets/Disney-Clone.png";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects section__padding">
      <div className="projects-heading">
        <h1 className="gradient__text">Projects</h1>
      </div>
      <div className="projects-container">
        <div className="projects-container-projects">
          <Portfolio imgUrl={proj1} title="Book Now" />
          <Portfolio imgUrl={proj2} title="Disney Clone" />
          <Portfolio imgUrl={proj2} title="Disney Clone" />
          <Portfolio imgUrl={proj2} title="Disney Clone" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
