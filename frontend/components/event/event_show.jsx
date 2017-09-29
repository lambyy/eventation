import React from 'react';
import Modal from 'react-modal';
import EventDigest from './event_show/event_digest';
import EventRegistration from './event_show/event_registration';
import EventDescription from './event_show/event_description';
import EventLocation from './event_show/event_location';
import RegistrationForm from '../registrations/registration_form';

const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    position: "absolute",
    margin: "auto",
    width: '730px',
    backgroundColor: '#f8f8fa',
    borderRadius: "6px"
  }
};

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.toggleBookmark = this.toggleBookmark.bind(this);
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
    if (this.props.currentUser) {
      this.setState({ showModal: true });
    } else {
      this.props.history.push('/login');
    }

  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  toggleBookmark() {
    if (this.props.currentUser) {
      if (this.props.bookmarked) {
        this.props.removeBookmark(this.props.eventId);
      } else {
        this.props.createBookmark(this.props.eventId);
      }
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    const {
      event,
      errors,
      tickets,
      createRegistration,
      bookmarked
    } = this.props;

    if (!event) {
      if (errors) {
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
          <RegistrationForm
            tickets={tickets}
            eventTitle={event.title}
            createRegistration={createRegistration}
            handleCloseModal={this.handleCloseModal}/>
        </Modal>
        <div className="event-backdrop">
          <img src={event.image_url}/>
        </div>
        <div className="event-show">
          <div className="event-image">
            <img src={event.image_url}/>
          </div>
          <EventDigest event={event} startDate={startDate}/>
          <EventRegistration handleOpenModal={this.handleOpenModal}
            toggleBookmark={this.toggleBookmark}
            bookmarked={bookmarked}/>
          <EventDescription description={event.description} />
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
