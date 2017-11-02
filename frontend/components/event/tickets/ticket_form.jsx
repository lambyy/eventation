import React from 'react';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);

    this.trashTicket = this.trashTicket.bind(this);
  }

  trashTicket(idx) {
    return (e) => {
      e.preventDefault();
      this.props.deleteTicket(idx);
    };
  }

  render() {
    const { idx, updateTicket, ticket, formType, deleteTicket } = this.props;

    if (!ticket && formType === "edit") {
      return null;
    }

    return (
      <div className="ticket-form">
        <input type="text"
          value={ticket.name}
          onChange={updateTicket("name", idx)}
          placeholder="Ticket name (Early Bird, RSVP...)" />
        <input type="number"
          value={ticket.quantity}
          onChange={updateTicket("quantity", idx)}
          placeholder="Quantity"/>
        <input type="number"
          value={ticket.price}
          onChange={updateTicket("price", idx)}
          placeholder="Price"/>
        <button className="fa fa-trash"
          onClick={this.trashTicket(idx)}></button>
      </div>
    );
  }
}

export default TicketForm;
