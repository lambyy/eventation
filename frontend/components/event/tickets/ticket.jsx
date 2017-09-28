import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    position: 'absolute',
    margin: "auto",
    width: '500px',
    height: '350px'
  }
};

class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticket_id: this.props.ticket.id,
      num_tickets: 0,
      event_id: this.props.ticket.event_id,
      showPurchaseModal: false
    };

    this.update = this.update.bind(this);

    this.handleOpenPurchaseModal = this.handleOpenPurchaseModal.bind(this);
    this.handleClosePurchaseModal = this.handleClosePurchaseModal.bind(this);
    this.closeAllModal = this.closeAllModal.bind(this);

    this.renderTicketOptions = this.renderTicketOptions.bind(this);
    this.registerTicket = this.registerTicket.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ num_tickets: e.target.value });
  }

  handleOpenPurchaseModal() {
    this.setState({ showPurchaseModal: true });
  }

  handleClosePurchaseModal() {
    this.setState({ showPurchaseModal: false });
  }

  closeAllModal() {
    this.handleClosePurchaseModal();
    this.props.closeTicketModal();
  }

  renderTicketOptions() {
    const ticketOptions = [];

    for (let i = 0; i <= this.props.ticket.quantity; i++ ) {
      ticketOptions[i] = <option key={i} value={i}>{i}</option>;
    }

    return ticketOptions;
  }

  registerTicket(e) {
    e.preventDefault();
    if (this.state.num_tickets > 0) {
      this.props.createRegistration(this.state).
        then(() => this.handleOpenPurchaseModal());
    }
  }

  render() {
    const { name, price } = this.props.ticket;
    const { num_tickets } = this.state;

    return (
      <div className="ticket">
        <Modal
          isOpen={this.state.showPurchaseModal}
          style={customStyles}
          contentLabel="Purchase Modal"
        >
          <div className="purchase">
            <button className="fa fa-times-circle-o"
              onClick={this.closeAllModal}>
            </button>
            <h3>{`You're going to ${this.props.eventTitle}!`}</h3>
            <p>Your order has been saved to My Tickets</p>
            <div className="order-summary">
              <h4>Order Summary</h4>
              <h6>TYPE</h6>
              <h6>QUANTITY</h6>
              <p>{name}</p>
              <p>{num_tickets}</p>
            </div>
            <Link to="/profile/tickets"
               className="solid-blue-button">GO TO MY TICKETS</Link>
          </div>
        </Modal>
        <h3 className="ticket-name">{name}</h3>
        <p className="ticket-price">{`$${price}`}</p>
        <select className="ticket-num" value={num_tickets} onChange={this.update}>
          {this.renderTicketOptions()}
        </select>
        <div className="ticket-total">
          <p>{`Quantity: ${num_tickets}`}</p>
          <p>{`Total: $${price * num_tickets}`}</p>
        </div>
        <button
          className="ticket-buy green-button"
          onClick={this.registerTicket}
        >
          Register
        </button>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default Ticket;
