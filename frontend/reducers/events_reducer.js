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
      return action.events;
    case RECEIVE_EVENT:
      newState[action.event.id] = action.event;
      return newState;
    case RECEIVE_REMOVE_EVENT:
      delete newState[action.event.id];
      return newState;
    default:
      return state;
   }
 };

 export default EventsReducer;
