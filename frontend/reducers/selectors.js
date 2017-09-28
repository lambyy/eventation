import { values } from 'lodash';

export const selectAllEvents = state => (
  values(state.entities.events)
);

export const selectEvents = (state, type) => {
  const currentUser = state.session.currentUser;
  if (type === "organized") {
    let organizedEvents = [];
    values(state.entities.events).forEach( (event) => {
      if (event.organizer_id === currentUser.id) {
        organizedEvents.push(event);
      }
    });
    return organizedEvents;
  } else if (type === "tickets") {
    let registeredEvents = [];
    const registrations = [...new Set(currentUser.registeredEvents)];
    registrations.forEach( eventId => {
      if (state.entities.events[eventId]) {
        registeredEvents.push(state.entities.events[eventId]);
      }
    });
    console.log(registeredEvents);
    return registeredEvents;
  }

};

export const selectTickets = (state, ticketsArray) => {
  let tickets = [];
  for (let i = 0; i < ticketsArray.length; i++) {
    const id = ticketsArray[i];
    tickets[i] = state.entities.tickets[id];
  }
  return tickets;
};
