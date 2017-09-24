import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllEvents();
  }

  render() {
    console.log(this.props.events);
    return (
      <div className="event-index">
        <EventIndexItem />
      </div>
    );
  }
}

export default EventIndex;
