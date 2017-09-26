import { merge } from 'lodash';
import { RECEIVE_EVENT } from '../actions/event_actions';

const TicketsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_EVENT:
      let { tickets } = action.event;
      console.log(action.event);
      tickets.forEach(ticket => {
        newState[ticket.id] = ticket;
      });
      return newState;
    default:
      return state;
  }
};

export default TicketsReducer;
