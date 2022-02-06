import React from "react";

function Portfolio({ imgUrl }) {
  return (
    <div className="project-container_portfolio">
      <div className="project-container_portfolio-image"></div>
      <img src={imgUrl} alt="project" />
    </div>
  );
}

export default Portfolio;
