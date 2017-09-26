import { values } from 'lodash';

export const selectAllEvents = state => (
  values(state.entities.events)
);

export const selectTickets = (state, ticketsArray) => {
  let tickets = [];
  for (let i = 0; i < ticketsArray.length; i++) {
    const id = ticketsArray[i];
    tickets[i] = state.entities.tickets[id];
  }
  return tickets;
};
