# Eventation

[Live](https://eventation.herokuapp.com/)

Eventation is a single-page Eventbrite clone built using Ruby on Rails, React/Redux and Postgresql. The web application allows users to browse through various events. Upon sign in, users can also create and delete their own events, bookmark interesting events, and register tickets for events.

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/dashboard.png)

## Features

### Events

Users can create custom events with their desired event image, location, date and time. Using a single form, users are able to create new events and with multiple tickets simultaneously. The same form is prepopulated when users want to update a pre-existing event. 

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/event_form.png)

One of the biggest hurdles when implementing the event form was the creation of an event in conjunction with tickets as these are two separate tables in the Rails backend. I was able to implement this by creating Ticket components on the frontend to store individual ticket information in an array in the local state of the Event Form component. When an event is created, all the event and ticket information is sent to the backend as one package. I created a method for Events to first check if all the information sent will create valid Event and Ticket models. If valid, the method will create the Event and all its associated Tickets. I also wrote a similar method to update an exisiting Event and create or destroy its associated Tickets to reflect the data sent by the Event Form.

`````
class Tickets < ApplicationRecord
  def self.check_tickets(params)
    ticket_errors = []
    tickets_params = params.select { |k, _| k == "tickets" }
    tickets_params[:tickets].each do |_, ticket_params|
      t = Ticket.new(ticket_params)
      unless t.valid?
        ticket_errors += t.errors.full_messages
      end
    end
    ticket_errors
  end
end

class Event < ApplicationRecord
  def self.create_event_with_tickets(params, current_user)
    event_params = params.reject { |k, _| k == "tickets" }
    tickets_params = params.select { |k, _| k == "tickets" }
    event = Event.new(event_params)
    event.organizer_id = current_user.id

    if event.save
      tickets_params[:tickets].each do |_, ticket_params|
        ticket_params[:event_id] = event.id
        Ticket.create(ticket_params)
      end
      event
    else
      event.errors.full_messages
    end
  end
end
`````

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/create_tickets.png)

Once an event is created, their details can be viewed on the Event Show page.

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/event_show.png)

### Tickets/Registrations

On the Event Show page of each Event, users are able to register for Tickets. Once registered, users can see their registered events and tickets on their profile page. They also have the option to return tickets from their profile page.

`````
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
`````

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/registration.png)

### Event Categories

Events can be filtered by their categories and event types when browsing, allowing users to easily find events they are interested in.

`````
export const filterEvents = (state, location) => {
  if (location.search) {
    let queries = location.search.slice(1).split("%");
    queries = queries.map(query => query.split("="));

    let filtered = [];
    values(state.entities.events).forEach( event => {
      if (queries.length === 2
            && event.category === queries[0][1]
              && event.event_type === queries[1][1]) {
                filtered.push(event);
      } else if (queries.length === 1) {
        if (queries[0][0] === "category"
                    && event.category === queries[0][1]) {
                      filtered.push(event);
        } else if (queries[0][0] === "event_type"
                    && event.event_type === queries[0][1]) {
                      filtered.push(event);
        }
      }
    });

    return filtered;
  }
  return values(state.entities.events);
};
`````

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/event_browse.png)

### Bookmarks

Users can bookmark and unbookmark events while browsing and on the event show page. Their bookmarks can be viewed in their profile page.

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/bookmarks.png)

## Future Features

* Events should be able to be searched by their names
* Event locations should show up on a map so that users can find events near them
* Tickets and Registrations should have a payment method
