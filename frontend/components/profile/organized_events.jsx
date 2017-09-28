import React from 'react';
import EventIndexItem from '../event/event_index_item';

class OrganizedEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const eventItems = this.props.events.map( event =>
      <EventIndexItem key={event.id} event={event}/>
    );

    return (
      <div className="upcoming-events">
        Organized EVENTS
        {eventItems}
      </div>
    );
  }
}

export default OrganizedEvents;
