import React from 'react';

const EventDigest = ({ event, startDate }) => {
  return (
    <div className="event-digest">
      <div className="digest-date">
        <p>{startDate.toUTCString().slice(8, 12)}</p>
        <p>{startDate.getUTCDate()}</p>
      </div>
      <p>{event.title}</p>
    </div>
  );
};

export default EventDigest;
