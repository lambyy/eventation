import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = {
  currentUser: null
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, action.currentUser);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentUser !== null) {
        newState.registrations = action.currentUser.registrations.map(
          registration => registration.id
        );
        newState.organized_events = action.currentUser.organized_events.map(
          event => event.id
        );
        return { currentUser: newState };
      }
      return { currentUser: action.currentUser };
    default:
      return state;
  }
};

export default SessionReducer;
