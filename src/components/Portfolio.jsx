import React from "react";

import {
  MainContainer,
  Image,
  MainContentContainer,
  Description,
  LinkContainer,
  Links,
  Title,
} from "./PortfolioStyles";
function Portfolio({ imgUrl, title, link, github, description }) {
  return (
    <MainContainer className="project-container_portfolio">
      <Image src={imgUrl} alt="project" />
      <MainContentContainer className="portfolio-container_portfolio-content">
        <Title className="gradient__text">{title}</Title>
        <Description className="description">{description}</Description>
        <LinkContainer className=" portfolio-container_portfolio-a">
          <Links href={github}>View Code</Links>
          <Links href={link}> Live Site / Demo</Links>
        </LinkContainer>
      </MainContentContainer>
    </MainContainer>
  );
}

export default Portfolio;
