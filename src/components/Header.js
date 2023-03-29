import React from 'react';
import headerLogo from '../image/header-logo.svg';

function Header() {
  return (
    <header className="header">
        <img 
          src={headerLogo}
          alt="Логотип Место"
          className="header__logo button-hover"
        />
      </header>
  );
}

export default Header;