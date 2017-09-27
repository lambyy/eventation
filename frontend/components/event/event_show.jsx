import React from 'react';
import Modal from 'react-modal';
import EventDigest from './event_show/event_digest';
import EventRegistration from './event_show/event_registration';
import EventDescription from './event_show/event_description';
import EventLocation from './event_show/event_location';
import RegistrationForm from '../registrations/registration_form';

const customStyles = {
  content: {
    backgroundColor: '#f8f8fa'
  }
};

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: true };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { event, errors, tickets, createRegistration } = this.props;

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
        <Modal
          isOpen={this.state.showModal}
          style={customStyles}
          contentLabel="Registration Modal"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <RegistrationForm
            tickets={tickets}
            createRegistration={createRegistration}/>
        </Modal>
        <div className="event-backdrop">
          <img src={event.image_url}/>
        </div>
        <div className="event-show">
          <div className="event-image">
            <img src={event.image_url}/>
          </div>
          <EventDigest event={event} startDate={startDate}/>
          <EventRegistration handleOpenModal={this.handleOpenModal}/>
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
