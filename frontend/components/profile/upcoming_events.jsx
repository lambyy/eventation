import React from 'react';
import { Link } from 'react-router-dom';
import UpcomingEventItem from './upcoming_event_item';

class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const eventItems = this.props.events.map( event => (
      <UpcomingEventItem key={`upcoming-${event.id}`} event={event} />
    ));

    return (
      <div className="upcoming">
        {eventItems}
      </div>
    );
  }
}

export default UpcomingEvents;
