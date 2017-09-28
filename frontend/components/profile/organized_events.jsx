import React from 'react';
import { Link } from 'react-router-dom';
import EventItemDigest from '../event/event_index_item/event_item_digest';

class OrganizedEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.events.length) {
      return (
        <div className="No Events">EMPTY</div>
      );
    }


    const eventItems = this.props.events.map( event => (
      <div className="organized-event" key={`organized-${event.id}`}>
        <Link to={`/events/${event.id}`} className="event-item-image">
          <img src={event.image_url}/>
        </Link>
        <Link to={`/events/${event.id}`} className="event-item-digest">
          <EventItemDigest event={event}/>
        </Link>
        <Link to={`/events/${event.id}/edit`} className="solid-blue-button">
          EDIT
        </Link>
      </div>
    ));

    return (
      <div className="organized">
        {eventItems}
      </div>
    );
  }
}

export default OrganizedEvents;
