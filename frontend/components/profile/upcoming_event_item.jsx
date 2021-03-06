import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import EventItemDigest from '../event/event_index_item/event_item_digest';
import UpcomingRegistrationsItem from './upcoming_registrations_item';

const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    position: "absolute",
    margin: "auto",
    width: '450px',
    height: '350px',
    backgroundColor: '#f8f8fa',
    borderRadius: "6px"
  }
};

class UpcomingEventItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showUpcomingModal: false };

    this.handleOpenUpcomingModal = this.handleOpenUpcomingModal.bind(this);
    this.handleCloseUpcomingModal = this.handleCloseUpcomingModal.bind(this);
  }

  handleOpenUpcomingModal() {
    this.setState({ showUpcomingModal: true });
  }

  handleCloseUpcomingModal() {
    this.setState({ showUpcomingModal: false });
  }


  render() {
    const { event, registrations, removeRegistration } = this.props;
    return (
      <div className="upcoming-events">
        <Modal
          isOpen={this.state.showUpcomingModal}
          style={customStyles}
          contentLabel="Upcoming Events Modal"
        >
          <UpcomingRegistrationsItem
            handleCloseModal={this.handleCloseUpcomingModal}
            registrations={registrations}
            removeRegistration={removeRegistration}
            eventTitle={event.title}/>
        </Modal>
        <Link to={`/events/${event.id}`} className="event-item-image">
          <img src={event.image_url}/>
        </Link>
        <Link to={`/events/${event.id}`} className="event-item-digest">
          <EventItemDigest event={event}/>
        </Link>
        <button className="solid-blue-button"
            onClick={this.handleOpenUpcomingModal}>
          TICKETS
        </button>
      </div>
    );
  }
}

export default UpcomingEventItem;
