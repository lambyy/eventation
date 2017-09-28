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
    const registrations = state.entities.registrations;
    // const registrations = [...new Set(currentUser.registeredEvents)];
    values(registrations).forEach( registration => {
      if (state.entities.events[registration.event_id]) {
        registeredEvents.push(state.entities.events[registration.event_id]);
      }
    });
    return [...new Set(registeredEvents)];
  }

};

export const selectTickets = (state, ticketsArray) => {
  let tickets = [];
  if (!ticketsArray) return tickets;
  for (let i = 0; i < ticketsArray.length; i++) {
    const id = ticketsArray[i];
    tickets[i] = state.entities.tickets[id];
  }
  return tickets;
};

export const selectRegistrations = (state) => (
  values(state.entities.registrations)
);
