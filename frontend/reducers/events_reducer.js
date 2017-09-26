import { merge } from 'lodash';
import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  RECEIVE_REMOVE_EVENT
} from '../actions/event_actions';

 const EventsReducer = (state = {}, action) => {
   Object.freeze(state);
   let newState = merge({}, state);
   switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      action.events.forEach(event => {
        newState[event.id] = event;
      });
      return newState;
    case RECEIVE_EVENT:
      let tickets = action.event.tickets.map(ticket => ticket.id);
      newState[action.event.id] = merge({}, action.event, { tickets });
      return newState;
    case RECEIVE_REMOVE_EVENT:
      delete newState[action.event.id];
      return newState;
    default:
      return state;
   }
 };

 export default EventsReducer;
