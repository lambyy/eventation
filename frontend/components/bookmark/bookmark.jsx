import React from 'react';

const Bookmark = ({bookmarked, toggleBookmark}) => {
  if (bookmarked) {
    return (
    <i className="fa fa-bookmark" aria-hidden="true"
       onClick={toggleBookmark} />
    );
  } else {
    return (
      <i className="fa fa-bookmark-o" aria-hidden="true"
        onClick={toggleBookmark} />
    );
  }
};

export default Bookmark;
