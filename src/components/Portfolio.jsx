import React from "react";

import {
  MainContainer,
  ImageContainer,
  Image,
  MainContentContainer,
  Description,
  LinkContainer,
  Links,
  Title,
  TitleContainer,
} from "./PortfolioStyles";
function Portfolio({ imgUrl, title, link, github, description }) {
  return (
    <MainContainer className="project-container_portfolio">
      <ImageContainer className="project-container_portfolio-image"></ImageContainer>
      <Image src={imgUrl} alt="project" />
      <MainContentContainer className="portfolio-container_portfolio-content">
        <TitleContainer>
          <Title className="gradient__text">{title}</Title>
        </TitleContainer>
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
