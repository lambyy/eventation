import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import EventItemDigest from '../event/event_index_item/event_item_digest';

const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  content: {
    position: 'absolute',
    margin: "auto",
    width: '400px',
    height: '200px'
  }
};

class OrganizedEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showConfirmModal: false
    }

    this.redirectToEdit = this.redirectToEdit.bind(this);

    this.handleOpenConfirmModal = this.handleOpenConfirmModal.bind(this);
    this.handleCloseConfirmModal = this.handleCloseConfirmModal.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  redirectToEdit(id) {
    return (e) => {
      this.props.history.push(`/events/${id}/edit`);
    };
  }

  handleOpenConfirmModal() {
    this.setState({ showConfirmModal: true });
  }

  handleCloseConfirmModal() {
    this.setState({ showConfirmModal: false });
  }

  handleConfirmation(id) {
    return (e) => {
      e.preventDefault();
      this.props.removeEvent(id);
      this.handleCloseConfirmModal();
    };
  }

  render() {
    const eventItems = this.props.events.map( event => (
      <div className="organized-event" key={`organized-${event.id}`}>
        <Link to={`/events/${event.id}`} className="event-item-image">
          <img src={event.image_url}/>
        </Link>
        <Link to={`/events/${event.id}`} className="event-item-digest">
          <EventItemDigest event={event}/>
        </Link>
        <button onClick={this.redirectToEdit(event.id)}
          className="edit solid-blue-button">
          EDIT
        </button>
        <button onClick={this.handleOpenConfirmModal}
          className="delete solid-blue-button">DELETE
        </button>
        <Modal
          isOpen={this.state.showConfirmModal}
          style={customStyles}
          contentLabel="Confirm Delete Modal"
        >
          <div className="confirmation-modal">
            <p>{`Delete ${event.title}?`}</p>
            <button className="green-button"
              onClick={this.handleConfirmation(event.id)}>Confirm</button>
            <button className="solid-blue-button"
              onClick={this.handleCloseConfirmModal}>Go Back</button>
          </div>
        </Modal>
      </div>
    ));

    return (
      <div className="organized">
        {eventItems}
      </div>
    );
  }
}

export default withRouter(OrganizedEvents);
