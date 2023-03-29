import React from "react";
import headerLogo from "../image/header-logo.svg";

function Header({ buttonText, buttonLink, email }) {
  return (
    <header className="header">
      <img
        src={headerLogo}
        alt="Логотип Место"
        className="header__logo button-hover"
      />
      <div className="header__container">
        <span className="header__email">{email}</span>
        <a className="header__button button-hover" href="#">
          {buttonText}
        </a>
      </div>
    </header>
  );
}

export default Header;
