import React from 'react';

const EventDigest = ({ event, startDate }) => {
  return (
    <div className="event-digest">
      <p>{startDate.toUTCString().slice(8, 12)}</p>
      <p>{startDate.getUTCDate()}</p>
      <p>{event.title}</p>
    </div>
  );
};

export default EventDigest;
