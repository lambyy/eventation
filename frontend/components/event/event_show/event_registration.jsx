import React from 'react';

const EventRegistration = (props) => {
  return (
    <div className="event-register">
      <i className="fa fa-bookmark-o" aria-hidden="true"></i>
      <button className="green-button"
        onClick={props.handleOpenModal}>Register</button>
    </div>
  );
};

export default EventRegistration;
