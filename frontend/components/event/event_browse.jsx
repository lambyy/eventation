import React from 'react';
import EventIndexItemContainer from './event_index_item_container';

class EventBrowse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="event-browse">
        EVENT BROWSE
      </div>
    );
  }
}

export default EventBrowse;

// {this.props.events.map( event => (
//   <EventIndexItemContainer key={event.id} event={event} />
// ))}
