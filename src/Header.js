import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./Header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://drive.google.com/uc?id=1Y9AHuMazo1ISK8JdVrVM-csVwM2-HhPT"
          alt=""
        />
      </Link>
      {/* <h2>Ronald Guardado</h2> */}
      <Stack spacing={2} direction="row">
        <Link to="/About">
          <Button variant="text" color="primary">
            About
          </Button>
        </Link>
        <Link to="/Projects">
          <Button variant="text">Projects</Button>
        </Link>
        <Link to="/Contact">
          <Button variant="text">Contact</Button>
        </Link>
      </Stack>
    </div>
  );
}

export default Header;
