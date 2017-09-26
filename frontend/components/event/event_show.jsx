import React from 'react';
import EventDigest from './event_show/event_digest';
import EventRegistration from './event_show/event_registration';
import EventDescription from './event_show/event_description';
import EventLocation from './event_show/event_location';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestEvent(this.props.eventId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.eventId !== nextProps.eventId) {
      window.scrollTo(0, 0);
      this.props.requestEvent(nextProps.eventId);
    }
  }

  render() {
    const { event, errors } = this.props;

    if (!event) {
      if (errors) {
        console.log(errors);
        return (
          <div className="event-show-errors">
            {errors.map( (error, idx) => <li key={idx}>{error}</li>)}
          </div>
        );
      }

      return null;
    }

    const startDate = new Date(event.start_date);
    const endDate = new Date(event.end_date);

    return (
      <div className="event-show-page">
        <div className="event-backdrop">
          <img src={event.image_url}/>
        </div>
        <div className="event-show">
          <div className="event-image">
            <img src={event.image_url}/>
          </div>
          <EventDigest event={event} startDate={startDate}/>
          <EventRegistration />
          <EventDescription description={event.description}/>
          <EventLocation location={event.location}
              startDate={startDate}
              endDate={endDate}
          />
        </div>
      </div>
    );
  }
}

export default EventShow;
