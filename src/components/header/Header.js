import React from 'react';
import headerLogo from '../../images/header-logo.svg';
// import '../header/Header.css';

function Header() {
  return (

    <header className="header section page__header">
      <img  className="logo"
            src={headerLogo}
            alt="логотип Mesto" />
    </header>

  );
}

export default Header;
