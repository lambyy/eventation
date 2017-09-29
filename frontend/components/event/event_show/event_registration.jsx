import React from 'react';

const EventRegistration = (props) => {

  const bookmarkLogo = () => {
    if (props.bookmarked) {
      return (
      <i className="fa fa-bookmark"
         aria-hidden="true"
         onClick={props.toggleBookmark}
        ></i>
    );
    } else {
      return (
        <i className="fa fa-bookmark-o"
           aria-hidden="true"
           onClick={props.toggleBookmark}
          ></i>
      );
    }
  };

  return (
    <div className="event-register">
      {bookmarkLogo()}
      <button className="green-button"
        onClick={props.handleOpenModal}>Register</button>
    </div>
  );
};

export default EventRegistration;
