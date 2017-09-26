import React from 'react';
import Ticket from '../event/tickets/ticket';

const RegistrationForm = (props) => {

  const renderTickets = () => {
    const tickets = props.tickets.map( (ticket, idx) => (
      <Ticket key={idx} ticket={ticket}/>
    ));

    return tickets;
  };

  return (
    <div>
      <h3>Register</h3>
      {renderTickets()}
    </div>
  );
};

export default RegistrationForm;
