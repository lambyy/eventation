import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = (props) => {
  const { currentUser } = props.session;

  if (currentUser) {
    return (
      <div>
        <span>{currentUser.first_name + " " + currentUser.last_name}</span>
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
