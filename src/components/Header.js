import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a className="header__logo" href="#">
            Social news
          </a>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
