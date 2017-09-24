import React from 'react';

const EventDescription = ({ description }) => {
  const paragraphs = description.split("\n");
  const text = paragraphs.map( (paragraph, idx) => (
    <p key={idx}>{paragraph}</p>
  ));

  return (
    <div className="event-description">
      <h3>DESCRIPTION</h3>
      <div>{text}</div>
    </div>
  );
};

export default EventDescription;
