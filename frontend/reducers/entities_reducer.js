import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import TicketsReducer from './tickets_reducer';
import RegistrationsReducer from './registrations_reducer';

const EntitiesReducer = combineReducers({
  events: EventsReducer,
  tickets: TicketsReducer,
  registrations: RegistrationsReducer
});

export default EntitiesReducer;
