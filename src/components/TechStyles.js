import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const LogoCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5vh;
  gap: min(10vh);
`;

export const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
