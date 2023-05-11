import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    document.querySelector('.main-page').classList.toggle('hide');
    setIsActive(current => !current);
  }

  const handleTransition = event => {
    if(event.target.nodeName == "A"){
      document.querySelector('.main-page').classList.remove('hide');
      setIsActive(current => !current);
    }
  }

  return (
    <div className="header__navigation navigation">
      <button className={`navigation__button button navigation-button ${isActive ? 'cross' : ''}`} onClick={handleClick}>
          <div className="navigation__button-line" ></div>
          <div className="navigation__button-line"></div>
          <div className="navigation__button-line"></div>
      </button>
      <nav className={`navigation__list ${isActive ? 'show' : ''}`} onClick={handleTransition}>
      <Link to="/" className="navigation__list-button navigation__logo"><img src="%PUBLIC_URL%/../logo.png" alt="" /></Link>
      <Link to="/" className="navigation__list-button button">Main</Link>
      <Link to="/notifications" className="navigation__list-button button">Notifications</Link>
      <Link to="/profile" className="navigation__list-button button">Profile</Link>
      </nav>
    </div>
  );
}

export default NavBar;
