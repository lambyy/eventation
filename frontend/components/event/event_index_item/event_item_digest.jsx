import React from 'react';
import formatTime from '../helper/format_time';

const EventItemDigest = ({ event }) => {
  const startDate = new Date(event.start_date);
  const start = formatTime(startDate);

  return (
    <div className="event-item-digest">
      <p>{start}</p>
      <p>{event.title}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default EventItemDigest;
