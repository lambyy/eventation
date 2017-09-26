import React from 'react';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { idx, updateTickets, ticket, formType } = this.props;

    if (!ticket && formType === "edit") {
      return null;
    }

    return (
      <div className="ticket-form">
        <input type="text"
          value={ticket.name}
          onChange={updateTickets("name", idx)}
          placeholder="Ticket name" />
        <input type="text"
          value={ticket.quantity}
          onChange={updateTickets("quantity", idx)}
          placeholder="Quantity"/>
        <input type="text"
          value={ticket.price}
          onChange={updateTickets("price", idx)}
          placeholder="Price"/>
      </div>
    );
  }
}

export default TicketForm;
