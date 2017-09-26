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
  }

  update(e) {
    e.preventDefault();
    this.setState({ num_tickets: e.taret.value });
  }

  renderTicketOptions() {
    const ticketOptions = [];

    for (let i = 0; i <= this.props.ticket.quantity; i++ ) {
      ticketOptions[i] = <option key={i} value={i}>{i}</option>;
    }

    return ticketOptions;
  }

  render() {

    return (
      <div>
        <h3>{this.props.ticket.name}</h3>
        <p>{`$${this.props.ticket.price}`}</p>
        <select value={this.state.num_tickets} onChange={this.update}>
          {this.renderTicketOptions()}
        </select>
        <button>Register</button>
      </div>
    );
  }
}

export default Ticket;
