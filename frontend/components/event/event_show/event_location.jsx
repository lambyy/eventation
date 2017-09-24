import React from 'react';
import formatTime from '../helper/format_time';

const EventLocation = ({ location, startDate, endDate }) => {
  const start = formatTime(startDate);
  const end = formatTime(endDate);

  return (
    <div className="event-location">
      <h3>DATE AND TIME</h3>
      <p>{`${start} -`}</p>
      <p>{end}</p>
      <h3>LOCATION</h3>
      <p>{location}</p>
    </div>
  );
};

export default EventLocation;
