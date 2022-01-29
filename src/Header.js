import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://drive.google.com/uc?id=1Y9AHuMazo1ISK8JdVrVM-csVwM2-HhPT"
        alt=""
      />
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
    </div>
  );
}

export default Header;
