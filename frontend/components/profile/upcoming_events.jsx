import React from 'react';
import { Link } from 'react-router-dom';
import EventItemDigest from '../event/event_index_item/event_item_digest';


class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const eventItems = this.props.events.map( event => (
      <div className="upcoming-events" key={`upcoming-${event.id}`}>
        <Link to={`/events/${event.id}`} className="event-item-image">
          <img src={event.image_url}/>
        </Link>
        <Link to={`/events/${event.id}`} className="event-item-digest">
          <EventItemDigest event={event}/>
        </Link>
        <button className="solid-blue-button">
          TICKETS
        </button>
      </div>
    ));

    return (
      <div className="upcoming">
        {eventItems}
      </div>
    );
  }
}

export default UpcomingEvents;
