import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllEvents("all");
  }

  render() {
    const { events } = this.props;

    const eventsList = events.map( event =>
      <EventIndexItem key={event.id} event={event} />
    );

    return (
      <div className="event-index">
        <h3>Events for you</h3>
        {eventsList}
      </div>
    );
  }
}

export default EventIndex;
