import React from "react";
import { NavLink } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SettingsIcon from "@mui/icons-material/Settings";

import s from "./Nav.module.scss";

const navItems = [
  { id: 1, to: "/", icon: <HomeIcon color="inherit" fontSize="inherit" /> },
  {
    id: 2,
    to: "/dialogs",
    icon: (
      <SendIcon className={s.sendIcon} color="inherit" fontSize="inherit" />
    ),
  },
  {
    id: 3,
    to: "/music",
    icon: <LibraryMusicIcon color="inherit" fontSize="inherit" />,
  },
  {
    id: 4,
    to: "/settings",
    icon: <SettingsIcon color="inherit" fontSize="inherit" />,
  },
  {
    id: 5,
    to: "/profile",
    icon: <AccountCircleIcon color="inherit" fontSize="inherit" />,
  },
];

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {navItems.map(({ id, to, icon }) => {
          return (
            <li key={id} className={s.item}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${s.link}` + (isActive ? ` ${s.active}` : "")
                }
              >
                {icon}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
