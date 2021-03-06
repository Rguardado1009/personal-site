import React from "react";
import Portfolio from "./Portfolio";
import proj1 from "../assets/Book-Now.png";
import proj2 from "../assets/Disney-Clone.png";
import proj3 from "../assets/sustainable.png";
import Technologies from "./Technologies";
import {
  ProjectsSection,
  ProjectsHeading,
  ProjectsH1,
  ProjectsContainer,
  AllProjCont,
} from "./ProjectsCardStyles";

function Projects() {
  return (
    <>
      <ProjectsSection>
        <ProjectsHeading className="projects-heading">
          <ProjectsH1 className="gradient__text">Projects</ProjectsH1>
        </ProjectsHeading>
        <ProjectsContainer className="projects-container">
          <AllProjCont className="projects-container-projects">
            <Portfolio
              imgUrl={proj1}
              title="Book Now"
              link="https://www.loom.com/share/ddb5eae491dd42539f76a1134cd850f2?sharedAppSource=personal_library"
              github="https://github.com/Rguardado1009/book-now-frontend"
              description="Project was part of capstone assessment for Flatiron School.
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
          </AllProjCont>
        </ProjectsContainer>
      </ProjectsSection>
      <Technologies />
    </>
  );
}

export default Projects;
