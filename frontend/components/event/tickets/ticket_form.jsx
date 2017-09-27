import React from 'react';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);
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
          placeholder="Ticket name" />
        <input type="text"
          value={ticket.quantity}
          onChange={updateTicket("quantity", idx)}
          placeholder="Quantity"/>
        <input type="text"
          value={ticket.price}
          onChange={updateTicket("price", idx)}
          placeholder="Price"/>
        <button className="fa fa-trash"
          onClick={() => deleteTicket(idx)}></button>
      </div>
    );
  }
}

export default TicketForm;
