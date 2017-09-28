import React from 'react';
import Ticket from '../event/tickets/ticket';

const RegistrationForm = (props) => {

  const renderTickets = () => {
    const tickets = props.tickets.map( (ticket, idx) => (
      <Ticket key={idx}
        ticket={ticket}
        eventTitle={props.eventTitle}
        closeTicketModal={props.handleCloseModal}
        createRegistration={props.createRegistration}/>
    ));

    return tickets;
  };

  return (
    <div className="registration-form">
      <button className="fa fa-times-circle-o" onClick={props.handleCloseModal}></button>
      <h3>Register</h3>
      {renderTickets()}
    </div>
  );
};

export default RegistrationForm;
