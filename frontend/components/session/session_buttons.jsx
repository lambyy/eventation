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
        <span onClick={props.logout} className="clickable">LOGOUT</span>
      );
    }
  };

  if (currentUser) {
    return (
      <div className="nav-user">
        <Link to="/profile/tickets" >
          {currentUser.first_name.toUpperCase() + " " +
            currentUser.last_name.toUpperCase()}
        </Link>
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
