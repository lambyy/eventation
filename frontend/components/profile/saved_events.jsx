import React from 'react';
import EventIndexItemContainer from '../event/event_index_item_container';

class SavedEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const eventItems = this.props.events.map( event =>
      <EventIndexItemContainer key={event.id} event={event}/>
    );

    console.log(this.props.events);
    return (
      <div className="saved-events">
        {eventItems}
      </div>
    );
  }
}

export default SavedEvents;
