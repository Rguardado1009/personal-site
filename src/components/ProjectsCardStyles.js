import styled from "styled-components";

export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ProjectsHeading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProjectsH1 = styled.h1`
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  letter-spacing: -0.04em;
`;
export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const AllProjCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;
