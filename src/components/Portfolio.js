import React from "react";
import "./Portfolio.css";
function Portfolio({ imgUrl, title, link, github, description }) {
  return (
    <div className="project-container_portfolio">
      <div className="project-container_portfolio-image"></div>
      <img src={imgUrl} alt="project" />
      <div className="portfolio-container_portfolio-content">
        <div>
          <h3 className="gradient__text">{title}</h3>
        </div>
        <p className="description">{description}</p>
        <div className=" portfolio-container_portfolio-a">
          <a href={github}>View Code</a>
          <a href={link}> Live Site / Demo</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
