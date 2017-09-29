import React from 'react';
import Bookmark from '../../bookmark/bookmark';

const EventItemExtra = ({ bookmarked, toggleBookmark }) => {
  return (
    <div className="event-item-extras">
      <Bookmark bookmarked={bookmarked} toggleBookmark={toggleBookmark}/>
    </div>
  );
};

export default EventItemExtra;
