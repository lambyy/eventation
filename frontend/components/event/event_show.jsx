import React from 'react';
import EventDigest from './event_digest';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.event) {
      this.props.requestEvent(this.props.eventId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.eventId !== nextProps.eventId) {
      this.props.requestEvent(nextProps.eventId);
    }
  }

  render() {
    // console.log(this.props.event);
    const { event } = this.props;

    if (!event) return null;

    const startDate = new Date(event.start_date);
    const endDate = new Date(event.end_date);

    return (
      <div className="event-show">
        <div className="event-image">
          <img src={event.image_url}/>
        </div>
        <EventDigest event={event} startDate={startDate}/>
        <div className="event-register"></div>
        <div className="event-description">DESCRIPTION</div>
        <div className="event-location">LOCATION</div>
      </div>
    );
  }
}

export default EventShow;
