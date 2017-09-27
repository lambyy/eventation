import React from 'react';

class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticket_id: this.props.ticket.id,
      num_tickets: 0,
      event_id: this.props.ticket.event_id
    };

    this.update = this.update.bind(this);
    this.renderTicketOptions = this.renderTicketOptions.bind(this);
    this.registerTicket = this.registerTicket.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ num_tickets: e.target.value });
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
    console.log(this.state);
    this.props.createRegistration(this.state);
  }

  render() {
    const { name, price } = this.props.ticket;
    const { num_tickets } = this.state;

    return (
      <div className="ticket">
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
          className="ticket-buy"
          onClick={this.registerTicket}
        >
          Register
        </button>
      </div>
    );
  }
}

export default Ticket;
