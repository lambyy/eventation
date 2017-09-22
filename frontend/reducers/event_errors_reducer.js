import { RECEIVE_EVENT, RECEIVE_EVENT_ERRORS } from '../actions/event_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

const _nullErrors = [];

const EventErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_EVENT:
      return _nullErrors;
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return _nullErrors;
  }
};

export default EventErrorsReducer;
