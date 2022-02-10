import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  height: 12vh;
  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`;

export const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  img {
    object-fit: contain;
    height: 62px;
    margin-right: 150px;
  }
`;

export const MenuLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  Button {
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavbarContainer = styled.div`
  margin-left: 1rem;

  display: none;
  position: relative;
  svg {
    cursor: pointer;
  }
  @media screen and (max-width: 1050px) {
    display: flex;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  /* flex-direction: column; */

  text-align: end;
  background: var(--color-footer);
  padding: 2rem;
  position: absolute;
  top: 40px;
  right: 0;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0, 0.2);
`;
