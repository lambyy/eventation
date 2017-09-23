import React from 'react';

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
    console.log(this.props.event);
    const { event } = this.props;

    if (!event) return null;

    return (
      <div className="event-show">
        <div className="event-image">
          <img src={event.image_url}/>
        </div>
        <div className="event-digest"></div>
        <div className="event-register"></div>
        <div className="event-description">DESCRIPTION</div>
        <div className="event-location">LOCATION</div>
      </div>
    );
  }
}

export default EventShow;
