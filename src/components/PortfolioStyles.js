import styled from "styled-components";

export const MainContainer = styled.div`
  width: 50vh;
  height: 100%;

  display: flex;
  flex-direction: column;
  background: var(--color-footer);
  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.02);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-footer);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem 1.5rem;
  height: 100%;
`;
export const Title = styled.h3`
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 25px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  margin-top: 1rem;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  line-height: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;
`;
export const Links = styled.a`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
  font-weight: bold;
  font-size: 11.6px;
  text-align: center;
  line-height: 35px;
  color: #fff;
  cursor: pointer;
`;
