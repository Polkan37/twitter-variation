import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MediaQuery from 'react-responsive'

import Login from '../Login/Login';
import { Home } from "../../pages/Home";
import { Notifications } from "../../pages/Notifications";
import { Profile } from "../../pages/Profile";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import '../../api/mirageServer'
import useToken from './useToken';

function App() {
  // const { token, setToken } = useToken();
  const [title, setTitle] = useState('Main');
  const [messageForm, setMessageForm] = useState(false);


  let location = useLocation();
  const isHomePage = location.pathname === '/';

  // if(!token) {
  //   setToken({token: 'test123'})
  // }
  useEffect(() => {
    const headers = [
      { path: '/', header: 'Main' },
      { path: '/notifications', header: 'Notifications' },
      { path: '/profile', header: 'Profile' },
    ]  
    const text = headers.find(el => el.path === location.pathname).header;
    setTitle(text)
  }, [location]);

  const handleClick = () => {
    setMessageForm(!messageForm)
  }

  return (
    <div className="wrapper">
        <header className="header">
          <NavBar />
          {isHomePage ? <button className="header__button button" onClick={handleClick}>new tweet</button> : ''}
          <MediaQuery maxWidth={1024}>
            <SideBar /> 
          </MediaQuery>
        </header>
        <main className="main-page">
        <MediaQuery minWidth={1024}>
          <h1 className="main__title page-title" id='page-title'>{title}</h1>
        </MediaQuery>
          <Routes>
            <Route path="/" element={<Home messageForm={messageForm}/>} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <MediaQuery minWidth={1024}>
          <SideBar />
        </MediaQuery>
    </div>
  );
}

export default App;
