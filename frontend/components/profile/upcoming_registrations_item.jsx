import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  content: {
    position: 'absolute',
    margin: "auto",
    width: '400px',
    height: '150px'
  }
};

class UpcomingRegistrationsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmReturn: false,
      showComfirmationModal: false
    }

    this.renderRegistrations = this.renderRegistrations.bind(this);
    this.handleOpenConfirmationModal = this.handleOpenConfirmationModal.bind(this);
    this.handleCloseConfirmationModal = this.handleCloseConfirmationModal.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleOpenConfirmationModal() {
    this.setState({ showComfirmationModal: true });
  }

  handleCloseConfirmationModal() {
    this.setState({ showComfirmationModal: false });
  }

  handleConfirmation(id) {
    return (e) => {
      e.preventDefault();
      this.props.removeRegistration(id);
      this.handleCloseConfirmationModal();
      this.props.handleCloseModal();
    };
  }

  renderRegistrations() {
    const summary = this.props.registrations.map( registration => (
      <div key={registration.id} className="summary">
        <Modal
          isOpen={this.state.showComfirmationModal}
          style={customStyles}
          contentLabel="Confirmation Modal"
        >
          <div>
            {`Return ${registration.num_tickets} ${registration.name} tickets to ${this.props.eventTitle}?`}
          </div>
          <button className="green-button"
            onClick={this.handleConfirmation(registration.id)}>Confirm</button>
          <button className="solid-blue-button"
            onClick={this.handleCloseConfirmationModal}>Go Back</button>
        </Modal>
        <p className="ticket-name">{registration.name}</p>
        <p className="ticket-num">{registration.num_tickets}</p>
        <button className="solid-blue-button"
          onClick={this.handleOpenConfirmationModal}>Return</button>
      </div>
    ));
    return summary;
  }

  render() {
    const { handleCloseModal, eventTitle } = this.props;

    return (
      <div className="registration-item">
        <button className="fa fa-times-circle-o" onClick={handleCloseModal}></button>
          <h3>{`Your registrations to ${eventTitle}!`}</h3>
          <div className="order-summary">
            <h4>Order Summary</h4>
            <h6>TYPE</h6>
            <h6>QUANTITY</h6>
            <p className="spacer"></p>
            {this.renderRegistrations()}
          </div>
      </div>
    );
  }
}

export default UpcomingRegistrationsItem;
