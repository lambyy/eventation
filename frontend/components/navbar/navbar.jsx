import React from 'react';
import { Link } from 'react-router-dom';
import SessionButtonsContainer from '../session/session_buttons_container';

const NavBar = () => (
  <div className="main-nav">
    <nav className="left-nav">
      <Link to="/">Eventation</Link>
    </nav>
    <nav className="right-nav">
      <Link to="/events/browse">BROWSE EVENTS</Link>
      <SessionButtonsContainer />
      <Link to="/events/create">CREATE</Link>
    </nav>
  </div>
);

export default NavBar;
