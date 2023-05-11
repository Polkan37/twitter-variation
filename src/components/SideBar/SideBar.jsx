import React, { useState } from "react";
import Recomended from "../Recomended/Recomended";
import UserCard from "../UserCard/UserCard";
import { ReactComponent as Icon } from '../../resourses/man-icon.svg'

function SideBar() {
  const [isActive, setIsActive] = useState(false);
  const isProfilePage = window.location.pathname === '/profile';   
  
  const handleClick = event => {
    event.currentTarget.classList.toggle('hide-icon');
    document.querySelector('.main-page').classList.toggle('hide');
    setIsActive(current => !current);
  }

  return (
    <aside className="header__sidebar sidebar">
      <button className="sidebar__button button navigation-button" onClick={handleClick}>
        <Icon className="sidebar__icon" />
        <div className="sidebar__button-line"></div>
        <div className="sidebar__button-line"></div>
      </button>
      <div className={`sidebar__content ${isActive ? 'show' : ''}`}>
      {isProfilePage ? '' : <UserCard />}
        <Recomended />
      </div>
    </aside>
  );
}

export default SideBar;
