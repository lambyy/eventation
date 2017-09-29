import { values } from 'lodash';

export const selectAllEvents = state => (
  values(state.entities.events)
);

export const selectEvents = (state, type) => {
  const currentUser = state.session.currentUser;
  const events = state.entities.events;

  if (type === "organized") {
    let organizedEvents = [];
    values(events).forEach( event => {
      if (event.organizer_id === currentUser.id) {
        organizedEvents.push(event);
      }
    });
    return organizedEvents;
  } else if (type === "tickets") {
    let registeredEvents = [];
    const registrations = state.entities.registrations;
    values(registrations).forEach( registration => {
      if (events[registration.event_id]) {
        registeredEvents.push(events[registration.event_id]);
      }
    });
    return [...new Set(registeredEvents)];
  } else if (type === "bookmarks") {
    let savedEvents = [];
    values(currentUser.bookmarkedEvents).forEach( eventId => {
      if (events[eventId]) {
        savedEvents.push(events[eventId]);
      }
    });
    return savedEvents;
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

export const hasBookmark = (state, eventId) => {
  if (state.session.currentUser) {
    let bookmark = state.session.currentUser.bookmarkedEvents[eventId];
    return Boolean(bookmark);
  }
  return false;
};
