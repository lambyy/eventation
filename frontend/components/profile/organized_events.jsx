import React from 'react';
import { Link } from 'react-router-dom';
import EventItemDigest from '../event/event_index_item/event_item_digest';

class OrganizedEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const eventItems = this.props.events.map( event => (
      <div className="organized-event" key={event.id}>
        <Link to={`/events/${event.id}`} className="event-item-image">
          <img src={event.image_url}/>
        </Link>
        <Link to={`/events/${event.id}`} className="event-item-digest">
          <EventItemDigest event={event}/>
        </Link>
        <Link to={`/events/${event.id}/edit`}
          onClick={() => console.log("CHANGING URL")} 
          className="solid-blue-button">
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
