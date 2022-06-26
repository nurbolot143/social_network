import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <Link to="/" className={s.logo}>
            Social news
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
