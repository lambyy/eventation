import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllEvents();
  }

  render() {
    const { events } = this.props;

    const eventsList = events.map( event =>
      <EventIndexItem key={event.id} event={event} />
    );

    return (
      <div className="event-index">
        {eventsList}
      </div>
    );
  }
}

export default EventIndex;
