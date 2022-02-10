import { React, useState } from "react";
import logo from "../assets/SVG/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {
  MainContainer,
  LinksContainer,
  LogoContainer,
  MenuLinksContainer,
  NavbarContainer,
  MobileNav,
} from "./NavbarStyles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const styles = {
  button: {
    borderRadius: "3",
    fontWeight: "500px",
    color: "white",
    fontSize: "18px",
    padding: "0 30px",
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

const Menu = () => (
  <>
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Link to="/About">
        <Button style={{ ...styles.button }}>About</Button>
      </Link>
      <Link to="/Projects">
        <Button style={{ ...styles.button }}>Projects</Button>
      </Link>
      <Link to="/Contact">
        <Button
          style={{
            ...styles.button,
          }}
        >
          Contact
        </Button>
      </Link>
    </Stack>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <MainContainer>
      <LinksContainer>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </LogoContainer>
        <MenuLinksContainer>
          <Menu />
        </MenuLinksContainer>
      </LinksContainer>
      <NavbarContainer>
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <MobileNav className="scale-up-center">
            <div>
              <Menu />
            </div>
          </MobileNav>
        )}
      </NavbarContainer>
    </MainContainer>
  );
}

export default Navbar;
