import React from "react";
import "./Portfolio.css";
function Portfolio({ imgUrl, title }) {
  return (
    <div className="project-container_portfolio">
      <div className="project-container_portfolio-image"></div>
      <img src={imgUrl} alt="project" />
      <div className="portfolio-container_porfolio-content">
        <div>
          <h3>{title}</h3>
        </div>
        <p>View Code</p>
        <p>Live Site</p>
      </div>
    </div>
  );
}

export default Portfolio;
