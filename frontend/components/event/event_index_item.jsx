import React from 'react';
import { Link } from 'react-router-dom';
import EventItemDigest from './event_index_item/event_item_digest';
import EventItemExtra from './event_index_item/event_item_extra';

const EventIndexItem = ({ event }) => (
  <div className="event-index-item">
    <Link to={`/events/${event.id}`} className="event-item-image">
      <img src={event.image_url}/>
    </Link>
    <Link to={`/events/${event.id}`}>
      <EventItemDigest event={event}/>
    </Link>
    <EventItemExtra />
  </div>
);

export default EventIndexItem;
