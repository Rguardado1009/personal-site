import React from "react";
import Portfolio from "./Portfolio";
import proj1 from "../assets/Book-Now.png";
import proj2 from "../assets/Disney-Clone.png";
import proj3 from "../assets/sustainable.png";
import "./ProjectsCard.css";

function Projects() {
  return (
    <div className="projects section__padding">
      <div className="projects-heading">
        <h1 className="gradient__text">Projects</h1>
      </div>
      <div className="projects-container">
        <div className="projects-container-projects">
          <Portfolio
            imgUrl={proj1}
            title="Book Now"
            link="https://www.loom.com/share/ddb5eae491dd42539f76a1134cd850f2?sharedAppSource=personal_library"
            github="https://github.com/Rguardado1009/book-now-frontend"
            description="Project was part of capstone assesment for flatiron school.
            The goal of this web app is to facilitate the booking of appointments."
          />
          <Portfolio
            imgUrl={proj2}
            title="Disney Clone"
            link="https://disney-clone-react-397b8.web.app/"
            github="https://github.com/Rguardado1009/DisneyPlus-Clone"
            description=""
          />
          <Portfolio
            imgUrl={proj3}
            title="Sustainable Health Quiz"
            link="https://sustailable-health.netlify.app/"
            github="https://github.com/Rguardado1009/Sustainable-Health-APP"
            description=""
          />
          {/* <Portfolio imgUrl={proj2} title="Disney Clone" /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
