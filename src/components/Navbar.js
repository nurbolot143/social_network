import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="active" href="#">
            <HomeIcon color="inherit" fontSize="inherit" />
          </a>
        </li>

        <li className="nav__item">
          <a href="#">
            <MessageIcon color="inherit" fontSize="inherit" />
          </a>
        </li>

        <li className="nav__item">
          <a href="#">
            <LibraryMusicIcon color="inherit" fontSize="inherit" />
          </a>
        </li>
        <li className="nav__item">
          <a href="#">
            <SettingsIcon color="inherit" fontSize="inherit" />
          </a>
        </li>
        <li className="nav__item">
          <a href="#">
            <AccountCircleIcon color="inherit" fontSize="inherit" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
