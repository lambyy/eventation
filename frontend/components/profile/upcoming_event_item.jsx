import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import EventItemDigest from '../event/event_index_item/event_item_digest';

class UpcomingEventItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showUpcomingModal: false };
  }


  render() {
    const { event } = this.props;
    return (
      <div className="upcoming-events">
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
    );
  }
}

export default UpcomingEventItem;
