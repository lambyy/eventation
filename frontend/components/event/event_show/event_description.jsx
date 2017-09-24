import React from 'react';

const EventDescription = ({ description }) => {
  return (
    <div className="event-description">
      <h3>DESCRIPTION</h3>
      <p>{description}</p>
    </div>
  );
};

export default EventDescription;
