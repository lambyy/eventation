import React from 'react';
import Bookmark from '../../bookmark/bookmark';

const EventRegistration = ({ bookmarked, toggleBookmark, handleOpenModal }) => {

  // const bookmarkLogo = () => {
  //   if (props.bookmarked) {
  //     return (
  //     <i className="fa fa-bookmark"
  //        aria-hidden="true"
  //        onClick={props.toggleBookmark}
  //       ></i>
  //   );
  //   } else {
  //     return (
  //       <i className="fa fa-bookmark-o"
  //          aria-hidden="true"
  //          onClick={props.toggleBookmark}
  //         ></i>
  //     );
  //   }
  // };

  return (
    <div className="event-register">
      <Bookmark bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
      <button className="green-button"
        onClick={handleOpenModal}>Register</button>
    </div>
  );
};

export default EventRegistration;
