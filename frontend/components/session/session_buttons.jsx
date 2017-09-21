import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = (props) => {
  const { currentUser } = props.session;
  const logoutRedirect = () => {
    if (props.location.pathname !== "/") {
      return (
        <Link to="/" onClick={props.logout}>LOGOUT</Link>
      );
    } else {
      return (
        <span onClick={props.logout}>LOGOUT</span>
      );
    }
  };

  if (currentUser) {
    return (
      <div className="nav-user">
        <span>{currentUser.first_name.toUpperCase() + " " +
          currentUser.last_name.toUpperCase()}</span>
        {logoutRedirect()}
      </div>
    );
  } else {
    return (
      <Link to="/login">SIGN IN</Link>
    );
  }
};

export default SessionButtons;
