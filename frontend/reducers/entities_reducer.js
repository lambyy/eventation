import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import TicketsReducer from './tickets_reducer';

const EntitiesReducer = combineReducers({
  events: EventsReducer,
  tickets: TicketsReducer
});

export default EntitiesReducer;
