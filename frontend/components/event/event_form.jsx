import React from 'react';
import DetailForm from './event_form/detail_form';

class EventForm extends React.Component {
  constructor(props){
    super(props);

    if (this.props.event) {
      this.state = this.props.event;
    } else {
      this.state = this.defaultState();
    }

    this.update = this.update.bind(this);
    this.updateImageURL = this.updateImageURL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.defaultState = this.defaultState.bind(this);

    this.renderEventErrors = this.renderEventErrors.bind(this);
  }

  componentWillMount() {
    if (this.props.eventId && !this.props.event) {
      this.props.requestEvent(this.props.eventId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (!nextProps.event && nextProps.eventId) {
        this.props.requestEvent(nextProps.eventId);
      }
      this.props.clearErrors();
      if (nextProps.location.pathname === "/events/create") {
        this.setState(this.defaultState());
      }
    }

    if (nextProps.event) {
      this.setState(nextProps.event);
    }

    if (nextProps.errors == "Event does not exist") {
      this.setState(this.defaultState());
    }
  }

  defaultState() {
    return {
      organizer_id: this.props.currentUser.id,
      title: "",
      location: "",
      start_date: "",
      end_date: "",
      image_url: "",
      description: "",
      event_type: "1",
      category: "1"
    };
  }

  update(type) {
    return (e) => {
      e.preventDefault();
      this.setState({ [type]: e.target.value });
    };
  }

  updateImageURL(url) {
    this.setState({ image_url: url });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(action => this.props.history.push(`/events/${action.event.id}`))
      .fail(() => setTimeout(() => scroll(0,0), 500));
  }

  renderEventErrors() {
    return this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
  }

  render() {
    return (
      <div>
        <div className="event-form-header">
          <p>Create An Event</p>
          <input type="submit" className="orange-button"
            value="Publish" onClick={this.handleSubmit} />
        </div>
        <div className="divider"></div>
        <form className="event-form">
          <p><span>1</span>Event Details</p>
          <ul className="error-display">{this.renderEventErrors()}</ul>
          <DetailForm update={this.update}
              updateImageURL={this.updateImageURL}
              state={this.state}/>
          <p><span>2</span>Create Tickets</p>
          <br/>
          <input type="submit" className="green-button"
              value="MAKE YOUR EVENT LIVE"
              onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default EventForm;
