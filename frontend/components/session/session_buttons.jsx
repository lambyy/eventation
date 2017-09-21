import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = (props) => {
  const { currentUser } = props.session;

  if (currentUser) {
    return (
      <div className="nav-user">
        <span>{currentUser.first_name.toUpperCase() + " " +
          currentUser.last_name.toUpperCase()}</span>
        <Link to="/" onClick={props.logout}>LOGOUT</Link>
      </div>
    );
  } else {
    return (
      <Link to="/login">SIGN IN</Link>
    );
  }
};

export default SessionButtons;
