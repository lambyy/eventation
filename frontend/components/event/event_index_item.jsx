import React from 'react';
import EventItemDigest from './event_index_item/event_item_digest';
import EventItemExtra from './event_index_item/event_item_extra';

const EventIndexItem = ({ event}) => (
  <div className="event-index-item">
    <div className="event-item-image">
      <img src={event.image_url}/>
    </div>
    <EventItemDigest event={event}/>
    <EventItemExtra />
  </div>
);

export default EventIndexItem;
