import React from 'react';
import Bookmark from '../../bookmark/bookmark';

const EventRegistration = ({ bookmarked, toggleBookmark, handleOpenModal }) => {

  return (
    <div className="event-register">
      <Bookmark bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
      <button className="green-button"
        onClick={handleOpenModal}>Register</button>
    </div>
  );
};

export default EventRegistration;
